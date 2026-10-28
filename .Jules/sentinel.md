## 2024-10-28 - Missing Content Security Policy (CSP)
**Vulnerability:** The application was missing security headers, specifically Content-Security-Policy, leaving it more vulnerable to XSS and data injection attacks.
**Learning:** React applications built with Vite for static deployment still benefit from a `<meta>` tag CSP to restrict origins for scripts, images, and connections. The `unsafe-inline` was needed for some Vite/React dev/build behaviors in a static context without a server injecting nonces.
**Prevention:** Include a baseline CSP in `index.html` as a defense-in-depth measure to restrict data/image sources (e.g., Unsplash) and mitigate malicious script execution.
