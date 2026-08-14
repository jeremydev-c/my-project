# Day 5 Daily Lab Submission: First Interactive Feature & Extension

**Student Name:** Jeremy  
**Course:** Trailblazer Bootcamp 2026 — Module 3, Session 5  
**Project Selected:** SortRight (Nairobi Waste Sorting Guide)  
**Live URL:** https://jeremydev-c.github.io/my-project/  

---

## 1. End-of-Day Commitment (Canvas Paste Text)

> "Today I added interactive JavaScript button click events and location-based waste sorting guidance to my prototype. Tomorrow I will refine the interactive UI feedback, expand item search coverage, and polish user experience across mobile screen sizes."

---

## 2. AI Interaction Log Entry (Day 5 Template)

| Field | Detail |
|---|---|
| **Day** | 5 |
| **Prompt** | "Write a JavaScript event listener for the button with ID 'findAction' that reads the user's input from ID 'location', checks if they typed 'Kibera', 'Westlands', or 'Karen', and displays a neighborhood-specific waste action in the 'actionOutput' div." |
| **Decision** | Accepted |
| **Reason** | I accepted this suggestion because it cleanly connected my static HTML input and button elements to dynamic output text using standard DOM manipulation methods (`getElementById`, `.value`, `textContent`, `addEventListener`) and clear conditional `if / else if` statements without console errors. |

---

## 3. Success Criteria Checklist Verification

| Criterion | What to check | Status | Verification Details |
|---|---|---|---|
| **script.js exists** | File is in the same folder as `index.html` | ✅ PASSED | `script.js` is linked via `<script src="script.js"></script>` at line 111 of `index.html`. |
| **Button works** | Clicking the button produces a visible response without a console error | ✅ PASSED | `button#findAction` reads `input#location` and populates `div#actionOutput` without console errors. `button#findStrategy` and `button#button1` also execute clean click events. |
| **Cursor used** | At least one Cursor prompt used and documented in your AI interaction log | ✅ PASSED | Documented in `ai-decisions.md` (Day 5 template entry). |
| **Committed** | GitHub commit with message `"Day 5: first interactive feature"` exists | ✅ PASSED | Commit `78033f99b40673525f7d01443f2cc343f2feb650` pushed to `main`. |
| **Live URL** | Interaction is visible on the GitHub Pages URL, not just locally | ✅ PASSED | Deployed to [https://jeremydev-c.github.io/my-project/](https://jeremydev-c.github.io/my-project/). |

---

## 4. Stretch Goal Extension

* **Added Second Condition:** Added additional `else if` conditions in `script.js` for "Mathare" and "Githurai" inputs to handle more user location choices.
* **Extension Commit Message:** `"Day 5 extension: second condition added."`
