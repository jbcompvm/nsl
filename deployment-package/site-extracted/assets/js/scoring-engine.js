/**
 * Neural Studio Lab - AI Strategy Assessment Scoring Engine
 * Implements the scoring model from the assessment design document
 * 
 * Score Range: -100 to +135
 * Bands:
 *   -50 to 29:   Not Ready (nurture)
 *   30 to 59:    Early Exploration (offer entry tier)
 *   60 to 74:    Ready for Targeted Engagement (book call)
 *   75 to 89:    High Readiness (priority candidate)
 *   90+:         Strategic Priority (escalate)
 */

// Question weights from design document
const QUESTION_WEIGHTS = {
  // Section 1: Organizational Context
  q1: {  // What best describes your organization?
    manufacturing_50_500: 0,
    healthcare_100_1000: 0,
    technology: -10,
    professional_services: -15,
    other: -5
  },
  q2: {  // What is your primary role?
    c_level: 10,
    vp_director: 8,
    it_manager: 5,
    business_unit_manager: 3,
    consultant: -10
  },
  q3: {  // Annual revenue / budget scale
    under_10m: -10,
    _10m_50m: 5,
    _50m_200m: 10,
    over_200m: 5,
    prefer_not_say: 0
  },
  
  // Section 2: Problem Clarity
  q4: {  // Specific operational challenge
    clear_quantified: 15,
    broad_problem: 5,
    vague_interest: -10,
    multiple_no_priority: 0,
    no_problem: -15
  },
  q5: {  // Data infrastructure
    mature: 12,
    moderate: 5,
    early_stage: -5,
    minimal: -15,
    not_sure: -10
  },
  q6: {  // Prior AI/ML projects
    successful_production: 10,
    failed_projects: 5,
    pilot_never_production: 0,
    no_prior_attempts: 0,
    actively_running: -5
  },
  
  // Section 3: Readiness & Commitment
  q7: {  // Timeline
    already_urgent: 12,
    _3_6_months: 10,
    _6_12_months: 5,
    _12_plus: -10,
    no_timeline: -15
  },
  q8: {  // Budget range
    _50k_plus: 10,
    _25k_50k: 8,
    _10k_25k: 5,
    under_10k: -10,
    no_budget: -5
  },
  q9: {  // Decision-making involvement
    sole_decision_maker: 8,
    small_exec_team: 10,
    larger_committee: 5,
    need_to_convince: 3,
    not_sure: -10
  },
  
  // Section 4: Strategic Alignment
  q10: {  // Culture toward innovation
    highly_innovative: 8,
    pragmatic_evidence: 10,
    cautious_risk_averse: 3,
    skeptical: -15,
    no_clear_culture: -5
  },
  q11: {  // Consulting experience
    very_positive: 5,
    mixed_results: 0,
    poor_experience: 8,
    never_used: 0,
    negative_wont_use: -20
  },
  q12: {  // Primary concern
    cost_roi: 5,
    technical_complexity: 8,
    implementation_risk: 10,
    data_privacy: 5,
    not_sure_concerns: -5,
    nothing_ready: 10
  }
};

// Score band definitions
const SCORE_BANDS = {
  not_ready: {
    min: -50,
    max: 29,
    name: "Not Ready",
    action: "nurture",
    message: "AI may not be the right solution for your current situation. We recommend focusing on foundational improvements first.",
    tier_recommendation: null
  },
  early_exploration: {
    min: 30,
    max: 59,
    name: "Early Exploration",
    action: "offer_entry",
    message: "You're asking the right questions but may need to clarify your objectives before investing in AI.",
    tier_recommendation: "AI Opportunity Scan ($7,500)"
  },
  ready_targeted: {
    min: 60,
    max: 74,
    name: "Ready for Targeted Engagement",
    action: "book_call",
    message: "You have a clear problem and some readiness. A focused diagnostic would give you a prioritized roadmap.",
    tier_recommendation: "AI Opportunity Scan ($7,500)"
  },
  high_readiness: {
    min: 75,
    max: 89,
    name: "High Readiness",
    action: "book_call_priority",
    message: "You're well-positioned for AI implementation with clear objectives and adequate resources.",
    tier_recommendation: "AI Implementation Blueprint ($25,000)"
  },
  strategic_priority: {
    min: 90,
    max: 135,
    name: "Strategic Priority",
    action: "escalate",
    message: "You have everything needed for a transformative AI program: strategic alignment, executive sponsorship, and budget.",
    tier_recommendation: "AI Transformation Partner ($75,000)"
  }
};

