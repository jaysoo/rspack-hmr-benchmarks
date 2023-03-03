import * as cp from 'node:child_process';
import puppeteer from 'puppeteer';

const app = process.argv[2] ?? 'rspack';
const browser = await puppeteer.launch();
const page = await browser.newPage();
const port = app === 'rspack' ? 4200 : 4201;
const maxRetries = 10_000;

const p = cp.exec(`npx nx serve ${app}`);
console.log(`Serve executed for ${app}, waiting for page to load on port ${port}...`);
const start = Date.now();
const end = await getTime();

console.log(`Page loaded. Start-up time: ${end - start}`);

// clean up
await browser.close();
p.kill();
process.exit();

async function getTime() {
  let tries = 0;
  async function inner() {
    try {
      await page.goto(`http://localhost:${port}/`);
      const textSelector = await page.waitForSelector(
        '[data-testid="now"]'
      );
      return textSelector.evaluate(el => el.textContent);
    } catch (e) {
      if (tries > maxRetries) {
        throw e;
      }
      tries++;
      await delay(10);
      return inner();
    }
  }
  return inner();
}

function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}
