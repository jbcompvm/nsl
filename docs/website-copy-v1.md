# Website Copy — neuralstudiolab.com, all five live pages

**Status:** v1 draft. **Nothing here is published.** Every block is a draft until the operator accepts it.
**Owner:** Iris (Content & Marketing Lead)
**Source of truth:** [NEU-3](/NEU/issues/NEU-3) `positioning` rev 3. Every price, tier, band, decline and delivery time below is copied from it. **I invented no offer.** Where NEU-3 is silent, the block is marked `[NEEDS:]` rather than filled in.
**Builder:** [Atlas](/NEU/agents/atlas) — [NEU-6](/NEU/issues/NEU-6). Keys map to the live page structure in `docs/site-audit-2026-09-26.md`.

---

## 0. How to read this document

Every block below has a **key** in the form `page.section.element`. The key is the instruction: place the text where the key says, and nowhere else. If a key has no obvious home in the current markup, that is a structure question for Atlas — not a licence to reword the copy.

- **`[NEEDS: fact — owner]`** means I deliberately did not invent something. Section 8 lists every one with its owner. **No page may go live with an unresolved marker in it.**
- **Bold inside a block is load-bearing.** Readers scan headings and bold before they read anything, so the bold text alone is written to carry the argument. Do not un-bold it for visual consistency.
- **Em dashes and sentence fragments are intentional.** This is spoken register, not brochure register.

### The five pages and the one idea each argues

| Page | Single idea | Primary CTA |
|---|---|---|
| `/` | You've been experimenting for months and nothing changed; we ship **one** workflow into daily use for a fixed fee — and the funnel you're using right now is the kind of thing we build. | Take the assessment |
| `/consulting/` | Two engagements, both fixed-price against a scope you approve first: **rank the candidates ($950)** or **build the winner ($4,500)**. | Take the assessment |
| `/assessment/` | A 10-minute diagnosis that tells most firms they are **not** ready — which is exactly why the answer is worth having. | Start the assessment |
| `/about/` | A deliberately small practice. **5–15 hours a week, one build at a time** — which is why we decline more than we accept. | Take the assessment |
| `/resources/` | Our method, published **blank and free**: the templates we fill in when you pay us, and the workflow teardowns behind our thinking. | Take the assessment |

**CTA singularity.** One primary action across the whole site: **take the assessment**. It appears in the fold and at least once more on every page. There is no "contact us", no "book a call" and no newsletter box competing with it anywhere outside the scored result — a call is something you earn by scoring into Band A or B, not a button on the homepage. Every secondary link on every page is listed in §7 and must be demoted or cut.

### What is deliberately absent, and why

Per NEU-3 §7's vocabulary ban, which is absolute until a founding build signs a written release:

> No *case study*, *client*, *customer*, *we helped*, *we delivered for*, *results*, *ROI*, *hours saved*, *testimonial*, *trusted by*. No logos. No stock-photo team. No invented metrics.

Also absent by decision, not oversight:

- **No money-back guarantee** (NEU-3 §5 — a refund promise this practice might not be able to honour is worse than no promise). Do not let this get added.
- **No Operating Retainer / Tier 3 anywhere on the site** (NEU-3 §11 Decision 3 — it is offered verbally after a build lands, never in cold copy).
- **No segment-specific language** (NEU-3 §11 Decision 1 — we have no inside-track industry, so writing as if we did is the fastest-detected lie in consulting copy). Every example below is in workflow language: intake, triage, first draft, chasing, status reporting.
- **No claim about anything we have produced for anyone.** The word "result" appears only as *your* result on the assessment — the visitor's own score, never a claim about our work.

### This copy replaces live fabrications

Atlas's audit found the live site carrying three fabricated case studies with named companies and invented percentages, three fabricated quotes attributed to named individuals, a fabricated founder with invented credentials, and a $2,500 price that contradicts the free assessment. **Every one of those blocks is replaced below, not reworded.** The takedown is tracked separately — see §9. The honest replacement for fake proof is not silence; it is §6's four real proof assets.

---

## 1. `/` — Home

**Single idea:** you've been experimenting for months and nothing actually changed; we ship one workflow into daily use for a fixed fee.

**Skim path check** — a reader who reads only the headings and bold text gets: *experimenting for six months → Monday looks the same → one workflow, five weeks, fixed fee → here's how we decide which one → the thing you're using right now is what we build → take the assessment.* That is the whole argument.

### 1.1 Hero

`home.hero.eyebrow`
> AI implementation for owner-led firms of 5–50 people

`home.hero.headline`
> You've been experimenting with AI for six months. Monday still looks exactly the same.

`home.hero.subhead`
> We find the one workflow in your firm that's actually worth automating, build it into daily use on the tools you already pay for, and hand you the runbook. **Fixed scope. Fixed fee. Five weeks.**

`home.hero.cta.primary.label`
> Take the free assessment

`home.hero.cta.primary.href`
> `[NEEDS: final assessment path — Atlas, NEU-6. Currently /assessment/.]`

`home.hero.cta.primary.support`
> 10–15 questions, about 10 minutes. Scored instantly. **It will tell roughly six in ten firms they're not ready yet** — including, possibly, yours.

*Note for Atlas: the support line is not decoration. It is the single highest-credibility sentence on the page, because a free instrument that gives an honest negative answer is the one thing a firm with no track record can prove. Do not truncate it on mobile.*

### 1.2 The problem — three sentences a visitor recognises

`home.problem.heading`
> The gap isn't knowledge. It's production.

`home.problem.body`
> Almost every firm we talk to has already tried. There's a ChatGPT tab open, a folder of prompts, maybe a Copilot licence. What there isn't is a single step of the actual business that runs differently than it did last year.

`home.problem.list.heading`
> If one of these is you, the assessment is worth ten minutes:

`home.problem.list.item1`
> **"We've been playing with AI for months and nothing has changed."** The pilot-to-production gap. The experiment never became a step in the workflow.

`home.problem.list.item2`
> **"I'm paying people to do work a system should do."** Intake, data entry, first-draft documents, triage, chasing, status reporting — high volume, low judgment, still done by hand.

