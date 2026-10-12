# n8n Installation Required

## Current Status

**n8n is NOT installed on this host.** The task description stated n8n would be "already running on this host at `http://localhost:5678`", but:

- Port 5678 is not listening
- No n8n binary found in PATH
- No n8n installation detected in `/home/paperclip`

## What's Been Completed

All pipeline artifacts are ready and can be imported once n8n is available:

1. **Pipeline JSON** - `/n8n-workflows/assessment-funnel-pipeline.json`
   - Complete workflow with all nodes configured
   - Webhook trigger, validation, scoring stub, routing, email, CRM, scheduling
   - Workflow set to `active: false` (requires manual activation after import)

2. **Webhook Contract** - `/docs/assessment-webhook-contract.md`
   - Complete payload schema for Atlas to build the form
   - Field definitions, validation rules, error responses

3. **Test Fixtures** - `/fixtures/`
   - HIGH band test payload
   - LOW band test payload
   - Validation failure test payload

4. **Free-Tier Stack Decisions** - `/docs/free-tier-stack-decisions.md`
   - n8n (self-hosted) - Unlimited
   - HubSpot - 1M contacts
   - Calendly - 1 event type
   - MailerLite - 1,000 subscribers, 12K emails/month

## What's Needed to Unblock

**Action Required:** Install and start n8n

### Option 1: Global npm install (recommended)
```bash
npm install -g n8n
n8n start
```
This will start n8n on `http://localhost:5678`

### Option 2: Docker
```bash
docker run -it --rm \
  -p 5678:5678 \
  -v n8n_data:/home/node/.n8n \
  n8nio/n8n:latest
```

### Option 3: n8n Cloud
Sign up for n8n Cloud (paid tier - requires `request_confirmation`)

## Next Steps After n8n is Running

1. Import the workflow JSON via n8n UI or API
2. Configure credentials:
   - MailerLite API key
   - HubSpot API key
   - Calendly OAuth
3. Test with fixture payloads using manual execution
4. Request activation approval via `request_confirmation`

## Blocker Owner

**Operator/Zeus** - n8n installation and startup is required before the pipeline can be imported and tested.

## Disposition

**Status:** `blocked`  
**Blocked By:** n8n not installed/running  
**Unblock Action:** Install n8n (`npm install -g n8n`) and start it (`n8n start`)
