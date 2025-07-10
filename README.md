### Purpose

Ideate industry-facing and fan-facing React apps highlighting technical decisions, features, and motorsports relevance.


## AI involvement & Conversation

Copilot was used for this assignment. 

Initially prompted Copilot for suggestions for three different small projects to display.  It suggested:
    - Recipe Explorer
    - Pet Adoption Directory
    - Mini Movie Tracker

Refined the idea to be motorsports-related.  It then suggested:
    - **Race Weekend Scheduler:** A simple dashboard utilized race teams for organizing upcoming race weekends, practice sessions, and team meetings.
    - **Track Condition Tracker:** A compact app that shows weather, surface conditions, and recent incidents for selected circuit
    - **Performance Insights Dashboard:** Lightweight analytics tool showing tire usage, lap times, and sector comparisons over a race weekend.

Further prompted it to include fans and spectators:
    - **Live Race Companion App:** A second-screen experience for following live races with fan-centric features such as Real-time lap tracker (via API or mock data), Embedded team radio clips or live commentary, Interactive leaderboard: tap driver to get career stats.
    - **Fan Garage:** A personal dashboard where users curate their favorite drivers, teams, liveries, and race memories.
    - **Motorsports Media Hub:** Streamline motorsports content—YouTube interviews, TikToks, podcasts—all in one React app. 


## Baseline Architecture per Project Technical Requirements

![file-tree](https://github.com/user-attachments/assets/912d8805-f258-4565-84b0-815616678ca4)



### Components Detail

**header.jsx -** Displays title, navigation links, and dark mode toggle
**footer.jsx -** Fixed bottom layout element
**project-card.jsx -** Displays individual project with title, description, and tag badges
**project-filter.jsx -** Dropdown for filtering projects by tag
**tag-badge.jsx -** Styled badge for tags (e.g. "Motorsports", "React")
**page-wrapper -** Theme-compatible layout wrapper for pages
**contact-form -** Controlled form for user messages + success modal
**github-activity.jsx-** Fetches and displays GitHub repos related to motorsports work 


### Routing

Three routed views were created:
    - **home.jsx**
    - **skills.jsx**
    - **contact.jsx**


### Interactivity

Three features that use state:
    - **Project filtering**
    - **Dark/light mode**
    - **Contact form**

### Styles

A combination of inline and styled-components were used.


## Project Postmortem

Working with Copilot was a pleasant experience overall.  However, I did notice one hallucianation (?).  When asking Copilot show full code, then to refactor that code with a change, it would give me a variation.  I realized I needed to paste existing code and ask it to refactor that to ensure only the refactor was returned. 
DME.md…]()


### Components Detail

**header.jsx -** Displays title, navigation links, and dark mode toggle
**footer.jsx -** Fixed bottom layout element
**project-card.jsx -** Displays individual project with title, description, and tag badges
**project-filter.jsx -** Dropdown for filtering projects by tag
**tag-badge.jsx -** Styled badge for tags (e.g. "Motorsports", "React")
**page-wrapper -** Theme-compatible layout wrapper for pages
**contact-form -** Controlled form for user messages + success modal
**github-activity.jsx-** Fetches and displays GitHub repos related to motorsports work 


### Routing

Three routed views were created:
    - **home.jsx**
    - **skills.jsx**
    - **contact.jsx**


### Interactivity

Three features that use state:
    - **Project filtering**
    - **Dark/light mode**
    - **Contact form**

### Styles

A combination of inline and styled-components were used.


## Project Postmortem

Working with Copilot was a pleasant experience overall.  However, I did notice one hallucianation (?).  When asking Copilot show full code, then to refactor that code with a change, it would give me a variation.  I realized I needed to paste existing code and ask it to refactor that to ensure only the refactor was returned. 