`home.problem.list.item3`
> **"There are ten things we could do and I don't know which one is worth doing."** Decision paralysis dressed up as a shortlist.

`home.problem.close`
> Those are the three problems we work on. Not "AI transformation" — those three.

### 1.3 How it works

`home.how.heading`
> One workflow at a time, in a fixed order

`home.how.step1.title`
> 1. Diagnose — free

`home.how.step1.body`
> The online assessment scores your firm on the four things that actually decide whether a build will stick: whether you have **one clear bottleneck**, a **system of record**, a **named person to own it afterwards**, and the **authority to approve it**. You get a written diagnosis either way.

`home.how.step2.title`
> 2. Rank — $950

`home.how.step2.body`
> If you have real operational pain but four candidate problems and no ranking, the **AI Opportunity Audit** produces a ranked, costed shortlist of three candidates and a one-page build spec for the winner. **The fee comes off the build if you start within 60 days** — so if you proceed, the diagnosis cost you nothing.

`home.how.step3.title`
> 3. Build — $4,500

`home.how.step3.body`
> The **First Workflow Build**: one workflow, running in daily use on your stack, with a written runbook covering the failure modes, a handover session, and two weeks of us fixing anything we built that breaks. At most three systems, at most ten steps, one trigger — bounded on purpose, because that's what makes five weeks real.

`home.how.close`
> Then we stop. We don't start a second workflow until the first one is running.

### 1.4 Proof — the section that replaces the fake case studies

`home.proof.heading`
> We're new. So here's our thinking instead of our logos.

`home.proof.body`
> Neural Studio Lab is a new practice. We have no case studies to show you and we're not going to invent any — so we've published the actual work instead: the templates we fill in when you hire us, and full teardowns of the workflows we build. Read them and judge for yourself whether we know what we're doing. That's a harder test than a logo wall, and it's the one we'd rather be judged on.

`home.proof.item1.title`
> The funnel you're using right now

`home.proof.item1.body`
> The assessment you're about to take, the scoring, the routing, the write into the CRM, the follow-up — **that is a working example of the kind of thing a build produces.** Take it, and you've used our work before you've paid us anything.

`home.proof.item2.title`
> Workflow teardowns

`home.proof.item2.body`
> Full reference designs for the workflows we build most often — trigger, every step, the tools, the failure modes, roughly what it costs to build and roughly what it costs to keep doing by hand. **Labelled reference design, not client work**, because that's what they are.

`home.proof.item3.title`
> Our method, published blank

`home.proof.item3.body`
> The ranked-shortlist template and the build-spec template, empty and free. Nobody buys a template — so giving away the format costs us nothing and shows you exactly how rigorous the paid version is.

`home.proof.cta.label`
> Read the teardowns

`home.proof.cta.href`
> `/resources/`

*Note for Atlas: this is the one secondary link on the homepage I am keeping, because it is the proof path and it stays on an owned page. It must be visually subordinate to the assessment CTA — text link, not a second button.*

### 1.5 Who this is for — and who it isn't

`home.fit.heading`
> Worth being blunt about fit

`home.fit.good.heading`
> This works when:

`home.fit.good.body`
> You're an owner-led professional services firm of **5–50 people**. One person can approve a $3,000 decision without a committee. You have a CRM or some shared system of record — not just inboxes and spreadsheets. And there's someone who will own the workflow after we hand it over.

`home.fit.bad.heading`
> This doesn't work when:

`home.fit.bad.body`
> Your core workload is regulated data — patient records, cardholder data, privileged discovery. You want a model built or fine-tuned. You want a strategy document rather than something running. Or **you need it live in under a month** — we're a small practice and we can't serve urgency honestly.

`home.fit.close`
> If that last list is you, we'll say so on the call instead of taking the engagement. Two of those are things we decline outright — the assessment will tell you which.

### 1.6 Closing CTA — repeat of the fold

`home.cta.heading`
> Find out which of the three problems you actually have

`home.cta.body`
> Ten minutes, 10–15 questions, scored the moment you finish. You get a written diagnosis whether or not you're a fit, and whether or not you ever talk to us.

`home.cta.primary.label`
> Take the free assessment

`home.cta.primary.href`
> `[NEEDS: final assessment path — Atlas, NEU-6.]`

### 1.7 Blocks to DELETE from the live homepage

Atlas — these are removals, not rewrites. Nothing below gets a replacement block because nothing below should exist.

| What | Where | Why |
|---|---|---|
| Founder paragraph naming **"Dr. Elena Vasquez"**, "40+ enterprise AI transformations", "$2.3B gap" | `/index.html` | Fabricated person, fabricated credentials, fabricated figures. Replaced by `/about/` §4 — which needs real facts first. |
| Three quotes attributed to **"Sarah Chen, CTO HealthTech Inc."**, **"Michael Torres, VP Engineering FinServ Global"**, **"Jennifer Park, Director of Innovation RetailCorp"** | `/index.html` | Fabricated quotes attributed to named individuals at named companies. These are the highest-risk items on the site. Replaced by §1.4. |
| Any logo strip, "trusted by", or client-count figure | anywhere | NEU-3 §7 vocabulary ban. |

---

## 2. `/consulting/` — Services

**Single idea:** two engagements, both fixed-price against a scope you approve before we start.

**Skim path check:** *two ways in → rank the candidates, $950, 8 days → build the winner, $4,500, 5 weeks → here's exactly what's excluded → here's what we decline → take the assessment.*

### 2.1 Header

`consulting.hero.headline`
> Two engagements. Both fixed-price, both scoped before you commit.

`consulting.hero.subhead`
> One ranks your candidates. One builds the winner. There's no third thing, no discovery phase, and no open-ended retainer.

### 2.2 Tier 1 — AI Opportunity Audit

`consulting.tier1.eyebrow`
> Start here if you have four candidate problems and no ranking

`consulting.tier1.name`
> AI Opportunity Audit

`consulting.tier1.price`
> **$950** USD — fixed

