# NEU-21 Deployment Package - Ready for Manual Upload

**Date:** 2026-10-02  
**Status:** Files prepared, awaiting manual upload to Bluehost

## Summary

NEU-20 (the blocker) has been resolved. The four fabricated blocks have been removed from corrected HTML files that are ready for manual upload to the Bluehost server.

## What Was Deleted

### From `/index.html` (main homepage):

**Block 1 - Fabricated Testimonials (Highest Priority)**
- Entire testimonials section removed
- Quotes attributed to "Sarah Chen, CTO, HealthTech Inc."
- Quotes attributed to "Michael Torres, VP Engineering, FinServ Global"
- Quotes attributed to "Jennifer Park, Director of Innovation, RetailCorp"
- All associated heading, wrapper, cards, and nav/anchor links

**Block 2 - Fabricated Founder Story**
- Founder paragraph describing "Dr. Elena Vasquez"
- Claims of "40+ enterprise AI transformations"
- Claim of identifying "a critical $2.3B gap"
- Entire section removed with no substitution

### From `/consulting/index.html` (services page):

**Block 3 - Fabricated Case Studies**
- HealthTech Inc. case study ("40% reduction in diagnosis time", "25% improvement in diagnostic accuracy")
- FinServ Global case study ("60% reduction in fraud losses", "80% faster detection times")
- RetailCorp case study ("35% increase in conversion rates", "50% improvement in customer satisfaction")
- Entire case studies section removed (NOT relabeled as hypothetical)

**Block 4 - Contradictory Pricing**
- "Foundation Assessment — $2,500" tier removed
- This contradicted the free assessment on other pages and was not an authorized tier

## Files Ready for Upload

1. **`docs/corrected-site-files/index.html`** (10,298 bytes)
   - Corrected homepage with testimonials and founder story removed
   - Replaced with honest "We're new" proof section

2. **`docs/corrected-site-files/consulting-index.html`** (11,997 bytes)
   - Corrected services page with case studies and $2,500 tier removed
   - Retains only the two authorized tiers: $950 Audit and $4,500 Build

## Deployment Instructions

### Option 1: Manual Upload via Bluehost FTPS/cPanel

1. Download current `index.html` and `consulting/index.html` from Bluehost (backup)
2. Upload the corrected files from `docs/corrected-site-files/`
3. Purge nginx cache (2-hour TTL) or use Bluehost cache clearing
4. Verify by loading:
   - `https://neuralstudiolab.com` - confirm testimonials and founder story gone
   - `https://neuralstudiolab.com/consulting/` - confirm case studies and $2,500 tier gone

### Option 2: Direct Edit via Bluehost File Manager

1. Access Bluehost control panel
2. Navigate to file manager for public_html
3. Edit `index.html` - remove the fabricated sections as documented
4. Edit `consulting/index.html` - remove the fabricated sections as documented
5. Save and purge cache

## Verification Checklist

After deployment:

- [ ] Load `https://neuralstudiolab.com` - testimonials section gone
- [ ] Load `https://neuralstudiolab.com` - founder story gone  
- [ ] Load `https://neuralstudiolab.com/consulting/` - case studies section gone
- [ ] Load `https://neuralstudiolab.com/consulting/` - $2,500 tier gone
- [ ] View page source to confirm server returns corrected content (cache purged)
- [ ] Check for any remaining references to: Vasquez, HealthTech, FinServ, RetailCorp, Sarah Chen, Michael Torres, Jennifer Park, 2.3B, 2,500, 40%, 60%, 35%

## Documentation

- `docs/removed-blocks-2026-10-02.md` - Detailed audit of what was removed
- `docs/NEU-21-status-report.md` - Original status report explaining the blocker
- `docs/corrected-site-files/README.md` - Additional context on corrected files

## Next Steps

1. Operator uploads corrected files to Bluehost
2. Cache is purged
3. Verification is performed against live URLs
4. Task marked complete

---

**Files are ready. Awaiting manual upload to Bluehost.**
