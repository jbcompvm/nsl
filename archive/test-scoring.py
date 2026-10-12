#!/usr/bin/env python3
"""
Test the assessment scoring engine against NEU-5 spec (8 questions).
Validates the scoring model works correctly across different scenarios.
"""

import json

# Question weights from NEU-5 scoring model (8 questions only)
QUESTION_WEIGHTS = {
    # Q1: Current AI/ML Initiative Status
    'q1': {
        "haven't_started": 10,
        'proof_of_concept': 30,
        'production': 60,
        'optimized': 80
    },
    
    # Q2: Primary Business Objective for AI
    'q2': {
        'cost_reduction': 40,
        'customer_experience': 50,
        'new_revenue': 60,
        'competitive': 20,
        'explore': 15
    },
    
    # Q3: Budget Readiness for AI Investment
    'q3': {
        'no_budget': 10,
        'preparing': 40,
        'approved': 80,
        'dedicated_fund': 90
    },
    
    # Q4: Timeline for AI Initiative
    'q4': {
        '1_month': 20,
        '1_3_months': 50,
        '3_6_months': 30,
        '6_plus': 10
    },
    
    # Q5: Decision-Making Authority
    'q5': {
        'decision_maker': 80,
        'influencer': 50,
        'gathering': 20,
        'consultant_advisor': 30
    },
    
    # Q6: Data Infrastructure Readiness
    'q6': {
        'scattered': 10,
        'warehouse_unorganized': 30,
        'clean_accessible': 60,
        'modern_governed': 70
    },
    
    # Q7: Team Capability for AI Delivery
    'q7': {
        'no_talent': 20,
        '1_2_people': 40,
        '3_5_people': 60,
        'mature_org': 70
    },
    
    # Q8: Risk Tolerance for AI Initiatives
    'q8': {
        'proven_only': 40,
        'balanced': 60,
        'calculated_risk': 70,
        'guaranteed_outcomes': 20
    }
}

# Score bands from NEU-5 spec
SCORE_BANDS = {
    'low': {'min': 80, 'max': 349, 'name': 'Not Ready'},
    'medium': {'min': 350, 'max': 499, 'name': 'Early Exploration'},
    'high': {'min': 500, 'max': 640, 'name': 'Sales-Qualified Lead'}
}

def calculate_score(answers):
    """Calculate assessment score from answers"""
    total_score = 0
    score_breakdown = {}
    
    for question_key, answer_value in answers.items():
        weights = QUESTION_WEIGHTS.get(question_key, {})
        weight = weights.get(answer_value, 0)
        score_breakdown[question_key] = weight
        total_score += weight
    
    # Determine band
    band = get_score_band(total_score)
    
    return {
        'totalScore': total_score,
        'scoreBreakdown': score_breakdown,
        'band': band
    }

def get_score_band(score):
    """Determine score band based on total score"""
    if score >= 500:
        return SCORE_BANDS['high']
    elif score >= 350:
        return SCORE_BANDS['medium']
    else:
        return SCORE_BANDS['low']

# Test profiles matching NEU-5 spec
TEST_PROFILES = [
    {
        'name': 'Ideal Client - High Readiness',
        'answers': {
            'q1': 'production',           # 60 - has production models
            'q2': 'new_revenue',          # 60 - ambitious objective
            'q3': 'dedicated_fund',       # 90 - dedicated AI fund
            'q4': '1_3_months',           # 50 - ideal timeline
            'q5': 'decision_maker',       # 80 - final decision maker
            'q6': 'modern_governed',      # 70 - mature data stack
            'q7': '3_5_people',           # 60 - dedicated team
            'q8': 'calculated_risk'       # 70 - innovation-minded
        },
        'expected_band': 'high',
        'expected_min_score': 500
    },
    {
        'name': 'Good Prospect - Early Exploration',
        'answers': {
            'q1': 'proof_of_concept',     # 30 - experimenting
            'q2': 'cost_reduction',       # 40 - clear ROI
            'q3': 'preparing',            # 40 - budget being prepared
            'q4': '3_6_months',           # 30 - planning phase
            'q5': 'influencer',           # 50 - influences decisions
            'q6': 'clean_accessible',     # 60 - good data readiness
            'q7': '1_2_people',           # 40 - partial capability
            'q8': 'balanced'              # 60 - balanced risk tolerance
        },
        'expected_band': 'medium',
        'expected_min_score': 350
    },
    {
        'name': 'Not Ready - Research Phase',
        'answers': {
            "q1": "haven't_started",      # 10 - no active initiatives
            'q2': 'explore',              # 15 - just exploring
            'q3': 'no_budget',            # 10 - no budget
            'q4': '6_plus',               # 10 - no timeline
            'q5': 'gathering',            # 20 - gathering info
            'q6': 'scattered',            # 10 - poor data
            'q7': 'no_talent',            # 20 - no AI talent
            'q8': 'guaranteed_outcomes'   # 20 - risk-averse
        },
        'expected_band': 'low',
        'expected_min_score': 80,
        'expected_max_score': 349
    }
]

def run_tests():
    """Run all test profiles and validate results"""
    print("=" * 80)
    print("ASSESSMENT SCORING ENGINE TESTS (NEU-5 Spec - 8 Questions)")
    print("=" * 80)
    
    passed = 0
    failed = 0
    
    for profile in TEST_PROFILES:
        result = calculate_score(profile['answers'])
        
        # Check if band matches expected
        band_match = result['band']['name'] == SCORE_BANDS[profile['expected_band']]['name']
        score_in_range = (profile['expected_min_score'] <= result['totalScore'] <= 
                         SCORE_BANDS[profile['expected_band']]['max'])
        
        status = "PASS" if (band_match and score_in_range) else "FAIL"
        
        print(f"\n{status}: {profile['name']}")
        print(f"  Score: {result['totalScore']}")
        print(f"  Band: {result['band']['name']}")
        print(f"  Expected: {SCORE_BANDS[profile['expected_band']]['name']} (range: {profile['expected_min_score']}-{SCORE_BANDS[profile['expected_band']]['max']})")
        
        if band_match and score_in_range:
            passed += 1
        else:
            failed += 1
            if not band_match:
                print(f"  ⚠ Band mismatch")
            if not score_in_range:
                print(f"  ⚠ Score {result['totalScore']} not in expected range")
            
            # Show detailed breakdown for failed tests
            print(f"  Breakdown: {result['scoreBreakdown']}")
    
    print("\n" + "=" * 80)
    print(f"RESULTS: {passed} passed, {failed} failed")
    print("=" * 80)
    
    return failed == 0

if __name__ == '__main__':
    import sys
    success = run_tests()
    sys.exit(0 if success else 1)