/**
 * Calculate assessment score from answers
 * @param {Object} answers - Object containing all assessment responses
 * @returns {Object} Score calculation result with breakdown
 */
function calculateAssessmentScore(answers) {
  let totalScore = 0;
  const scoreBreakdown = {};
  
  // Calculate score for each question
  Object.keys(answers).forEach(questionKey => {
    const answerValue = answers[questionKey];
    const weights = QUESTION_WEIGHTS[questionKey];
    
    if (weights && weights[answerValue] !== undefined) {
      const weight = weights[answerValue];
      scoreBreakdown[questionKey] = weight;
      totalScore += weight;
    } else {
      scoreBreakdown[questionKey] = 0; // Default if answer not found
    }
  });
  
  // Determine band
  const band = getScoreBand(totalScore);
  
  // Check qualification criteria
  const qualification = assessQualification(answers, totalScore, band);
  
  return {
    totalScore,
    scoreBreakdown,
    band,
    qualification,
    timestamp: new Date().toISOString()
  };
}

/**
 * Determine score band based on total score
 */
function getScoreBand(score) {
  if (score <= 29) return SCORE_BANDS.not_ready;
  if (score <= 59) return SCORE_BANDS.early_exploration;
  if (score <= 74) return SCORE_BANDS.ready_targeted;
  if (score <= 89) return SCORE_BANDS.high_readiness;
  return SCORE_BANDS.strategic_priority;
}

/**
 * Assess qualification based on explicit criteria
 * Returns bookCall: true/false and reasons
 */
function assessQualification(answers, score, band) {
  const reasons = {
    bookCall: [],
    nurture: [],
    escalate: []
  };
  
  // Check "Book This Call" criteria
  const scoreOk = score >= 60;
  const icpOk = (answers.q1 === 'manufacturing_50_500' || answers.q1 === 'healthcare_100_1000');
  const problemOk = (answers.q4 === 'clear_quantified' || answers.q4 === 'broad_problem');
  const budgetOk = (answers.q8 === '_50k_plus' || answers.q8 === '_25k_50k' || answers.q8 === '_10k_25k');
  const timelineOk = (answers.q7 === 'already_urgent' || answers.q7 === '_3_6_months' || answers.q7 === '_6_12_months');
  const decisionMakerOk = (answers.q2 === 'c_level' || answers.q2 === 'vp_director' || answers.q9 === 'sole_decision_maker' || answers.q9 === 'small_exec_team');
  
  if (scoreOk) reasons.bookCall.push("Score ≥ 60 (genuine readiness)");
  else reasons.nurture.push("Score < 60 (not ready for paid engagement)");
  
  if (icpOk) reasons.bookCall.push("ICP alignment (manufacturing/healthcare)");
  else reasons.nurture.push("ICP mismatch");
  
  if (problemOk) reasons.bookCall.push("Clear problem statement");
  else reasons.nurture.push("No clear problem defined");
  
  if (budgetOk) reasons.bookCall.push("Budget ≥ $10k");
  else reasons.nurture.push("Budget below minimum viable engagement");
  
  if (timelineOk) reasons.bookCall.push("Timeline ≤ 12 months");
  else reasons.nurture.push("Timeline too far out (>12 months)");
  
  if (decisionMakerOk) reasons.bookCall.push("Decision-maker access");
  else reasons.nurture.push("No clear decision-maker access");
  
  // Check escalation criteria
  if (score >= 90) reasons.escalate.push("Score ≥ 90 (strategic priority)");
  if (answers.q3 === 'over_200m') reasons.escalate.push("Organization revenue > $200M (potential flagship client)");
  if (answers.q11 === 'negative_wont_use') reasons.nurture.push("Negative consulting experience (high churn risk)");
  
  return {
    bookCall: scoreOk && icpOk && problemOk && budgetOk && timelineOk && decisionMakerOk,
    shouldEscalate: reasons.escalate.length > 0,
    reasons
  };
}

