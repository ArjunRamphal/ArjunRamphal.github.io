## 2024-11-02 - Cohesive visual feedback for keyboard users
**Learning:** Keyboard users traversing interactive elements inside cards can miss visual contextual cues if hover effects are only triggered by mouse events.
**Action:** When adding hover effects (like shadows or scaling) to card components, use Tailwind's `group` on the parent and pair `group-hover:*` with `group-focus-within:*` on child elements. This ensures focusing on internal links scales/modifies the child elements similarly to hovering over the entire card.
## 2024-11-05 - Skip to Content link focus transfer
**Learning:** Skip to content links that simply use an anchor `href` to point to an `id` scroll the page, but screen readers and keyboard users need the actual focus to be moved to the target element. Non-interactive elements like `<main>` cannot naturally receive focus.
**Action:** Always add `tabIndex={-1}` and `className="outline-none"` (or equivalent) to the target container of a skip link (e.g., `<main id="main-content" tabIndex={-1} className="... outline-none">`). This allows the container to receive programmatic focus from the link without breaking the normal tab order or showing an ugly focus ring when clicked.
## 2026-11-06 - Semantic Lists for Visual Tags
**Learning:** Visual tag collections (like skill pills or tech stacks) implemented as divs and spans lack semantic meaning for screen readers, making them harder to understand and navigate.
**Action:** Always use semantic `ul` and `li` tags wrapped with a descriptive `aria-label` for tag collections to provide proper context and structure for assistive technologies.
## 2026-11-08 - Accessible Smooth Scrolling
**Learning:** Adding smooth scrolling (e.g., `scroll-smooth`) can cause issues for users with vestibular disorders if their reduced motion preferences are not respected.
**Action:** When adding smooth scrolling utility classes in Tailwind, always prefix them with `motion-safe:` (e.g., `motion-safe:scroll-smooth`) to ensure it is only applied for users without reduced motion preferences.
## 2024-11-09 - Remove Hover Effects on Static Tags
**Learning:** Adding hover classes (like `hover:bg-gray-100`) to static, non-interactive elements (like technology tags) creates a "false affordance." Users expect these elements to be clickable links or buttons because they react to the mouse, leading to confusion when clicking does nothing.
**Action:** Always ensure that hover and focus styles are exclusively reserved for genuinely interactive elements (links, buttons, inputs) to maintain clear interactive affordances.
## 2026-11-10 - Semantic Lists for Grid Elements
**Learning:** Using simple `div` tags to map repeating visual cards or grids fails to convey structure to screen readers. Users miss out on valuable context like "list, 3 items".
**Action:** When designing a repeating grid of elements, ensure the container uses a `ul` or `ol` tag and individual mapped items use `li` tags to provide a semantic list structure and list metrics to screen readers.