`consulting.tier1.timeline`
> **8 business days** from the intake call

`consulting.tier1.summary`
> You know something should change. You can't rank the candidates, and guessing wrong costs more than the audit does.

`consulting.tier1.includes.heading`
> What you get

`consulting.tier1.includes.list`
> - A **45-minute intake call**
> - A review of up to **three existing workflows**, as you describe them
> - A **ranked, costed shortlist of three automation candidates** — each with roughly what it costs you in time today, roughly what it costs to build, and the reason it is or isn't first
> - A **one-page build spec for the #1 candidate**: the trigger, the steps, the tools, who owns it afterwards, and what "working" means in testable terms
> - A **60-minute walkthrough call** to take you through it

`consulting.tier1.excludes.heading`
> What it is not

`consulting.tier1.excludes.list`
> - No access to your systems — this works from how you describe them
> - No build, no configuration, no vendor negotiation
> - No written strategy beyond the shortlist and the one-pager

`consulting.tier1.risk.heading`
> The part that matters

`consulting.tier1.risk.body`
> **The $950 is credited in full against a build if you start within 60 days.** Proceed, and the diagnostic was free. Don't proceed, and you still keep a ranked shortlist you can hand to anyone — including your own team.

### 2.3 Tier 2 — First Workflow Build

`consulting.tier2.eyebrow`
> Start here if you already know which workflow is broken

`consulting.tier2.name`
> First Workflow Build

`consulting.tier2.price`
> **$4,500** USD — fixed

`consulting.tier2.timeline`
> **5 weeks** from the signed spec

`consulting.tier2.summary`
> One workflow, running in daily use, on the tools you already pay for. Not a prototype, not a demo — the thing your team uses on Monday.

`consulting.tier2.includes.heading`
> What you get

`consulting.tier2.includes.list`
> - **One workflow built and running in daily use** on your stack — your CRM, your email, automation on n8n or equivalent
> - All configuration done
> - A **written runbook**, including the failure modes and what to do about each one
> - A **45-minute handover session** with the person who'll own it
> - **Two weeks of hypercare** — anything we built that breaks, we fix, free

`consulting.tier2.excludes.heading`
> The scope bound — read this before you ask us to quote

`consulting.tier2.excludes.body`
> **At most three systems touched, at most ten workflow steps, one trigger.** That bound is the reason five weeks is a real number instead of an optimistic one.

`consulting.tier2.excludes.list`
> - A second workflow — that's a second build, and we won't start it until the first is running
> - Custom software, model training or fine-tuning, data migration
> - Tool licences and API usage — **your own accounts, billed direct. We never resell or front tool costs**
> - Anything outside the spec you accepted. A change request becomes a new build, quoted separately

`consulting.tier2.risk.heading`
> Why fixed price, and why no guarantee

`consulting.tier2.risk.body`
> The real fear with a first engagement isn't the price, it's the open-ended bill. So the price is fixed against a spec **you accept before we start any work**, and the scope bound above is written into it. We don't offer a money-back guarantee — we're a new practice, and a refund promise we might not be able to honour is worth less to you than a scope we can actually hold. Fixed scope plus two weeks of hypercare does the same job honestly.

### 2.4 Founding Build — honest scarcity, real and countable

`consulting.founding.heading`
> Founding Build — $2,950 for the first three

`consulting.founding.body`
> The first three builds go out at **$2,950 instead of $4,500** — a real $1,550 off, not a struck-through anchor. In exchange we ask for written permission to publish the workflow we built (named or anonymised, your call), a short quote, and a 30-minute conversation after handover.

`consulting.founding.why`
> We're straightforward about why this exists: **we're buying proof, not volume.** We have no published work, and the only honest way to get it is to build something real for someone who'll let us show it. You get $1,550 off and direct access to whoever is building it.

`consulting.founding.terms`
> Closes at three builds sold, or 31 March 2027, whichever comes first. **Never extended and never renewed** — if we can't sell three by then, the problem isn't the price and another discount isn't the answer.

`consulting.founding.counter`
> `[NEEDS: live count of founding builds sold — operator/CRM. Render as "Founding rate — 1 of 3 taken". If the real count cannot be wired to this number, print "the first three builds" with no counter. DO NOT render a hardcoded or decorative count: an uncountable scarcity claim is a manufactured one.]`

### 2.5 What we decline

`consulting.decline.heading`
> What we'll turn down

`consulting.decline.body`
> Declining is most of what keeps a small practice honest, so here it is in writing rather than discovered on a call.

`consulting.decline.item1.title`
> We don't build or train models, and we don't touch regulated data

`consulting.decline.item1.body`
> No custom ML, no data-science pipelines, no model hosting — we compose hosted models and automation tools that already exist. And we don't take workloads whose core is protected health information, cardholder data, or privileged discovery. We can't offer the security posture or the audit trail those deserve, and pretending otherwise would be the fastest way to end this practice. **If that's your core workload, you need a firm with a compliance function. We're not it** — though there may be something worth doing on the non-regulated side of the same workflow.

`consulting.decline.item2.title`
> We don't sell strategy without shipping, and we're not extra hands

`consulting.decline.item2.body`
> No deck-only engagements. No paid readiness assessment — ours is free, which is rather the point. No discovery phase that ends in recommendations. And no open-ended monthly retainer where we're an unspecified pair of hands. **Every engagement ends with something running that wasn't running before.** If you want a strategy document, we're the wrong shop — and honestly, the free assessment plus the $950 audit gets you most of the way there.

`consulting.decline.item3.title`
> We're not the fastest option, and sometimes we're not the right one

`consulting.decline.item3.body`
> If you already have a written spec and a deadline next month, an automation freelancer or a Make/Zapier partner will do it cheaper and sooner, and we'll tell you so. We're worth paying when the hard part is **deciding what to build**, not building it. And if the honest answer is "buy the £30-a-seat tool and change nothing else", that's what we'll say — it costs us the sale and it's still the right advice.

### 2.6 Closing CTA

`consulting.cta.heading`
> Not sure which one you need?

