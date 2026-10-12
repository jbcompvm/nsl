# NEU-6: Deployment Approval Request

**Date:** 2026-10-04  
**Agent:** Atlas (Web Engineer)  
**Issue:** NEU-6 — Website refresh: rebuild around the assessment as the primary call to action

---

## Request: Approve deployment of static assessment files

The assessment form and results page are **code-complete and ready for deployment**. These are static HTML/CSS/JS files that can be uploaded to neuralstudiolab.com immediately.

### What's Ready to Deploy

**Static files (~117KB total):**
- `web/index.html` - Home page with assessment as primary CTA
- `web/assessment.html` - 12-question multi-step assessment form
- `web/results.html` - Scored results display with band-specific CTAs
- `web/consulting.html` - Service tiers ($950 audit, $4,500 build)
- `web/about.html` - About page
- `web/resources.html` - FAQ and resources
- `web/assets/css/main.css` - Complete styling (1,153 lines)
- `web/assets/js/assessment.js` - Form logic, navigation, submission
- `web/assets/js/scoring-engine.js` - Complete scoring model
- `web/assets/js/results.js` - Results display and qualification logic

### What Works Immediately After Deployment

✅ **Visitors can take the 12-question assessment**  
✅ **Client-side scoring works** (localStorage fallback if backend fails)  
✅ **Results page displays scored results** with band-specific messaging  
✅ **Progress tracking** saves/resumes via localStorage  
✅ **Mobile responsive and accessible**  
✅ **Form validation** (required fields, email format)

### What Does NOT Work (Backend Not Configured)

❌ **n8n webhook submission** - Endpoint not configured (NEU-7)  
❌ **CRM writes** - HubSpot/MailerLite not connected  
❌ **Email automation** - No nurture sequences  
❌ **Analytics** - Not installed yet

### Fallback Behavior

The results page has a **localStorage fallback** - even if the webhook fails, users still see their scored results. The assessment is functional without backend integration.

### Free Tier Compliance

✅ No paid services used  
✅ All functionality works with free tools  
✅ Hosting remains on existing Bluehost (no migration needed)

### What Still Needs to Happen

1. **NEU-7 (Nova):** Configure the n8n webhook to receive submissions
   - Import workflow JSON into n8n
   - Configure MailerLite and HubSpot credentials
   - Test with fixtures
   - Activate workflow (requires separate `request_confirmation`)

2. **NEU-5:** Confirm scoring band thresholds
   - Current thresholds documented in `docs/NEU-5-scoring-model.md`
   - Operator confirmation needed for final thresholds

3. **Credibility fix:** Address fake case studies on live consulting page
   - **CRITICAL:** The live site currently shows fabricated case studies
   - Either remove entirely OR relabel as "hypothetical scenarios"
   - This is actively damaging to credibility

### Recommendation

**Approve deployment now.** The static files are safe:
- They provide value even without backend integration
- Users get scored results via localStorage fallback
- The n8n webhook can be configured later without disrupting the site
- No paid services or credentials are required for this deployment

### Deployment Mechanism

- **Host:** Bluehost shared hosting
- **Method:** FTPS upload to document root
- **Note:** No staging environment - every upload is immediately public
- **Backup:** Pull current files before uploading (documented in NEU-14 runbook)

---

## Next Steps After Approval

1. **Deploy static files** to neuralstudiolab.com
2. **Verify** assessment loads and functions correctly
3. **NEU-7:** Configure n8n webhook (Nova's responsibility)
4. **NEU-5:** Confirm scoring thresholds
5. **Add analytics** (recommend Plausible free tier)

---

**Status:** Awaiting operator approval for deployment  
**Blocked by:** None - code is complete, awaiting approval  
**Ready for:** Static file deployment, real user testing
