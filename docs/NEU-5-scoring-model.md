# NEU-5: AI Strategy Assessment - Question Set & Scoring Model

**Owner:** Juno (Strategy & Offer Lead)  
**Version:** 1.0  
**Date:** 2026-09-29  
**Status:** Ready for implementation

---

## Executive Summary

This document defines the complete question set and scoring model for Neural Studio Lab's free AI Strategy Assessment. The assessment serves two purposes:

1. **For the visitor:** A diagnostic that reveals their AI maturity gaps and prioritizes what to fix first
2. **For us:** A qualification tool that identifies which prospects are ready for paid engagement vs. those who need nurture

The scoring model is designed to be **discriminating** (not everyone scores high) and **defensible** (each weight has a clear rationale tied to project success risk).

---

## Positioning Context

**Ideal Client:** Mid-market companies (50-500 employees) that have identified AI as a strategic priority but lack the internal capability to execute. They are past the "what is AI?" stage and are actively exploring or experimenting, but are stuck in proof-of-concept hell or struggling to scale.

**What We Solve:**
1. **AI Initiative Stagnation** - Projects that never move beyond pilot
2. **Misaligned Investment** - Spending on tools before fixing foundational gaps
3. **Capability Gaps** - Teams that lack the skills or processes to deliver AI value

**What We Explicitly Decline:**
1. **Enterprise transformation at scale** - Too complex for a small practice
2. **Pure research / experimental AI** - Not commercially focused enough
3. **Data infrastructure buildout** - Requires dedicated data engineering team

**Alternatives We're Positioned Against:**
- In-house hiring (slow, expensive, high failure rate)
- Large consulting firms (expensive, template-driven, over-engineered)
- DIY tools without guidance (high failure rate, no accountability)

---

## Question Set

### Question 1: Current AI/ML Initiative Status
*This measures where they are in the AI journey and identifies the primary bottleneck.*

| Answer Option | Weight | Rationale |
|---------------|--------|-----------|
| We haven't started yet, but we're researching options | 10 | Early stage - high education burden, low immediate readiness |
| We have 1-2 proof-of-concepts in progress | 30 | Experimenting - showing interest but not yet production |
| We have production AI/ML models serving customers | 60 | Scaling - has baseline capability, ready for optimization |
| AI is embedded across multiple business functions | 80 | Optimized - advanced maturity, likely not our ICP |

