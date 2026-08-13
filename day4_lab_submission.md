# Day 4 Daily Lab Submission: Research Synthesis, Feature Spec Card & Static HTML

**Student Name:** Jeremy  
**Course:** Trailblazer Bootcamp 2026 — Module 1, Session 4  
**Project Selected:** Project 2: Climate and Local Environment Action (Nairobi Waste Sorting)  
**Live URL:** https://jeremydev-c.github.io/my-project/  

---

## 1. AI Synthesis Partner Activity

### Research Summary Pasted:
> Nairobi generates 3,000 tonnes of waste daily with only 40% formally collected. Plastic waste clogs storm drains in informal settlements, causing deadly flash floods (66+ deaths in March 2026). While recycling hubs exist (Zero Waste Kenya, TakaTaka Solutions), their information is buried in adult-focused PDF reports and social media pages. Interviewee Brian (16, Kibera) confirmed students want to recycle but get lost navigating outdated PDF maps on their phones.

### Top Three Patterns Identified by AI Partner:
1. **Fragmented & Adult-Centric Information Distribution:** Critical recycling hub details are buried in unreadable PDF files and corporate Facebook pages, ignoring mobile-first youth users.
2. **High Daily Problem Severity vs. Action Gap:** Students in informal settlements experience severe daily flood risks from clogged drains but lack immediate, estate-level waste sorting guidance.
3. **Friction-Induced Inaction:** High student intent to sort waste is derailed by search friction and multi-step navigation across disconnected WhatsApp groups and NGO sites.

### Review & Selection:
* **Kept:** Patterns 1 & 3 — these accurately reflect desktop research and Brian's direct experience.
* **Revised:** Pattern 2 — refined to emphasize that the barrier is access to simple, mobile-optimized, actionable guidance rather than a lack of student environmental awareness.

---

## 2. Finding-to-Insight Statements

### Statement 1
* **Finding:** 60% of Nairobi’s 3,000 tonnes of daily waste goes uncollected, causing plastic to clog storm drains in informal settlements (WRI & JICA Reports).
* **Insight:** Waste accumulation in high-density estates is driven by a lack of accessible household-level sorting guidance and visible neighborhood collection points.
* **Rules Out:** *This rules out creating a generic global climate awareness blog or high-level environmental essay platform that lacks immediate, localized waste sorting actions.*

### Statement 2
* **Finding:** Existing recycling directories (Zero Waste Kenya, TakaTaka Solutions) exist but are scattered across desktop-oriented NGO websites and outdated PDF files (Desktop Research).
* **Insight:** Students require a zero-friction, mobile-optimized lookup tool that delivers instant, single-purpose answers without requiring file downloads or complex navigation.
* **Rules Out:** *This rules out requiring user registration, multi-step onboarding forms, downloadable PDF guides, or external link directories.*

### Statement 3
* **Finding:** User interview with Brian (16, Kibera) revealed students get lost on Facebook pages and WhatsApp groups when trying to find nearby drop-off points.
* **Insight:** Youth-targeted climate tools must focus on direct, query-based strategy matching (entering an item/situation and getting a 1-click disposal strategy).
* **Rules Out:** *This rules out social media sharing feeds, public message boards, or chat forums that introduce noise instead of direct, instant answers.*

---

## 3. Finalised Solution Hypothesis

> **We believe that** secondary school and university students in high-density Nairobi neighbourhoods (such as Kibera, Mathare, Pipeline, and Githurai) **will be able to** correctly sort waste items and locate local drop-off points **by using** a simple, mobile-first web tool with an instant strategy lookup feature (**SortRight**) **because** our research shows that 60% of daily waste is uncollected and students actively want to act but are currently blocked by fragmented, adult-focused NGO websites and outdated PDF guides.

---

## 4. Feature Spec Card (Build Brief)

| Field | Detail |
|---|---|
| **Feature Name** | Waste Sorting & Disposal Strategy Finder |
| **What It Does** | Accepts a waste item or sorting query from the user, matches it against a local disposal database, and returns an instant strategy (Recycle, Compost, Special Drop-off, or Landfill) with practical, neighborhood-specific guidance. |
| **HTML Elements Needed (with IDs)** | • `<input type="text" id="feeling" placeholder="e.g. plastic bottle, pizza box, battery..." autocomplete="off">`<br>• `<button id="findStrategy">Find a strategy</button>`<br>• `<div id="strategyOutput" class="result"></div>` |
| **What Happens on Click** | When the user clicks `button#findStrategy`, JavaScript retrieves the string from `input#feeling`, evaluates it against the waste strategy lookup table, and populates `div#strategyOutput` with the matching category badge, icon, and actionable tips. |
| **Cursor Note** | *"Attach a JavaScript click event listener to `button#findStrategy` and a keypress ('Enter') listener to `input#feeling`. Read the input value, perform exact/partial matching against the wasteData strategy object, and render the output dynamically inside `div#strategyOutput`. Handle empty or unrecognized inputs gracefully with helpful fallback advice."* |

---

## 5. Live Page & Git Commit Verification

* **HTML Structure Added:** `input#feeling`, `button#findStrategy`, and `div#strategyOutput` placed inside `<section id="feature">`.
* **Live GitHub Pages URL:** https://jeremydev-c.github.io/my-project/
* **Git Commit Message:** `Day 4: static feature structure added`
