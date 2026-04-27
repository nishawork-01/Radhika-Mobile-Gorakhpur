# Radhika Mobile Gorakhpur - Website Updates Log

This document tracks all the changes, deployments, and updates made to the Radhika Mobile Gorakhpur website.

## Date: April 26, 2026

### 1. Firebase Deployment & GitHub Push
- **Action**: Deployed the website to Firebase and pushed the code to GitHub.
- **Details**: 
  - Created a production build using `npm run build`.
  - Deployed the build to Firebase Hosting via `npx firebase-tools deploy`.
  - The live website URL: [https://radhika-mobile-ece55.web.app](https://radhika-mobile-ece55.web.app)
  - Resolved a `403 Permission Denied` GitHub error by clearing old credentials.
  - Pushed the latest code (including Firebase configuration, manifest, and favicon files) to the GitHub repository: [https://github.com/nishawork-01/Radhika-Mobile-Gorakhpur](https://github.com/nishawork-01/Radhika-Mobile-Gorakhpur)

### 2. Website Title & SEO Logo Update
- **Action**: Updated the HTML title tag for better Google Search visibility.
- **Details**:
  - Modified the `<title>` tag in `index.html` from `<title>Radhika Mobile Training Institute - Best Mobile Repairing Course in Gorakhpur</title>` to `<title>Home - Radhika Mobile Training Institute Gorakhpur</title>`.
  - Verified the `favicon.png` and `manifest.json` configurations to ensure the website logo appears correctly in Google Search results.
  - Created a new build and successfully deployed the changes to Firebase.
  - Committed and pushed these updates to GitHub.

### 3. Social Media Link Sharing Update
- **Action**: Added Open Graph Meta Tags.
- **Details**: Inserted meta tags in index.html to ensure title and logo display properly when shared on WhatsApp, Facebook, etc.

### 4. Testimonial Avatars Fix
- **Action**: Fixed broken avatar images in the Testimonials section.
- **Details**: Initially used UI Avatars, but as per user request, updated the avatars to use real images of institute members (`about1.png`, `about2.png`, `about3.png`) from the website's assets directory.

## Date: April 27, 2026

### 1. UI Fixes & Media Adjustments
- **Action**: Corrected UI glitches and video positioning.
- **Details**:
  - Removed an empty white badge box on course cards by conditionally rendering the level element in `Courses.jsx`.
  - Fixed video rotation (270 degrees) and framing for sideways videos in the Gallery section (`Gallery.jsx` and `Gallery.module.scss`).
  - Updated student details and student images in the Testimonial component.
  - Minor text adjustments in the About component.
