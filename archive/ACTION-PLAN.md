# Action Plan: Deploy Assessment Funnel System

**Created:** 2026-10-09  
**Task:** NEU-66 - Complete deployment of assessment funnel  
**Status:** Ready to deploy

## Overview

The assessment funnel pipeline is **built and tested** but not live. Two components need deployment:

1. **n8n Workflow** - Already imported (ID: `fpETSmHbGA8iYzxN`) but **inactive**
2. **Website** - Packaged and ready, needs deployment to production

## Credentials Stored

✅ n8n API credentials received and stored:
- API Token: Available
- Login: james@jbcomp.com / AIML4Life!
- n8n URL: https://n8n.neuralstudiolab.com

## Step 1: Activate n8n Workflow

**Workflow ID:** fpETSmHbGA8iYzxN  
**Status:** Imported but inactive  
**Location:** `n8n-workflows/assessment-funnel-pipeline-clean.json`

### To Activate:

**Option A - Via n8n UI:**
1. Login to https://n8n.neuralstudiolab.com
2. Navigate to Workflows
3. Find "Assessment Funnel Pipeline"
4. Click "Active" toggle to enable

**Option B - Via API:**
```bash
curl -X PATCH \
  -H "X-N8N-API-KEY: <api-key>" \
  -H "Content-Type: application/json" \
  -d '{"active": true}' \
  https://n8n.neuralstudiolab.com/api/v1/workflows/fpETSmHbGA8iYzxN
```

### Workflow Configuration Checklist:

Before activating, verify these credentials are configured in n8n:

- [ ] **HubSpot CRM** - API key configured as "HubSpot Production"
- [ ] **Email Sender** - SendGrid or SMTP credentials configured
- [ ] **Webhook URL** - Confirm webhook endpoint matches website form submission

## Step 2: Deploy Website

**Package:** `deployment-package/neuralstudiolab-site.zip` (extracted to `site-extracted/`)  
**Target:** https://neuralstudiolab.com

### Deployment Options:

**Recommended: Bluehost (Current Host)**
1. Access Bluehost cPanel
2. Backup current public_html contents
3. Upload files from `site-extracted/` to public_html/
4. Clear Bluehost cache
5. Verify deployment

**Alternative: Netlify/Vercel**
- Faster deployment
- Free tier available
- Requires DNS update (24-48 hours)

### Website Files:
- 6 HTML pages (index, assessment, consulting, about, resources, results)
- CSS: `assets/css/main.css` (1,153 lines)
- JavaScript: `assets/js/` (assessment.js, scoring-engine.js, results.js)

## Step 3: Integration Testing

After both components are live:

### Test the Complete Flow:

1. **Load Website**
   - Visit https://neuralstudiolab.com/assessment.html
   - Verify form loads correctly

2. **Submit Test Assessment**
   - Fill out assessment form with test data
   - Submit and verify webhook fires
   - Check browser console for errors

3. **Verify n8n Processing**
   - Check n8n execution log
   - Confirm workflow processes submission
   - Verify email sends
   - Confirm HubSpot contact created

4. **Results Page**
   - Verify results display correctly
   - Check scoring band assignment
   - Confirm scheduling link appears for HIGH/MEDIUM bands

### Test Data Available:
- `fixtures/assessment-submission-high-band.json`
- `fixtures/assessment-submission-low-band.json`

## Step 4: Go Live

### Pre-Launch Checklist:

- [ ] n8n workflow active and processing webhooks
- [ ] Website deployed to production
- [ ] Test submission completes end-to-end
- [ ] Email templates rendering correctly
- [ ] HubSpot integration working
- [ ] Mobile responsiveness verified
- [ ] All pages load without errors

### Post-Launch Monitoring:

- Monitor n8n execution logs for errors
- Check HubSpot for new contacts
- Verify email deliverability
- Track form submission analytics

## Current Blockers

**n8n Server Access:** Need to verify network connectivity to https://n8n.neuralstudiolab.com
- If API unreachable from this environment, activation requires:
  - Direct UI access via browser
  - OR network configuration to allow API access

**Website Deployment:** Requires:
- Bluehost cPanel access credentials
- OR decision on alternative hosting (Netlify/Vercel)

## Next Actions

**Immediate:**
1. ✅ Store n8n credentials - DONE
2. 🔄 Test n8n API connectivity
3. ⏳ Activate workflow (pending API access)
4. ⏳ Deploy website (pending hosting credentials)

**For Manual Completion:**
- If n8n API is unreachable, provide user with activation instructions
- If hosting credentials unavailable, document deployment steps for user
