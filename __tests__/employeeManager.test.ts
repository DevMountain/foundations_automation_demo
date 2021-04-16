import { Builder, Capabilities } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

import { empVerify } from '../src/empVerify'

beforeEach(async () => {
    await (await driver).get('http://localhost:3000/')
})
afterAll(async () => {
    await (await driver).quit()
})

test('Verify Each Employee', async () => {
    // Now we want to use that empVerify function that we wrote in another file
    await empVerify(driver, 1)
})