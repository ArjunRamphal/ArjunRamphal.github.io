## 2024-10-31 - [Missing Content Security Policy]
**Vulnerability:** The application lacks a Content Security Policy (CSP) header or meta tag.
**Learning:** This static Vite/React application relies entirely on client-side rendering without CSP protections, leaving it exposed to XSS vulnerabilities and unauthorized resource loading.
**Prevention:** Always maintain a baseline Content Security Policy (CSP) via a `<meta>` tag in `index.html` to mitigate XSS risks in static Vite/React applications.
