# Assessment Submission Contract

**Version:** 1.0  
**Date:** 2026-09-26  
**Owner:** Atlas (Web) ↔ Nova (n8n/NEU-7)

This document defines the payload contract between the assessment form (web) and the n8n intake pipeline (NEU-7).

## Endpoint

```
POST https://n8n.neuralstudiolab.com/webhook/assessment-submit
```

**Note:** Final URL to be confirmed by NEU-7 implementation.

## Request Payload

```json
{
  "submission_id": "uuid-v4-string",
  "submitted_at": "ISO-8601-timestamp",
  "session_duration_seconds": 1247,
  "contact": {
    "name": "string",
    "email": "email",
    "company": "string",
    "industry": "string",
    "company_size": "string"
  },
  "answers": {
    "dimension_1_strategy": {
      "question_1": "answer_value",
      "question_2": "answer_value",
      // ... all questions for this dimension
    },
    "dimension_2_data": { ... },
    "dimension_3_technology": { ... },
    "dimension_4_people": { ... },
    "dimension_5_process": { ... },
    "dimension_6_governance": { ... }
  },
  "metadata": {
    "user_agent": "string",
    "referrer": "string",
    "ip_address": "string (optional, for analytics)"
  }
}
```

### Field Definitions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `submission_id` | UUID v4 | Yes | Unique identifier for this submission |
| `submitted_at` | ISO-8601 | Yes | Timestamp when form was submitted |
| `session_duration_seconds` | integer | Yes | Time spent completing assessment (seconds) |
| `contact.name` | string | Yes | Full name |
| `contact.email` | email | Yes | Work email address |
| `contact.company` | string | Yes | Organization name |
| `contact.industry` | enum | Yes | One of: technology, healthcare, finance, retail, manufacturing, education, government, other |
| `contact.company_size` | enum | Yes | One of: 1-10, 11-50, 51-200, 201-500, 501-1000, 1000+ |
| `answers` | object | Yes | Nested object containing all assessment responses |
| `answers.*.question_*` | varies | Yes | Individual question answers (type depends on question) |
| `metadata.user_agent` | string | No | Browser user agent string |
| `metadata.referrer` | string | No | Referrer URL |
| `metadata.ip_address` | string | No | Client IP (analytics only) |

## Answer Value Types

Answers may be one of:
- **string:** Single text response
- **number:** Numeric score (1-5 scale)
- **array:** Multiple selection responses
- **object:** Complex nested answers

Example:
```json
{
  "answers": {
    "dimension_1_strategy": {
      "q1_strategy_clarity": 4,
      "q2_executive_support": "partial",
      "q3_use_cases": ["automation", "analytics", "nlp"]
    }
  }
}
```

## Response Format

### Success (200)

```json
{
  "status": "success",
  "submission_id": "uuid-v4-string",
  "result_url": "https://neuralstudiolab.com/results.html?session=uuid-v4-string",
  "score_preview": {
    "overall": 72,
    "dimensions": {
      "strategy": 65,
      "data": 80,
      "technology": 70,
      "people": 75,
      "process": 68,
      "governance": 72
    }
  }
}
```

### Error Responses

**400 - Validation Error**
```json
{
  "status": "error",
  "error_code": "VALIDATION_ERROR",
  "message": "Missing required field: contact.email",
  "details": {
    "field": "contact.email",
    "reason": "required"
  }
}
```

**500 - Server Error**
```json
{
  "status": "error",
  "error_code": "INTERNAL_ERROR",
  "message": "Unable to process submission"
}
```

## Scoring Model

The n8n workflow will:
1. Parse all answers
2. Calculate dimension scores (0-100 each)
3. Calculate overall score (weighted average)
4. Generate result categorization:
   - **0-39:** Early Stage
   - **40-59:** Developing
   - **60-79:** Mature
   - **80-100:** Advanced

5. Return score preview in response (for display on results page)

## Webhook Configuration (NEU-7)

The n8n webhook node should:
- Accept POST requests
- Validate required fields
- Calculate scores based on question weights
- Store submission in CRM/database
- Trigger follow-up workflow (email, notification, etc.)

## Implementation Checklist

- [ ] NEU-7: Create n8n webhook endpoint
- [ ] NEU-7: Implement validation logic
- [ ] NEU-7: Implement scoring calculation
- [ ] NEU-7: Configure response format
- [ ] Atlas: Update assessment form to POST to endpoint
- [ ] Atlas: Handle success response and redirect to results
- [ ] Atlas: Display score preview on results page
- [ ] Test: End-to-end submission flow

## Changes Log

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-09-26 | Initial contract definition |
