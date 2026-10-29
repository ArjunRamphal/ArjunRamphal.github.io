## 2024-05-15 - Content Security Policy added to static site
**Vulnerability:** Missing Content Security Policy (CSP) increases risk of Cross-Site Scripting (XSS).
**Learning:** Adding a CSP header or meta tag in a statically generated Vite/React app adds a layer of defense-in-depth without needing a server component.
**Prevention:** Always implement a baseline CSP in index.html for static applications to restrict source loads.