`consulting.cta.body`
> That's what the assessment is for. It scores which of the two is right — or tells you that neither is, yet.

`consulting.cta.primary.label`
> Take the free assessment

`consulting.cta.primary.href`
> `[NEEDS: final assessment path — Atlas, NEU-6.]`

### 2.7 Blocks to DELETE from the live consulting page

| What | Why |
|---|---|
| **"HealthTech Inc." case study** — "40% reduction in diagnosis time, 25% improvement in diagnostic accuracy" | Fabricated. No such engagement. Replaced by §2 tiers + `/resources/` teardowns. |
| **"FinServ Global" case study** — "60% reduction in fraud losses, 80% faster detection" | Fabricated. |
| **"RetailCorp" case study** — "35% increase in conversion rates, 50% improvement in customer satisfaction" | Fabricated. |
| **"Foundation Assessment — $2,500"** | Contradicts the free assessment on two other live pages and is not a tier in NEU-3 §5. The tier ladder is $950 / $4,500 ($2,950 founding). Nothing on this site is priced at $2,500. |

*Do not relabel the three case studies as "hypothetical scenarios" and keep the numbers. The audit offered that option; I'm declining it. Invented percentages presented as illustrative are still invented percentages, and the reader remembers the number, not the disclaimer. The teardowns in §5 are the honest version of the same idea — real workflows, real steps, no fake outcome metrics.*

---

## 3. `/assessment/` — Assessment landing page

**Single idea:** a 10-minute diagnosis that tells most firms they're not ready — which is why the answer is worth having.

### 3.1 Header

`assessment.hero.headline`
> Find out whether your firm is actually ready to automate something

`assessment.hero.subhead`
> 10–15 questions, about ten minutes, scored the moment you finish. You get a written diagnosis regardless of what you score — and regardless of whether we ever speak.

`assessment.hero.honesty`
> **Fair warning: this is built to fail most firms.** Roughly six in ten come out "not ready yet", and we'd rather tell you that in ten minutes than three weeks into a build. If you're in that six, the diagnosis names the one thing to fix first.

`assessment.hero.cta.primary.label`
> Start the assessment

`assessment.hero.cta.primary.support`
> No payment, no call booked, no sales sequence. Your score and your written diagnosis, by email.

### 3.2 What it asks

`assessment.what.heading`
> What it's actually measuring

`assessment.what.body`
> Not how much AI you use. Four things that decide whether a build survives contact with your business:

`assessment.what.list`
> - **One clear bottleneck** — or four candidates and no ranking
> - **A system of record** — a CRM or shared system, not inboxes and spreadsheets
> - **A named owner** — someone who'll run the workflow after handover. Without this, nothing we build has anywhere to land
> - **Authority and budget** — one person who can approve roughly $3,000 without a committee

`assessment.what.timeline`
> There's also a question about how fast you need it live. If the answer is "under a month", you'll score lower on purpose — we're a small practice, and that's an honest constraint rather than a soft no.

`assessment.what.detail`
> `[NEEDS: final question count and the dimension names the scored result reports on — Juno, NEU-5. The four signals above come from NEU-3 §13 and are safe to publish now; the number "10-15" comes from NEU-3 §5 Tier 0. If NEU-5 lands a different count, this block and home.hero.cta.primary.support both change.]`

### 3.3 What happens after

`assessment.after.heading`
> What happens when you finish

`assessment.after.body`
> Your score appears immediately, with a written diagnosis for your band and a copy by email. Then one of two things:

`assessment.after.list`
> - **If you score into the top two bands**, you'll see an option to book a call, and we'll tell you which of the two engagements fits and why.
> - **If you don't**, you'll get the specific thing to fix first and no call offer — because a call can't fix a missing system of record, and we're not going to waste your afternoon pretending otherwise.

`assessment.after.privacy`
> `[NEEDS: what actually happens to a submission — which CRM it writes to, what the follow-up sequence sends, and whether there is a privacy policy URL to link. Owner: operator via Zeus; pipeline detail from NEU-7. A form that collects a work email and a company name needs one honest sentence here plus a link, and I will not guess at either.]`

### 3.4 Form microcopy

`assessment.form.intro`
> Your answers save as you go — you can close the tab and come back.

`assessment.form.field.name.label`
> Your name

`assessment.form.field.email.label`
> Work email

`assessment.form.field.email.help`
> Where your scored diagnosis goes.

`assessment.form.field.company.label`
> Firm name

`assessment.form.field.companySize.label`
> How many people work there?

`assessment.form.field.industry.label`
> What kind of work does the firm do?

`assessment.form.field.industry.help`
> Free text is fine. We don't specialise by industry — we ask because we're tracking which kinds of firms this fits.

*Note for Atlas: that help text is literally true and worth keeping. NEU-3 §11 Decision 1 has us horizontal by decision, capturing the segment tag so the narrowing happens on data later. Saying so out loud costs nothing and reads as confidence.*

`assessment.form.submit.label`
> Get my score

`assessment.form.submitting`
> Scoring your answers…

`assessment.form.error.generic`
> That didn't go through. Nothing was lost — your answers are still saved here. Try again, and if it fails twice `[NEEDS: fallback contact address — operator]`.

`assessment.form.error.required`
> Needs an answer before we can score it.

### 3.5 Scored-result copy, by band

Atlas — this is the on-page copy for `web/results.html`. Band **meanings** and the routing rules are settled in NEU-3 §10; only the numeric thresholds are still placeholders in NEU-5. Key each block by band letter and let the pipeline select one.

`results.band.A.heading`
> You're ready to build something

`results.band.A.body`
> You have one clear bottleneck, somewhere for the work to live, someone to own it, and the authority to say yes. That's the rare combination — most firms are missing at least one. **You don't need a diagnosis; you need a build.** On a call we'd go straight to scoping one workflow, which is the First Workflow Build at a fixed $4,500 — or $2,950 while the founding rate lasts.

`results.band.A.cta`
> Book a 30-minute call

`results.band.B.heading`
> You're ready — but not focused yet

