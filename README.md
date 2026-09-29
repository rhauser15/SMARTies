# Marriott × Agentforce: "Where Are My Points?"

A 10-minute Solutions Foundations presentation built around a **6-minute story-based Agentforce demo** for the mock Marriott International case study.

| | |
|---|---|
| **Customer** | Marriott International (mock case study) |
| **Hero** | Lauren Bailey, Marriott Bonvoy Platinum Elite guest |
| **Helpers** | *Bonvoy Assistant* (Agentforce Service Agent) and Tom (CEC Associate) |
| **Audience** | Sofia (CIO), Suki (VP Customer Service), Mateo (CEC Managing Director), Jess (VP IT) |
| **Core pain** | "Missing Night Stays & Points" = **~35% of 30M cases/year (~10.5M cases)**, submitted through a web form and worked manually across siloed systems |
| **Demo org** | Salesforce SDO trial. Org URL and logins are in `TEAM_LOGINS.md` (local only, never committed) |
| **Front end** | `frontend/`: mock Marriott Bonvoy "My Account" page with an embedded Agentforce chat |
| **Deck** | `slides/Marriott_Agentforce_Demo.pptx` |

---

## 1. Presentation at a glance (10 min)

This follows the **Day 5 Presentation Structure**: Opening 3 min, Story-Based Demo 6 min, Close 1 min.

| Time | Section | Slide(s) | Owner | What happens |
|---|---|---|---|---|
| 0:00–0:30 | **Credential** | 1–2 | _Presenter A_ | Who we are, why we're here |
| 0:30–1:15 | **Attention Grabber** | 3 | _Presenter A_ | "10.5 million times a year, a Marriott guest asks: *where are my points?*" |
| 1:15–3:00 | **Set the Scene: top 3 challenges** | 4–5 | _Presenter B_ | Swivel-chair systems, rising cost to serve, guest loyalty at risk |
| 3:00–9:00 | **Story-Based Demo** (live) | 6 (agenda), then live | _Driver + Narrator_ | 3 chapters, 2 min each (see §2) |
| 9:00–10:00 | **Close** | 7–9 | _Presenter C_ | Value summary, customer story, next steps |

> Rubric check: attention grabber ✔ · top 3 challenges ✔ · live in-product demo ✔ · three key messages ✔ · customer story ✔ · clear next step ✔

### Three key messages (repeat them)
1. **Resolve instantly, 24/7.** Agentforce resolves the #1 request end to end, with no form, no wait, and no queue.
2. **One view of the guest.** When a human is needed, Tom gets the full story and the full guest profile in one screen.
3. **Built for scale, fast.** A trusted, low-code agent that IT can stand up without derailing the ERP rollout.

---

## 2. The 6-minute demo: click path and talk track

**Setup before you start:** see §4. Have these tabs open, in order:
1. **Tab 1:** Mock Bonvoy site (`frontend/index.html` or the hosted URL), logged in as Lauren
2. **Tab 2:** Service Console as **Tom** (see `TEAM_LOGINS.md`), with case `00031847` or the newest Missing Stay case
3. **Tab 3:** Setup → **Agentforce Builder**, with the *Bonvoy Assistant* agent open
4. **Tab 4:** Service dashboard / **Agentforce Command Center** as **Suki** (see `TEAM_LOGINS.md`)

### Chapter 1: The guest helps herself (3:00–5:00) · *Resolve instantly*

| Beat | On screen (click path) | Say |
|---|---|---|
| **Context** | Tab 1, Lauren's *Recent Stays*: two stays show **Not credited** | "This is Lauren. She's Platinum Elite and travels every week. Last week's Austin stay never posted. Today that means a web form and a 5–7 day wait. That's 10 million cases a year." |
| **Feature** | Click **Get help now**, then click the chip *"I'm missing points from my stay in Austin…"* | "Lauren just asks. The Bonvoy Assistant is Agentforce. It already knows who she is because she's signed in." |
| | Watch the **"Looking up stay records"** card | "Behind the scenes it's reading the stay straight from the property system, unified by Data 360. No swivel chair." |
| | Click **Yes, please** and watch the points count up on the page | "It checks policy and credits the 3 nights and 8,450 points, including her Platinum bonus. Watch the balance update." |
| **Benefit** | Points: 142,380 → **150,830**, nights 47 → **50** | "Resolved in under a minute, at 2 a.m. or 2 p.m. No case for an associate to touch. That's where the cost to serve comes down." |

