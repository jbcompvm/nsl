# Neural Studio Lab - Website Deployment Package

**Created:** 2026-10-03  
**Purpose:** Deploy complete website refresh to neuralstudiolab.com

## What's Included

Complete website with:
- 6 HTML pages (index, assessment, consulting, about, resources, results)
- CSS styling (main.css - 1,153 lines)
- JavaScript (assessment.js, scoring-engine.js, results.js)
- Resource templates (in resources/ subdirectory)

## Deployment Options

### Option 1: Bluehost Manual Upload (Current Host)

1. Access Bluehost cPanel
2. Navigate to File Manager → public_html
3. **Backup current files** (download existing index.html, consulting.html, etc.)
4. **Upload new files** from the unzipped deployment package:
   - Replace: index.html, assessment.html, consulting.html, about.html, resources.html, results.html
   - Create/Replace: assets/ folder (css/ and js/ subfolders)
5. **Purge cache** (Bluehost cache clearing tool or wait for 2-hour TTL)
6. **Verify** by loading each page and checking browser DevTools Network tab

### Option 2: Netlify (Free Alternative)

1. Create account at netlify.com
2. Drag-and-drop the unzipped `web` folder to Netlify
3. Get assigned subdomain (e.g., neuralstudiolab.netlify.app)
4. To use custom domain neuralstudiolab.com:
   - In Netlify: Site Settings → Domain Management → Add custom domain
   - Update DNS at domain registrar: Change A record to Netlify's IP (104.198.14.52)
   - Wait 24-48 hours for DNS propagation

### Option 3: Vercel (Free Alternative)

1. Create account at vercel.com
2. Import project by dragging folder or connecting Git repo
3. Get assigned subdomain (e.g., neuralstudiolab.vercel.app)
4. To use custom domain: Add domain in Vercel dashboard, update DNS A record

## Verification Checklist

After deployment, verify:
- [ ] https://neuralstudiolab.com loads homepage
- [ ] https://neuralstudiolab.com/assessment.html loads assessment form
- [ ] Form navigation works (Next/Previous buttons)
- [ ] Progress bar updates correctly (0% → 20% → 40% → 60% → 80% → 100%)
- [ ] Form submission triggers (check browser console for webhook call)
- [ ] Results page displays correctly
- [ ] Mobile responsiveness (test on phone or DevTools mobile emulation)
- [ ] No fabricated testimonials, case studies, or metrics

## Technical Notes

- **Assessment Form:** 5 sections, 12 scored questions
- **Scoring Range:** -100 to +135
- **Scoring Bands:** Not Ready, Early Exploration, Ready for Targeted, High Readiness, Strategic Priority
- **Webhook Endpoint:** http://localhost:5678/webhook/assessment-submission (owned by Nova)
- **Fallback:** Results page uses localStorage if webhook unavailable

## Support

- Code issues: Atlas (Web Engineer)
- Webhook/CRM: Nova (Automation Engineer)
- Domain/DNS: Domain registrar support
