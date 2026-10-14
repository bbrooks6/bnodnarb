# p1

A small, text-first personal website built with plain HTML, CSS, and JavaScript. It includes a homepage with short and extended bios, notes and blog listings, and an interactive Pomodoro timer demo.

## Preview locally

No build step or package installation is required. Open `src/index.html` in a browser, or serve the `src` directory with any static file server.

The homepage links to these published pages:

- Note: `src/notes/how-i-learn-new-tools.html`
- Blog post: `src/blogs/useful-vibe-coded-apps.html`
- Pomodoro demo: `src/demos/claude-pomodoro.html`

## Project structure

```text
src/
├── index.html
├── assets/
│   ├── css/styles.css
│   └── js/app.js
├── blogs/
│   └── useful-vibe-coded-apps.html
├── demos/
│   ├── assets/
│   │   ├── mascot-done.gif
│   │   └── mascot-work.gif
│   └── claude-pomodoro.html
└── notes/
    └── how-i-learn-new-tools.html
```

## Customize the site

- Edit the bio and homepage listings in `src/assets/js/app.js`.
- Update layout, colors, and responsive styles in `src/assets/css/styles.css`.
- Add note or blog pages under `src/notes/` or `src/blogs/`, then add their titles and relative links to `src/assets/js/app.js`.
- Update the Pomodoro demo in `src/demos/claude-pomodoro.html`. Its mascot GIFs are in `src/demos/assets/`.

## Built with

- HTML
- CSS
- JavaScript

## License

No license is currently included. Add a `LICENSE` file if you intend to grant others permission to use, modify, or distribute this project.
