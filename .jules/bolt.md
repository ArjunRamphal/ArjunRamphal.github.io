## 2024-10-31 - Offloading Image Decoding for Lazy Images
**Learning:** Even with `loading="lazy"`, large image assets can cause main-thread blocking (scroll jank) when they eventually enter the viewport and the browser decodes them synchronously.
**Action:** Always pair `loading="lazy"` with `decoding="async"` to ensure the browser offloads the decoding work to a background thread, preserving scroll performance and responsiveness.
