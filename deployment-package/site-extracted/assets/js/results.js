/**
 * Neural Studio Lab - Assessment Results Page
 * Displays scored results from the assessment with personalized recommendations
 */

// Configuration
const RESULTS_CONFIG = {
  categories: {
    not_ready: {
      name: "Not Ready",
      description: "AI may not be the right solution for your current situation. We recommend focusing on foundational improvements first (data quality, process standardization).",
      color: "#6b7280",
      icon: "📊"
    },
    early_exploration: {
      name: "Early Exploration",
      description: "You're asking the right questions but may need to clarify your objectives and build organizational readiness before investing in AI.",
      color: "#f59e0b",
      icon: "🔍"
    },
    ready_targeted: {
      name: "Ready for Targeted Engagement",
      description: "You have a clear problem and some readiness. A focused diagnostic would give you a prioritized roadmap and ROI analysis.",
      color: "#3b82f6",
      icon: "🎯"
    },
    high_readiness: {
      name: "High Readiness",
      description: "You're well-positioned for AI implementation with clear objectives, adequate resources, and executive support.",
      color: "#8b5cf6",
      icon: "🚀"
    },
    strategic_priority: {
      name: "Strategic Priority",
      description: "You have everything needed for a transformative AI program: strategic alignment, executive sponsorship, budget, and data infrastructure.",
      color: "#10b981",
      icon: "⭐"
    }
  },
  tierPricing: {
    opportunity_scan: {
      name: "AI Opportunity Scan",
      price: "$7,500",
      duration: "2 weeks",
      description: "Diagnostic assessment with prioritized roadmap and ROI analysis"
    },
    implementation_blueprint: {
      name: "AI Implementation Blueprint",
      price: "$25,000",
      duration: "4 weeks",
      description: "Deep dive with technical architecture, vendor evaluation, and 6-month execution plan"
    },
    transformation_partner: {
      name: "AI Transformation Partner",
      price: "$75,000",
      duration: "12 weeks",
      description: "Full blueprint development plus pilot implementation support"
    }
  }
};

// State
let sessionData = null;
let results = null;

// Initialize
document.addEventListener('DOMContentLoaded', async function() {
  const sessionId = getQueryParam('session');
  
  if (!sessionId) {
    showError('No assessment session found. Please complete the assessment first.');
    return;
  }

  try {
    // Load results from localStorage (stored during form submission)
    results = await loadResults(sessionId);
    
    if (!results) {
      showError('Unable to retrieve assessment results. Please complete the assessment again.');
      return;
    }

    displayResults(results);
  } catch (error) {
    console.error('Error loading results:', error);
    showError('Unable to load results. Please try again or contact support.');
  }
});

// Get URL parameter
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Load results from localStorage
function loadResults(sessionId) {
  return new Promise((resolve, reject) => {
    try {
      const saved = localStorage.getItem('nsl_assessment_results');
      if (!saved) {
        resolve(null);
        return;
      }

      const data = JSON.parse(saved);
      
      // Verify session ID matches
      if (data.session_id !== sessionId) {
        console.warn('Session ID mismatch. Expected:', sessionId, 'Got:', data.session_id);
      }

      resolve(data);
    } catch (error) {
      console.error('Error loading results from localStorage:', error);
      reject(error);
    }
  });
}

// Display results
function displayResults(data) {
  // Hide loading, show content
  document.getElementById('loadingState').style.display = 'none';
  document.getElementById('resultsContent').style.display = 'block';

  const scoring = data.scoring;
  const band = scoring.band;
  
  // Display overall score and band
  document.getElementById('overallScore').textContent = scoring.totalScore;
  document.getElementById('categoryName').textContent = band.name;
  document.getElementById('categoryDescription').textContent = band.message;
  
  // Set band-specific styling
  const bandColor = getBandColor(band.name);
  document.querySelector('.score-category h2').style.color = bandColor;
  
  // Display qualification status
  displayQualification(scoring.qualification, band);
  
  // Display insights
  const insights = window.AssessmentScoring.generateInsights(data.answers, scoring.scoreBreakdown);
  displayInsights(insights);
  
  // Display recommendations
  const recommendations = window.AssessmentScoring.generateRecommendations(band, data.answers);
  displayRecommendations(recommendations, band);
  
  // Display tier recommendation if applicable
  if (band.tier_recommendation) {
    displayTierRecommendation(band.tier_recommendation);
  }
}