`results.band.B.body`
> The operational pain is real and you could approve the work. What you don't have is a ranking, and starting the wrong workflow is the expensive mistake here, not starting late. **This is exactly what the $950 audit exists for** — three candidates ranked and costed, a build spec for the winner, and the fee comes off the build if you go ahead within 60 days.

`results.band.B.cta`
> Book a 30-minute call

`results.band.C.heading`
> Fix one thing first

`results.band.C.body`
> You're willing, and the pain is real — but something's missing that no engagement can supply. Usually it's one of three: **no shared system of record**, **nobody who'd own the workflow afterwards**, or **nobody who can approve the spend without a committee**. Your diagnosis below names which one applies to you. We're not offering you a call, because an hour with us won't fix any of those three — and we'd rather tell you that than sell you something that can't work yet. Fix it, then come back.

`results.band.C.cta`
> Read the teardown for the workflow closest to yours

`results.band.D.heading`
> Not yet — and here's the honest reason

`results.band.D.body`
> Based on your answers, there's nothing here worth you spending money on right now. That's a real answer, not a soft no. **The most useful thing you can do is pick the single most repetitive task in the firm and time it for a week** — how many times it happens, how long each one takes, who does it. That number is what makes the case later, and it costs you nothing to collect. When you have it, come back.

`results.band.D.cta`
> Read the teardowns — free, no email required

*On Band D: Juno's brief names this the second-highest-value thing I write, because no competitor will publish it. It has no call offer and no soft upsell by design. If it acquires a "but if you'd still like to chat…" button, it stops doing its job.*

`results.decline.regulated.heading`
> We're not the right firm for this workload

`results.decline.regulated.body`
> Your answers suggest the core of this work involves regulated data — patient records, cardholder data, or privileged legal material. **We decline that work, whatever else you scored.** We can't offer the security posture, the data-processing agreement or the audit trail it deserves, and a firm that pretends otherwise is a risk to you. You want a firm with a compliance function. If there's a non-regulated part of the same workflow, that's a different conversation and the diagnosis below covers it.

`results.waitlist.heading`
> We're full until `[NEEDS: next-available start date — operator-settable field, NEU-7 automation]`

`results.waitlist.body`
> You scored into a band we'd normally book a call for. We're not going to, yet — there's one build in flight and we don't run two. **The next start date is `[NEEDS: date field]`.** Leave your email below and we'll come back to you a fortnight before it opens. Booking a call for work we can't start would waste the more valuable of our two calendars, which is yours.

*Note for Atlas: per NEU-3 §6, a single operator-settable "next available start date" gates the scheduling link for every band. When the ceiling is full, Bands A and B render `results.waitlist.*` **instead of** the scheduling embed — not alongside it. Bands C and D never see a scheduling link at all under any condition.*

### 3.6 Structural mismatch Atlas and Juno need to resolve

Not a copy issue, but it will break this copy if nobody names it. `web/assessment.html` and `web/results.html` were built against a **25-question, six-dimension "AI readiness" model** (strategy / data / technology / people / process / governance). NEU-3 §5 and §10 specify **10–15 questions** scoring to **four bands (A–D)** on **four routing signals** plus a segment tag and a timeline question.

Those are different instruments. The copy above is written to NEU-3, because NEU-3 is the accepted source of truth and NEU-5 is still in flight. **Owner: Juno ([NEU-5](/NEU/issues/NEU-5)) decides the instrument; Atlas rebuilds the surface to match.** I flag it here rather than quietly writing copy for both.

---

## 4. `/about/` — About

**Single idea:** a deliberately small practice — 5–15 hours a week, one build at a time — which is why we decline more than we accept.

**This page currently contains a fabricated founder.** It cannot be honestly rewritten without facts only the operator has. The structure below is complete and the argument is written; the biographical specifics are marked and asked for in the `ask_user_questions` card on this task. **This page must not go live until those land** — and if the operator would rather publish no biography at all, §4.4 is written to work without one.

### 4.1 Header

`about.hero.headline`
> A small practice, on purpose

`about.hero.subhead`
> Neural Studio Lab is new, deliberately small, and takes one build at a time. All three of those are things you should know before you hire us.

### 4.2 The capacity claim — our strongest honest differentiator

`about.capacity.heading`
> We have 5–15 hours a week for delivery. We'd rather you knew.

`about.capacity.body`
> That's an unusual thing to publish, and it's the most useful fact on this page. It's why the build is bounded to three systems and ten steps. It's why five weeks is the promise instead of two. It's why there's **one build in flight at a time** and why, when that slot is full, the assessment shows you a date instead of a booking link.

`about.capacity.close`
> A bigger firm would take your project now and staff it later. We can't, so we won't — and the constraint is why the thing we do ship tends to be the right thing. **At these hours, every engagement that fits badly is one that can't be replaced.** That makes us selective in a way that's genuinely in your interest.

### 4.3 How we work

`about.how.heading`
> Four rules we actually hold to

`about.how.item1`
> **One workflow at a time.** We don't start a second until the first runs in daily use. Two half-built workflows is the most common way these projects fail.

`about.how.item2`
> **Fixed scope, agreed before we start.** You accept a spec with the trigger, the steps, the tools, the owner and a testable definition of "working". Changes become a separate quote rather than a slow renegotiation.

`about.how.item3`
> **You own it afterwards.** Every build ends with a runbook and a training session for a named person on your side. **We're the on-ramp to running this in-house, not a dependency** — if you need us forever, we did it wrong.

`about.how.item4`
> **We say no in writing.** Regulated data, model building, strategy-only engagements, and anything needed live in under a month. The list is on the services page, not buried in a contract.

### 4.4 Who you'd be working with

`about.who.heading`
> Who you'd actually be working with

`about.who.body`
> `[NEEDS: real, verifiable biography — operator. Asked on this task. Specifically: years and kind of technical background; what they built or ran before this; any public profile we may link (LinkedIn, GitHub, prior company); and whether we may name them at all. I will write this from whatever is true and link the profile so it is checkable. I will not write a number, a job title, a qualification or a career story that the operator has not confirmed — the live page currently does exactly that and it is the single most damaging thing on the site.]`

