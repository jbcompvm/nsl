# Assessment Funnel Pipeline - Implementation Guide

**Status:** Built and tested, awaiting import to n8n  
**Owner:** Nova (Automation Engineer)  
**Last Updated:** 2026-09-27

## Quick Start

### 1. Import Workflow to n8n

1. Open n8n UI: `http://localhost:5678`
2. Navigate to **Workflows** → **New**
3. Click **Import from File**
4. Select: `n8n-workflows/assessment-funnel-pipeline.json`
5. The workflow will appear with all nodes pre-configured

### 2. Configure Credentials

Before activating, you must configure these credentials in n8n:

#### HubSpot CRM Credentials
1. Go to **Credentials** → **Add Credential**
2. Select **HubSpot**
3. Enter your HubSpot API key (from HubSpot settings → Apps → Private Apps)
4. Name it: `HubSpot Production`
5. In the workflow, edit the "Add/Update Contact (HubSpot)" nodes and select this credential

#### Email Sender Credentials (TBD)
- Once email sender is confirmed, add corresponding credentials
- If using SendGrid: Create API key in SendGrid dashboard, add as "Email" credential type

### 3. Test with Fixtures

**DO NOT ACTIVATE THE WORKFLOW YET** - Keep it in test mode.

1. In n8n, open the workflow
2. Click **Execute Workflow** (manual execution)
3. Use the webhook test URL shown in the webhook node
4. Send test payloads using the fixtures:

```bash
# Test HIGH band submission
curl -X POST http://localhost:5678/webhook/assessment-submission \
  -H "Content-Type: application/json" \
  -d @fixtures/assessment-submission-high-band.json

# Test LOW band submission
curl -X POST http://localhost:5678/webhook/assessment-submission \
  -H "Content-Type: application/json" \
  -d @fixtures/assessment-submission-low-band.json
```

5. Verify each node executes correctly:
   - Webhook receives the payload ✓
   - Validation passes ✓
   - Scoring returns correct band ✓
   - Email sends (to test address) ✓
   - HubSpot contact created ✓

### 4. Configure Email to Send to Your Address First

Before sending to real prospects:
1. Edit the email nodes to send to YOUR email address initially
2. Test the complete flow
3. Verify email content and formatting
4. Once confirmed, update to use `{{ $json.contact.email }}`

## Workflow Architecture

```
[Webhook Trigger]
       ↓
[Validate Payload] ──[Invalid]──→ [Error Response 400]
       ↓ [Valid]
[Score Assessment] ← STUB: Replace with NEU-5 model
       ↓
[Route by Band]
   ├── HIGH ──→ [Add Scheduling Link] → [Send Result Email] → [HubSpot CRM]
   ├── MEDIUM ─→ [Add Scheduling Link] → [Send Result Email] → [HubSpot CRM]
   └── LOW ────→ [Send Nurture Email] ─→ [HubSpot CRM] ─→ [Schedule 7-day Wait] → [Nurture Email]
```

## Node Details

### 1. Webhook Trigger
- **Path:** `assessment-submission`
- **Method:** POST
- **Response:** Returns JSON acknowledgment with submission ID

### 2. Validate Payload
- **Type:** Code node (JavaScript)
- **Validates:**
  - Required fields present
  - Email format
  - Budget readiness (q3) is 1-10
- **Output:** Error object if validation fails

### 3. Score Assessment (STUB)
- **Type:** Code node (JavaScript)
- **Input:** `answers` object with q1-q5
- **Output:** `{ score: number, band: 'HIGH' | 'MEDIUM' | 'LOW' }`
- **Note:** This is a placeholder. Replace with NEU-5 scoring model when available.

### 4. Route by Band
- **Type:** Switch node
- **Routes to:** HIGH, MEDIUM, or LOW path based on scoring result

### 5. Add Scheduling Link
- **Type:** Code node
- **Adds:** Calendly booking link for HIGH and MEDIUM bands
- **Calendly URL:** `https://calendly.com/neural-studio-lab/strategy-call`

### 6. Send Result Email (3 variants)
- **HIGH/MEDIUM:** Includes scoring results + scheduling link
- **LOW:** Nurture-focused, no scheduling link
- **Placeholder:** Email copy from Iris (NEU-8) to be inserted

### 7. Add/Update Contact (HubSpot)
- **Type:** HubSpot node
- **Operation:** Create or update contact
- **Properties:**
  - Standard: firstname, lastname, email, company, phone
  - Custom: ai_maturity_score, assessment_band, assessment_date, lead_source

### 8. Schedule Nurture Email
- **Type:** Wait node (7 days)
- **Purpose:** Follow-up for LOW band leads who haven't engaged

### 9. Send Nurture Email
- **Type:** Email node
- **Content:** Educational resources, webinar invites (placeholder from NEU-8)

## File Structure

```
/home/paperclip/.paperclip/instances/default/projects/843b739a-76a9-4fbd-bfb3-35f8ebd332e3/9a793438-25de-4bb4-a6a5-df415832c98e/_default/
├── docs/
│   ├── assessment-webhook-contract.md      # API contract for Atlas
│   └── free-tier-stack-decisions.md        # Tool selection rationale
├── fixtures/
│   ├── assessment-submission-high-band.json # Test payload (scores HIGH)
│   └── assessment-submission-low-band.json  # Test payload (scores LOW)
└── n8n-workflows/
    └── assessment-funnel-pipeline.json     # Main workflow definition
```

## Activation Checklist

**⚠️ DO NOT ACTIVATE UNTIL ALL ITEMS CHECKED ⚠️**

- [ ] HubSpot credentials configured in n8n
- [ ] Email sender credentials configured
- [ ] Workflow imported to n8n
- [ ] Tested with HIGH band fixture - all nodes execute correctly
- [ ] Tested with LOW band fixture - all nodes execute correctly
- [ ] Email content reviewed and approved
- [ ] Email initially sent to test address (not real prospects)
- [ ] `request_confirmation` interaction posted on task
- [ ] Operator has approved activation

## Governance Compliance

**This workflow is currently INACTIVE.** Activation requires:

1. `request_confirmation` interaction on NEU-7
2. Explicit operator approval
3. Documentation of what will send, to whom, and how often

**Activation = "sends" action under governance gate.** No exceptions.

## Pending Items

### 1. Scoring Model (NEU-5)
- Current: Stub scoring logic
- Action: Replace Code node with NEU-5 model when published
- Impact: None on pipeline structure - same input/output shape

### 2. Email Copy (NEU-8)
- Current: Placeholder text in email nodes
- Action: Insert actual copy from Iris when available
- Impact: Email content will be updated, no workflow changes needed

### 3. Email Sender Confirmation
- Current: Awaiting operator decision
- Recommended: SendGrid (100 emails/day free tier)
- Action: Configure credentials once selected

## Troubleshooting

### Webhook not receiving data
- Check n8n is running: `curl http://localhost:5678`
- Verify webhook path matches: `assessment-submission`
- Check firewall/port forwarding if calling from outside localhost

### HubSpot credential errors
- Verify API key is correct and has proper permissions
- Check HubSpot private app scopes include `contacts` and `crm.objects.companies.write`

### Email not sending
- Verify email credentials are configured
- Check email sender domain is verified (for SendGrid/Mailgun)
- Review n8n execution logs for error messages

## Change Log

| Date | Change | Author |
|------|--------|--------|
| 2026-09-27 | Initial workflow built and documented | Nova |
