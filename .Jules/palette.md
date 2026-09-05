## 2025-03-01 - Repetitive Call-To-Action Accessibility
**Learning:** In list or grid components (like project cards or certification lists), identical link text such as "View Code" or "View Details" creates a poor experience for screen reader users who navigate by links, as they lose the context of which item the link belongs to.
**Action:** When implementing generic CTA buttons in mapped lists, use `aria-label` to inject dynamic context (e.g., `aria-label="View code for ${project.title}"`) to ensure each link is uniquely identifiable while maintaining a clean visual design.
## 2025-03-02 - Skip to Content Links
**Learning:** Users who rely on keyboard navigation can find it tedious to tab through all navigation elements (like social links in a hero section) before reaching the main content.
**Action:** Implement a "Skip to main content" link at the very top of the DOM that is visually hidden (`sr-only`) but becomes visible and functional upon receiving focus (`focus:not-sr-only`), targeting the main content area ID.
## 2025-03-03 - Decorative Image Accessibility
**Learning:** Screen readers announce images by default if they have an `alt` attribute. However, purely decorative background images (like large hero backgrounds) create unnecessary audio clutter and can distract from the main content. Simply providing an empty `alt=""` is sometimes insufficient depending on the context and screen reader.
**Action:** When adding images that are strictly decorative and add no semantic value, explicitly include `alt=""` and `aria-hidden="true"` to ensure they are completely removed from the accessibility tree.
## 2025-03-04 - Redundant Alt Text in Cards
**Learning:** In card components where an image is immediately followed by a heading containing the same text (e.g., `alt={project.title}` followed by `<h3>{project.title}</h3>`), screen readers announce the title twice. This creates unnecessary audio clutter and degrades the user experience.
**Action:** Treat these images as purely decorative. Use `alt=""` and `aria-hidden="true"` to remove them from the accessibility tree, relying on the adjacent text for semantics. When testing these components with RTL, remember to use DOM queries (e.g., `querySelector('img[src="..."]')`) instead of `getByAltText` or `getByRole`.