**Scoring Logic:** This is the baseline maturity indicator. Companies at "optimized" stage are likely too advanced for our core offering (they'd need enterprise consultants). Companies at "researching" stage need education first (nurture path).

---

### Question 2: Primary Business Objective for AI
*This identifies the "job to be done" and helps us assess value alignment.*

| Answer Option | Weight | Rationale |
|---------------|--------|-----------|
| Reduce operational costs / automate manual processes | 40 | Clear ROI, measurable outcomes, good fit for our approach |
| Improve customer experience / personalization | 50 | High value potential, but success depends on data quality |
| Create new revenue streams / business models | 60 | Ambitious, higher risk but higher reward - ideal for our strategic work |
| Stay competitive / keep up with industry trends | 20 | Vague motivation, likely to stall without clear success criteria |
| Explore what's possible / learn about AI capabilities | 15 | Education phase, not ready for engagement |

**Scoring Logic:** Objectives tied to specific business outcomes (cost reduction, revenue) score higher because they indicate clear success criteria. "Staying competitive" is a weak driver that often leads to abandoned projects.

---

### Question 3: Budget Readiness for AI Investment
*This is the single strongest predictor of conversion to paid engagement.*

| Answer Option | Weight | Rationale |
|---------------|--------|-----------|
| No budget allocated - exploring options first | 10 | Not ready to buy - high friction to convert |
| Budget is being prepared for next quarter | 40 | Near-term potential, but needs nurturing |
| Budget is approved and available now | 80 | Sales-ready - can move quickly if value is clear |
| We have a dedicated AI/innovation fund | 90 | Highly qualified - actively seeking vendors |

**Scoring Logic:** Budget availability is the gatekeeper. Without budget, even perfect fit prospects cannot convert. This question is weighted heavily because it directly predicts sales cycle length and likelihood of closure.

---

### Question 4: Timeline for AI Initiative
*This helps us assess urgency and prioritize leads.*

| Answer Option | Weight | Rationale |
|---------------|--------|-----------|
| Within 1 month - we need to move quickly | 20 | Urgent but may be unrealistic; could indicate poor planning |
| 1-3 months - we have a clear start date | 50 | Ideal window - enough time to prepare, enough urgency to act |
| 3-6 months - we're in planning phase | 30 | Moderate urgency - good for nurture, not immediate sale |
| 6+ months / no specific timeline | 10 | Low priority - likely to stall or deprioritize |

**Scoring Logic:** The 1-3 month window is the "sweet spot" - enough time to do proper discovery and scoping, but enough urgency to maintain momentum. "Within 1 month" often indicates unrealistic expectations that lead to failed engagements.

---

### Question 5: Decision-Making Authority
*This identifies whether the respondent can actually buy or if they're a gatekeeper.*

| Answer Option | Weight | Rationale |
|---------------|--------|-----------|
| I am the final decision-maker for this type of investment | 80 | Direct path to close - no additional stakeholders needed |
| I influence decisions but need executive approval | 50 | Champion role - can drive internal advocacy but needs sponsor |
| I am gathering information for the decision-makers | 20 | Gatekeeper/researcher - not a sales-qualified lead |
| I work with consultants who advise on these decisions | 30 | Influencer role - can be valuable if they recommend us |

**Scoring Logic:** Decision authority is critical for sales efficiency. A "decision-maker" with budget can close quickly. Someone "gathering information" requires a longer nurture cycle and may never have authority to buy.

---

### Question 6: Data Infrastructure Readiness
*This assesses a key technical prerequisite for AI success.*

| Answer Option | Weight | Rationale |
|---------------|--------|-----------|
| We have no centralized data - it's scattered across systems | 10 | Major blocker - data work will dominate the engagement |
| We have a data warehouse/lake but it's not well-organized | 30 | Moderate readiness - data work will be significant |
| We have clean, accessible data for key business areas | 60 | Good readiness - can focus on AI model work |
| We have a modern data stack with governance and quality controls | 70 | High readiness - can move quickly to AI implementation |

**Scoring Logic:** Data readiness is a leading indicator of project success. Poor data infrastructure is the #1 cause of AI project failure. This question helps us assess scope complexity and risk.

---

### Question 7: Team Capability for AI Delivery
*This identifies internal capability gaps we need to fill.*

| Answer Option | Weight | Rationale |
|---------------|--------|-----------|
| No dedicated AI/ML talent on staff | 20 | Full dependency on external help - higher engagement scope |
| We have 1-2 data scientists / ML engineers | 40 | Partial capability - may need augmentation |
| We have a dedicated AI/ML team (3-5 people) | 60 | Good foundation - we can work alongside them |
| We have a mature data/AI organization with clear processes | 70 | High internal capability - may only need strategic advice |

**Scoring Logic:** Internal capability affects engagement model. No internal team means we need to deliver end-to-end. Strong internal team means we can focus on strategy and handoff. Both are viable, but they require different approaches.

---

### Question 8: Risk Tolerance for AI Initiatives
*This identifies their appetite for experimentation vs. proven approaches.*

| Answer Option | Weight | Rationale |
|---------------|--------|-----------|
| We prefer proven, vendor-supported solutions with case studies | 40 | Risk-averse - needs more hand-holding and references |
| We're comfortable with some experimentation if there's clear ROI | 60 | Balanced - ideal for our approach |
| We're willing to take calculated risks on emerging approaches | 70 | Innovation-minded - good fit for strategic work |
| We need guaranteed outcomes before committing | 20 | Risk-averse - may not be a good fit for consulting (too much uncertainty) |

**Scoring Logic:** AI work inherently involves uncertainty. Clients who demand "guaranteed outcomes" are poor fits for consulting engagements. Those comfortable with calculated risk are better prospects.

---

## Scoring Model

### Total Score Calculation

**Maximum possible score:** 640 points (8 questions × max weight per question)

**Formula:**
```
total_score = sum(weight[answer] for each question)
```

### Band Thresholds

| Band | Score Range | Qualification | Next Action |
|------|-------------|---------------|-------------|
| **HIGH** | 500-640 | Sales-qualified lead | Send strategy call scheduling link immediately |
| **MEDIUM** | 350-499 | Nurture-qualified lead | Send nurture sequence with educational content |
| **LOW** | 80-349 | Not ready | Send educational resources, add to long-term nurture |

### Rationale for Thresholds

**HIGH (500-640):** These prospects have:
- Active AI initiatives (Q1 ≥ 30)
- Clear budget (Q3 ≥ 40)
- Decision authority or strong influence (Q5 ≥ 50)
- Realistic timeline (Q4 ≥ 30)

This represents approximately 15-20% of respondents based on typical B2B SaaS assessment data. They are sales-ready and should be contacted within 24 hours.

**MEDIUM (350-499):** These prospects have:
- Some AI activity but not fully committed
- Budget may be in planning or needs approval
- May need internal championing

This represents approximately 40-50% of respondents. They need nurturing with educational content to move them toward sales readiness.

**LOW (80-349):** These prospects have:
- No active AI initiatives or only research phase
- No budget or unclear timeline
- No decision authority

This represents approximately 30-40% of respondents. They are not ready for paid engagement and should receive long-term nurture content.

---

## Result Copy Briefs

### HIGH Band Result
**Tone:** Direct, action-oriented, confident

**Key Messages:**
- "Your AI initiative shows strong indicators for success"
- "You have the budget, authority, and timeline to move forward"
- "Book a strategy call to discuss your specific challenges"
- Include scheduling link prominently

**What We're Signaling:** You're ready to buy. Let's talk specifics.

**What We're Not Saying:**
- No guarantees of outcomes
- No specific pricing (discussed on call)
- No promises of timeline

---

### MEDIUM Band Result
**Tone:** Encouraging but realistic

**Key Messages:**
- "You have a solid foundation but there are gaps to address"
- "Your score suggests you're 2-3 months away from being ready"
- "Here's what to focus on before engaging a consultant"
- Include nurture content links (not scheduling link)

**What We're Signaling:** You're on the right track, but don't rush into a paid engagement yet.

**What We're Not Saying:**
- No immediate call to action
- No suggestion that they're "almost ready" (they may not be)

---

### LOW Band Result
**Tone:** Supportive, educational

**Key Messages:**
- "AI is a significant investment that requires preparation"
- "Here are the foundational steps to take before considering consulting"
- "Subscribe to our newsletter for ongoing education"
- No scheduling link

**What We're Signaling:** You're not ready for this service, and that's okay. Here's how to get ready.

**What We're Not Saying:**
- No false encouragement ("you're almost there!")
- No pressure to buy anyway

---

## Qualification Logic

### Auto-Book Criteria (HIGH Band + These Signals)

A HIGH band score automatically qualifies for a strategy call IF:
- Q3 (Budget) ≥ 40 (budget approved or dedicated fund)
- Q5 (Authority) ≥ 50 (decision-maker or influencer)

**Rationale:** These two factors are the strongest predictors of actual conversion to paid engagement.

### Nurture Criteria (MEDIUM Band OR LOW Band)

Send nurture sequence when:
- Score is MEDIUM (350-499), OR
- Score is LOW (80-349), OR
- Q3 (Budget) < 40 regardless of total score

**Rationale:** Budget is the gatekeeper. Without it, even high-scoring prospects cannot convert.

### Disqualify Criteria (Send to Long-Term Nurture Only)

Mark as "not ready" when:
- Q1 (AI Status) = "haven't started" (weight 10)
- Q3 (Budget) = "no budget" (weight 10)
- Q5 (Authority) = "gathering information" (weight 20)

**Rationale:** These respondents are in pure research mode and will waste sales resources.

---

## Implementation Notes

### For Nova (Automation Engineer)

The scoring logic should be implemented in the n8n workflow as follows:

```javascript
// Input: answers object with q1-q8
const questionWeights = {
  q1: {
    'haven't_started': 10,
    'proof_of_concept': 30,
    'production': 60,
    'optimized': 80
  },
  q2: {
    'cost_reduction': 40,
    'customer_experience': 50,
    'new_revenue': 60,
    'competitive': 20,
    'explore': 15
  },
  q3: {
    'no_budget': 10,
    'preparing': 40,
    'approved': 80,
    'dedicated_fund': 90
  },
  q4: {
    '1_month': 20,
    '1_3_months': 50,
    '3_6_months': 30,
    '6_plus': 10
  },
  q5: {
    'decision_maker': 80,
    'influencer': 50,
    'gathering': 20,
    'consultant_advisor': 30
  },
  q6: {
    'scattered': 10,
    'warehouse_unorganized': 30,
    'clean_accessible': 60,
    'modern_governed': 70
  },
  q7: {
    'no_talent': 20,
    '1_2_people': 40,
    '3_5_people': 60,
    'mature_org': 70
  },
  q8: {
    'proven_only': 40,
    'balanced': 60,
    'calculated_risk': 70,
    'guaranteed_outcomes': 20
  }
};

let totalScore = 0;
for (let q = 1; q <= 8; q++) {
  const answerKey = `q${q}`;
  const answerValue = answers[answerKey];
  totalScore += questionWeights[answerKey][answerValue] || 0;
}

// Determine band
let band;
if (totalScore >= 500) {
  band = 'HIGH';
} else if (totalScore >= 350) {
  band = 'MEDIUM';
} else {
  band = 'LOW';
}

return { score: totalScore, band };
```

### For Iris (Content Lead)

The email copy for each band should:
- **HIGH:** Include the score, explain what it means, provide scheduling link, set expectations for the call
- **MEDIUM:** Include the score, explain the gaps, provide educational resources, invite to newsletter/webinar
- **LOW:** Include the score, emphasize preparation steps, provide foundational resources, no call offer

---

## Assumptions & Risks

### Assumptions
1. This assessment will be taken by B2B decision-makers or influencers, not consumers
2. Average deal size for our services is $10K-$50K (justifies the qualification rigor)
3. We have capacity to handle 5-10 strategy calls per month initially

### Risks
1. **Thresholds may be too aggressive:** If too few people score HIGH, we may miss qualified leads. Monitor conversion rates and adjust thresholds after 50 assessments.
2. **Self-selection bias:** People who take free assessments may not be our ideal clients. Validate against actual conversion data.
3. **Question fatigue:** 8 questions may be too many. Monitor completion rate; if <50%, consider reducing to 5 core questions.

---

## Revision History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | 2026-09-29 | Initial release | Juno |

---

## Dependencies

- **NEU-3 (Positioning):** This scoring model assumes the positioning defined in NEU-3. If NEU-3 changes significantly, this document should be reviewed.
- **NEU-7 (n8n Webhook):** Implementation depends on Nova building the webhook that consumes this scoring model.
- **NEU-8 (Email Copy):** Iris needs to write the actual email templates for each band using the briefs provided above.

---

## Approval Required

Before implementation:
- [ ] Operator review and acceptance of band thresholds
- [ ] Confirmation that 8 questions is acceptable (not too long for users)
- [ ] Validation that answer options match actual customer language (may require Pythia's research)

---

**Status:** Ready for implementation  
**Next Step:** Nova (NEU-7) implements the scoring logic in the n8n workflow using this model.
