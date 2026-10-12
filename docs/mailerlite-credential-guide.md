# n8n Credential Configuration Guide

## Overview
This document outlines the credentials needed to configure the assessment funnel pipeline in n8n.

## Credentials to Configure

### 1. MailerLite
**Purpose:** Send assessment result emails and nurture sequence emails

**Setup Steps:**
1. Log in to your MailerLite account
2. Navigate to **Settings** → **Developer apps** (or **Integrations** → **API**)
3. Generate a new API token if one doesn't exist
4. Copy the API token

**In n8n:**
1. Go to **Credentials** → **Add Credential**
2. Select **MailersLite API**
3. Name: `MailerLite Production`
4. Paste the API token
5. Save

**Free Tier Limit:** 1,000 subscribers, 12,000 emails/month

---

### 2. HubSpot
**Purpose:** Record leads and assessment scores in CRM

**Setup Steps:**
1. Log in to your HubSpot account
2. Navigate to **Settings** (gear icon) → **Integrations** → **API**
3. Generate a private API key:
   - Click **Create private API key**
   - Name: `Neural Studio Lab - Assessment Funnel`
   - Scopes needed:
     - `contacts` (read/write)
     - `crm.objects.companies` (read/write) - optional
   - Copy the API key

**In n8n:**
1. Go to **Credentials** → **Add Credential**
2. Select **HubSpot**
3. Name: `HubSpot Production`
4. Authentication: **Private App**
5. Paste the API key
6. Save

**Free Tier Limit:** 1,000,000 contacts

---

### 3. Calendly
**Purpose:** Generate booking links for qualifying leads

**Setup Steps:**
1. Log in to your Calendly account
2. Navigate to **Settings** → **API** (or **Integrations** → **Developers**)
3. Generate an API token

**In n8n:**
1. Go to **Credentials** → **Add Credential**
2. Select **Calendly**
3. Name: `Calendly Production`
4. Paste the API token
5. Save

**Free Tier Limit:** 1 event type

---

## Workflow Import Steps

1. Open n8n UI at `http://localhost:5678`
2. Go to **Workflows** → **Import from File**
3. Select `/n8n-workflows/assessment-funnel-pipeline.json`
4. The workflow will appear with all nodes but credentials will be missing
5. For each credential node:
   - Click the node
   - Click **Select Credential** → **Add New Credential**
   - Choose the appropriate credential from the list above
   - Save

---

## Testing Checklist

Before activation, verify:

- [ ] MailerLite credential configured and tested
- [ ] HubSpot credential configured and tested
- [ ] Calendly credential configured and tested
- [ ] Manual execution with HIGH band fixture succeeds
- [ ] Manual execution with LOW band fixture succeeds
- [ ] Validation failure test succeeds (malformed payload handled)

---

## Activation Request

Once testing is complete, submit a `request_confirmation` with:

- What will fire: Assessment result emails and nurture sequence emails
- To whom: Assessment submitters (email addresses from form submissions)
- How often: Once per submission (result email), plus follow-up nurture emails if no booking occurs
- Free tier impact: Counts against MailerLite's 12K emails/month limit

**Important:** Do not activate until the operator explicitly accepts the confirmation card.
