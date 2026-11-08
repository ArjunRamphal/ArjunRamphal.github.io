## 2024-11-01 - Asynchronous Image Decoding
**Learning:** When lazy-loading large images (`loading="lazy"`), the browser's default behavior is to decode the image on the main thread when it comes into view, which can cause scroll jank.
**Action:** Always pair `loading="lazy"` with `decoding="async"` to ensure the browser offloads the decoding work to a background thread, preventing main-thread blocking and ensuring smoother scrolling.

## 2025-03-01 - Component Memoization
**Learning:** In a React application, static or slow-changing components (like list wrappers, or sections that only display static text and images) can cause unnecessary re-renders when the parent component updates.
**Action:** Wrap these components (e.g. `Projects`, `Skills`, `Certifications`, `Hero`) in `React.memo()` to prevent unnecessary re-renders, thereby improving performance.
