/**
 * Neural Studio Lab - AI Strategy Assessment Scoring Engine
 * Implements the scoring model from NEU-5 assessment document
 * 
 * Score Range: 80 to 640 (8 questions × max weights)
 * Bands:
 *   80-349:    LOW (Not Ready - nurture)
 *   350-499:   MEDIUM (Early Exploration - nurture with education)
 *   500-640:   HIGH (Sales-qualified - book strategy call)
 */

// Question weights from NEU-5 scoring model document
const QUESTION_WEIGHTS = {
  // Q1: Current AI/ML Initiative Status
  q1: {
    "haven't_started": 10,
    proof_of_concept: 30,
    production: 60,
    optimized: 80
  },
  
  // Q2: Primary Business Objective for AI
  q2: {
    cost_reduction: 40,
    customer_experience: 50,
    new_revenue: 60,
    competitive: 20,
    explore: 15
  },
  
  // Q3: Budget Readiness for AI Investment
  q3: {
    no_budget: 10,
    preparing: 40,
    approved: 80,
    dedicated_fund: 90
  },
  
  // Q4: Timeline for AI Initiative
  q4: {
    '1_month': 20,
    '1_3_months': 50,
    '3_6_months': 30,
    '6_plus': 10
  },
  
  // Q5: Decision-Making Authority
  q5: {
    decision_maker: 80,
    influencer: 50,
    gathering: 20,
    consultant_advisor: 30
  },
  
  // Q6: Data Infrastructure Readiness
  q6: {
    scattered: 10,
    warehouse_unorganized: 30,
    clean_accessible: 60,
    modern_governed: 70
  },
  
  // Q7: Team Capability for AI Delivery
  q7: {
    no_talent: 20,
    '1_2_people': 40,
    '3_5_people': 60,
    mature_org: 70
  },
  
  // Q8: Risk Tolerance for AI Initiatives
  q8: {
    proven_only: 40,
    balanced: 60,
    calculated_risk: 70,
    guaranteed_outcomes: 20
  }
};

// Score band definitions
const SCORE_BANDS = {
  low: {
    min: 80,
    max: 349,
    name: "Not Ready",
    action: "nurture",
    message: "AI may not be the right solution for your current situation. We recommend focusing on foundational improvements first (data quality, process standardization, building internal capability).",
    tier_recommendation: null,
    show_scheduling: false
  },
  medium: {
    min: 350,
    max: 499,
    name: "Early Exploration",
    action: "nurture",
    message: "You have a solid foundation but there are gaps to address. Your score suggests you're 2-3 months away from being ready for a focused engagement.",
    tier_recommendation: "AI Opportunity Scan ($7,500)",
    show_scheduling: false
  },
  high: {
    min: 500,
    max: 640,
    name: "Sales-Qualified Lead",
    action: "book_call",
    message: "Your AI initiative shows strong indicators for success. You have the budget, authority, and timeline to move forward.",
    tier_recommendation: "AI Opportunity Scan ($7,500)",
    show_scheduling: true
  }
};

/**
 * Calculate assessment score from answers
 * @param {Object} answers - Object containing all assessment responses (q1-q8)
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
  
  // Generate insights
  const insights = generateInsights(answers, scoreBreakdown);
  
  // Generate recommendations
  const recommendations = generateRecommendations(band, answers);
  
  return {
    totalScore,
    scoreBreakdown,
    band,
    qualification,
    insights,
    recommendations,
    timestamp: new Date().toISOString()
  };
}

/**
 * Determine score band based on total score
 */
function getScoreBand(score) {
  if (score >= 500) return SCORE_BANDS.high;
  if (score >= 350) return SCORE_BANDS.medium;
  return SCORE_BANDS.low;
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
  
  // Check HIGH band criteria
  const scoreOk = score >= 500;
  
  // Check auto-book criteria (HIGH band + specific signals)
  const budgetOk = (answers.q3 === 'approved' || answers.q3 === 'dedicated_fund');
  const authorityOk = (answers.q5 === 'decision_maker' || answers.q5 === 'influencer');
  
  if (scoreOk) reasons.bookCall.push("Score ≥ 500 (genuine readiness)");
  else reasons.nurture.push("Score < 500 (not ready for paid engagement)");
  
  if (budgetOk) reasons.bookCall.push("Budget approved or dedicated fund");
  else reasons.nurture.push("Budget not yet approved");
  
  if (authorityOk) reasons.bookCall.push("Decision-maker or influencer access");
  else reasons.nurture.push("No clear decision-maker access");
  
  // Check escalation criteria (potential flagship clients)
  if (score >= 580) reasons.escalate.push("Score ≥ 580 (exceptional readiness)");
  if (answers.q3 === 'dedicated_fund') reasons.escalate.push("Dedicated AI/innovation fund (high-value prospect)");
  
  // Disqualification criteria
  if (answers.q1 === "haven't_started") reasons.nurture.push("No active AI initiatives (pure research mode)");
  if (answers.q3 === 'no_budget') reasons.nurture.push("No budget allocated (not sales-qualified)");
  if (answers.q5 === 'gathering') reasons.nurture.push("Gathering information only (not decision-maker)");
  
  return {
    bookCall: scoreOk && budgetOk && authorityOk,
    shouldEscalate: reasons.escalate.length > 0,
    reasons
  };
}

