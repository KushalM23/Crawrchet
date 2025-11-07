# Product Requirements Document (PRD): Crawrchet Portfolio

## 1. Introduction

**Project Name:** Crawrchet
**Project Type:** Single-Page Application (SPA) Portfolio Website

**Project Overview:**
Crawrchet is a single-page portfolio website designed to showcase the crochet work of "Smirah." The website functions as a vertical "slideshow," where scrolling guides the user through different project pages. It begins with a striking landing page, moves through individual project showcases, and concludes with a contact information page. The user experience is intended to be smooth, visually-driven, and interactive.

## 2. Goals & Objectives

* **Primary Goal:** To create a visually compelling and modern online portfolio to showcase crochet items.
* **Secondary Goal:** To provide a simple and elegant way for potential customers or followers to view the work and get in touch.
* **User Experience Goal:** To deliver a smooth, immersive, and interactive scrolling experience that feels like a curated gallery.

## 3. Target Audience

* Potential customers interested in purchasing or commissioning crochet items.
* Followers of Smirah's work from social media (e.g., Instagram).
* Fellow crochet artists or craft enthusiasts.

## 4. Technology Stack

* **Frontend:** React (using Vite for tooling)
* **Styling:** (To be determined, e.g., Tailwind CSS, CSS Modules, Styled Components)
* **Animation:** (To be determined, e.g., Framer Motion, GSAP, or CSS Transitions/Animations)

---

## 5. Functional Requirements

### FR-1: Single-Page Application (SPA) Structure

* **FR-1.1:** The entire website must exist on a single HTML page.
* **FR-1.2:** Navigation between sections (Landing, Projects, Contact) must be controlled by vertical scrolling.
* **FR-1.3:** Each "page" or section should snap to the viewport, filling the full screen as the user scrolls.

### FR-2: Global Elements

* **FR-2.1:** **Animated Elements:** Subtle, animated crochet-themed elements (e.g., small yarn balls, crochet hooks) should float or drift gently across the screen throughout the user's session. These should not obstruct primary content.

### FR-3: Page 1 - Landing Page

* **FR-3.1:** **Background:** A high-quality picture of a crochet item.
* **FR-3.2:** **Overlay:** A translucent white layer must be placed over the background image to ensure text readability.
* **FR-3.3:** **Text Content:**
    * Primary Text: "Crawrchet" (displayed in a large, bold, serif font).
    * Secondary Text: "Ft. Smirah" (displayed below or near the primary text).
    * Call to Action: "scroll down" (or an icon) must be present at the bottom of the page to prompt user action.

### FR-4: Pages 2-N - Project Showcase

* **FR-4.1:** **Layout:** Each project page must feature a full-screen, high-quality picture of a single crochet item.
* **FR-4.2:** **Info Card:**
    * A small, non-obtrusive card must be present on each project page.
    * **Content:**
        * Name of the crochet art.
        * Simple details (e.g., "Time to complete: 8 hours," "Materials: 100% cotton yarn").
    * **Positioning:** The card's position (e.g., bottom-right, top-left, center-right) must be different for each project page to create a dynamic feel.
* **FR-4.3:** **Card Hover Interaction:**
    * **Trigger:** When the user hovers their mouse cursor over the info card.
    * **Action 1 (Background):** The main full-screen background image must blur.
    * **Action 2 (Grid Reveal):** A 3x3 grid of additional pictures *of the same project* must be revealed.
    * **Grid Layout:** The info card itself must act as one of the 9 grid elements. For example, if the card is in the bottom-right corner, it will become the `(3,3)` element of the revealed grid. The other 8 elements will be new images.
    * **On Hover Out:** The background must un-blur, and the 3x3 grid must hide, returning to the default page view.

### FR-5: Page N+1 - Contact Page

* **FR-5.1:** **Background:** Must use the *same* picture from Page 1 (Landing Page).
* **FR-5.2:** **Overlay:** Must use a translucent white layer, similar to Page 1.
* **FR-5.3:** **Text Content:**
    * Primary Text: "Contact me" (displayed in a large, serif font).
* **FR-5.4:** **Contact Information:**
    * Must include links for Instagram, WhatsApp, and any other relevant platforms.
    * **Format:** Each contact method must be displayed with its corresponding icon, with the username or contact detail listed below the icon.

### FR-6: Navigation & Animations

* **FR-6.1:** **Scroll Transition:** The transition between each full-screen page (on scroll) must be a smooth animation (e.g., fade, slide-in) rather than an instant jump.

---

## 6. Non-Functional Requirements

### NFR-1: Design & Aesthetics

* **NFR-1.1:** **Typography:** The website must exclusively use a clean, elegant serif font family (e.g., Playfair Display, Lora, Garamond).
* **NFR-1.2:** **Color Palette:** The primary palette must consist of neutral tones (e.g., beige, off-white, soft gray). Pink and orange accents should be used sparingly for emphasis (e.g., on hover, for links, or in the floating elements).

### NFR-2: Performance

* **NFR-2.1:** **Image Loading:** All full-screen images and grid images must be optimized for the web.
* **NFR-2.2:** **Lazy Loading:** Images for subsequent pages should be lazy-loaded to ensure the initial (Page 1) load is fast.
* **NFR-2.3:** **Animation Performance:** All animations (scroll transitions, floating elements, hover effects) must be smooth and performant, avoiding jank (stuttering).

### NFR-3: Responsiveness

* **NFR-3.1:** The website must be fully responsive and functional on mobile, tablet, and desktop devices.
* **NFR-3.2:** The scroll-snapping and full-page behavior must work reliably on touch devices.
* **NFR-3.3:** The hover-to-reveal grid interaction (FR-4.3) must be adapted for mobile (e.g., changed to "on tap" for the card).

## 7. Future Considerations (Out of Scope for V1)

* A CMS (Content Management System) for Smirah to add/edit/remove projects without touching code.
* An e-commerce integration or "Shop" page.
* A dedicated blog section for crochet patterns or tutorials.