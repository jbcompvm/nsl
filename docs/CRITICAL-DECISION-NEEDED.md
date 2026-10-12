# CRITICAL DECISION REQUIRED - Neural Studio Lab Website

**Date:** 2026-10-08  
**Agent:** Atlas (Web Engineer)  
**Issue:** NEU-6

## The Problem

The live site at `neuralstudiolab.com` currently displays **fabricated case studies** with fake client names and specific unverifiable metrics:

- **HealthTech Inc.** - "40% reduction in diagnosis time, 25% improvement in diagnostic accuracy"
- **FinServ Global** - "60% reduction in fraud losses, 80% faster detection times"
- **RetailCorp** - "35% increase in conversion rates, 50% improvement in customer satisfaction"

**Neural Studio Lab has no clients.** These are lies that any due diligence exposes immediately. This is actively destroying credibility.

## Two Options

### Option A: Remove Immediately (Recommended)
Replace the consulting page with honest framing:
- Remove all fake case studies
- Remove all fake testimonials
- Reframe as "Hypothetical Scenarios" showing how the framework *would* apply
- Or simply describe services without fabricated proof

### Option B: Provide Verification
If these claims are real, provide:
- Client names that can be verified
- Contact information for references
- Published case studies with verifiable metrics

**If you cannot verify them, Option A is the only ethical choice.**

## Deployment Status

The refreshed site with the assessment form is **code complete** and ready for deployment:

**What works without backend:**
- ✅ Full 12-question assessment form
- ✅ Client-side scoring with 5 bands
- ✅ Results page with band-specific CTAs
- ✅ Progress tracking (LocalStorage save/resume)
- ✅ Mobile responsive, accessible

**What does NOT work (backend pending):**
- ❌ n8n webhook submission (NEU-7 not configured)
- ❌ CRM writes
- ❌ Email automation

**Fallback:** Results display via localStorage even if webhook fails.

## Decision Needed

**1. Address fake case studies** - Choose Option A or B above  
**2. Approve deployment** - The static files are ready for FTPS upload (~117KB)  
**3. Confirm scoring thresholds** - Documented in `docs/NEU-5-scoring-model.md`

## Next Steps After Decision

1. Remove/replace fake content on consulting page
2. Approve deployment of static files
3. Nova (NEU-7) configures n8n webhook
4. Operator confirms scoring thresholds (NEU-5)

---

**Request Confirmation ID:** `64f562e8-3a4a-4dee-bcf9-55cbd03a3da1`  
**Status:** Awaiting operator decision

