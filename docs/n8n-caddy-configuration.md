# n8n Caddy Configuration Guide

**Date:** 2026-10-12  
**Issue:** NEU-105  
**Purpose:** Configure Caddy to reverse proxy n8n.neuralstudiolab.com to the internal n8n instance

## Current State

✅ **DNS Working**
- Domain: n8n.neuralstudiolab.com
- Resolves to: 2.25.142.26
- Status: Propagated and working

✅ **n8n Running**
- Internal IP: 192.168.2.2:5678 (WireGuard interface)
- Version: n8n 2.42.6
- Status: Running and accessible on local network
- Web UI: Responding correctly

✅ **Caddy Running**
- Public IP: 2.25.142.26 (eth0)
- Config: /etc/caddy/Caddyfile
- Process: Running (PID 4586)
- Status: Active

❌ **Missing Configuration**
- Caddy needs reverse proxy configuration for n8n.neuralstudiolab.com

## Required Configuration

### Step 1: Edit Caddyfile

Add this block to `/etc/caddy/Caddyfile`:

```caddyfile
n8n.neuralstudiolab.com {
    reverse_proxy http://192.168.2.2:5678
}
```

**Alternative (if n8n listens on localhost):**
```caddyfile
n8n.neuralstudiolab.com {
    reverse_proxy http://localhost:5678
}
```

### Step 2: Reload Caddy

```bash
sudo systemctl reload caddy
```

Or restart if reload doesn't work:
```bash
sudo systemctl restart caddy
```

### Step 3: Verify

```bash
# Check Caddy status
sudo systemctl status caddy

# Test the connection
curl -I https://n8n.neuralstudiolab.com

# Should return HTTP 200 with n8n headers
```

## Full Example Caddyfile

If starting from scratch or needing a complete example:

```caddyfile
# Global options
{
    email your-email@example.com
}

# n8n reverse proxy
n8n.neuralstudiolab.com {
    reverse_proxy http://192.168.2.2:5678 {
        # Optional: Add headers for WebSocket support
        header_up X-Real-IP {remote_host}
        header_up X-Forwarded-For {remote_host}
        header_up X-Forwarded-Proto {scheme}
    }
    
    # Enable logging (optional)
    log {
        output file /var/log/caddy/n8n.log
    }
}
```

## Troubleshooting

### Test n8n Directly
```bash
# From the server itself
curl -I http://192.168.2.2:5678

# Should return HTTP 200 with n8n headers
```

### Check Caddy Logs
```bash
sudo journalctl -u caddy -f
```

### Verify DNS
```bash
dig +short n8n.neuralstudiolab.com
# Should return: 2.25.142.26
```

### Check Caddy Config Syntax
```bash
sudo caddy validate --config /etc/caddy/Caddyfile
```

## Next Steps After Configuration

Once Caddy is configured and n8n is accessible at https://n8n.neuralstudiolab.com:

1. **Import Assessment Workflow**
   - File: `/n8n-workflows/assessment-funnel-pipeline-final.json`
   - Import via n8n UI or API

2. **Configure Credentials** (from docs)
   - HubSpot CRM API key
   - MailerLite API key  
   - Email sender credentials

3. **Test Webhook Endpoint**
   - URL: https://n8n.neuralstudiolab.com/webhook/assessment-submission
   - Method: POST
   - Test with fixture data

4. **Activate Workflow**
   - Requires approval via `request_confirmation`
   - Set workflow status to active

## Security Notes

- ✅ Caddy automatically provisions SSL certificates via Let's Encrypt
- ✅ HTTPS enforced by default
- ✅ n8n runs on internal network interface (192.168.2.2)
- ⚠️  Ensure n8n authentication is configured (login required)
- ⚠️  Webhook endpoints are public - implement rate limiting if needed

## References

- n8n Installation: `/docs/n8n-installation-required.md`
- Webhook Contract: `/docs/assessment-webhook-contract.md`
- Workflow File: `/n8n-workflows/assessment-funnel-pipeline-final.json`