### Chapter 2: The associate has the whole story (5:00–7:00) · *One view of the guest*

| Beat | On screen (click path) | Say |
|---|---|---|
| **Context** | Tab 1: click *"Also my Ritz-Carlton Kyoto stay…"* | "Not everything should be automated. This stay was booked on a third-party site, so the hotel has to confirm the rate." |
| **Feature** | Watch **Handing off to a specialist**. Case `00031847` is created with a summary | "Agentforce knows its limits. It opens the case, summarizes the conversation and routes it to Platinum Elite care." |
| | **Switch to Tab 2 (Tom, Service Console).** Open the case and show: conversation summary, **Guest 360** panel (tier, lifetime nights, stay history), related knowledge article *Missing Stay Policy* | "Here's Tom, our top associate. He doesn't ask Lauren to repeat anything. Her profile, stays and the whole chat are on one screen." |
| | Click **Service Replies** / Einstein draft reply, then **Send** (or read the mock reply on Tab 1) | "Agentforce even drafts the reply in Marriott's voice. Tom reviews it and sends." |
| | *(Optional, 15 sec)* Show the Slack swarm or email to the property front office | "And the property is in the loop. The CEC and the hotel are finally connected." |
| **Benefit** | Tab 1 shows Kyoto as **Under review** | "Handle time drops because there's nothing to search for, and the guest feels known. That's the high-touch experience Suki asked for, at lower cost." |

### Chapter 3: Leaders get control and speed (7:00–9:00) · *Built for scale*

| Beat | On screen (click path) | Say |
|---|---|---|
| **Context** | **Tab 3: Agentforce Builder**, *Bonvoy Assistant* | "Jess, we heard IT is heads-down on ERP. This is how the agent is built." |
| **Feature** | Show the **Topic** *Missing Stays & Points*: plain-English instructions, the **Actions** (*Look Up Stay*, *Credit Missing Stay*, *Escalate to Guest Care*) and the guardrails | "Instructions are written in plain English. Actions reuse the flows and integrations Marriott already has. Trust Layer guardrails keep guest data safe." |
| | **Tab 4 (Suki): Command Center** or Service dashboard showing resolution rate, escalations, AHT and CSAT | "And Suki finally gets visibility: how many conversations the agent resolved, where it hands off, and what that does to handle time and satisfaction." |
| **Benefit** | Pause on the resolution rate / deflection KPI | "Mateo gets associate capacity back for the critical cases, Suki gets cost-to-serve down, and Sofia gets a service model that scales with every new brand." |

**Handoff line to the Close:** *"So what does this mean for Marriott? [Presenter C]…"*

---

## 3. Close (9:00–10:00)

