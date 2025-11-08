# Quick Start Guide

## Installation Steps

1. **Install Node.js** (if not already installed)
   - Download from https://nodejs.org/
   - Verify installation: `node --version`

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm start
   ```

4. **Open Browser**
   - The app will automatically open at http://localhost:3000
   - If not, manually navigate to http://localhost:3000

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (irreversible)

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation bar
│   ├── Home.jsx        # Hero section
│   ├── Courses.jsx     # Courses section
│   ├── Features.jsx    # Features section
│   ├── About.jsx       # About section
│   ├── Testimonials.jsx # Testimonials
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer
├── App.js              # Main app component
└── index.js            # Entry point
```

## Customization

### Change Colors
Edit `src/index.css` and modify CSS variables:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* ... */
}
```

### Update Content
Edit component files in `src/components/` to change text, images, or structure.

### Modify Animations
Animations are handled by Framer Motion. Edit component files to customize animation behavior.

## Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
# Windows
set PORT=3001 && npm start

# Mac/Linux
PORT=3001 npm start
```

### Module Not Found
If you get module errors:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
Clear cache and rebuild:
```bash
npm start -- --reset-cache
```

## Production Build

To create a production build:
```bash
npm run build
```

The build folder will contain optimized production files ready to deploy.

## Deployment

You can deploy to:
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **Any static hosting**: Upload the `build` folder contents

## Need Help?

Check the main README.md for more detailed information.

