# Aashika Kumari | 3D Interactive Portfolio

This repository contains the source code for my personal 3D interactive portfolio built with **React, TypeScript, Three.js, React Three Fiber, and GSAP**. 

It is designed to provide a cinematic, immersive experience featuring an animated 3D environment, custom audio transitions, responsive scroll animations, and a showcase of my projects in Software Engineering, AI/ML, and Data Analytics.

Live site: [https://aashika-portfolio-ten.vercel.app/](https://aashika-portfolio-ten.vercel.app/)

## ? Features

- **Immersive 3D Experience**: A fully interactive 3D scene rendering powered by React Three Fiber and Three.js.
- **Cinematic Audio**: Custom interactive loading screen that seamlessly transitions into ambient background music (with mute controls).
- **Advanced Animations**: GSAP-powered scroll animations, text reveals, and timeline control for interactive storytelling.
- **Modern UI/UX**: Custom cursor, hover interactions, dark-mode aesthetics, and responsive layout.
- **Dynamic Content**: Dedicated sections for Tech Stack, Projects, Certifications (Microsoft, Data Analytics, Gen AI), and Hackathon Achievements.

## ??? Tech Stack

### Core
- React 18
- TypeScript
- Vite

### Animation and 3D
- GSAP + `@gsap/react`
- Three.js
- `@react-three/fiber` & `@react-three/drei`
- `@react-three/postprocessing`

### Supporting Libraries
- `react-icons`
- `react-fast-marquee`

## ?? Getting Started

### Prerequisites
- Node.js 18+ (recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Aashika31446/my-portfolio.git
   cd 3d-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open the URL shown in the terminal (typically `http://localhost:5173`).

## ?? Available Scripts

- `npm run dev` - Starts Vite dev server.
- `npm run build` - Type-checks and builds a production-ready bundle.
- `npm run preview` - Serves the production build locally.

## ?? Deployment

This project is optimized for deployment on **Vercel**.
1. Push your code to GitHub.
2. Import the repository in Vercel.
3. Vercel will automatically detect **Vite** and configure the build settings (`npm run build` and `dist` folder).