`about.who.fallback`
> **If the operator prefers no biography:** publish this instead, and it works — *"This is a one-person practice, which is why the hours in the section above are stated plainly and why there's one build in flight at a time. You'll deal with the person doing the work, from the first call to the handover — there's no account manager and nobody to hand you off to."* An honest structural statement beats an unverifiable CV, and it makes the same point a prospect actually cares about: who picks up the phone.

`about.who.antipattern`
> **Do not add:** a headshot we don't have, a stock team photo, an invented advisory board, a fabricated head-count, or "our team of AI practitioners" for a practice of one. Any of those undoes the credibility the rest of this page is built on.

### 4.5 CTA

`about.cta.heading`
> The fastest way to find out if we're useful to you

`about.cta.primary.label`
> Take the free assessment

`about.cta.primary.href`
> `[NEEDS: final assessment path — Atlas, NEU-6.]`

### 4.6 Blocks to DELETE

| What | Why |
|---|---|
| Any restatement of the "Dr. Elena Vasquez" founder story, the "$2.3B gap", "40+ transformations", or "10+ years" | Fabricated. See §4.4. |
| Any "our team" framing, head-count, or advisory board | Not true of a one-person practice. |

---

## 5. `/resources/` — Resources

**Single idea:** our method, published blank and free — plus the teardowns behind our thinking.

The audit says the existing FAQ content is genuinely good and addresses real questions. **Keep it**; §5.3 corrects only the answers that are now wrong.

### 5.1 Header

`resources.hero.headline`
> Our method, published blank

`resources.hero.subhead`
> The templates we fill in when you hire us, empty and free. Nobody buys a template — so you can have the format, and judge from it whether the paid version is worth $950.

### 5.2 The library

`resources.library.heading`
> What's here

`resources.item.shortlist.title`
> The ranked shortlist template

`resources.item.shortlist.body`
> The exact format the $950 audit delivers: three automation candidates, each with the time it costs you today, the rough build cost, and the reason it is or isn't first. Empty, with the prompts we use to fill it in.

`resources.item.spec.title`
> The build spec template

`resources.item.spec.body`
> What we ask you to accept before a build starts: trigger, steps, systems touched, tools, the named owner, and a testable definition of "working". This is the document that makes a fixed price possible — worth reading even if you build it yourself.

`resources.item.teardowns.title`
> Workflow teardowns

`resources.item.teardowns.body`
> Reference designs for the workflows we build most often — inbound lead qualification, new-client intake, proposal first drafts, overdue-invoice chasing, weekly status reporting. Each one: the trigger, every step, the tools, the failure modes, roughly what it costs to build, and roughly what it costs to keep doing by hand.

`resources.item.teardowns.label`
> **Every teardown is labelled *reference design — not client work*, because that's exactly what it is.** These are designs, not engagements we've delivered. We'd rather show you a design we can stand behind than a case study we can't.

`resources.library.status`
> `[NEEDS: which teardowns and templates actually exist at publish time — me, [NEU-8](/NEU/issues/NEU-8), and Juno specs the teardowns per NEU-3 §7 asset 3. Teardown #1 and the blank scoring sheet are drafted on NEU-8 and under substance review on NEU-17. Atlas: render only what exists. An empty library link is worse than a shorter list, and a "coming soon" on a proof page is an anti-proof.]`

### 5.3 FAQ — corrections and additions

Keep the existing FAQ. Fix these answers, which are now wrong or missing.

`resources.faq.free.q`
> Is the assessment really free?

`resources.faq.free.a`
> Yes — the assessment and the written diagnosis cost nothing, and there's no call required to get them. **There is no paid version of the assessment.** If you've seen a $2,500 "Foundation Assessment" on this site before, that was an error and it's gone; the two paid engagements are the $950 audit and the $4,500 build.

*Atlas: this answer does double duty — it fixes the contradiction and it handles anyone who saw the old page before the cache cleared. Keep the second sentence for at least one quarter.*

`resources.faq.proof.q`
> You're new. Why should I trust you with this?

`resources.faq.proof.a`
> You shouldn't, on our word. We have no published engagements — we're a new practice and we're not going to invent any. So we've published the method instead: the templates on this page, the workflow teardowns, and the assessment itself, which is built to tell roughly six in ten firms they're not ready. **Read the teardowns and judge the thinking.** If it doesn't hold up, you've lost twenty minutes and learned something about what a build involves. That's a harder test than a logo wall, and it's the one we'd rather be set.

`resources.faq.scope.q`
> What if the build turns out to be bigger than the spec?

`resources.faq.scope.a`
> Then it's a second engagement, quoted separately — and you'll hear that during scoping, not in week four. The bound is **at most three systems, at most ten steps, one trigger**. If your workflow doesn't fit inside that, the honest answer is that it's either two builds or the wrong first project, and we'd say so before you paid anything.

`resources.faq.speed.q`
> How fast can you start?

`resources.faq.speed.a`
> Often not as fast as you'd like. There's one build in flight at a time. If the slot is full, the assessment shows you the next real start date instead of a booking link. **If you need something live inside a month, we're the wrong choice and an automation freelancer is the right one** — we'll tell you that rather than take the work.

`resources.faq.tools.q`
> Which tools do you use?

`resources.faq.tools.a`
> Yours, wherever possible — your CRM, your email, whatever you already pay for. We compose hosted models and automation tooling (n8n or equivalent) rather than building software. **Licences and API usage stay on your own accounts, billed direct to you** — we don't resell tools or mark them up, so there's nothing we're incentivised to recommend.

`resources.faq.models.q`
> Can you build us a custom AI model?

`resources.faq.models.a`
> No. No custom ML, no fine-tuning, no model hosting, and nothing whose core is regulated data — patient records, cardholder data, privileged discovery. That needs a firm with a compliance function and we're not it. What we do is compose tools that already exist into a workflow that runs.

### 5.4 CTA

`resources.cta.heading`
> Read the method, then find out where you stand

`resources.cta.primary.label`
> Take the free assessment

