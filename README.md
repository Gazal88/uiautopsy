# UI Autopsy

UI Autopsy is an advanced, automated UX analysis tool designed to streamline the design review process. By analyzing interface screenshots, it rapidly identifies usability flaws, provides a comprehensive UX score, and outlines actionable redesign concepts.

## Live Demo
🚀 **[View Live Demo on Vercel](https://uiautopsy.vercel.app/)**

## Features

- **Instant UX Analysis**: Upload any interface screenshot to expose usability issues.
- **Detailed UX Scoring**: Get a quantifiable UX score (0-100) based on multiple parameters like Visual Hierarchy, Clarity, Accessibility, and Consistency.
- **Heatmap Visualization**: Understand where users will focus their attention first.
- **Redesign Concepts**: Receive structured layout suggestions for a clean, modern redesign based directly on the detected issues.
- **Responsive Dashboard**: View all results in a beautiful, futuristic dashboard.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file in the root directory and add your API keys.

```bash
GROQ_API_KEY=your_groq_api_key_here
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Usage

1. Navigate to the main page.
2. Click the upload area or drag and drop a screenshot of the UI you want to analyze.
3. Wait a few moments while the tool processes the image and performs a detailed analysis.
4. Review the generated UX score, specific issues found, category breakdowns, heatmap focus areas, and the suggested redesign layout.

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- Framer Motion
- Lucide Icons

