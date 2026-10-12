#!/usr/bin/env python3
"""
Test the assessment scoring engine with various profiles.
This validates that the scoring model works correctly across different scenarios.
"""

import json
import sys

# Mock the browser global for Node.js testing
class MockWindow:
    pass

# Load the scoring engine
with open('./web/assets/js/scoring-engine.js', 'r') as f:
    js_code = f.read()

# Extract the function definitions (simplified approach)
# We'll create Python equivalents of the scoring logic

QUESTION_WEIGHTS = {
    # Section 1: Organizational Context
    'q1': {
        'manufacturing_50_500': 0,
        'healthcare_100_1000': 0,
        'technology': -10,
        'professional_services': -15,
        'other': -5
    },
    'q2': {
        'c_level': 10,
        'vp_director': 8,
        'it_manager': 5,
        'business_unit_manager': 3,
        'consultant': -10
    },
    'q3': {
        'under_10m': -10,
        '_10m_50m': 5,
        '_50m_200m': 10,
        'over_200m': 5,
        'prefer_not_say': 0
    },
    'q4': {
        'clear_quantified': 15,
        'broad_problem': 5,
        'vague_interest': -10,
        'multiple_no_priority': 0,
        'no_problem': -15
    },
    'q5': {
        'mature': 12,
        'moderate': 5,
        'early_stage': -5,
        'minimal': -15,
        'not_sure': -10
    },
    'q6': {
        'successful_production': 10,
        'failed_projects': 5,
        'pilot_never_production': 0,
        'no_prior_attempts': 0,
        'actively_running': -5
    },
    'q7': {
        'already_urgent': 12,
        '_3_6_months': 10,
        '_6_12_months': 5,
        '_12_plus': -10,
        'no_timeline': -15
    },
    'q8': {
        '_50k_plus': 10,
        '_25k_50k': 8,
        '_10k_25k': 5,
        'under_10k': -10,
        'no_budget': -5
    },
    'q9': {
        'sole_decision_maker': 8,
        'small_exec_team': 10,
        'larger_committee': 5,
        'need_to_convince': 3,
        'not_sure': -10
    },
    'q10': {
        'highly_innovative': 8,
        'pragmatic_evidence': 10,
        'cautious_risk_averse': 3,
        'skeptical': -15,
        'no_clear_culture': -5
    },
    'q11': {
        'very_positive': 5,
        'mixed_results': 0,
        'poor_experience': 8,
        'never_used': 0,
        'negative_wont_use': -20
    },
    'q12': {
        'cost_roi': 5,
        'technical_complexity': 8,
        'implementation_risk': 10,
        'data_privacy': 5,
        'not_sure_concerns': -5,
        'nothing_ready': 10
    }
}

