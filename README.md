# Cypress Test Automation Example

This project demonstrates how to use cypress test automation framework to test web application. This solution is tested with chrome and electron browsers which covers 
following scenarios.
- Verify when user open the URL it should work properly
- Verify band and festival combination is unique
- Verify each band should have music festival name
- Verify band and festival names follow pascal case format

## Prerequisite:

- Node.js (Download Link : https://nodejs.org/en/download/)
- Chrome
- To launch web application follow instructions on  https://github.com/EATechnology/ea-coding-test-samples/tree/main/web 
- Make sure http://localhost:4200/festivals is up and running

## Cypress Directory Structure	
- Feature Files should be under `cypress-test-automation-example\cypress\integration\features\*.feature*`.
- Step definitions should be kept under `cypress-test-automation-example\cyprss\support\step_definitions\*.js`.
- Config File should be kept under the folders `cypress-test-automation-example\cypress\plugins\index.js`.
- Page Object Models can be found under `cypress-test-automation-example\cypress\support\pages\*.js`.
- Reports are generated under `cypress-test-automation-example\cypress\reports\*.xml` after test execution.
- Results of the Reports are generated under `cypress-test-automation-example\cypress\results\cucumber-json\*.json` after test execution
- Videos of Test Execution generated under `cypress-test-automation-example\cypress\videos\features\*.feature.mp4` after test execution.	

## To execute the automation suite:

- Clone this repository
- Install dependencies
```
cd cypress-test-automation-example
npm install
```
- To run test suite (This will run test suite with default cypress browser Electron in headless mode)
```
npx cypress run
```
- To run test suite with cypress test runner and different browser
	- Open cypress test runner
	```
	npx cypress open
	```
	- Execute test by clicking on feature file in cypress test runner
- To generate BDD report
 ```
 npm run generateHTMLReport
 ```
 - Once test execution is completed, video recording of execution can be found at 'cypress-test-automation-example\cypress\videos\features\' 

## Troubleshooting Steps:
- Below are some of the troubleshooting steps to be followed in case of different errors
1. Error about execution policy
	- Open Windows Powershell with Run as Administrator
	- Run command Set-ExecutionPolicy RemoteSigned
	- Type 'Yes' 
	- Again try running ```npx cypress open```
	
2. Error Cypress Verification Timed out then follow below steps.
	```
		npx cypress verify
	```

3. Error while launching chrome browser in cypress test runner, just try re-running the test
