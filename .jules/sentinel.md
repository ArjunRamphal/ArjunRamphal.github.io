## 2024-11-03 - [Content Security Policy (CSP) baseline added]
**Vulnerability:** Missing Content Security Policy (CSP) making the application vulnerable to XSS.
**Learning:** For a static React/Vite application, a basic CSP can be added to `index.html`. Using `'unsafe-inline'` and `'unsafe-eval'` are sometimes needed for dev tools like Vite HMR, and explicitly allowing needed domains (e.g. Unsplash for images) prevents breakages.
**Prevention:** Always include a baseline CSP via a `<meta>` tag in `index.html` to provide defense-in-depth against XSS.

## 2024-11-04 - [Harden CSP with strict directives]
**Vulnerability:** Even with a baseline CSP, legacy features can introduce risks like base tag hijacking, plugin-based XSS, and unauthorized form submissions.
**Learning:** Adding explicit restrictions for features not used by the application, such as `base-uri 'self'`, `object-src 'none'`, and `form-action 'none'`, provides a stronger defense-in-depth posture. These directives restrict where base URLs can point, disallow plugins (like Flash/Java), and prevent form submissions to arbitrary endpoints.
**Prevention:** Always consider adding these strict directives to a CSP when the application's architecture permits it, especially for modern, static single-page applications.
