# n8n Deployment Guide

**Last Updated:** 2026-10-11  
**Purpose:** Central documentation for n8n instance management

## Current n8n Instance

**Primary Instance:**
- URL: https://n8n.neuralstudiolab.com
- Login: james@jbcomp.com
- Password: AIML4Life!
- API Token: n8n_api_FdaDICIBf5jfGJukHGMxIL5uqj70cPAITg_i

## Assessment Funnel Workflow

**Workflow ID:** fpETSmHbGA8iYzxN  
**Name:** Assessment Funnel Pipeline  
**Status:** Imported but INACTIVE  
**Location:** Already imported into https://n8n.neuralstudiolab.com

### Activation Steps

To activate the workflow:

**Option 1 - Via Web UI (Recommended):**
1. Go to https://n8n.neuralstudiolab.com
2. Log in with james@jbcomp.com / AIML4Life!
3. Navigate to "Workflows" in the left sidebar
4. Find "Assessment Funnel Pipeline" (ID: fpETSmHbGA8iYzxN)
5. Click the toggle switch to set it to "Active"
6. Verify the webhook URL is correct

**Option 2 - Via API:**
```bash
curl -X PATCH \
  -H "X-N8N-API-KEY: n8n_api_FdaDICIBf5jfGJukHGMxIL5uqj70cPAITg_i" \
  -H "Content-Type: application/json" \
  -d '{"active": true}' \
  https://n8n.neuralstudiolab.com/api/v1/workflows/fpETSmHbGA8iYzxN
```

### Workflow Configuration

Before activating, verify these credentials are configured in n8n:

- [ ] **HubSpot CRM** - API key configured as "HubSpot Production"
- [ ] **Email Sender** - SendGrid or SMTP credentials configured
- [ ] **Webhook URL** - Matches website form submission endpoint

### Webhook Endpoint

The assessment form at `https://[DOMAIN]/assessment.html` submits to:
- Expected endpoint: `https://n8n.neuralstudiolab.com/webhook/assessment-submission`

## Website Integration

**Website Location:**
- FTP Server: ftp.jbcomp.com
- Directory: /website_240c3762
- Deployment Date: 2026-10-11

**Assessment Form:**
- Path: `/assessment.html`
- JavaScript: `/assets/js/assessment.js`
- Scoring Engine: `/assets/js/scoring-engine.js`

The form currently has a placeholder webhook URL that needs to be updated once the n8n workflow is active.

## Next Steps

1. **Activate workflow** (Nova to handle)
2. **Verify webhook endpoint** matches between website and n8n
3. **Test end-to-end flow** with a test submission
4. **Update website** with correct webhook URL if needed
5. **Monitor workflow** for errors

## Agent Ownership

- **n8n Management:** Nova (Automation Engineer)
- **Website Deployment:** Atlas (Web Engineer)
- **Overall Coordination:** Zeus (Chief of Staff)

## Troubleshooting

**If workflow doesn't activate:**
- Check n8n instance is running
- Verify API credentials are correct
- Check workflow doesn't have configuration errors
- Look for required credentials that are missing

**If submissions don't work:**
- Check webhook URL in assessment.js
- Verify n8n workflow is active
- Check n8n execution logs
- Verify HubSpot credentials are valid
