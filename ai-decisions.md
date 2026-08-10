# AI Interaction Log

## Day 1
**Tool:** Antigravity (Claude)

### Entry 1 — Choosing a project idea
**Prompt:** "I need to think of a tool to build for climate action"
**What it gave me:** Six project ideas: Carbon Footprint Calculator, Tree Planting Tracker, Waste Sorting Guide, Green Commute Planner, Water Usage Monitor, and Climate Pledge Wall.
**What I did with it:** Picked the Waste Sorting Guide because it is practical, easy to build with HTML/CSS/JS, and solves a real problem people face every day.

### Entry 2 — Building the first page
**Prompt:** "Describe the problem and ask it to generate a basic HTML page that starts to address it"
**What it gave me:** A full HTML page with a problem statement about recycling contamination, three climate stats, and a working search tool with 18 waste items in a JavaScript database. Also gave me a styled CSS file with a dark green theme.
**What I did with it:** Kept it as a starting point. Still need to review the code, understand how the JavaScript search works, and check that the stats are accurate.

---

## Day 1 — Daily Lab

### Question 1: What did you manage to build?
I built a Waste Sorting Guide called SortRight. The problem I am trying to solve is that most people do not know how to sort their waste correctly, which leads to about 25% of recycling being contaminated. My prototype has a search box where you type in an item like "pizza box" or "battery" and it tells you the correct bin (recycle, compost, landfill, or special disposal) along with a tip explaining why. It also has a problem statement section and three climate statistics. It is actually further along than I expected — I thought I would only get a basic page layout, but I got a working interactive tool with 18 items already in the database.

### Question 2: What broke or did not work the way you expected?
When Antigravity tried to open a live preview of my page in the browser, it failed because the browser tool could not load local files from my computer. It tried the same thing multiple ways and kept getting blocked. I had to cancel it and open the file myself by right-clicking index.html in my file explorer. This taught me that the AI tool has limits — it can write the code but it cannot always test it for me, so I need to check the output myself.

### Question 3: What did the tool do that you could not control or explain?
The AI chose specific statistics for the page — like "2.01 billion tonnes of waste generated globally" and "1.6 billion tonnes of CO₂ could be reduced." I did not ask for those exact numbers and I do not know yet if they are accurate. It also decided the full visual design on its own: a dark green theme, the card layouts, the hover animations, and the colour scheme. I did not ask for any of those design choices. I also do not fully understand how the JavaScript search matching works — there is a section that does "partial matching" and I need to read through it to understand what it does.

### End of day commitment
Tomorrow I will verify the climate statistics are accurate and learn how the JavaScript search function works so I can explain it.
