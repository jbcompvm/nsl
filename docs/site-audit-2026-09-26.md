# Neural Studio Lab Site Audit
**Date:** 2026-09-26  
**Auditor:** Atlas (Web Engineer)  
**Site:** https://neuralstudiolab.com

## Executive Summary

Neural Studio Lab is a live static HTML site hosted on Bluehost shared hosting. The site has professional design and structure but contains **critical credibility issues** that actively undermine the brand's claims.

## Technical Infrastructure

| Aspect | Finding |
|--------|---------|
| **Hosting** | Bluehost shared hosting (static HTML) |
| **Domain** | neuralstudiolab.com |
| **Deploy Mechanism** | FTPS (no staging environment) |
| **Tech Stack** | Plain HTML/CSS/JS, no framework |
| **External Dependencies** | Three.js, GSAP, hCaptcha (CDN) |
| **Cache** | Server-side nginx cache, 2-hour TTL |

### Site Structure (Live)
```
/
├── index.html (Home)
├── assessment/index.html (Assessment landing)
├── consulting/index.html (Services)
├── about/index.html (About)
├── resources/index.html (FAQ + downloads)
└── assets/
    ├── css/styles.css
    └── js/main.js
```

## Credibility Issues (Critical)

### 1. FABRICATED CASE STUDIES
**Location:** `/consulting/index.html`

Three detailed case studies are presented as real client work:
- **HealthTech Inc.** - "40% reduction in diagnosis time, 25% improvement in diagnostic accuracy"
- **FinServ Global** - "60% reduction in fraud losses, 80% faster detection times"  
- **RetailCorp** - "35% increase in conversion rates, 50% improvement in customer satisfaction"

**Problem:** Neural Studio Lab has **no clients**. These are fabricated testimonials with specific metrics that cannot be verified. This is actively destructive to credibility—any due diligence exposes the lie immediately.

**Recommendation:** Either remove entirely OR relabel as "Hypothetical Scenarios" with explicit disclaimers showing how the framework *would* apply.

### 2. FABRICATED FOUNDER STORY
**Location:** `/index.html`

> "Neural Studio Lab was founded by **Dr. Elena Vasquez**, who led 40+ enterprise AI transformations after identifying a critical $2.3B gap in failed implementations."

**Problem:** No verification of this founder or these claims exists. The specific metrics ($2.3B, 40+ deployments, 10+ years) create false authority.

**Recommendation:** Either provide verifiable founder credentials (LinkedIn, prior companies, publications) OR reframe as "founded by AI practitioners with combined X years experience" without specific unverifiable claims.

### 3. TESTIMONIALS WITH NO CLIENTS
**Location:** `/index.html`

Three testimonials from "Sarah Chen, CTO HealthTech Inc.", "Michael Torres, VP Engineering FinServ Global", and "Jennifer Park, Director of Innovation RetailCorp".

**Problem:** Same companies as the case studies—fabricated. These names and quotes cannot be real.

**Recommendation:** Remove immediately. Credibility comes from demonstrated reasoning, not fake social proof.

## Pricing Inconsistency

| Page | Claim |
|------|-------|
| `/assessment/index.html` | Assessment is **free** |
| `/resources/index.html` | FAQ confirms: "Yes. The assessment and resulting report are provided at no cost." |
| `/consulting/index.html` | Foundation Assessment: **$2,500** |

**Problem:** The consulting page sells "Foundation Assessment" for $2,500, but the assessment page and FAQ say the assessment is free. This is confusing and suggests either:
1. Two different products (not clarified)
2. A bait-and-switch
3. Copy inconsistency

**Recommendation:** Clarify the offering structure. Example: "Free self-assessment" vs. "Paid consultant-led assessment engagement."

## What Works Well

1. **Visual Design:** Professional, modern aesthetic with appropriate animations
2. **Information Architecture:** Clear navigation and logical page structure
3. **The 6-Dimension Framework:** Good conceptual structure for AI readiness
4. **Hero CTAs:** Strong call-to-action placement for the assessment
5. **FAQ Content:** Actually useful, addresses real customer questions

## Assessment Form Status

The current `/assessment/index.html` contains:
- ✅ Multi-section form structure (5 sections visible in source)
- ✅ Progress tracking UI
- ✅ Basic form fields for contact info and AI usage
- ❌ **No actual submission handler** (form has no action attribute)
- ❌ **No scoring logic** (questions are placeholders)
- ❌ **No results page** (results.html doesn't exist)

## Recommendations

### Immediate Actions (Before Any Refresh)
1. **Remove or relabel fake case studies** — this is actively damaging
2. **Remove fake testimonials** — same reason
3. **Clarify pricing** — distinguish free assessment from paid services
4. **Verify founder story** — either prove it or reframe

### Assessment Build Priority
1. Build form submission to n8n webhook (NEU-7)
2. Implement scoring logic once NEU-5 delivers questions
3. Build results page with score display and scheduling embed
4. Add analytics (Plausible free tier recommended)

### Hosting Decision
Current Bluehost hosting works for static HTML. No migration needed unless:
- Need server-side processing (currently none)
- Want better performance (Cloudflare Pages free tier possible)
- Need staging environment (current setup has none)

## Dependencies

| Component | Owner | Status |
|-----------|-------|--------|
| Question set & scoring | NEU-5 | Blocked on NEU-3 |
| n8n webhook | NEU-7 (Nova) | Not started |
| Positioning/copy | NEU-3 (Iris) | In review |
| Analytics | Atlas | Pending decision |
| Scheduling embed | Atlas | Pending provider choice |

## Next Steps

1. **Operator decision needed:** Address fake case studies and testimonials
2. **NEU-5:** Deliver question set and scoring thresholds
3. **NEU-7:** Implement n8n webhook matching assessment submission contract
4. **Atlas:** Build assessment form submission and results page
5. **Decision:** Choose analytics provider (recommend Plausible free tier)
