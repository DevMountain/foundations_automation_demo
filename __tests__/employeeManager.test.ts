import { Builder, Capabilities } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

import {empInfo} from '../src/employeeInfo'
import {empVerify} from '../src/empVerify'

beforeEach(async () => {
    await (await driver).get('http://localhost:3000/')
})
afterAll(async () => {
    await (await driver).quit()
})

test('Verify Each Employee', async () => {
    await empVerify(driver, 1)
})