/**
 * Generate personalized insights based on answers and scores
 */
function generateInsights(answers, scoreBreakdown) {
  const insights = [];
  
  // Identify strengths (high scores)
  const strengths = Object.entries(scoreBreakdown)
    .filter(([_, weight]) => weight >= 60)
    .map(([q]) => q);
  
  // Identify weaknesses (low scores)
  const weaknesses = Object.entries(scoreBreakdown)
    .filter(([_, weight]) => weight <= 30)
    .map(([q]) => q);
  
  // Generate specific insights based on patterns
  if (scoreBreakdown.q1 === 60 || scoreBreakdown.q1 === 80) {
    insights.push("Your active AI initiatives demonstrate commitment to innovation. The key is moving from experimentation to measurable business impact.");
  }
  
  if (scoreBreakdown.q1 === 10) {
    insights.push("You're in the research phase. Before investing in consulting, focus on building internal AI literacy and identifying specific use cases.");
  }
  
  if (scoreBreakdown.q2 === 60) {
    insights.push("Your focus on creating new revenue streams is ambitious and aligns well with transformational AI work. This requires strategic partnership rather than tactical implementation.");
  }
  
  if (scoreBreakdown.q2 === 20 || scoreBreakdown.q2 === 15) {
    insights.push("Your objective is vague ('stay competitive' or 'explore'). Without a specific business outcome, AI projects often stall. Consider defining a quantified target.");
  }
  
  if (scoreBreakdown.q3 >= 80) {
    insights.push("Your approved budget removes a major barrier to execution. This positions you to move quickly once you identify the right partner.");
  }
  
  if (scoreBreakdown.q3 <= 40) {
    insights.push("Budget uncertainty is a significant risk factor. Many AI initiatives fail not from technical issues, but from funding gaps mid-project.");
  }
  
  if (scoreBreakdown.q4 === 50) {
    insights.push("Your 1-3 month timeline is the sweet spot - enough urgency to maintain momentum, enough time for proper scoping and preparation.");
  }
  
  if (scoreBreakdown.q4 === 10) {
    insights.push("Your timeline is very urgent. Be cautious of vendors who promise immediate results without proper discovery - this often leads to failed implementations.");
  }
  
  if (scoreBreakdown.q6 <= 30) {
    insights.push("Your data infrastructure is a significant bottleneck. Before AI implementation, invest in data consolidation and quality improvements.");
  }
  
  if (scoreBreakdown.q6 >= 60) {
    insights.push("Your mature data infrastructure positions you well for AI implementation with minimal prep work required.");
  }
  
  if (scoreBreakdown.q7 <= 40) {
    insights.push("Your limited internal AI talent means you'll need significant external support. Consider whether you want a hands-on partnership or full delivery model.");
  }
  
  if (scoreBreakdown.q8 === 20) {
    insights.push("Your demand for guaranteed outcomes is understandable but may limit your options. AI work inherently involves uncertainty - the best approach is risk mitigation, not elimination.");
  }
  
  if (scoreBreakdown.q8 === 70) {
    insights.push("Your willingness to take calculated risks aligns well with innovative AI work. This mindset enables exploration of higher-value opportunities.");
  }
  
  if (weaknesses.length >= 3) {
    insights.push("Multiple readiness gaps suggest focusing on foundational improvements before pursuing AI initiatives. Consider a phased approach.");
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
      recommendations.push("Document your current workflows to identify bottlenecks and inefficiencies");
      recommendations.push("Build internal AI literacy through training and education");
      recommendations.push("Re-assess in 6-12 months after making foundational improvements");
      break;
      
    case "Early Exploration":
      recommendations.push("Start with our AI Opportunity Scan ($7,500, 2 weeks) to identify whether AI is worth pursuing");
      recommendations.push("Clarify your specific problem statement with quantified metrics");
      recommendations.push("Assess internal data readiness with a technical audit");
      recommendations.push("Identify a named owner for the initiative before starting");
      break;
      
    case "Sales-Qualified Lead":
      if (answers.q3 === 'dedicated_fund' || answers.q1 === 'production') {
        recommendations.push("Engage for AI Implementation Blueprint ($25,000, 4 weeks) for detailed architecture and execution plan");
        recommendations.push("Prepare executive stakeholders for 6-month implementation timeline");
        recommendations.push("Begin vendor evaluation process if custom development isn't the path");
      } else {
        recommendations.push("Proceed with AI Opportunity Scan to get a prioritized roadmap and ROI analysis");
        recommendations.push("Schedule a strategy call to discuss your specific challenges and opportunities");
        recommendations.push("Prepare data samples for technical feasibility assessment");
      }
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
