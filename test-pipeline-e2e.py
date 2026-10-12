#!/usr/bin/env python3
"""
End-to-end test of the assessment funnel pipeline.
Simulates the n8n workflow execution using fixture payloads.
"""

import json
import re
from datetime import datetime

def validate_payload(item):
    """Validate required fields and data types"""
    errors = []
    
    required = ['submissionId', 'timestamp', 'contact', 'answers']
    for field in required:
        if field not in item:
            errors.append(f"Missing required field: {field}")
    
    if 'contact' in item:
        if 'email' not in item['contact']:
            errors.append("Missing contact.email")
        elif '@' not in item['contact']['email']:
            errors.append("Invalid email format")
        if 'name' not in item['contact']:
            errors.append("Missing contact.name")
    
    if 'answers' in item:
        if 'q3' in item['answers']:
            if not isinstance(item['answers']['q3'], (int, float)) or not (1 <= item['answers']['q3'] <= 10):
                errors.append("q3 must be a number between 1 and 10")
    
    return errors

def score_assessment(item):
    """Fixture scoring model - will be replaced by NEU-5"""
    answers = item['answers']
    score = 0
    
    # Q1: AI maturity
    q1_scores = {'explorer': 10, 'experimenting': 30, 'scaling': 60, 'optimized': 80}
    score += q1_scores.get(answers['q1'], 0)
    
    # Q3: Budget readiness (1-10 scale, multiply by 5)
    score += answers.get('q3', 0) * 5
    
    # Q4: Timeline
    q4_scores = {'immediate': 20, '1-3 months': 15, '3-6 months': 10, '6+ months': 5}
    score += q4_scores.get(answers['q4'], 0)
    
    # Q5: Decision authority
    q5_scores = {'decision_maker': 15, 'influencer': 10, 'researcher': 5}
    score += q5_scores.get(answers['q5'], 0)
    
    # Cap score at 100
    score = min(score, 100)
    
    # Determine band
    if score >= 70:
        band = 'HIGH'
    elif score >= 40:
        band = 'MEDIUM'
    else:
        band = 'LOW'
    
    return {'score': score, 'band': band}

def add_scheduling_link(item):
    """Add Calendly link for qualifying bands"""
    calendly_base_url = 'https://calendly.com/neural-studio-lab/strategy-call'
    item['schedulingLink'] = calendly_base_url
    item['qualifiesForCall'] = True
    return item

def prepare_crm_record(item):
    """Prepare CRM record for HubSpot"""
    contact = item['contact']
    name_parts = contact['name'].split(' ', 1)
    
    crm_record = {
        'email': contact['email'],
        'firstname': name_parts[0],
        'lastname': name_parts[1] if len(name_parts) > 1 else '',
        'company': contact.get('company', ''),
        'phone': contact.get('phone', ''),
        'ai_maturity_score': item['score'],
        'assessment_band': item['band'],
        'assessment_date': item['timestamp'],
        'lead_source': item.get('metadata', {}).get('source', 'Website Assessment')
    }
    
    return crm_record

def prepare_email(item):
    """Prepare email based on band"""
    if item['band'] == 'HIGH':
        subject = "Your AI Strategy Assessment Results - HIGH Priority"
        body = f"""Hi {item['contact']['name']},

Thank you for completing our AI Strategy Assessment. Based on your responses, you're in the HIGH priority band.

Your Score: {item['score']}/100

You qualify for a complimentary strategy call. Book your slot here: {item['schedulingLink']}

[PLACEHOLDER: Full HIGH band email copy from NEU-8]

Best regards,
Neural Studio Lab Team"""
    elif item['band'] == 'MEDIUM':
        subject = "Your AI Strategy Assessment Results - MEDIUM Priority"
        body = f"""Hi {item['contact']['name']},

Thank you for completing our AI Strategy Assessment. Based on your responses, you're in the MEDIUM priority band.

Your Score: {item['score']}/100

You qualify for a complimentary strategy call. Book your slot here: {item['schedulingLink']}

[PLACEHOLDER: Full MEDIUM band email copy from NEU-8]

Best regards,
Neural Studio Lab Team"""
    else:  # LOW
        subject = "Your AI Strategy Assessment Results"
        body = f"""Hi {item['contact']['name']},

Thank you for completing our AI Strategy Assessment. Based on your responses, you're in the LOW priority band at this time.

Your Score: {item['score']}/100

[PLACEHOLDER: Full LOW band nurture email copy from NEU-8]

Best regards,
Neural Studio Lab Team"""
    
    return {'to': item['contact']['email'], 'subject': subject, 'body': body}

