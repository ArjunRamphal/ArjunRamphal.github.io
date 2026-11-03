## 2024-05-18 - Decorative Images in Cards
**Learning:** Images inside cards that are accompanied by a descriptive heading (e.g., project titles or certification names) can create redundant screen reader noise if given descriptive `alt` text. Making them decorative is a better UX for screen reader users.
**Action:** When a card image does not provide additional context beyond what is already in the card's text, use `alt=""` and `aria-hidden="true"` on the `img` element to remove it from the accessibility tree.
## 2024-05-19 - Accessible React Suspense Fallbacks
**Learning:** Text-only React Suspense fallbacks often lack proper accessibility contexts. When a component asynchronously loads, screen readers might not announce the loading state to users if the fallback element doesn't have an ARIA live region.
**Action:** When implementing a `Suspense` boundary for async components, always provide an accessible fallback by adding `role="status"` and `aria-live="polite"` to the fallback container, alongside a visual indicator (like a spinner).
