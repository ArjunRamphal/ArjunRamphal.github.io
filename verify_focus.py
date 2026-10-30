from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("http://localhost:5173")
    page.wait_for_timeout(500)

    # Focus the first project card's button to trigger focus-within
    page.locator('a[aria-label^="View code for"]').first.focus()
    page.wait_for_timeout(500)

    # Take a screenshot to show the focus-within shadow and scale
    page.screenshot(path="/home/jules/verification/screenshots/project_card_focus.png")
    page.wait_for_timeout(500)

    # Focus the first certification card's button
    page.locator('a[aria-label^="View details for"]').first.focus()
    page.wait_for_timeout(500)

    # Take another screenshot
    page.screenshot(path="/home/jules/verification/screenshots/cert_card_focus.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos",
            viewport={'width': 1280, 'height': 720}
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
