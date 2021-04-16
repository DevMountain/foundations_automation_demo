import { WebDriver, By } from "selenium-webdriver"
import {empInfo} from './employeeInfo'

export const empVerify = async (driver: WebDriver, empNumber: number) => {
    empNumber = empNumber - 1

    await (await driver.findElement(By.xpath(`//*[text()="${empInfo[empNumber].name}"]`))).click()
    let empName = await driver.findElement(By.name('nameEntry'))
    let empPhone = await driver.findElement(By.name('phoneEntry'))
    let empTitle = await driver.findElement(By.name('titleEntry'))
    let name = await empName.getAttribute('value')
    console.log(`The employee's name is: ${name}`)
    let phone = await empPhone.getAttribute('value')
    console.log(`The employee's phone number is is: ${phone}`)
    let title = await empTitle.getAttribute('value')
    console.log(`The employee's title is: ${title}`)
    expect(name).toBe(empInfo[empNumber].name)
    expect(phone).toBe(empInfo[empNumber].phone)
    expect(title).toBe(empInfo[empNumber].title)

}