---

## 6. Global elements

### 6.1 Navigation

`nav.items`
> Home · Services · Resources · About

`nav.cta.label`
> Take the assessment

*Atlas: the nav CTA is a button, styled distinctly from the four links, present on every page including `/assessment/` (where it scrolls to the form rather than navigating). Four links is the cap. Anything added to the nav comes out of those four.*

### 6.2 Meta descriptions and page titles

`meta.home.title`
> Neural Studio Lab — one AI workflow, running in daily use, in five weeks

`meta.home.description`
> For owner-led firms of 5–50 people that have been experimenting with AI and haven't changed how anything actually works. Fixed scope, fixed fee. Start with the free assessment.

`meta.consulting.title`
> Services — AI Opportunity Audit ($950) and First Workflow Build ($4,500) | Neural Studio Lab

`meta.consulting.description`
> Two fixed-price engagements: rank your automation candidates, or build the winner into daily use in five weeks. Scoped before you commit.

`meta.assessment.title`
> Free AI readiness assessment — 10 minutes, scored instantly | Neural Studio Lab

`meta.assessment.description`
> Ten minutes, 10-15 questions. Scores whether your firm can actually make an AI workflow stick — and tells you the one thing to fix first if it can't.

`meta.about.title`
> About — a deliberately small AI implementation practice | Neural Studio Lab

`meta.about.description`
> New, small, one build at a time, 5-15 delivery hours a week. Here's why we publish that and what it means for you.

`meta.resources.title`
> Our method, published blank — templates and workflow teardowns | Neural Studio Lab

`meta.resources.description`
> The ranked-shortlist and build-spec templates we use, free and empty. Plus reference designs for the workflows we build most often.

### 6.3 Footer

`footer.tagline`
> Neural Studio Lab — AI implementation for owner-led firms of 5–50 people.

`footer.cta.label`
> Take the free assessment

`footer.honesty`
> A new practice. No case studies, no client logos — our method and our reference designs are published on the Resources page instead.

`footer.legal`
> `[NEEDS: legal entity name, jurisdiction, and whether a privacy policy and terms page exist or need writing — operator via Zeus. A form collecting work email and firm name needs a privacy link at minimum.]`

---

## 7. Every secondary link, and what happens to it

CTA singularity means auditing what competes, not just placing the primary button. Atlas — this is the list.

| Link | Page | Verdict |
|---|---|---|
| Nav: Services, Resources, About, Home | all | **Keep.** Four, capped. |
| Nav: "Take the assessment" button | all | **Keep — this is the primary.** Visually distinct from the four links. |
| "Read the teardowns" → `/resources/` | home §1.4 | **Keep, demoted.** Text link, not a button. It is the proof path and stays on an owned page. |
| Band C / D result → teardowns | result view | **Keep.** The only offer those bands get. |
| Contact form / "get in touch" / email link | anywhere | **Cut.** A call is earned by scoring Band A or B, not by finding a mailto. Exception: the `[NEEDS:]` fallback address in `assessment.form.error.generic`, which appears only after a failed submission. |
| "Book a call" / scheduling link | anywhere outside the scored result | **Cut.** NEU-3 §10: Bands A and B only, and gated by the next-available date. |
| Newsletter / "subscribe" box | anywhere | **Cut.** The assessment *is* the list-building mechanism. A second email capture splits the one conversion we're measuring. |
| Social profile icons | footer | **Cut until a channel is live and worth visiting.** NEU-8 §distribution has LinkedIn from the operator's personal profile as the one rented channel; a footer icon linking to an empty company profile reads worse than no icon. |
| Any external logo, badge, or "as featured in" | anywhere | **Cut.** Vocabulary ban. |

---

## 8. The `[NEEDS:]` register — nothing here may go live unresolved

| # | Fact | Where it appears | Owner | Blocks publishing? |
|---|---|---|---|---|
| 1 | **Final assessment URL/path** | `home.hero.cta`, `home.cta`, `consulting.cta`, `about.cta`, nav, footer | [Atlas](/NEU/agents/atlas) — [NEU-6](/NEU/issues/NEU-6) | **Yes.** One find-and-replace. Every primary CTA on the site points at it. |
| 2 | **Real operator biography** — background, prior work, public profile, whether we may name them | `about.who.body` | **Operator** — asked on this task | **Yes, for `/about/` only.** §4.4's fallback ships if the answer is "no biography". The other four pages do not wait on this. |
| 3 | **Legal entity, jurisdiction, privacy policy + terms** | `footer.legal`, `assessment.after.privacy` | **Operator** via [Zeus](/NEU/agents/zeus) | **Yes for `/assessment/`.** The form collects work email and firm name. |
| 4 | **What happens to a submission** — which CRM, what the follow-up sends | `assessment.after.privacy` | [NEU-7](/NEU/issues/NEU-7) + operator | **Yes for `/assessment/`.** |
| 5 | **Final question count and dimension names** | `assessment.what.detail`, `assessment.hero.subhead`, `home.hero.cta.primary.support` | [Juno](/NEU/agents/juno) — [NEU-5](/NEU/issues/NEU-5) | **Yes for `/assessment/`.** "10–15" is from NEU-3 §5 and is safe until NEU-5 contradicts it. |
| 6 | **Operator-settable next-available start date** | `results.waitlist.*` | [NEU-7](/NEU/issues/NEU-7) automation + operator | **Yes for the result view.** Without it the waitlist gate can't render and Bands A/B see a booking link we may not be able to honour. |
| 7 | **Live founding-build count** | `consulting.founding.counter` | Operator / CRM | **No.** Degrades honestly to "the first three builds" with no counter. |
| 8 | **Fallback contact address** for a twice-failed submission | `assessment.form.error.generic` | Operator | **No.** Degrades to "try again later". |
| 9 | **Which teardowns and templates exist at publish** | `resources.library.status` | Me — [NEU-8](/NEU/issues/NEU-8) / [NEU-17](/NEU/issues/NEU-17) | **Yes for `/resources/`.** Render only what exists; no "coming soon". |
| 10 | **Verbatim buyer language** | `home.hero.headline`, `home.problem.list.*`, `results.band.*` | [Pythia](/NEU/agents/pythia) — [NEU-4](/NEU/issues/NEU-4) | **No — but see §10.** |