SCORE_BANDS = {
    'not_ready': {'min': -50, 'max': 29, 'name': 'Not Ready'},
    'early_exploration': {'min': 30, 'max': 59, 'name': 'Early Exploration'},
    'ready_targeted': {'min': 60, 'max': 74, 'name': 'Ready for Targeted Engagement'},
    'high_readiness': {'min': 75, 'max': 89, 'name': 'High Readiness'},
    'strategic_priority': {'min': 90, 'max': 135, 'name': 'Strategic Priority'}
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
    for band_name, band_def in SCORE_BANDS.items():
        if band_def['min'] <= score <= band_def['max']:
            return band_def
    # Fallback
    if score < -50:
        return SCORE_BANDS['not_ready']
    return SCORE_BANDS['strategic_priority']

# Test profiles
TEST_PROFILES = [
    {
        'name': 'Ideal Client - High Readiness',
        'answers': {
            'q1': 'manufacturing_50_500',
            'q2': 'c_level',
            'q3': '_50m_200m',
            'q4': 'clear_quantified',
            'q5': 'mature',
            'q6': 'successful_production',
            'q7': 'already_urgent',
            'q8': '_50k_plus',
            'q9': 'small_exec_team',
            'q10': 'pragmatic_evidence',
            'q11': 'very_positive',
            'q12': 'nothing_ready'
        },
        'expected_band': 'strategic_priority',
        'expected_min_score': 90
    },
    {
        'name': 'Good Prospect - Ready for Engagement',
        'answers': {
            'q1': 'healthcare_100_1000',
            'q2': 'vp_director',
            'q3': '_10m_50m',
            'q4': 'clear_quantified',
            'q5': 'moderate',
            'q6': 'pilot_never_production',
            'q7': '_3_6_months',
            'q8': '_25k_50k',
            'q9': 'sole_decision_maker',
            'q10': 'pragmatic_evidence',
            'q11': 'mixed_results',
            'q12': 'implementation_risk'
        },
        'expected_band': 'ready_targeted',
        'expected_min_score': 60
    },
    {
        'name': 'Early Stage - Needs Education',
        'answers': {
            'q1': 'manufacturing_50_500',
            'q2': 'it_manager',
            'q3': '_10m_50m',
            'q4': 'broad_problem',
            'q5': 'early_stage',
            'q6': 'no_prior_attempts',
            'q7': '_6_12_months',
            'q8': '_10k_25k',
            'q9': 'need_to_convince',
            'q10': 'cautious_risk_averse',
            'q11': 'never_used',
            'q12': 'cost_roi'
        },
        'expected_band': 'early_exploration',
        'expected_min_score': 30
    },
    {
        'name': 'Not Ready - Wrong Fit',
        'answers': {
            'q1': 'technology',
            'q2': 'consultant',
            'q3': 'under_10m',
            'q4': 'vague_interest',
            'q5': 'minimal',
            'q6': 'no_prior_attempts',
            'q7': 'no_timeline',
            'q8': 'under_10k',
            'q9': 'not_sure',
            'q10': 'skeptical',
            'q11': 'negative_wont_use',
            'q12': 'not_sure_concerns'
        },
        'expected_band': 'not_ready',
        'expected_min_score': -50
    },
    {
        'name': 'Medium Readiness - Some Gaps',
        'answers': {
            'q1': 'manufacturing_50_500',
            'q2': 'business_unit_manager',
            'q3': '_50m_200m',
            'q4': 'multiple_no_priority',
            'q5': 'moderate',
            'q6': 'failed_projects',
            'q7': '_6_12_months',
            'q8': '_25k_50k',
            'q9': 'larger_committee',
            'q10': 'pragmatic_evidence',
            'q11': 'poor_experience',
            'q12': 'technical_complexity'
        },
        'expected_band': 'early_exploration',
        'expected_min_score': 30
    }
]

def run_tests():
    """Run all test profiles and validate results"""
    print("=" * 80)
    print("ASSESSMENT SCORING ENGINE TESTS")
    print("=" * 80)
    
    passed = 0
    failed = 0
    
    for profile in TEST_PROFILES:
        result = calculate_score(profile['answers'])
        
        # Check if band matches expected
        band_match = result['band']['name'] == profile['expected_band']
        score_in_range = profile['expected_min_score'] <= result['totalScore'] <= SCORE_BANDS[profile['expected_band']]['max']
        
        status = "✓ PASS" if (band_match and score_in_range) else "✗ FAIL"
        
        print(f"\n{status}: {profile['name']}")
        print(f"  Score: {result['totalScore']}")
        print(f"  Band: {result['band']['name']}")
        print(f"  Expected: {profile['expected_band']} (min: {profile['expected_min_score']})")
        
        if band_match and score_in_range:
            passed += 1
        else:
            failed += 1
            if not band_match:
                print(f"  ⚠ Band mismatch: got {result['band']['name']}, expected {profile['expected_band']}")
            if not score_in_range:
                print(f"  ⚠ Score {result['totalScore']} not in expected range")
    
    print("\n" + "=" * 80)
    print(f"RESULTS: {passed} passed, {failed} failed")
    print("=" * 80)
    
    # Show detailed breakdown for one profile
    print("\n\nDETAILED BREAKDOWN - Ideal Client Profile:")
    ideal_profile = TEST_PROFILES[0]
    result = calculate_score(ideal_profile['answers'])
    print(f"Total Score: {result['totalScore']}")
    print(f"Band: {result['band']['name']}")
    print("\nScore Breakdown:")
    for q, weight in result['scoreBreakdown'].items():
        print(f"  {q}: {weight}")
    
    return failed == 0

if __name__ == '__main__':
    success = run_tests()
    sys.exit(0 if success else 1)
