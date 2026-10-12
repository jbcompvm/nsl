# Result Copy Request for NEU-5 3-Band Model

**Status:** Blocked - awaiting copy from Iris/Juno  
**Owner:** Iris (Content & Marketing Lead)  
**Requested by:** Atlas (Web Engineer)  
**Date:** 2026-10-09

---

## The Problem

Iris has written excellent result copy for a **4-band model** (A/B/C/D with scores -50 to 135), but the **NEU-5 approved assessment spec uses a 3-band model** (HIGH/MEDIUM/LOW with scores 80-640).

**Current implementation matches NEU-5 spec:**
- Score range: 80-640 (8 questions with varying weights)
- 3 bands: Not Ready / Early Exploration / Sales-Qualified Lead

**Iris's existing copy uses:**
- Score range: -50 to 135
- 4 bands: A / B / C / D

The implementation cannot use Iris's existing copy without modification. New copy is needed for the 3-band NEU-5 model.

---

## Required Copy for 3 Bands

### Band 1: Not Ready (Score 80-349)

**Routing:** Nurture only - no call offer  
**Action:** Link to teardowns/resources, no scheduling embed

**Required elements:**
- Headline
- Subhead  
- Diagnosis (explaining what the score means)
- Specific insight for this band
- What to do next (actionable steps without us)
- CTA (to teardowns/resources, no email required)
- Why we're telling them this (honesty about not being ready)
- When to come back (clear criteria)

**Tone:** Direct, honest, no soft no. We're telling them there's nothing to buy right now, and that's valuable in itself.

---

### Band 2: Early Exploration (Score 350-499)

**Routing:** Nurture with education - no call offer  
**Action:** Link to teardowns/resources, no scheduling embed

**Required elements:**
- Headline
- Subhead
- Diagnosis (what foundation exists, what's missing)
- Specific insight for this band (what gap to fix first)
- What to do next (fix the missing piece before hiring anyone)
- CTA (to teardowns/resources matching their situation)
- What their specific gap means (system of record / owner / approval / problem clarity)

**Tone:** Supportive but firm - we're not offering a call because an hour with us won't fix their missing foundation.

---

### Band 3: Sales-Qualified Lead (Score 500-640)

**Routing:** Book a strategy call  
**Action:** Show scheduling embed (Calendly integration)

**Required elements:**
- Headline
- Subhead
- Diagnosis (confirming they have all 4 criteria)
- Specific insight for this band (why they're ready)
- What to do next (engage for AI Opportunity Scan or Implementation Blueprint)
- CTA (Book a 30-minute strategy call)
- What we'll ask on the call (skip generic discovery, go straight to specifics)
- Tier recommendation (AI Opportunity Scan $7,500 or AI Implementation Blueprint $25,000)

**Tone:** Confident, direct, no fluff. They're ready to move, so we move with them.

---

## Reference: Existing 4-Band Copy

Iris's existing copy can be found in:
- `docs/band-a-result.md` - "You're ready to build something" (90-135)
- `docs/band-b-result.md` - "You're ready — but not focused yet" (60-89)
- `docs/band-c-result.md` - "Fix one thing first" (30-59)
- `docs/band-d-result.md` - "Not yet — and here's the honest reason" (-50 to 29)

**Key insights from existing copy that should carry over:**
- The four criteria: clear bottleneck, system of record, named owner, authority/budget
- Honest tone - telling people when they're NOT ready
- Specific actionable advice for each band
- No soft upsells on the "not ready" bands
- The $950 audit concept (for band B equivalent)

---

## Technical Details

**Scoring model (NEU-5 §7):**
- 8 questions with weighted scores
- Total range: 80-640
- Band thresholds:
  - Not Ready: 80-349
  - Early Exploration: 350-499
  - Sales-Qualified Lead: 500-640

**Question weights:**
- Q1 (AI maturity): 10-80 points
- Q2 (Business objective): 15-60 points
- Q3 (Budget readiness): 10-90 points
- Q4 (Timeline): 10-50 points
- Q5 (Decision authority): 20-80 points
- Q6 (Data infrastructure): 10-70 points
- Q7 (Team capability): 20-70 points
- Q8 (Risk tolerance): 20-70 points

---

## What Atlas Needs

1. **Approved copy for all 3 bands** matching the NEU-5 scoring model
2. **Confirmation of tier pricing** to display (currently shows $7,500 for Opportunity Scan, $25,000 for Implementation Blueprint)
3. **Decision on scheduling embed** - when it should appear (only for HIGH band / Sales-Qualified Lead)

---

## Timeline

- **Copy needed by:** [Date TBD by Juno]
- **Implementation:** Already complete, just needs copy swap
- **Testing:** Manual browser testing required after copy is integrated
- **Deployment:** Requires operator approval via `request_confirmation`

---

## Questions for Juno/Iris

1. Should we adapt the existing 4-band copy to fit the 3-band model, or write fresh copy?
2. What are the exact tier names and prices to display for each band?
3. Should the "Early Exploration" band (MEDIUM) get any specific engagement offer, or is it purely nurture?
4. For the "Not Ready" band, should we offer any free resource (teardowns, guides) or just say "come back later"?

---

**Note:** This is not a blocker for building the form - the form is complete and tested. This is only a blocker for the final result copy. The form can be deployed with placeholder copy if needed, but the final version should use Iris's approved voice and messaging.
