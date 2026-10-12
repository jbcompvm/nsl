# How We'd Approach: "We've Been Experimenting With AI for Months and Nothing Has Changed"

**Published:** [Date when published]  
**Owner:** Iris (Content & Marketing Lead)  
**Type:** Approach Guide — Not a Case Study  
**Status:** Draft — ready for publication

---

## The Problem (In Buyer Language)

> "We've been playing with AI for months and nothing has changed."

This is one of the three problems we work on. Not "AI transformation" — this specific one.

The experiment never became a step in the workflow.

---

## Why This Happens (The Real Reasons)

### 1. No Clear Bottleneck

You have ten things you could automate, but no ranking. Starting the wrong one is the expensive mistake, not starting late.

### 2. No System of Record

Everything lives in inboxes and spreadsheets. There's no shared source of truth for the automation to pull from or write to.

### 3. No Named Owner

Nobody is responsible for running the workflow after handover. Without this, nothing we build has anywhere to land.

### 4. No Authority to Approve

There's no one who can approve roughly $3,000 without a committee. That's a governance question, not an AI question.

### 5. No Integration Into Daily Work

The AI tool is a separate tab, not embedded in the actual work. When the work happens, people revert to the old way because it's already there.

---

## How We'd Diagnose This

### Step 1: Name the Actual Bottleneck (Not the Symptom)

**What we'd ask:**
- What's the one task that happens most often and feels most repetitive?
- Who does it? How long does it take? How many times per week?
- What happens when it doesn't get done?

**What we're looking for:**
- A specific workflow, not a category ("overdue invoice chasing" not "finance is inefficient")
- A measurable volume ("40 invoices a week" not "a lot of invoices")
- A clear owner ("Sarah in accounting" not "the finance team")

**Why:** You can't automate "everything." You start with one thing.

---

### Step 2: Check the Four Signals

We score firms on four things that decide whether a build will stick:

| Signal | What It Means | How We Check |
|--------|---------------|--------------|
| **Clear bottleneck** | One workflow you can name, with volume and owner | Can you state it in one sentence with numbers? |
| **System of record** | A CRM or shared system, not just inboxes | Where does the data live now? Can the automation read/write there? |
| **Named owner** | Someone who will run the workflow after handover | Who will be trained? Who will monitor it? |
| **Authority to approve** | One person who can say yes to ~$3,000 | Who signs off? How long does approval take? |

**What happens:**
- All four present → You're ready to build (Band A)
- Three present, no ranking → You're ready but not focused (Band B)
- Missing one or more → You need to fix that first (Band C or D)

---

### Step 3: Identify What's Missing

Based on the score, we'd tell you exactly what's blocking you:

**If you're missing a system of record:**
> "Your firm doesn't yet have a shared system of record. Pick one — even a simple CRM — and get it running before you automate anything else."

**If you have no named owner:**
> "There's no one who would own this workflow after handover. Name that person before you build. If nobody will own it, nothing we build has anywhere to land."

**If you have no authority:**
> "There's no one who can approve roughly $3,000 without a committee. That's a governance question, not an AI question. Fix that first."

**If you have no clear bottleneck:**
> "You have ten things you could do and no ranking. That's exactly what the $950 audit exists for — three candidates ranked and costed, with a build spec for the winner."

---

## How We'd Build It (Once the Missing Piece Is Fixed)

### Phase 1: Scope (1 week)

- Define the trigger: What starts the workflow?
- Map the steps: Every step, in order, as it happens now
- Identify the tools: What systems are involved?
- Define "working": What does success look like in testable terms?
- Set boundaries: At most three systems, at most ten steps, one trigger

**Deliverable:** A one-page build spec that you accept before we start any work.

---

### Phase 2: Build (3-4 weeks)

- Configure the automation platform (n8n or equivalent)
- Connect the systems via API or webhook
- Implement error handling and fallback paths
- Build the monitoring and alerting
- Document the failure modes and what to do about each

**What you see:** Weekly check-ins, not daily status reports. We're building, not presenting.

---

### Phase 3: Handover (1 week)

- Train the named owner on how to monitor and maintain the workflow
- Walk through the failure modes and what to do
- Run the workflow in parallel with the old way for 1 week
- Confirm the metric improved (e.g., "follow-up time dropped from 3 days to 4 hours")

**Deliverable:** A written runbook and a trained owner.

---

### Phase 4: Hypercare (2 weeks)

- Anything we built that breaks, we fix, free
- Adjustments based on real usage
- Final sign-off

**After that:** You own it. We don't become a dependency.

---

## What We'd Exclude (By Design)

1. **No custom software** — We compose tools that already exist
2. **No model training** — We use hosted models, not custom ML
3. **No multi-workflow builds** — We don't start a second until the first is running
4. **No open-ended scope** — The bound is three systems, ten steps, one trigger
5. **No regulated data** — If the core is patient records, cardholder data, or privileged discovery, we decline

---

## Rough Cost and Timeline

| Phase | Cost | Timeline |
|-------|------|----------|
| Scoping (AI Opportunity Audit) | $950 | 8 business days |
| Build (First Workflow Build) | $4,500 | 5 weeks |
| **Total** | **$5,450** | **~7 weeks** |

**Founding rate:** First three builds at $2,950 instead of $4,500 (saves $1,550; requires permission to publish the workflow we built)

**What's not included:** Tool licences, API usage, any work outside the spec you accepted.

---

## What Success Looks Like

**In 8 weeks:**
- One workflow runs in daily use without your involvement
- The named owner can monitor it and handle the common failure modes
- The metric improved (e.g., "follow-up time dropped from 3 days to 4 hours")
- You have a written runbook for the failure modes

**In 6 months:**
- The workflow is still running (not abandoned)
- You're measuring its impact (not just hoping it works)
- You're ready to discuss the next workflow (if there is one)

---

## What We'd Say "No" To

**If you say:** "We need it live in under a month."  
**We'd say:** "Then we're the wrong choice. An automation freelancer or a Make/Zapier partner will do it cheaper and sooner. We're worth paying when the hard part is deciding what to build, not building it."

**If you say:** "We want a strategy document."  
**We'd say:** "We don't sell strategy without shipping. Our free assessment gives you a diagnosis; the $950 audit gives you a ranked shortlist. Beyond that, you want a different shop."

**If you say:** "We have regulated data."  
**We'd say:** "We decline that work. You need a firm with a compliance function. We're not it."

**If you say:** "We want to build a custom model."  
**We'd say:** "We don't do that. We compose tools that already exist. If you need custom ML, you need a data science firm, not an automation firm."

---

## The Honest Truth

Most firms that say "nothing has changed" are missing one of the four signals. The assessment will tell you which one.

If you're missing a system of record, a CRM will fix that before any AI does.
If you have no named owner, naming that person will fix that before any build does.
If you have no authority, fixing the governance will fix that before any automation does.

**The AI is the easy part.** The hard part is the organizational piece that has to be in place first.

---

## Next Step

Take the free assessment. It will score which of the four signals you're missing — or tell you that you have all four and you're ready to build.

[Button: Take the free assessment]

If you'd rather read more first:
- [See the two engagements] — AI Opportunity Audit ($950) and First Workflow Build ($4,500)
- [Read the workflow teardowns] — reference designs for the workflows we build most often

---

**Status:** ✅ Complete — ready for publication  
**Next:** Publish to /resources/ and distribute via LinkedIn  
**Owner:** Iris (Content & Marketing Lead)
