# NEU-21 Status Report - URGENT Takedown

**Date:** 2026-10-02  
**Task:** NEU-21 - Delete four fabricated blocks from the live site  
**Status:** **BLOCKED** - Cannot access live site files

---

## Executive Summary

The four fabricated blocks identified in the site audit exist **only on the Bluehost server**. There are no local source files for `index.html` or `consulting/index.html` in this workspace. I cannot directly modify the live site without FTPS access to Bluehost.

---

## Four Fabricated Blocks (Confirmed for Deletion)

### Block 1 - `/index.html`: Fabricated Testimonials
**What:** Three quotes attributed to:
- "Sarah Chen, CTO, HealthTech Inc."
- "Michael Torres, VP Engineering, FinServ Global"
- "Jennifer Park, Director of Innovation, RetailCorp"

**Action:** Delete entire testimonials section (heading, wrapper, all three cards, nav/anchor links)

**Priority:** Highest - These are words placed in the mouths of named individuals at named companies.

---

### Block 2 - `/index.html`: Fabricated Founder Story
**What:** Founder "Dr. Elena Vasquez" with "40+ enterprise AI transformations" and "$2.3B gap"

**Action:** Delete entire founder paragraph - no substitution or softening

---

### Block 3 - `/consulting/index.html`: Fabricated Case Studies
**What:** Three case studies presented as delivered client work:
- HealthTech Inc. — "40% reduction in diagnosis time", "25% improvement in diagnostic accuracy"
- FinServ Global — "60% reduction in fraud losses", "80% faster detection times"
- RetailCorp — "35% increase in conversion rates", "50% improvement in customer satisfaction"

**Action:** Delete entire case studies section - do NOT relabel as "hypothetical scenarios"

---

### Block 4 - `/consulting/index.html`: Contradictory Pricing
**What:** "Foundation Assessment — $2,500" tier

**Action:** Delete this pricing tier - it contradicts the free assessment on other pages and is not in NEU-3 §5

---

## Straggler Sweep Results

Searched for: `Vasquez`, `HealthTech`, `FinServ`, `RetailCorp`, `Sarah Chen`, `Michael Torres`, `Jennifer Park`, `2.3B`, `2,500`, `40%`, `60%`, `35%`

**Result:** No additional instances found in local files. The fabricated content exists only on the Bluehost server.

---

## What I've Completed

1. ✅ **Created audit documentation:** `docs/removed-blocks-2026-10-02.md`
   - Detailed record of exactly what was removed
   - Reversible for audit purposes

2. ✅ **Created status report:** `docs/corrected-site-files/README.md`
   - Summary of the situation and deployment options

3. ✅ **Searched for stragglers:** None found in local files

---

## Blocker: Cannot Deploy Without Bluehost Access

**Root Cause:** The live site is hosted on Bluehost shared hosting with FTPS deployment. There is no:
- Local source repository for the main site files
- Automated deployment pipeline
- Git repo or staging server in this workspace

**To Complete This Task, One of the Following Is Required:**

### Option 1: Operator Manual Upload
- I create corrected HTML files (ready to upload)
- Operator uploads via Bluehost FTPS/cPanel

### Option 2: Operator Direct Edit
- Operator accesses Bluehost control panel
- Edits `index.html` and `consulting/index.html` directly
- Removes the four blocks as documented

### Option 3: Alternative Deployment Mechanism
- If there's a Git repo, staging server, or other deployment mechanism I'm missing
- Please point me to it

---

## Verification Required After Deployment

1. Load `https://neuralstudiolab.com` - verify testimonials and founder story removed
2. Load `https://neuralstudiolab.com/consulting/` - verify case studies and $2,500 tier removed
3. Check for any remaining references to fabricated entities
4. Confirm cache purge (nginx 2-hour TTL) - view page source to verify corrected content

---

## Next Steps

**Immediate Action Required from Operator:**

Please confirm how to proceed:
1. Should I create corrected HTML files for manual upload to Bluehost?
2. Will you handle the FTPS upload directly?
3. Is there an alternative source repository or deployment mechanism I should use?

**Once deployment method is confirmed:**
- Execute the deletions
- Verify against live URLs
- Mark task complete

---

## Documents Created

- `/home/paperclip/.paperclip/instances/default/projects/843b739a-76a9-4fbd-bfb3-35f8ebd332e3/9a793438-25de-4bb4-a6a5-df415832c98e/_default/docs/removed-blocks-2026-10-02.md`
- `/home/paperclip/.paperclip/instances/default/projects/843b739a-76a9-4fbd-bfb3-35f8ebd332e3/9a793438-25de-4bb4-a6a5-df415832c98e/_default/docs/corrected-site-files/README.md`

---

**Task Status:** `blocked`  
**Unblock Owner:** Operator  
**Unblock Action:** Provide Bluehost FTPS access, confirm manual upload approach, or point to alternative deployment mechanism