- **Value summary (slide 7):** illustrative model. **Validate the assumptions with Marriott before quoting them.**
  - 10.5M missing-stay cases/yr × 60% agent resolution = **~6.3M cases resolved without an associate**
  - × $5–$6 fully loaded cost per assisted contact (placeholder, replace with Marriott's number) = **~$30–38M/yr** capacity
  - Remaining escalations resolved faster because of full context (Guest 360 + summary)
- **Customer story (slide 8):** a travel/hospitality Agentforce customer. **Pull the current approved slide and stats from the Slackbot *Customer Story & Deal Win Finder* before presenting.** The deck has a placeholder with a suggested story.
- **Next steps (slide 9):** 60-minute workshop with Suki and Mateo to map the top 5 CEC intents, plus a 2-week Agentforce pilot on Missing Stays for one brand.

---

## 4. Demo environment setup checklist

Current org status (checked from the CLI): **Enterprise Edition SDO, trial ends 2026-10-29**. It has licenses for *Agentforce (Default)*, *Data Cloud*, *Service User*, *Messaging User* and *Einstein Prompt Templates*. **The Agentforce/Bots metadata is not yet enabled**, so the steps below are required for the live Salesforce half of the demo.

**Branding**
- [ ] Setup → Themes and Branding → New Theme: Marriott logo and brand color **#B41F3A** (or run the Demo Assist Agent: *"Brand this org theme for Marriott"*)

**Agentforce**
- [ ] Setup → Einstein Setup → **Turn on Einstein**
- [ ] Setup → Agentforce Agents → **Turn on Agentforce**
- [ ] New Agent → **Agentforce Service Agent**, named *Bonvoy Assistant*
  - Topic **Missing Stays & Points**. Instructions: verify the member, look up the stay, credit it if eligible, escalate third-party bookings
  - Actions: *Look Up Stay* (Flow), *Credit Missing Stay* (Flow), *Escalate to Guest Care* (built-in escalation)
- [ ] Assign the **Agentforce Service Agent** permission sets. Activate the agent

**Service Console (Tom)**
- [ ] Log in as Tom's user (PaRTY → reset password), open Service Console
- [ ] Create Missing Stay case `00031847` for **Lauren Bailey** (or let the live agent create it)
- [ ] Add a knowledge article: *Missing Stay & Points Policy*
- [ ] Enable **Service Replies** and **Work Summaries** (licenses present)

**Guest 360 (optional, high impact)**
- [ ] Data 360: a Stay/Folio data model object, or a simple custom object `Stay__c` on Contact, surfaced on the case page

**Channel**
- [ ] *Easiest:* use the **mock chat** in `frontend/` (scripted and reliable)
- [ ] *Live option:* Embedded Service Deployment → Messaging for In-App & Web, routed to the Bonvoy Assistant. Copy `frontend/config.local.example.js` to `frontend/config.local.js` (git-ignored) and paste in the snippet values. Live mode only runs from localhost

**Dashboard (Suki)**
- [ ] Clone an SDO service dashboard. Retitle it for Marriott CEC: resolution rate, AHT, CSAT, cases by channel

**Day-of**
- [ ] Notifications off · tabs preloaded · browser zoom 100–110% · reset the mock site (press **R**) · backup screen recording ready

---

## 5. Running and sharing the mock front end

```bash
python3 -m http.server 8080 --directory frontend
```

Open http://localhost:8080.

- **Presenter controls:** click the suggestion chips, or type anything and press Enter. The script always advances, so a typo can't derail the story. Press **R** (or ↺) to reset.
- **Speed:** change `agentDelay` in `frontend/config.js`.
- **Live Agentforce (local only):** after the Embedded Messaging deployment exists, copy `frontend/config.local.example.js` to `frontend/config.local.js` and fill it in. That file is git-ignored and only loads on localhost, so the public site can never reach the real agent.
- **Sharing with the team:** the public GitHub Pages site runs the **mock only**. It has no AI and makes no API calls, so there is nothing to abuse, and it asks search engines not to index it. The repo root redirects to `frontend/`.

---

## 6. Team access

Logins for every teammate are in **`TEAM_LOGINS.md`**. That file is local only and git ignores it, because passwords must never be committed. Share it over Slack DM or 1Password, not in this repo.

---

## 7. Objection prep (from the case study)

| Objection | Short answer |
|---|---|
| "AI will hurt our high-touch service" (AI skepticism) | The agent resolves the routine request. Humans get *more* time for high-touch moments, and every handoff carries the full context (Chapter 2). |
| "Can it scale and integrate?" | 30M cases across 7 CECs. Actions reuse existing flows and APIs. Data 360 connects PMS and Snowflake with zero copy. |
| "We've invested in homegrown tools" (Jess) | Start with one intent (Missing Stays) as a 2-week pilot. It's low-code, so there's no new build backlog during the ERP rollout. |
| "Change fatigue / adoption" | Associates keep one console instead of many. Agentforce drafts replies and summaries, so there are fewer screens to learn. |
| Zendesk / AI upstarts are faster | Agentforce runs on the same data and CRM Marriott already uses for Sales, so it doesn't bolt on another silo. |

---

## Repo layout

```
.
├── README.md                 ← this file (demo flow)
├── TEAM_LOGINS.md            ← local only, git-ignored
├── index.html                ← redirect to frontend/ (for GitHub Pages)
├── frontend/                 ← mock Marriott Bonvoy site and Agentforce chat
│   ├── index.html
│   ├── styles.css
│   ├── app.js                ← scripted conversation
│   ├── config.js             ← public config (mock mode)
│   └── config.local.example.js ← template for local-only live mode
└── slides/
    ├── build_deck.py         ← regenerates the deck
    └── Marriott_Agentforce_Demo.pptx
```

*Mock scenario for Salesforce SE onboarding. Not affiliated with Marriott International.*