// Get color for band
function getBandColor(bandName) {
  const colorMap = {
    "Not Ready": "#6b7280",
    "Early Exploration": "#f59e0b",
    "Ready for Targeted Engagement": "#3b82f6",
    "High Readiness": "#8b5cf6",
    "Strategic Priority": "#10b981"
  };
  return colorMap[bandName] || "#3b82f6";
}

// Display qualification status
function displayQualification(qualification, band) {
  const container = document.getElementById('qualificationStatus');
  
  if (!container) return;
  
  let html = '<div class="qualification-section"><h3>Next Steps</h3>';
  
  if (qualification.shouldEscalate) {
    html += `
      <div class="qualification-badge high-priority">
        <span class="badge-icon">🌟</span>
        <strong>High-Priority Lead</strong>
        <p>Your profile indicates strategic priority. An executive will reach out within 24 hours.</p>
      </div>
    `;
  } else if (qualification.bookCall) {
    html += `
      <div class="qualification-badge qualified">
        <span class="badge-icon">✅</span>
        <strong>You Qualify for a Strategy Call</strong>
        <p>Schedule a complimentary 30-minute consultation to discuss your results and next steps.</p>
        <a href="#schedule" class="btn btn-primary" style="margin-top: 1rem;">Book Your Call</a>
      </div>
    `;
  } else {
    html += `
      <div class="qualification-badge nurture">
        <span class="badge-icon">📚</span>
        <strong>Continue Your Learning Journey</strong>
        <p>We've sent you educational resources. Re-assess in 3-6 months after making foundational improvements.</p>
      </div>
    `;
  }
  
  html += '</div>';
  container.innerHTML = html;
}

// Display insights
function displayInsights(insights) {
  const container = document.getElementById('insightsList');
  
  if (!container) return;
  
  container.innerHTML = '';
  
  insights.forEach((insight, index) => {
    const insightCard = document.createElement('div');
    insightCard.className = 'insight-card';
    insightCard.innerHTML = `
      <div class="insight-icon">${index % 2 === 0 ? '💡' : '🎯'}</div>
      <p>${insight}</p>
    `;
    container.appendChild(insightCard);
  });
}

// Display recommendations
function displayRecommendations(recommendations, band) {
  const container = document.getElementById('recommendationsList');
  
  if (!container) return;
  
  container.innerHTML = '';
  
  recommendations.forEach((rec, index) => {
    const recCard = document.createElement('div');
    recCard.className = 'recommendation-item';
    recCard.innerHTML = `
      <div class="recommendation-number">${index + 1}</div>
      <p>${rec}</p>
    `;
    container.appendChild(recCard);
  });
}

// Display tier recommendation
function displayTierRecommendation(tierName) {
  const container = document.getElementById('tierRecommendation');
  
  if (!container) return;
  
  let tierData = null;
  
  if (tierName.includes("Opportunity Scan")) {
    tierData = RESULTS_CONFIG.tierPricing.opportunity_scan;
  } else if (tierName.includes("Implementation Blueprint")) {
    tierData = RESULTS_CONFIG.tierPricing.implementation_blueprint;
  } else if (tierName.includes("Transformation Partner")) {
    tierData = RESULTS_CONFIG.tierPricing.transformation_partner;
  }
  
  if (tierData) {
    container.innerHTML = `
      <div class="tier-recommendation">
        <h3>Recommended Engagement</h3>
        <div class="tier-card">
          <div class="tier-name">${tierData.name}</div>
          <div class="tier-price">${tierData.price}</div>
          <div class="tier-duration">${tierData.duration}</div>
          <p class="tier-description">${tierData.description}</p>
          <a href="#schedule" class="btn btn-primary">Schedule Discovery Call</a>
        </div>
      </div>
    `;
  }
}

// Show error state
function showError(message) {
  document.getElementById('loadingState').style.display = 'none';
  document.getElementById('errorState').style.display = 'block';
  document.getElementById('errorMessage').textContent = message;
}

// Email form handling for report download
document.getElementById('emailForm')?.addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const email = document.getElementById('reportEmail').value;
  const sessionId = getQueryParam('session');
  
  // In production, this would trigger report generation and email delivery
  // For now, show success message
  alert(`Your detailed report will be sent to ${email} within 24 hours.`);
  this.reset();
});