/**
 * Generate personalized insights based on answers and scores
 */
function generateInsights(answers, scoreBreakdown) {
  const insights = [];
  
  // Identify strengths (positive scores)
  const strengths = Object.entries(scoreBreakdown)
    .filter(([_, weight]) => weight > 5)
    .map(([q]) => q);
  
  // Identify weaknesses (negative scores)
  const weaknesses = Object.entries(scoreBreakdown)
    .filter(([_, weight]) => weight < 0)
    .map(([q]) => q);
  
  // Generate specific insights based on patterns
  if (scoreBreakdown.q4 === 15) {
    insights.push("Your clear, quantified problem statement makes ROI calculation feasible - this is the strongest predictor of successful engagement.");
  }
  
  if (scoreBreakdown.q5 && scoreBreakdown.q5 >= 12) {
    insights.push("Your mature data infrastructure positions you well for AI implementation with minimal prep work required.");
  }
  
  if (scoreBreakdown.q5 && scoreBreakdown.q5 < 0) {
    insights.push("Data infrastructure improvements should be your first priority before attempting AI implementation.");
  }
  
  if (scoreBreakdown.q7 === 12) {
    insights.push("Your urgent timeline indicates active pain - addressing this quickly could prevent further losses.");
  }
  
  if (scoreBreakdown.q11 === 8) {
    insights.push("Your past poor consulting experience gives us an opportunity to demonstrate a different, more transparent approach.");
  }
  
  if (scoreBreakdown.q12 === 10) {
    insights.push("Your concern about implementation risk is exactly why we use a diagnostic-first approach - to de-risk before committing.");
  }
  
  if (weaknesses.length >= 3) {
    insights.push("Multiple readiness gaps suggest focusing on foundational improvements before pursuing AI initiatives.");
  }
  
  return insights;
}

/**
 * Generate recommendations based on band and answers
 */
function generateRecommendations(band, answers) {
  const recommendations = [];
  
  switch (band.name) {
    case "Not Ready":
      recommendations.push("Focus on data quality and process standardization before considering AI");
      recommendations.push("Document your current workflows to identify bottlenecks");
      recommendations.push("Re-assess in 6-12 months after foundational improvements");
      break;
      
    case "Early Exploration":
      recommendations.push("Start with our AI Opportunity Scan ($7,500, 2 weeks) to identify whether AI is worth pursuing");
      recommendations.push("Clarify your specific problem statement with quantified metrics");
      recommendations.push("Assess internal data readiness with a technical audit");
      break;
      
    case "Ready for Targeted Engagement":
      recommendations.push("Proceed with AI Opportunity Scan to get a prioritized roadmap and ROI analysis");
      recommendations.push("Identify a named owner for the initiative before starting");
      recommendations.push("Prepare data samples for technical feasibility assessment");
      break;
      
    case "High Readiness":
      recommendations.push("Engage for AI Implementation Blueprint ($25,000, 4 weeks) for detailed architecture and execution plan");
      recommendations.push("Prepare executive stakeholders for 6-month implementation timeline");
      recommendations.push("Begin vendor evaluation process if custom development isn't the path");
      break;
      
    case "Strategic Priority":
      recommendations.push("Immediate engagement on AI Transformation Partner program ($75,000, 12 weeks)");
      recommendations.push("Schedule executive workshop to align on transformation vision");
      recommendations.push("Prepare for pilot implementation with dedicated cross-functional team");
      break;
  }
  
  return recommendations;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    calculateAssessmentScore,
    getScoreBand,
    assessQualification,
    generateInsights,
    generateRecommendations,
    SCORE_BANDS,
    QUESTION_WEIGHTS
  };
}

// Browser global
if (typeof window !== 'undefined') {
  window.AssessmentScoring = {
    calculateAssessmentScore,
    getScoreBand,
    assessQualification,
    generateInsights,
    generateRecommendations,
    SCORE_BANDS,
    QUESTION_WEIGHTS
  };
}
