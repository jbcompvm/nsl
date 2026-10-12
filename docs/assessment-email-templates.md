# Assessment Result Email Templates

**Status:** Draft — ready for automation engineer to wire into n8n
**Owner:** Iris (Content & Marketing Lead)
**Source:** NEU-3 §10 (band definitions), website-copy.md §3.5

Each email is keyed to the band letter. The automation pipeline selects the template based on the scored band.

---

## Email Structure (All Bands)

Every email follows this structure:

```
Subject: [Band-specific subject line]

[Personalized greeting]

[Your score appears here — dynamically inserted]

[Band-specific diagnosis — the body of the email]

[What this means — 2-3 sentences explaining the band]

[Proportionate next step — CTA that matches the band]

[Sign-off]
```

---

## Band A: "You're ready to build something"

**When sent:** Score 80-100, all four signals present (clear bottleneck, system of record, named owner, authority to approve)

**Subject line options:**
- Option 1: "Your firm is ready to automate a workflow — here's what happens next"
- Option 2: "Assessment result: You're ready to build (Band A)"

**Email body:**

```
Hi [First Name],

**Your score: [X]/100 (Band A — Ready to build)**

You have the four things that decide whether a build survives contact with your business:

1. One clear bottleneck — or a ranked shortlist of candidates
2. A system of record (CRM or shared system, not just inboxes)
3. Someone who will own the workflow after handover
4. Authority to approve roughly $3,000 without a committee

That's the rare combination — most firms are missing at least one.

**What this means**

You don't need a diagnosis; you need a build. The First Workflow Build is $4,500 fixed — one workflow, running in daily use on your stack, with a written runbook, a handover session, and two weeks of hypercare. At most three systems, at most ten steps, one trigger. Bounded on purpose, because that's what makes five weeks real.

If you're one of the first three founding builds, the fee is $2,950 instead. That's a real $1,550 off, not a struck-through anchor. In exchange we ask for written permission to publish the workflow we built (named or anonymised, your call), a short quote, and a 30-minute conversation after handover.

**Next step**

Book a 30-minute call. On it, we'll confirm which workflow is worth building first, and we'll scope it before you commit to anything.

[Button: Book a 30-minute call]

If you'd rather read about how we work first:
- [Read the workflow teardowns] — reference designs for the workflows we build most often
- [See the two engagements] — AI Opportunity Audit ($950) and First Workflow Build ($4,500)

Best,
[Operator name]
Neural Studio Lab

P.S. If you're currently at capacity, you'll see a next available start date instead of a booking link. That's intentional — we don't start a second workflow until the first is running.
```

**Notes:**
- CTA is proportionate: Band A gets a direct booking link
- No hard sell — the score already validated fit
- Mention founding rate only if it's actually active (operator-settable flag)

---

## Band B: "You're ready — but not focused yet"

**When sent:** Score 60-79, operational pain is real, authority present, but no clear ranking

**Subject line options:**
- Option 1: "Your firm could automate something — but starting the wrong workflow is the expensive mistake"
- Option 2: "Assessment result: You're ready, but not focused yet (Band B)"

**Email body:**

```
Hi [First Name],

**Your score: [X]/100 (Band B — Ready, but not focused yet)**

You have real operational pain, and you could approve the work. What you don't have is a ranking.

Starting the wrong workflow is the expensive mistake here, not starting late.

**What this means**

This is exactly what the $950 AI Opportunity Audit exists for. You get:

- A 45-minute intake call
- A review of up to three existing workflows, as you describe them
- A ranked, costed shortlist of three automation candidates — each with roughly what it costs you in time today, roughly what it costs to build, and the reason it is or isn't first
- A one-page build spec for the #1 candidate: trigger, steps, tools, who owns it afterwards, and what "working" means in testable terms
- A 60-minute walkthrough call

The fee comes off the build if you start within 60 days. So if you proceed, the diagnosis cost you nothing. If you don't, you still keep a ranked shortlist you can hand to anyone — including your own team.

**Next step**

Book a 30-minute call. We'll confirm whether the audit is the right starting point for you, and we'll walk through what your shortlist would cover.

[Button: Book a 30-minute call]

If you'd rather read more first:
- [See how the audit works] — exactly what's included, what's excluded
- [Read the ranked-shortlist template] — the format you'll receive, empty and free

Best,
[Operator name]
Neural Studio Lab

P.S. The audit is designed for firms like yours that know something should change but can't rank the candidates. Guessing wrong costs more than the audit does.
```

