# Copilot Instructions - Portfolio Website

## Project Overview
This is a **static portfolio website** for an AI/IoT Engineer, built with vanilla HTML, CSS, and JavaScript. Hosted on GitHub Pages with no build system—files in `public/` are served directly.

## Architecture

### File Structure
```
public/
├── index.html      # Single-page app with all sections (hero, about, projects, etc.)
├── css/styles.css  # All styles with CSS custom properties for theming
├── js/
│   ├── data.js     # Data arrays: projects[], certifications[], experiences[]
│   └── main.js     # DOM manipulation, event handlers, component rendering
└── images/         # Static assets (profile photo, project images)
```

### Key Architectural Decisions
- **No bundler/framework**: Pure ES6 JavaScript with global functions, no modules
- **Data-driven rendering**: Content in `data.js` arrays is rendered dynamically by `main.js`
- **CSS Custom Properties**: Theme switching via `.dark-theme` class toggling CSS variables
- **External CDNs**: AOS animations, Particles.js, Font Awesome, Pageclip forms

## Development Workflow

### Running Locally
1. Open `public/index.html` with VS Code Live Server extension
2. No npm/build step required—just serve static files

### Adding New Content
- **Projects**: Add object to `projects[]` in [js/data.js](public/js/data.js) with structure:
  ```js
  { id, title, description, technologies: [], featured: boolean, github?, demo? }
  ```
- **Certifications**: Add to `certifications[]` with `{ id, title, issuer, date, iconName, colorClass }`
- **Experiences**: Add to `experiences[]` following existing timeline item structure

## Code Patterns

### Theme System
Uses CSS custom properties in `:root` and `.dark-theme` selectors in [styles.css](public/css/styles css#L1-L35):
```css
:root { --primary-color: #4361ee; --bg-color: #ffffff; }
.dark-theme { --bg-color: #121212; }
```
Theme toggle persists to `localStorage.getItem('theme')`.

### Dynamic Rendering Pattern
Components are rendered via `createXxxCard()` functions in `main.js`:
- `createProjectCard(project)` → renders project cards
- `createCertificationCard(cert)` → renders certification cards
- `createTimelineItem(exp)` → renders experience timeline

### Filtering Pattern
Project filtering uses `data-filter` attributes on buttons matched against `.tech-tag` content inside cards.

## Conventions

### CSS Naming
- Section classes: `.section-bg`, `.container`
- Component classes: `.project-card`, `.cert-card`, `.timeline-item`
- Button variants: `.primary-btn`, `.outline-btn`, `.secondary-btn`
- State classes: `.active`, `.dark-theme`

### JavaScript
- All initialization in `initApp()` calling individual `initXxx()` functions
- DOM queries use `document.querySelector`/`querySelectorAll`
- Event delegation not used—direct event listeners on elements

### Accessibility
- ARIA labels on interactive elements
- `aria-pressed` states on filter buttons
- Keyboard navigation support for filters (arrow keys)

## External Dependencies (CDN)
| Library | Purpose |
|---------|---------|
| AOS | Scroll-triggered animations (`data-aos` attributes) |
| Particles.js | Hero section background effects |
| Pageclip | Contact form submission handling |
| Font Awesome 6.4 | Icons (`fa-*` classes) |

## Important Files
- [public/index.html](public/index.html) - Main HTML structure, SEO meta tags, structured data
- [public/js/data.js](public/js/data.js) - All portfolio content (projects, certs, experience)
- [public/js/main.js](public/js/main.js) - Application logic and DOM rendering
- [public/css/styles.css](public/css/styles.css) - Complete styling with theme variables
