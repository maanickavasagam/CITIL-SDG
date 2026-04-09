const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    // Catch console errors and page errors
    const errors = [];
    page.on('pageerror', err => errors.push({ type: 'PageError', msg: err.message }));
    page.on('console', msg => {
        if (msg.type() === 'error') errors.push({ type: 'ConsoleError', msg: msg.text() });
    });

    try {
        console.log('Navigating to http://localhost:5174...');
        await page.goto('http://localhost:5174/');

        // Wait a bit to let React render and crash if it's going to
        await page.waitForTimeout(2000);

        console.log('Typing password...');
        await page.fill('input[type="password"]', 'Password@123');

        console.log('Clicking login...');
        const loginBtn = await page.getByRole('button', { name: /Login/i });
        await loginBtn.click();

        // Wait for dashboard to attempt rendering
        await page.waitForTimeout(2000);

        if (errors.length > 0) {
            console.log('\n--- CAPTURED REACT ERRORS ---');
            errors.forEach(e => console.log(`[${e.type}] ${e.msg}`));
        } else {
            console.log('\nNo React errors detected on render.');
            await page.screenshot({ path: 'dashboard_screenshot.png' });
            console.log('Captured dashboard_screenshot.png');
        }

    } catch (e) {
        console.error('Script Error:', e.message);
    } finally {
        await browser.close();
    }
})();
