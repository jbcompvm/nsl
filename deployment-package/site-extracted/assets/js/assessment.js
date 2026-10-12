/**
 * Neural Studio Lab - AI Strategy Assessment
 * Handles form navigation, progress tracking, submission, and client-side scoring
 */

// Configuration
const ASSESSMENT_CONFIG = {
  totalQuestions: 12,
  sections: 5, // Contact info + 4 question sections
  webhookUrl: 'https://hook.neural-studio-lab.com/assessment-submit', // Placeholder - should be configured
  sessionId: 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
};

// State
let currentSection = 1;
let startTime = new Date();
let sessionData = {
  submission_id: ASSESSMENT_CONFIG.sessionId,
  started_at: startTime.toISOString(),
  answers: {}
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  updateProgress();
  setupFormValidation();
  trackStartTime();
});

// Navigation functions
function nextSection(sectionNum) {
  // Validate current section before proceeding
  const currentFieldset = document.querySelector(`fieldset[data-section="${currentSection}"]`);
  if (!validateSection(currentFieldset)) {
    alert('Please complete all required fields before continuing.');
    return;
  }

  // Save answers from current section
  saveSectionAnswers(currentSection);

  // Hide current section, show next
  document.querySelector(`fieldset[data-section="${currentSection}"]`).style.display = 'none';
  currentSection = sectionNum;
  document.querySelector(`fieldset[data-section="${currentSection}"]`).style.display = 'block';
  
  updateProgress();
  saveProgress();
  scrollToTop();
}

function prevSection(sectionNum) {
  document.querySelector(`fieldset[data-section="${currentSection}"]`).style.display = 'none';
  currentSection = sectionNum;
  document.querySelector(`fieldset[data-section="${currentSection}"]`).style.display = 'block';
  
  updateProgress();
  saveProgress();
  scrollToTop();
}

// Progress tracking
function updateProgress() {
  const progress = ((currentSection - 1) / ASSESSMENT_CONFIG.sections) * 100;
  const questionCount = getQuestionCountForSection(currentSection);
  
  document.getElementById('progressFill').style.width = `${progress}%`;
  document.getElementById('questionCounter').textContent = `${questionCount} / ${ASSESSMENT_CONFIG.totalQuestions}`;
  document.getElementById('progressPercent').textContent = `${Math.round(progress)}% Complete`;
}

function getQuestionCountForSection(sectionNum) {
  // Return cumulative question count up to and including the given section
  // Section 1: Contact info (0 scored questions)
  // Section 2: Q1-Q3 (3 questions)
  // Section 3: Q4-Q6 (3 questions)
  // Section 4: Q7-Q9 (3 questions)
  // Section 5: Q10-Q12 (3 questions)
  const questionCounts = [0, 0, 3, 6, 9, 12];
  return questionCounts[Math.min(sectionNum, 5)];
}

// Form validation
function validateSection(fieldset) {
  const required = fieldset.querySelectorAll('[required]');
  let valid = true;
  
  required.forEach(input => {
    if (!input.value) {
      input.classList.add('error');
      valid = false;
    } else {
      input.classList.remove('error');
    }
  });
  
  return valid;
}

function setupFormValidation() {
  const form = document.getElementById('assessmentForm');
  
  // Real-time validation
  form.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('change', function() {
      this.classList.remove('error');
    });
  });
}

// Answer collection
function saveSectionAnswers(sectionNum) {
  const fieldset = document.querySelector(`fieldset[data-section="${sectionNum}"]`);
  
  // Collect all radio button groups
  fieldset.querySelectorAll('input[type="radio"]').forEach(radio => {
    if (radio.checked) {
      const name = radio.name;
      // Extract question number from name: answers.q1, answers.q2, etc.
      if (name.startsWith('answers.q')) {
        const questionKey = name.split('.')[1]; // q1, q2, etc.
        sessionData.answers[questionKey] = radio.value;
      }
    }
  });
  
  // Collect contact info
  if (sectionNum === 1) {
    sessionData.contact = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      company: document.getElementById('company').value,
      industry: document.getElementById('industry').value,
      company_size: document.getElementById('companySize').value
    };
  }
}

// Form submission with client-side scoring
document.getElementById('assessmentForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  // Validate final section
  const finalSection = document.querySelector(`fieldset[data-section="5"]`);
  if (!validateSection(finalSection)) {
    alert('Please complete all required fields before submitting.');
    return;
  }
  
  // Save final answers
  saveSectionAnswers(5);
  
  // Calculate session duration
  const endTime = new Date();
  const sessionDuration = Math.round((endTime - startTime) / 1000);
  
  // Show submission status
  document.getElementById('submissionStatus').style.display = 'block';
  
  // Calculate score using the scoring engine
  const scoringResult = window.AssessmentScoring.calculateAssessmentScore(sessionData.answers);
  
  // Prepare submission payload
  const payload = {
    submission_id: sessionData.submission_id,
    submitted_at: endTime.toISOString(),
    session_duration_seconds: sessionDuration,
    contact: sessionData.contact,
    answers: sessionData.answers,
    scoring: scoringResult,
    metadata: {
      user_agent: navigator.userAgent,
      referrer: document.referrer
    }
  };
  
  try {
    // Try to send to webhook (if configured)
    const response = await fetch(ASSESSMENT_CONFIG.webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).catch(() => null); // Ignore webhook errors - we'll show results client-side
    
    // Clear saved progress
    clearSavedProgress();
    
    // Store results in localStorage for the results page
    localStorage.setItem('nsl_assessment_results', JSON.stringify({
      session_id: sessionData.submission_id,
      results: scoringResult,
      contact: sessionData.contact,
      timestamp: endTime.toISOString()
    }));
    
    // Redirect to results page with session ID
    const resultUrl = `results.html?session=${sessionData.submission_id}`;
    window.location.href = resultUrl;
    
  } catch (error) {
    console.error('Submission error:', error);
    
    // Even if webhook fails, show results client-side
    clearSavedProgress();
    
    // Store locally and redirect
    localStorage.setItem('nsl_assessment_results', JSON.stringify({
      session_id: sessionData.submission_id,
      results: scoringResult,
      contact: sessionData.contact,
      timestamp: endTime.toISOString()
    }));
    
    const resultUrl = `results.html?session=${sessionData.submission_id}`;
    window.location.href = resultUrl;
  }
});

// LocalStorage persistence
function saveProgress() {
  try {
    localStorage.setItem('nsl_assessment_progress', JSON.stringify({
      section: currentSection,
      answers: sessionData.answers,
      contact: sessionData.contact,
      started_at: startTime.toISOString()
    }));
  } catch (e) {
    console.warn('Could not save progress:', e);
  }
}

function loadSavedProgress() {
  try {
    const saved = localStorage.getItem('nsl_assessment_progress');
    if (saved) {
      const data = JSON.parse(saved);
      const elapsed = Date.now() - new Date(data.started_at).getTime();
      
      // Only load if session is less than 7 days old
      if (elapsed < 7 * 24 * 60 * 60 * 1000) {
        sessionData.answers = data.answers || {};
        sessionData.contact = data.contact || {};
        // Note: We don't auto-restore section to avoid confusion
      }
    }
  } catch (e) {
    console.warn('Could not load progress:', e);
  }
}

function clearSavedProgress() {
  try {
    localStorage.removeItem('nsl_assessment_progress');
  } catch (e) {
    console.warn('Could not clear progress:', e);
  }
}

function trackStartTime() {
  // Session start time is already set at top of file
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
