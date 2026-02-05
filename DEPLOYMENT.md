# Deployment Guide - Wisdom High School Website

## Deploying on Render

### Step 1: Create Render Account
1. Go to [https://dashboard.render.com](https://dashboard.render.com)
2. Sign up or sign in with your GitHub account

### Step 2: Create New Static Site
1. Click **"New +"** button
2. Select **"Static Site"**

### Step 3: Connect Repository
1. Connect your GitHub account if not already connected
2. Select repository: **`darksagae/Wisdom-High-School`**
3. Click **"Connect"**

### Step 4: Configure Deployment
- **Name**: `wisdom-high-school` (or your preferred name)
- **Branch**: `main`
- **Root Directory**: Leave empty (or `.`)
- **Build Command**: Leave empty (this is a static site)
- **Publish Directory**: `public` (this is required - all website files are in the public directory)

### Step 5: Deploy
1. Click **"Create Static Site"**
2. Render will automatically deploy your site
3. You'll get a URL like: `https://wisdom-high-school.onrender.com`

### Step 6: Custom Domain (Optional)
1. Go to your site settings in Render dashboard
2. Click **"Custom Domains"**
3. Add your domain name
4. Follow DNS configuration instructions

## Notes
- The `render.yaml` file is already configured in the repository
- Render will automatically redeploy when you push changes to the `main` branch
- Free tier includes automatic SSL certificates
- Free tier sites may spin down after inactivity (takes a few seconds to wake up)

## Troubleshooting
- If images don't load, check that all paths are relative (they should be)
- Ensure all gallery images are committed to the repository
- Check Render build logs if deployment fails

