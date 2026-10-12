# Assessment Form → Nova Webhook Handoff

**Owner:** Atlas (front-end) → Nova (back-end webhook)  
**Status:** Ready for Nova implementation  
**Last Updated:** 2026-10-08

---

## Overview

This document defines the contract between the assessment form (Atlas) and the n8n webhook handler (Nova). The form collects answers, scores them client-side for immediate results display, and posts the full payload to Nova's webhook for CRM integration and follow-up automation.

---

## Webhook Endpoint

**URL:** `http://localhost:5678/webhook/assessment-submission` (to be configured by Nova)  
**Method:** `POST`  
**Content-Type:** `application/json`

---

## Payload Schema

```json
{
  "submissionId": "string (UUID)",
  "timestamp": "ISO 8601 datetime",
  "session_duration_seconds": "integer",
  "contact": {
    "name": "string",
    "email": "string (email format)",
    "company": "string",
    "industry": "string",
    "company_size": "string (one of: 1-10, 11-50, 51-200, 201-500, 500+)"
  },
  "answers": {
    "q1": "string (one of: haven't_started, proof_of_concept, production, optimized)",
    "q2": "string (one of: cost_reduction, customer_experience, new_revenue, competitive, explore)",
    "q3": "string (one of: no_budget, preparing, approved, dedicated_fund)",
    "q4": "string (one of: 1_month, 1_3_months, 3_6_months, 6_plus)",
    "q5": "string (one of: decision_maker, influencer, gathering, consultant_advisor)",
    "q6": "string (one of: scattered, warehouse_unorganized, clean_accessible, modern_governed)",
    "q7": "string (one of: no_talent, 1_2_people, 3_5_people, mature_org)",
    "q8": "string (one of: proven_only, balanced, calculated_risk, guaranteed_outcomes)"
  },
  "scoring": {
    "totalScore": "integer (80-640)",
    "scoreBreakdown": {
      "q1": "integer (weight)",
      "q2": "integer (weight)",
      "q3": "integer (weight)",
      "q4": "integer (weight)",
      "q5": "integer (weight)",
      "q6": "integer (weight)",
      "q7": "integer (weight)",
      "q8": "integer (weight)"
    },
    "band": {
      "name": "string (one of: Not Ready, Early Exploration, Sales-Qualified Lead)",
      "min": "integer",
      "max": "integer",
      "action": "string (one of: nurture, book_call)"
    },
    "qualification": {
      "bookCall": "boolean",
      "shouldEscalate": "boolean",
      "reasons": {
        "bookCall": ["string"],
        "nurture": ["string"],
        "escalate": ["string"]
      }
    },
    "insights": ["string"],
    "recommendations": ["string"]
  },
  "metadata": {
    "user_agent": "string",
    "referrer": "string"
  }
}
```

---

## Question Weights (NEU-5 Scoring Model)

### Q1: Current AI/ML Initiative Status
| Answer | Weight |
|--------|--------|
| haven't_started | 10 |
| proof_of_concept | 30 |
| production | 60 |
| optimized | 80 |

### Q2: Primary Business Objective for AI
| Answer | Weight |
|--------|--------|
| cost_reduction | 40 |
| customer_experience | 50 |
| new_revenue | 60 |
| competitive | 20 |
| explore | 15 |

### Q3: Budget Readiness for AI Investment
| Answer | Weight |
|--------|--------|
| no_budget | 10 |
| preparing | 40 |
| approved | 80 |
| dedicated_fund | 90 |

### Q4: Timeline for AI Initiative
| Answer | Weight |
|--------|--------|
| 1_month | 20 |
| 1_3_months | 50 |
| 3_6_months | 30 |
| 6_plus | 10 |

### Q5: Decision-Making Authority
| Answer | Weight |
|--------|--------|
| decision_maker | 80 |
| influencer | 50 |
| gathering | 20 |
| consultant_advisor | 30 |

### Q6: Data Infrastructure Readiness
| Answer | Weight |
|--------|--------|
| scattered | 10 |
| warehouse_unorganized | 30 |
| clean_accessible | 60 |
| modern_governed | 70 |

### Q7: Team Capability for AI Delivery
| Answer | Weight |
|--------|--------|
| no_talent | 20 |
| 1_2_people | 40 |
| 3_5_people | 60 |
| mature_org | 70 |

### Q8: Risk Tolerance for AI Initiatives
| Answer | Weight |
|--------|--------|
| proven_only | 40 |
| balanced | 60 |
| calculated_risk | 70 |
| guaranteed_outcomes | 20 |

---

## Score Bands

| Band | Score Range | Action |
|------|-------------|--------|
| Not Ready | 80-349 | nurture |
| Early Exploration | 350-499 | nurture |
| Sales-Qualified Lead | 500-640 | book_call |

---

## Qualification Logic

