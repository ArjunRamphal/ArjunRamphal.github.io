## 2024-11-03 - [Content Security Policy (CSP) baseline added]
**Vulnerability:** Missing Content Security Policy (CSP) making the application vulnerable to XSS.
**Learning:** For a static React/Vite application, a basic CSP can be added to `index.html`. Using `'unsafe-inline'` and `'unsafe-eval'` are sometimes needed for dev tools like Vite HMR, and explicitly allowing needed domains (e.g. Unsplash for images) prevents breakages.
**Prevention:** Always include a baseline CSP via a `<meta>` tag in `index.html` to provide defense-in-depth against XSS.
