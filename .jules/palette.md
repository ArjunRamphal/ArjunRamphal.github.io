## 2024-11-02 - Cohesive visual feedback for keyboard users
**Learning:** Keyboard users traversing interactive elements inside cards can miss visual contextual cues if hover effects are only triggered by mouse events.
**Action:** When adding hover effects (like shadows or scaling) to card components, use Tailwind's `group` on the parent and pair `group-hover:*` with `group-focus-within:*` on child elements. This ensures focusing on internal links scales/modifies the child elements similarly to hovering over the entire card.