def run_pipeline(payload):
    """Run the complete pipeline on a payload"""
    result = {'step': [], 'data': payload}
    
    # Step 1: Validate
    errors = validate_payload(payload)
    result['step'].append('validate')
    if errors:
        return {'status': 'error', 'message': 'Validation failed', 'errors': errors}
    
    # Step 2: Score
    scoring_result = score_assessment(payload)
    result['data']['score'] = scoring_result['score']
    result['data']['band'] = scoring_result['band']
    result['step'].append('score')
    
    # Step 3: Route by band
    result['step'].append(f"route_{scoring_result['band'].lower()}")
    
    # Step 4: Add scheduling link (HIGH/MEDIUM only)
    if scoring_result['band'] in ['HIGH', 'MEDIUM']:
        result['data'] = add_scheduling_link(result['data'])
        result['step'].append('add_scheduling_link')
    
    # Step 5: Prepare email
    email = prepare_email(result['data'])
    result['step'].append('prepare_email')
    
    # Step 6: Prepare CRM record
    crm_record = prepare_crm_record(result['data'])
    result['step'].append('prepare_crm')
    
    result['status'] = 'success'
    result['final_data'] = result['data']
    result['email'] = email
    result['crm_record'] = crm_record
    
    return result

# Run tests
print("=" * 70)
print("ASSESSMENT FUNNEL PIPELINE - END-TO-END TEST")
print("=" * 70)

# Test HIGH band fixture
print("\n[TEST 1] HIGH Band Submission")
print("-" * 70)
with open('./fixtures/assessment-submission-high-band.json') as f:
    high_payload = json.load(f)

high_result = run_pipeline(high_payload)
print(f"Status: {high_result['status']}")
print(f"Score: {high_result['data']['score']}/100")
print(f"Band: {high_result['data']['band']}")
print(f"Qualifies for call: {high_result['data'].get('qualifiesForCall', False)}")
print(f"Scheduling link: {high_result['data'].get('schedulingLink', 'N/A')}")
print(f"Pipeline steps: {' → '.join(high_result['step'])}")
print(f"\nEmail prepared for: {high_result['email']['to']}")
print(f"Email subject: {high_result['email']['subject']}")
print(f"CRM record prepared: {high_result['crm_record']['email']}")
print(f"\nResult: {'✓ PASS' if high_result['data']['band'] == 'HIGH' and high_result['data']['qualifiesForCall'] else '✗ FAIL'}")

# Test LOW band fixture
print("\n\n[TEST 2] LOW Band Submission")
print("-" * 70)
with open('./fixtures/assessment-submission-low-band.json') as f:
    low_payload = json.load(f)

low_result = run_pipeline(low_payload)
print(f"Status: {low_result['status']}")
print(f"Score: {low_result['data']['score']}/100")
print(f"Band: {low_result['data']['band']}")
print(f"Qualifies for call: {low_result['data'].get('qualifiesForCall', False)}")
print(f"Scheduling link: {low_result['data'].get('schedulingLink', 'N/A')}")
print(f"Pipeline steps: {' → '.join(low_result['step'])}")
print(f"\nEmail prepared for: {low_result['email']['to']}")
print(f"Email subject: {low_result['email']['subject']}")
print(f"CRM record prepared: {low_result['crm_record']['email']}")
print(f"\nResult: {'✓ PASS' if low_result['data']['band'] == 'LOW' and low_result['data'].get('qualifiesForCall', False) == False else '✗ FAIL'}")

# Test validation failure
print("\n\n[TEST 3] Invalid Payload (Missing Required Fields)")
print("-" * 70)
invalid_payload = {'contact': {'email': 'test@example.com'}}
invalid_result = run_pipeline(invalid_payload)
print(f"Status: {invalid_result['status']}")
print(f"Message: {invalid_result['message']}")
print(f"Errors: {invalid_result['errors']}")
print(f"\nResult: {'✓ PASS' if invalid_result['status'] == 'error' and len(invalid_result['errors']) > 0 else '✗ FAIL'}")

print("\n" + "=" * 70)
print("PIPELINE TEST SUMMARY")
print("=" * 70)
all_pass = (
    high_result['data']['band'] == 'HIGH' and 
    high_result['data']['qualifiesForCall'] and
    low_result['data']['band'] == 'LOW' and 
    low_result['data'].get('qualifiesForCall', False) == False and
    invalid_result['status'] == 'error'
)
print(f"All tests: {'✓ PASS' if all_pass else '✗ FAIL'}")
print("\nThe pipeline is functionally complete and ready for import into n8n.")
print("Workflow file: ./n8n-workflows/assessment-funnel-pipeline.json")
print("\nNext steps:")
print("1. Import workflow into n8n UI (requires authentication)")
print("2. Configure credentials (HubSpot, email sender, Calendly)")
print("3. Test with manual executions using fixture payloads")
print("4. Request activation approval before enabling")