### Auto-Book Criteria (HIGH Band + These Signals)
A HIGH band score automatically qualifies for a strategy call IF:
- Q3 (Budget) ≥ 40 (budget approved or dedicated fund)
- Q5 (Authority) ≥ 50 (decision-maker or influencer)

### Nurture Criteria (MEDIUM Band OR LOW Band)
Send nurture sequence when:
- Score is MEDIUM (350-499), OR
- Score is LOW (80-349), OR
- Q3 (Budget) < 40 regardless of total score

### Disqualify Criteria (Send to Long-Term Nurture Only)
Mark as "not ready" when:
- Q1 (AI Status) = "haven't_started" (weight 10)
- Q3 (Budget) = "no_budget" (weight 10)
- Q5 (Authority) = "gathering" (weight 20)

---

## Nova Responsibilities

1. **Receive webhook payload** and validate schema
2. **Write to CRM** (if configured) with contact info and scoring results
3. **Route based on band:**
   - HIGH band + bookCall=true → Trigger strategy call scheduling workflow
   - HIGH band + bookCall=false → Nurture with education
   - MEDIUM/LOW band → Nurture sequence with educational content
4. **Send result email** with scored diagnosis (ungated — no email required to see results)
5. **Log submission** for analytics and conversion tracking

---

## Test Cases

### Test Case 1: Ideal Client (HIGH Band)
```json
{
  "answers": {
    "q1": "production",
    "q2": "new_revenue",
    "q3": "dedicated_fund",
    "q4": "1_3_months",
    "q5": "decision_maker",
    "q6": "modern_governed",
    "q7": "3_5_people",
    "q8": "calculated_risk"
  },
  "expected_score": 540,
  "expected_band": "Sales-Qualified Lead",
  "expected_action": "book_call"
}
```

### Test Case 2: Early Exploration (MEDIUM Band)
```json
{
  "answers": {
    "q1": "proof_of_concept",
    "q2": "cost_reduction",
    "q3": "preparing",
    "q4": "3_6_months",
    "q5": "influencer",
    "q6": "clean_accessible",
    "q7": "1_2_people",
    "q8": "balanced"
  },
  "expected_score": 350,
  "expected_band": "Early Exploration",
  "expected_action": "nurture"
}
```

### Test Case 3: Not Ready (LOW Band)
```json
{
  "answers": {
    "q1": "haven't_started",
    "q2": "explore",
    "q3": "no_budget",
    "q4": "6_plus",
    "q5": "gathering",
    "q6": "scattered",
    "q7": "no_talent",
    "q8": "guaranteed_outcomes"
  },
  "expected_score": 115,
  "expected_band": "Not Ready",
  "expected_action": "nurture"
}
```

---

## Implementation Notes

1. **Client-side scoring:** The form scores answers in the browser for instant results display. The webhook receives the pre-calculated scoring result.

2. **No email gate:** Results are shown immediately without requiring email submission. The email form on the results page is for downloading a detailed PDF report (separate workflow).

3. **Session tracking:** Each submission has a unique `submissionId` and `session_duration_seconds` for analytics.

4. **Error handling:** If the webhook fails, the form still shows results client-side. Failed submissions should be logged for retry.

---

## Dependencies

- **NEU-5:** Assessment scoring model (source of truth for weights and bands)
- **NEU-53:** Result copy for each band (currently mismatched — see note below)
- **NEU-7:** n8n webhook implementation (Nova's responsibility)

---

## Known Issues / Gaps

### Result Copy Mismatch
**Issue:** Iris's result copy (docs/band-a-result.md, etc.) was written for a 4-band model (A/B/C/D with scores -50 to 135), but the NEU-5 spec defines a 3-band model (HIGH/MEDIUM/LOW with scores 80-640).

**Impact:** The result page cannot display Iris's copy as-is. The bands and score ranges don't match.

**Options:**
1. Update implementation to match Iris's 12-question, 4-band model (requires significant changes)
2. Ask Juno to write new copy matching the NEU-5 8-question, 3-band model
3. Use generic placeholder copy until proper copy is available

**Recommendation:** Option 2 — the NEU-5 spec is the authoritative source, and the implementation should match it. Juno needs to provide new result copy for the 3 bands:
- "Not Ready" (80-349)
- "Early Exploration" (350-499)
- "Sales-Qualified Lead" (500-640)

---

## Deployment Checklist

- [ ] Nova creates n8n webhook workflow with the schema above
- [ ] Webhook URL is updated in `web/assets/js/assessment.js` (ASSESSMENT_CONFIG.webhookUrl)
- [ ] CRM integration is configured (if applicable)
- [ ] Email templates are created for each band/routing
- [ ] Scheduling embed is configured for HIGH band with bookCall=true
- [ ] End-to-end testing completed (form → webhook → CRM/email)
- [ ] Analytics tracking is in place (conversion funnel)
- [ ] Operator approval obtained via `request_confirmation` before publishing

---

**Contact:** Atlas (Web Engineer) for front-end questions, Nova (Automation Engineer) for webhook implementation.
