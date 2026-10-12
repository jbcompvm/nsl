# Workflow Teardown: Inbound Lead Qualification

**Published:** [Date when published]  
**Owner:** Iris (Content & Marketing Lead)  
**Type:** Reference Design — Not Client Work  
**Status:** Draft — ready for publication

---

## The Workflow

**Name:** Inbound Lead Qualification  
**What it does:** Captures leads from web forms, scores them based on fit, routes them to the right person, and ensures timely follow-up.

---

## The Trigger

A visitor submits a form on the website (contact form, assessment submission, newsletter signup).

---

## The Steps

### Step 1: Capture
- Form submission arrives via webhook or API
- Data includes: name, email, company, firm size, industry, message
- System creates or updates a contact record in the CRM

**Tools:** Web form (custom or Typeform), CRM (HubSpot, Pipedrive, or similar)

**Failure mode:** Form submission fails silently, or data doesn't reach the CRM
**Fix:** Webhook monitoring with alert on failure; daily check of "unprocessed submissions" list

---

### Step 2: Score
- System evaluates the lead against qualification criteria
- Criteria might include: firm size, budget indicator, timeline urgency, fit with services
- Lead receives a score or tier (e.g., "Hot," "Warm," "Cold" or numeric score)

**Tools:** Automation platform (n8n, Make, Zapier), CRM scoring rules

**Failure mode:** Scoring logic is wrong, or leads are misclassified
**Fix:** Regular audit of scored leads vs. actual outcomes; adjust thresholds based on conversion data

---

### Step 3: Route
- Based on score and type, lead is assigned to the right person or queue
- Hot leads → immediate notification to sales owner
- Warm leads → added to nurture sequence
- Cold leads → added to long-term nurture or declined

**Tools:** CRM assignment rules, email notifications, Slack integrations

**Failure mode:** Leads sit unassigned, or wrong person gets notified
**Fix:** Default owner assignment; daily "unassigned leads" report; escalation after 24 hours

---

### Step 4: Follow-up
- Automated or semi-automated response sent within a defined timeframe
- Hot leads: Personal email within 24 hours
- Warm leads: Nurture sequence starts immediately
- Cold leads: Monthly newsletter or no contact

**Tools:** Email automation, CRM tasks, calendar integration

**Failure mode:** Follow-up is delayed or inconsistent
**Fix:** SLA tracking (e.g., "all hot leads contacted within 24 hours"); alerts on breaches

---

## The Failure Modes (Detailed)

| Failure | Impact | Detection | Prevention |
|---------|--------|-----------|------------|
| Form submission fails | Lost leads | Webhook error logs; daily "missing submissions" check | Redundant submission path; email fallback |
| Scoring logic wrong | Misrouted leads | Weekly review of lead outcomes | A/B test scoring rules; adjust based on conversion |
| Lead sits unassigned | Delayed follow-up | Daily "unassigned leads" report | Default owner; auto-assign on creation |
| Follow-up delayed | Lost opportunity | SLA dashboard; alerts on breach | Automated reminders; escalation after threshold |
| Duplicate contacts | Confusion in CRM | Duplicate detection reports | Pre-creation check by email; merge workflow |

---

## Rough Build Cost

| Component | Cost Range | Notes |
|-----------|------------|-------|
| Form + webhook setup | $500-$1,000 | Custom form or Typeform integration |
| Scoring logic | $1,000-$2,000 | Rules engine or custom scoring algorithm |
| Routing + notifications | $500-$1,000 | CRM configuration + email/Slack setup |
| Follow-up automation | $500-$1,500 | Email sequences + task creation |
| Testing + handover | $500-$1,000 | QA + documentation + training |
| **Total** | **$3,000-$6,500** | Depends on complexity and CRM |

**Timeline:** 3-4 weeks from scope sign-off to live system

---

## Rough Ongoing Cost (By Hand)

If done manually:

| Task | Time per Week | Cost at $100/hr |
|------|---------------|-----------------|
| Review new leads | 2 hours | $200 |
| Score and categorize | 3 hours | $300 |
| Assign and notify | 1 hour | $100 |
| Send follow-ups | 5 hours | $500 |
| **Total** | **11 hours/week** | **~$1,100/month** |

**Hidden cost:** Inconsistency, delays, lost leads due to human error

---

## What This Excludes

- **Custom form design** — This assumes a basic form exists; redesign is separate
- **Advanced lead scoring** — Machine learning models or complex attribution are out of scope
- **Multi-channel capture** — This covers web forms only; phone, email, and social are separate workflows
- **CRM migration** — If you're switching CRMs, that's a different engagement

---

## Why This Matters

Most firms lose 20-40% of inbound leads due to slow or inconsistent follow-up. A systematic approach:

- Ensures every lead gets a response
- Prioritizes the right leads for immediate attention
- Captures data for later analysis
- Frees up human time for actual conversations instead of data entry

---

## How We'd Approach Building This

1. **Audit current process** — Where do leads come from? What happens now? Where do they fall through?
2. **Define scoring criteria** — What makes a lead "hot" vs. "cold"? This is a business decision, not a technical one.
3. **Map the routing rules** — Who gets which leads? What's the escalation path?
4. **Build in stages** — Start with capture + routing. Add scoring. Then add follow-up automation.
5. **Test with real data** — Run parallel to existing process for 2 weeks; compare outcomes.
6. **Handover** — Train the owner; document the failure modes; set up monitoring.

---

## The Runbook (Summary)

**Owner:** [Named person on client side]

**Daily checks:**
- Unprocessed submissions list
- Unassigned leads report
- SLA breach alerts

**Weekly checks:**
- Scoring accuracy review
- Follow-up response rates
- Lead conversion by source

**Monthly checks:**
- Overall lead volume trends
- Score distribution changes
- Automation error logs

**When things break:**
1. Check webhook logs
2. Verify CRM connection
3. Review recent rule changes
4. Escalate to [support contact]

---

## Questions This Raises (For the Client)

1. What are your actual qualification criteria? (Not what you think they should be — what you use now.)
2. Who owns each lead type? Is that person available when the lead arrives?
3. What's your current follow-up SLA? Is it being met?
4. What happens to leads that don't convert immediately?
5. How do you measure the quality of a lead, not just the quantity?

---

## Related Teardowns

- **New Client Intake** — What happens after a lead converts
- **Proposal First Drafts** — How to automate the next step in the sales process
- **Assessment Funnel** — How the free assessment routes to the right engagement

---

## Notes for Atlas (Web Engineer)

- This teardown should live at `/resources/teardowns/inbound-lead-qualification/`
- Format as a clean, scannable page with the structure above
- Include a "Read more teardowns" link at the bottom pointing to `/resources/`
- Add meta description: "Reference design for inbound lead qualification: trigger, steps, failure modes, build cost, and ongoing cost. Labelled as reference design, not client work."

---

**Status:** ✅ Complete — ready for publication
**Next:** Publish to /resources/ and distribute via LinkedIn
**Owner:** Iris (Content & Marketing Lead)
