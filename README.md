## How to run the application locally

System Requirements:

Node.js 18.17 or later.
macOS, Windows (including WSL), and Linux are supported.

To create a project, run:  npx create-next-app@latest


To manually create a new Next.js app, install the required packages:  npm install next@latest react@latest react-dom@latest

Open your package.json file and add the following scripts:

```bash
dev: runs next dev to start Next.js in development mode.
build: runs next build to build the application for production usage.
start: runs next start to start a Next.js production server.
lint: runs next lint to set up Next.js' built-in ESLint configuration.
```

## Packages Installation

you can simply install all packages with 
npm i

for specific packages follow as bellow

```bash
# Redux Toolkit
npm install @reduxjs/toolkit
npm install react-redux
```

## Api

for more info refer to  https://spoonacular.com/
for more info refer to  https://developer.edamam.com/


## Deployment

This is a step-by-step guide on how to deploy your Next.js project to Vercel using Git integration.

---- Prerequisites ----

Before you begin, make sure you have the following:

- A Next.js project
- Node.js and npm installed on your local machine
- A Vercel account

---- Steps ----

```bash
# 1. Install the Vercel CLI
npm install -g vercel

# 2. Navigate to your project directory
cd your-nextjs-project

# 3. Initialize Git in your project (if not already initialized)
git init

# 4. Login to Vercel
vercel login

# 5. Link your project to Vercel
vercel

# 6. Push your project to a Git repository
git add .
git commit -m "Initial commit"
git remote add origin <repository-url>
git push -u origin main

# 7. Create a Vercel project from Git
vercel

# 8. Set up environment variables
vercel env add

# 9. Alias (optional)
vercel alias <deployment-url> your-domain-name.vercel.app

# 10. Redeploy (optional)
# If you make changes to your project and want to redeploy, you can simply push your changes to your Git repository. Vercel will automatically redeploy your project.

```
project depolyed with Vercel on https://recipe-project-vert.vercel.app/ link


## Links

Figma ---->

https://www.figma.com/design/Yk69jYZELaUJ3ixEbpe5QS/Recipedia---Landing-Page-(Community)?node-id=0-1&t=Pw941XrYH5tZ60gR-0

https://www.figma.com/design/gjsPGgNUX8GyCULbzorRCH/Food-Recipe-App-(Community)?node-id=1-3&t=5zRcmNdCyqOxNqsJ-0

https://www.figma.com/design/Yk69jYZELaUJ3ixEbpe5QS/Recipedia---Landing-Page-(Community)?node-id=0-1&t=00SCeBaUDFb6Ac5p-0
