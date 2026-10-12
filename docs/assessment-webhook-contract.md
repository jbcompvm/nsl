# Assessment Webhook Contract

**Version:** 1.0  
**Last Updated:** 2026-09-27  
**Owner:** Nova (Automation Engineer)

## Overview

This document defines the webhook contract between the assessment form (built by Atlas) and the n8n automation pipeline. The form will POST assessment submissions to the n8n webhook endpoint.

## Webhook Endpoint

- **URL:** `http://localhost:5678/webhook/assessment-submission` (to be configured in n8n)
- **Method:** POST
- **Content-Type:** `application/json`
- **Authentication:** None (public endpoint — rely on form validation)

## Request Payload Schema

```json
{
  "submissionId": "string (UUID, required)",
  "timestamp": "string (ISO 8601 datetime, required)",
  "contact": {
    "name": "string (required)",
    "email": "string (required, valid email format)",
    "company": "string (optional)",
    "phone": "string (optional)"
  },
  "answers": {
    "q1": "string (required) - Current AI maturity level",
    "q2": "string (required) - Primary business challenge",
    "q3": "number (required, 1-10 scale) - Budget readiness",
    "q4": "string (required) - Timeline for implementation",
    "q5": "string (required) - Decision-making authority"
  },
  "metadata": {
    "source": "string (optional) - Where the visitor came from",
    "ipAddress": "string (optional) - For fraud detection",
    "userAgent": "string (optional)"
  }
}
```

## Field Definitions

### Required Fields

| Field | Type | Description | Validation |
|-------|------|-------------|------------|
| `submissionId` | UUID | Unique submission identifier | Must be valid UUID v4 |
| `timestamp` | ISO 8601 | When the form was submitted | e.g., `2026-09-27T14:30:00Z` |
| `contact.name` | string | Full name of submitter | Min 2 characters |
| `contact.email` | string | Email address | Valid email format |
| `answers.q1` | string | AI maturity assessment | One of: `explorer`, `experimenting`, `scaling`, `optimized` |
| `answers.q2` | string | Primary challenge | Non-empty string |
| `answers.q3` | number | Budget readiness | Integer 1-10 |
| `answers.q4` | string | Implementation timeline | One of: `immediate`, `1-3 months`, `3-6 months`, `6+ months` |
| `answers.q5` | string | Decision authority | One of: `decision_maker`, `influencer`, `researcher` |

### Optional Fields

| Field | Type | Description |
|-------|------|-------------|
| `contact.company` | string | Company name |
| `contact.phone` | string | Phone number |
| `metadata.source` | string | Traffic source (UTM, referral, etc.) |
| `metadata.ipAddress` | string | Client IP address |
| `metadata.userAgent` | string | Browser/client user agent |

## Example Payload

```json
{
  "submissionId": "550e8400-e29b-41d4-a716-446655440000",
  "timestamp": "2026-09-27T14:30:00Z",
  "contact": {
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "company": "Acme Corp",
    "phone": "+1-555-123-4567"
  },
  "answers": {
    "q1": "experimenting",
    "q2": "Need help identifying high-impact AI use cases",
    "q3": 7,
    "q4": "1-3 months",
    "q5": "decision_maker"
  },
  "metadata": {
    "source": "google organic",
    "ipAddress": "192.168.1.100",
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)..."
  }
}
```

## Response Codes

### Success (200)

```json
{
  "status": "success",
  "message": "Submission received",
  "submissionId": "550e8400-e29b-41d4-a716-446655440000"
}
```

### Validation Error (400)

```json
{
  "status": "error",
  "message": "Invalid payload",
  "errors": [
    {
      "field": "contact.email",
      "message": "Invalid email format"
    }
  ]
}
```

### Server Error (500)

```json
{
  "status": "error",
  "message": "Internal server error",
  "submissionId": "550e8400-e29b-41d4-a716-446655440000"
}
```

## Error Handling

- **400 Bad Request:** Missing required fields or invalid data format
- **413 Payload Too Large:** Submission exceeds size limits (max 10KB)
- **429 Too Many Requests:** Rate limited (max 10 submissions per IP per hour)
- **500 Internal Server Error:** Pipeline processing failure

## Security Considerations

1. **Rate Limiting:** n8n should be configured to limit submissions per IP
2. **Input Validation:** All fields must be validated before processing
3. **PII Handling:** Email and phone numbers are stored in HubSpot CRM
4. **No Secrets in Payload:** Never include API keys, passwords, or tokens

## Integration Notes for Atlas

1. The form should POST directly to the n8n webhook URL
2. Wait for the response before showing the results page
3. Display a loading state while the webhook processes
4. On success, redirect to the appropriate result page based on the band (HIGH/MEDIUM/LOW)
5. On error, show a user-friendly message and offer to retry

## Change Log

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | 2026-09-27 | Initial contract | Nova |
