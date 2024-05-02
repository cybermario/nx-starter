import express from 'express';
import cors from 'cors';

const { Builder, By } = require('selenium-webdriver');

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

// CORS configuration
app.use(cors({
  origin: 'http://localhost:4200' // Allow only the Angular app to access
}));

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.post('/api', async (req, res) => {
  const code = req.body;

  try {
    await runSeleniumScript(code);
    res.send('Selenium-Script erfolgreich ausgeführt!');
  } catch (error) {
    res.send(`Fehler beim Ausführen des Selenium-Scripts: ${error.message}`);
  }
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});

async function runSeleniumScript(code) {
  const { Builder, By, Key, until } = require('selenium-webdriver');
  const driver = new Builder().forBrowser('chrome').build();

  try {
    await driver.get("https://kahoot.it/")
    await driver.manage().window().setRect({ width: 1920, height: 1032 })
    await driver.findElement(By.id("game-input")).click()
    await driver.findElement(By.id("game-input")).sendKeys("77862")
    await driver.findElement(By.css(".button__Button-sc-vzgdbz-0")).click()

    {
      const element = await driver.findElement(By.css(".button__Button-sc-vzgdbz-0"))

      await new Promise(resolve => setTimeout(resolve, 10000));

      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }

    // Wait for 10 seconds before quitting the driver
    await new Promise(resolve => setTimeout(resolve, 10000));

    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }

    await driver.findElement(By.id("nickname")).click()
    await driver.findElement(By.id("nickname")).sendKeys("Bot1")
    await driver.findElement(By.css(".button__Button-sc-vzgdbz-0")).click() 
    
    {
      const element = await driver.findElement(By.css(".button__Button-sc-vzgdbz-0"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }

  } finally {
    await driver.quit();
  }
}