**Publishing order this implies:** `/consulting/` is clear on #1 alone. `/` and `/resources/` need #1 and #9. `/about/` needs #2. `/assessment/` and the result view are the deepest — #3, #4, #5, #6. If the operator wants something honest live this week, **`/consulting/` and `/` are the two to take first**, because they are also the two pages carrying the fabrications.

---

## 9. The live fabrications — status

This copy is the replacement, but replacement and removal are separate actions and only one of them is urgent.

The live site has been serving three fabricated case studies with invented percentages, **three quotes attributed to named individuals at named companies**, and a fabricated founder with invented credentials since before 2026-09-26, when Atlas's audit found them. The audit routed it to "operator decision needed" and nothing has happened in three days.

The named-individual quotes are the part I would not leave sitting. They are not puffery — they are words put in the mouths of named people at named companies, and they are the only items on the site whose risk isn't just credibility.

**Removal is a live site change, which is gated and is Atlas's deploy to make.** I have escalated it to Zeus rather than leaving it in an audit appendix — see the comment on this task for the link. My position, on the record: **the fabricated blocks should come down on their own, ahead of and independent of this copy being approved.** A page with a gap is recoverable. A page quoting people who don't exist is not, and "we were waiting for the new copy" is not a defence.

---

## 10. Where this copy is weakest

Stated plainly, so nobody mistakes confidence for validation.

1. **No buyer language in this document is researched.** [NEU-4](/NEU/issues/NEU-4) has had zero documents and zero comments for three days. Every phrase a buyer supposedly recognises — *"we've been playing with AI for months and nothing has changed"*, *"I'm paying people to do work a system should do"*, *"Monday still looks exactly the same"* — is derived from NEU-3 §3, which is Juno's `[JUDGMENT]`, not from anything a real buyer said. **I did not invent quotes and nothing is presented as something a buyer told us.** But `home.hero.headline` is the highest-stakes string on the site and it is currently an educated guess. When Pythia's research lands, re-test those strings first.

2. **Every price is an unvalidated hypothesis** (NEU-3 §8 — nothing has ever sold, there is no anchor). The copy states prices as facts because a page cannot hedge a price. If a price moves, `consulting.tier1.price`, `consulting.tier2.price`, `consulting.founding.*`, `home.how.step2/3`, `results.band.A/B.body` and two meta descriptions all change together. **They are deliberately written so the number appears in as few blocks as possible.**

3. **"Roughly six in ten firms are not ready" is a target, not a measurement.** It comes from NEU-3 §10's intended band distribution (C ~40% + D ~20%) for an instrument that does not exist yet. It appears in `home.hero.cta.primary.support`, `assessment.hero.honesty` and `resources.faq.proof.a`. **If the real distribution after fifty submissions is materially different, all three are wrong and must change** — this is the one number in the copy that could become false without anyone touching the site. It is phrased as "roughly six in ten" and "built to fail most firms" rather than a precise percentage for exactly that reason, but that is mitigation, not a fix. Flagging it as the thing most likely to age into a lie.

4. **`/about/` is a structure with a hole in it.** Four of five pages are complete. That one is not, and it is the page a sceptical buyer visits second.

5. **I have not seen the live pages render.** This is written from Atlas's audit inventory, not from the HTML. Block-to-section mapping may need his correction, and §3.6's instrument mismatch is real and unresolved.

---

## 11. Self-audit against the vocabulary ban and the no-invention rule

I reread every block above hunting specifically for invented history. Recorded so the check is auditable rather than asserted:

- **Banned words:** *we helped*, *we delivered for*, *ROI*, *hours saved*, *testimonial* and *trusted by* appear **nowhere** in this document outside the ban's own restatement and this audit. *Case study*, *client* and *customer* appear in publishable blocks in exactly these places, **every one a negation or a workflow name** — listed in full so nobody greps the file and concludes the ban was breached:
  - `home.proof.body` — "We have **no** case studies to show you and we're not going to invent any"
  - `home.proof.item2.body` and `resources.item.teardowns.label` — "labelled reference design, **not** client work"
  - `resources.faq.proof.a` — "We have **no** published engagements"
  - `footer.honesty` — "**No** case studies, **no** client logos"
  - `resources.item.teardowns.body` — "new-client intake", the name of a workflow, not a claim about anyone
  - `consulting.hero.subhead` and `consulting.decline.item2.body` — "**no** open-ended retainer", which is the Tier 3 decline, not an offer

  **Negating the claim is not making it**, and for a practice with nothing to show, saying "we have none" out loud is the strongest move available — it turns the gap from something the reader discovers into something we volunteered. Verified by grep against every banned term, not by recollection.
- **"Results"** appears only as the visitor's own score (`/results.html`, "your written diagnosis"), never as an outcome we produced.
- **No named person, firm, engagement, quote, logo, percentage of improvement, or head-count** appears anywhere in the publishable copy. The only proper nouns are our own name, n8n, and generic tool categories.
- **No guarantee.** `consulting.tier2.risk.body` explicitly declines one and says why.
- **No Tier 3 / retainer** on any page.
- **No segment idiom.** Every example is workflow language. `assessment.form.field.industry.help` says out loud that we don't specialise by industry.
- **Every number traces to NEU-3:** $950, $4,500, $2,950, 3 builds, 2027-03-31, 60 days, 8 business days, 5 weeks, 2 weeks hypercare, 3 systems, 10 steps, 5–50 people, $3,000 approval, 5–15 hours, 10–15 questions, "six in ten" (§10 distribution, flagged in §10.3 above). **There is no number in this document that I originated.**
- **The one claim about our own capability** — "we build workflows like the funnel you're using" — is true at the moment the funnel works, and not before. `home.proof.item1.body` must not go live until the assessment actually submits, scores, and follows up end to end. **Atlas and Nova gate that block, not me.**
