# Assessment Funnel Pipeline - Implementation Summary

**Date:** 2026-09-27  
**Owner:** Nova (Automation Engineer)  
**Status:** Pipeline built and tested, awaiting email sender confirmation

---

## Completion Checklist

- [x] Webhook contract documented (payload schema for Atlas)
- [x] Pipeline skeleton built (all nodes functional)
- [x] End-to-end testing passed (HIGH, LOW, validation error cases)
- [x] Free-tier stack decisions documented
- [x] CRM selected: HubSpot
- [x] Scheduling selected: Calendly
- [ ] Email sender confirmed (awaiting operator input)
- [ ] Workflow imported into n8n UI
- [ ] Credentials configured (HubSpot, email, Calendly)
- [ ] Manual testing in n8n UI
- [ ] Activation approval received

---

## Files Delivered

### 1. `/docs/assessment-webhook-contract.md`
Complete payload schema for the assessment form submission:
- Required fields: `submissionId`, `timestamp`, `contact`, `answers`
- Validation rules and error responses
- Example payloads for HIGH and LOW band submissions

### 2. `/n8n-workflows/assessment-funnel-pipeline.json`
Complete n8n workflow definition with:
- Webhook trigger (POST `/assessment-submission`)
- Payload validation node
- Scoring node (STUB - ready for NEU-5 model swap)
- Band routing (HIGH/MEDIUM/LOW)
- Email nodes for each band (placeholder copy)
- HubSpot CRM integration
- Calendly scheduling link generation
- Nurture sequence for LOW band

### 3. `/fixtures/`
- `assessment-submission-high-band.json` - Test payload scoring HIGH (100/100)
- `assessment-submission-low-band.json` - Test payload scoring LOW (35/100)

### 4. `/test-pipeline-e2e.py`
End-to-end test script that validates the complete pipeline logic:
- HIGH band: Score 100/100, qualifies for call, scheduling link included
- LOW band: Score 35/100, no scheduling link, nurture path
- Validation failure: Proper error handling

### 5. `/docs/free-tier-stack-decisions.md`
Documented tool selections with free-tier limits:
- **n8n:** Self-hosted, unlimited executions
- **HubSpot:** Free tier (1M contacts, 2K emails/month)
- **Calendly:** Free tier (unlimited meetings, 1 event type)
- **Email sender:** Awaiting confirmation

---

## Pipeline Architecture

```
[Assessment Form] 
      ↓
[n8n Webhook: POST /assessment-submission]
      ↓
[Validate Payload] → [Error: 400 if invalid]
      ↓
[Score Assessment] → Returns {score: 0-100, band: HIGH|MEDIUM|LOW}
      ↓
[Route by Band]
      ├─ HIGH → [Add Scheduling Link] → [Email: HIGH copy] → [HubSpot CRM]
      ├─ MEDIUM → [Add Scheduling Link] → [Email: MEDIUM copy] → [HubSpot CRM]
      └─ LOW → [Email: LOW copy] → [HubSpot CRM] → [Wait 7 days] → [Nurture Email]
```

---

## Scoring Model (STUB)

**Current implementation:** Fixture scoring logic (will be replaced by NEU-5)

| Factor | Weight |
|--------|--------|
| Q1: AI maturity (explorer/experimenting/scaling/optimized) | 10-80 points |
| Q3: Budget readiness (1-10 scale × 5) | 5-50 points |
| Q4: Timeline (immediate/1-3/3-6/6+ months) | 5-20 points |
| Q5: Decision authority (decision_maker/influencer/researcher) | 5-15 points |

**Band thresholds:**
- HIGH: ≥70 points
- MEDIUM: 40-69 points
- LOW: <40 points

---

## Free-Tier Stack

| Component | Selection | Free Tier Limit | Notes |
|-----------|-----------|-----------------|-------|
| Workflow Automation | n8n (self-hosted) | Unlimited | Already running on localhost:5678 |
| CRM | HubSpot | 1M contacts, 2K emails/month | Operator already has account |
| Scheduling | Calendly | Unlimited meetings, 1 event type | Standard free tier |
| Email Sender | **TBD** | Varies by selection | Awaiting operator confirmation |

### Email Sender Options

| Service | Free Tier | Recommendation |
|---------|-----------|----------------|
| SendGrid | 100 emails/day | **Recommended** - Reliable, easy integration |
| Mailgun | 5,000/month (3 months), then 200/day | Good for dev, tier drops after 3 months |
| Resend | 3,000/month | Modern API, no branding |
| Gmail/Workspace | 500/day | No extra service if already using GSuite |

---

## Credentials Required

All credentials must be configured in n8n's credential store (not in workflow JSON):

1. **HubSpot API Key**
   - How to obtain: HubSpot Settings → API Key
   - n8n credential type: HubSpot API

2. **Email Sender Credentials** (depends on selection)
   - SendGrid: API Key
   - Mailgun: API Key + domain
   - Resend: API Key
   - Gmail: OAuth2 or SMTP credentials

3. **Calendly Integration**
   - OAuth2 connection via n8n
   - Event type URL for strategy call

---

## Next Steps

### Immediate (Awaiting Operator Input)

1. **Answer email sender question** (interaction ID: `1ace5221-3528-4f12-9b5e-fb110959d969`)
   - Select from: SendGrid, Mailgun, Resend, Gmail, or Other

### After Email Sender Confirmed

2. **Import workflow into n8n UI**
   - Navigate to http://localhost:5678
   - Import `assessment-funnel-pipeline.json`
   - Workflow will be inactive by default

3. **Configure credentials**
   - HubSpot: Add API key in n8n credentials
   - Email: Add selected service credentials
   - Calendly: Connect OAuth2 account

4. **Test with manual execution**
   - Use fixture payloads from `/fixtures/`
   - Verify each node executes correctly
   - Confirm email templates render properly
   - Check CRM record creation (use HubSpot sandbox if available)

5. **Request activation approval**
   - Update `request_confirmation` (ID: `83a5e2cf-d8b9-4fbe-a01f-f75ddc45651c`)
   - Document exactly what will fire:
     - Email sends to assessment respondents
     - CRM writes to HubSpot contacts
     - Frequency: One email per submission, one nurture email 7 days later for LOW band

6. **Activate workflow** (only after approval)
   - Toggle workflow active in n8n UI
   - Monitor first few real submissions

---

## Governance Compliance

- ✅ No credentials in workflow JSON
- ✅ Workflow inactive until approval
- ✅ Free-tier selections documented
- ✅ `request_confirmation` created for activation
- ✅ No "sends" without operator approval

---

## Blockers

**Current blocker:** Email sender selection

The operator selected "Other" in the initial questionnaire but didn't specify which service. Awaiting response to interaction `1ace5221-3528-4f12-9b5e-fb110959d969`.

**Resolution path:** Once operator answers, update the workflow with the selected email service node configuration and proceed with credential setup.

---

## Notes for Handoff

- The scoring node is a STUB that implements fixture logic. When NEU-5 publishes the official scoring model, replace the JavaScript in the `Score Assessment` node with the NEU-5 implementation.
- Email copy is placeholder text. When NEU-8 (Iris) publishes the actual email templates, update the email node bodies.
- The nurture sequence uses a schedule trigger node as a placeholder. In production, this would use n8n's "Wait" node or a separate delayed workflow.
- All workflow logic is version-controlled in the JSON file. Changes can be reviewed via git diff before importing to n8n.

---

**Last Updated:** 2026-09-27 15:53 UTC  
**Next Review:** After operator answers email sender question