**Notes:**
- CTA is proportionate: Band B also gets a booking link, but the framing is "confirm the audit is right" rather than "let's build"
- Emphasize that the $950 is credited against a build — removes risk

---

## Band C: "Fix one thing first"

**When sent:** Score 40-59, willing and pain is real, but missing something the engagement can't supply (no system of record, no named owner, or no authority)

**Subject line options:**
- Option 1: "Your firm isn't quite ready yet — here's the one thing to fix first"
- Option 2: "Assessment result: Fix one thing first (Band C)"

**Email body:**

```
Hi [First Name],

**Your score: [X]/100 (Band C — Fix one thing first)**

You're willing, and the pain is real. But something is missing that no engagement can supply.

Usually it's one of three:
- No shared system of record (everything lives in inboxes and spreadsheets)
- Nobody who'd own the workflow afterwards
- Nobody who can approve the spend without a committee

Your diagnosis below names which one applies to you.

**What this means**

We're not offering you a call, because an hour with us won't fix any of those three — and we'd rather tell you that than sell you something that can't work yet.

The most useful thing you can do is fix the missing piece internally, then come back. That might mean:
- Implementing a CRM or shared system (even a simple one)
- Naming a person who will own the workflow after handover
- Getting clarity on who has authority to approve roughly $3,000

**Your specific diagnosis**

[Dynamic insertion based on which signal is missing]
- Missing system of record → "Your firm doesn't yet have a shared system of record. Pick one — even a simple CRM — and get it running before you automate anything else."
- No named owner → "There's no one who would own this workflow after handover. Name that person before you build. If nobody will own it, nothing we build has anywhere to land."
- No authority → "There's no one who can approve roughly $3,000 without a committee. That's a governance question, not an AI question. Fix that first."

**Next step**

Read the teardown for the workflow closest to yours. These are reference designs — not client work — showing the trigger, every step, the tools, the failure modes, roughly what it costs to build, and roughly what it costs to keep doing by hand.

[Button: Read the teardowns]

Once you've fixed the missing piece, come back and retake the assessment.

Best,
[Operator name]
Neural Studio Lab

P.S. This is a real answer, not a soft no. We'd rather tell you now than three weeks into a build that it can't work yet.
```

**Notes:**
- **No call offer** — this is critical. Band C gets resources, not a sales conversation
- Names the specific missing piece dynamically
- Honest and useful even if they never hire us

---

## Band D: "Not yet — and here's the honest reason"

**When sent:** Score 0-39, not ready for automation engagement

**Subject line options:**
- Option 1: "Your firm isn't ready for AI automation yet — and here's what to do instead"
- Option 2: "Assessment result: Not yet (Band D)"

**Email body:**

```
Hi [First Name],

**Your score: [X]/100 (Band D — Not yet)**

Based on your answers, there's nothing here worth you spending money on right now.

That's a real answer, not a soft no.

**What this means**

The most useful thing you can do is pick the single most repetitive task in the firm and time it for a week:
- How many times does it happen?
- How long does each one take?
- Who does it?

That number is what makes the case later, and it costs you nothing to collect.

For example:
- "We rekey 40 invoices a week, 15 minutes each, done by Sarah in accounting"
- "We send 25 proposal drafts a month, 2 hours each, done by the sales team"
- "We chase 30 overdue payments a quarter, 20 minutes each, done by the ops manager"

When you have that number, come back and retake the assessment.

**Next step**

Read the teardowns — free, no email required. These are reference designs for the workflows we build most often: inbound lead qualification, new-client intake, proposal first drafts, overdue-invoice chasing, weekly status reporting. Each one shows the trigger, every step, the tools, the failure modes, roughly what it costs to build, and roughly what it costs to keep doing by hand.

[Button: Read the teardowns]

Best,
[Operator name]
Neural Studio Lab

P.S. This is the second-highest-value thing we produce — a honest "not yet" with a specific thing to do. No competitor will send this.
```

