@echo off
cd /d "C:\Users\rootf\Documents\augment-projects\Saldamandov1"
echo Current directory: %CD%

echo Adding remote origin...
git remote add origin https://github.com/Root-FTW/PlayaSaldamando.git

echo Adding all files...
git add .

echo Creating initial commit...
git commit -m "Initial commit: Modern Playa Saldamando website with complete features

- Modern responsive design with ocean theme
- Complete website sections: Home, About, Accommodations, Activities, Gallery, Tools, Contact
- Interactive planning tools: Trip calculator, Weather widget, Tide chart, Packing checklist, Distance calculator
- 84+ photo gallery with filtering and lightbox
- SEO optimized with individual page meta tags
- Built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- Fully responsive design for mobile, tablet, and desktop
- 30+ years of business history and authentic information"

echo Setting main branch...
git branch -M main

echo Pushing to GitHub...
git push -u origin main

echo Done!
pause
