# Free-Tier Stack Decisions

**Version:** 1.0  
**Last Updated:** 2026-09-27  
**Owner:** Nova (Automation Engineer)

## Decision Framework

All tool selections must meet these criteria:
1. **Free tier sufficient** for current volume (0-100 leads/month)
2. **No hidden costs** or forced upgrades
3. **Data portability** - can export data if we switch
4. **Integration compatibility** with n8n

## Selected Tools

### 1. Workflow Automation: **n8n (self-hosted)**
- **Status:** ✅ Already running on this host
- **Free tier:** Unlimited workflows, unlimited executions (self-hosted)
- **Why chosen:** 
  - Already deployed and running
  - Self-hosted = no execution limits
  - Strong HubSpot and Calendly integration
  - Visual workflow builder
- **Rejected alternatives:**
  - **Zapier:** Free tier = 100 tasks/month, too restrictive
  - **Make (Integromat):** Free tier = 1,000 operations/month, still limits growth
  - **Node-RED:** Good alternative, but n8n already deployed

### 2. CRM: **HubSpot (Free tier)**
- **Selected by operator:** HubSpot
- **Free tier limits:**
  - Up to 1,000,000 contacts
  - Email marketing: 2,000 sends/month
  - Forms, landing pages, live chat included
  - Basic reporting
- **Why chosen:**
  - Industry standard, operator already uses it
  - Free tier is generous for early stage
  - Excellent n8n integration
- **Rejected alternatives:**
  - **Salesforce:** Too expensive, overkill for startup
  - **Pipedrive:** Paid tier required for API access
  - **Airtable:** Not a true CRM, limited automation

### 3. Scheduling: **Calendly (Free tier)**
- **Selected by operator:** Calendly
- **Free tier limits:**
  - 1 event type
  - Unlimited meetings
  - Basic integrations
- **Why chosen:**
  - Operator selected it
  - Free tier is sufficient (we only need 1 event type: strategy call)
  - Excellent n8n integration via webhook
- **Rejected alternatives:**
  - **Cal.com:** Open source alternative, but requires self-hosting
  - **YouCanBook.me:** Paid tier required for API
  - **Google Calendar Appointment Slots:** Less user-friendly

### 4. Email Sender: **MailerLite**
- **Selected by operator:** MailerLite
- **Free tier limits:**
  - 1,000 subscribers
  - 12,000 emails/month
  - Basic automation included
  - Landing pages and forms included
- **Why chosen:**
  - Operator selected it
  - Free tier is generous for early stage (12K emails/month)
  - Good deliverability and ease of use
  - Native n8n integration available
- **Rejected alternatives:**
  - **SendGrid:** 100 emails/day = 3,000/month, less generous than MailerLite
  - **Mailgun:** Reduced free tier after 3 months (200/day)
  - **Resend:** 3,000 emails/month, less proven than MailerLite
  - **Gmail/Google Workspace:** Rate limits, not ideal for transactional + nurture sequences

### 5. Form Hosting: **Existing website**
- **Status:** Use existing website (to be refreshed by Atlas)
- **No additional cost** - embedded form on existing domain
- Form data posts directly to n8n webhook

## Cost Summary

| Component | Current Cost | Free Tier Limit | Notes |
|-----------|--------------|-----------------|-------|
| n8n | $0 (self-hosted) | Unlimited | Already running |
| HubSpot | $0 | 1M contacts, 2K emails/month | Operator already has account |
| Calendly | $0 | Unlimited meetings, 1 event type | Standard free tier |
| Email Sender (MailerLite) | $0 | 1,000 subscribers, 12K emails/month | Selected by operator |
| Form Hosting | $0 | N/A | Existing website |
| **Total** | **$0** | | All within free tiers |

## Upgrade Triggers

Monitor these metrics and plan upgrades when:
1. **Lead volume > 3,000/month** → Upgrade email sender
2. **Need multiple meeting types** → Upgrade Calendly ($12/month)
3. **Need advanced CRM features** → Upgrade HubSpot (starts at $50/month)
4. **Need more n8n features** → Stay self-hosted (no upgrade needed)

## Governance Note

**Any move to paid tiers requires:**
1. `request_confirmation` interaction on this task
2. Justification of business need
3. Documentation of rejected free alternatives
4. Budget approval from Zeus

## Integration Architecture

```
[Assessment Form] → [n8n Webhook] → [Scoring] → [HubSpot CRM]
                                              ↓
                                    [Calendly Link] → [Booking]
                                              ↓
                                    [MailerLite] → [Result/Nurture]
```

## Change Log

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | 2026-09-27 | Initial decisions document | Nova |
| 1.1 | 2026-09-29 | Updated email sender to MailerLite (operator confirmed) | Nova |