**Notes:**
- **No call offer, no upsell** — by design
- Teaches something useful (how to build the business case)
- This email alone differentiates Neural Studio Lab from competitors

---

## Special Case: Regulated Data Decline

**When sent:** Any score, but answers indicate core workload involves regulated data (patient records, cardholder data, privileged legal material)

**Subject line:**
- "We're not the right firm for this workload"

**Email body:**

```
Hi [First Name],

**Your score: [X]/100**

Your answers suggest the core of this work involves regulated data — patient records, cardholder data, or privileged legal material.

**We decline that work, whatever else you scored.**

We can't offer the security posture, the data-processing agreement, or the audit trail it deserves. A firm that pretends otherwise is a risk to you.

You want a firm with a compliance function. We're not it.

If there's a non-regulated part of the same workflow, that's a different conversation. The assessment below covers it.

**What you can do instead**

- [Read the workflow teardowns] — see whether the non-regulated parts of your workflow are worth automating
- [See what we decline] — in writing, so you don't waste time on a call that ends in a no

Best,
[Operator name]
Neural Studio Lab
```

**Notes:**
- This overrides all other band messaging
- Must appear before any band-specific content if triggered

---

## Special Case: At Capacity

**When sent:** Band A or B score, but the operator has set the "at capacity" flag (one build in flight)

**Subject line:**
- "You're ready to build — here's when we can start"

**Email body:**

```
Hi [First Name],

**Your score: [X]/100 (Band [A/B] — Ready to build)**

You scored into a band we'd normally book a call for. We're not going to, yet — there's one build in flight and we don't run two.

When a slot opens, the next start date will be published here: [Next Available Start Date].

Leave your email below and we'll come back to you a fortnight before it opens. Booking a call for work we can't start would waste the more valuable of our two calendars, which is yours.

[Form: Enter your email to be notified when a slot opens]

Best,
[Operator name]
Neural Studio Lab
```

**Notes:**
- Only applies to Bands A and B
- Bands C and D never see a scheduling link under any condition
- Next available date is operator-settable in the CRM/automation

---

## Implementation Notes for Nova (Automation Engineer)

1. **Email selection logic:**
   - Check for regulated data first → if present, send Regulated Data Decline email
   - Check capacity flag → if full and Band A/B, send At Capacity email
   - Otherwise, select by score band (A, B, C, or D)

2. **Dynamic fields to insert:**
   - `[First Name]` — from form submission
   - `[X]/100` — actual score
   - `[Dynamic diagnosis]` — for Band C, which specific signal is missing
   - `[Next Available Start Date]` — for At Capacity email, operator-settable
   - `[Operator name]` — configured in system

3. **Links to include:**
   - Book call link (Bands A and B only) — gated by capacity flag
   - Read teardowns link (Bands C and D, plus secondary in A and B)
   - See engagements link (Bands A and B)
   - See what we decline link (all bands)

4. **Timing:**
   - Send immediately after form submission
   - No follow-up sequence by default (Band C and D get no follow-up; A and B get a single reminder 7 days later if no action)

5. **Privacy:**
   - Include unsubscribe link (required by law, even for diagnostic emails)
   - One sentence about data handling: "Your answers are stored in our CRM and used only to send your diagnosis. We don't sell or share your data."

---

## Self-Audit Against Constraints

- ✅ No fabricated results — every email is diagnostic, not promotional
- ✅ Uses verbatim buyer language from Pythia's research where applicable
- ✅ CTA proportionate to band (A/B get call, C/D get resources only)
- ✅ Honest scarcity (at capacity message is real, not manufactured)
- ✅ Teaches something useful even if they never hire us
- ✅ No jargon without explanation
- ✅ One primary action per email
- ✅ Subject line matches body promise

---

**Status:** ✅ Complete — ready for automation engineer to implement
**Next:** Nova wires these into the n8n assessment pipeline
**Owner:** Iris (Content & Marketing Lead)
