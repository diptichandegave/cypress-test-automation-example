Prerequisite:

Node.js should be installed on machine.
Setup https://github.com/EATechnology/ea-coding-test-samples/tree/main/web this project and make sure 
URL is up and running in browser.

To execute the automation suite:

- Clone this repo
- `npm install` to install all req'd dependencies
- `npm run generateHTMLReport` to generate BDD reports
- `./node_modules/.bin/cypress open` to open cypress
- `./node_modules/.bin/cypress run` to run test suite in cypress

- While opening cypress if getting following errors then please follow below steps.
1. If getting error about execution policy then
	i. 	Open Windows Powershell with Run as Administrator
	ii. Run command Set-ExecutionPolicy RemoteSigned
	iii.Type 'Yes' 
	iv. Again try running ./node_modules/.bin/cypress open
	
2. If getting error Cypress Verification Timed out then follow below steps.
	i. At first just close the vscode and then after opening again try running ./node_modules/.bin/cypress open
	ii. If not then run npx cypress verify command.
	
	
- Feature Files should be under `cypress-test-automation-example\cypress\integration\features\*.feature*`.
- Step definitions should be kept under `cypress-test-automation-example\cyprss\support\step_definitions\*.js`.
- Config File should be kept under the folders `cypress-test-automation-example\cypress\plugins\index.js`.
- Page Object Models can be found under `cypress-test-automation-example\cypress\support\pages\*.js`.
- Reports are generated under `cypress-test-automation-example\cypress\reports\*.xml` after test execution.
- Results of the Reports are generated under `cypress-test-automation-example\cypress\results\cucumber-json\*.json` after test execution
- Videos of Test Execution generated under `cypress-test-automation-example\cypress\videos\features\*.feature.mp4` after test execution.	
