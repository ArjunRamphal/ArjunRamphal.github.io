## 2025-02-23 - Add Baseline CSP
**Vulnerability:** Missing Content Security Policy in static Vite/React app
**Learning:** A baseline CSP is essential to mitigate XSS risks by restricting the sources of executable scripts, styles, and other resources.
**Prevention:** Maintain a baseline CSP via a `<meta>` tag in `index.html`.
