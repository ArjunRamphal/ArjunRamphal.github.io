## 2024-11-03 - [Content Security Policy (CSP) baseline added]
**Vulnerability:** Missing Content Security Policy (CSP) making the application vulnerable to XSS.
**Learning:** For a static React/Vite application, a basic CSP can be added to `index.html`. Using `'unsafe-inline'` and `'unsafe-eval'` are sometimes needed for dev tools like Vite HMR, and explicitly allowing needed domains (e.g. Unsplash for images) prevents breakages.
**Prevention:** Always include a baseline CSP via a `<meta>` tag in `index.html` to provide defense-in-depth against XSS.

## 2024-11-04 - [Harden CSP with strict directives]
**Vulnerability:** Even with a baseline CSP, legacy features can introduce risks like base tag hijacking, plugin-based XSS, and unauthorized form submissions.
**Learning:** Adding explicit restrictions for features not used by the application, such as `base-uri 'self'`, `object-src 'none'`, and `form-action 'none'`, provides a stronger defense-in-depth posture. These directives restrict where base URLs can point, disallow plugins (like Flash/Java), and prevent form submissions to arbitrary endpoints.
**Prevention:** Always consider adding these strict directives to a CSP when the application's architecture permits it, especially for modern, static single-page applications.

## 2024-11-07 - [Harden CSP with upgrade-insecure-requests]
**Vulnerability:** Even when using HTTPS, there's a risk of man-in-the-middle (MitM) attacks or mixed content issues if HTTP resources are inadvertently referenced or if a user accesses the site over HTTP initially.
**Learning:** Adding the `upgrade-insecure-requests` directive to the CSP instructs the browser to treat all of the site's insecure URLs (those served over HTTP) as if they have been replaced with secure URLs (those served over HTTPS). This ensures that all requests are encrypted and helps prevent active network attackers from downgrading connections.
**Prevention:** Always include `upgrade-insecure-requests` in the Content Security Policy to enforce secure connections for all resources and mitigate mixed content vulnerabilities.

## 2024-11-08 - [Referrer-Policy added]
**Vulnerability:** Missing Referrer-Policy allowing the potential leakage of sensitive path information (like query parameters or session IDs in the URL) to external domains when users click external links.
**Learning:** Adding the `<meta name="referrer" content="strict-origin-when-cross-origin" />` directive ensures that when navigating to external domains over HTTPS, only the origin (domain) is sent as the referrer, not the full path, preserving privacy and security.
**Prevention:** Always include a strong Referrer-Policy in the application to prevent data leakage via the Referer header to external, potentially untrusted sites.
