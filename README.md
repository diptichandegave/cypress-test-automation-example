## Getting started

###Prerequisite:
1. NodeJs should be installed on machine.
2. install ruby 2.6.6-1(X64) from https://rubyinstaller.org/downloads/
3. install dependency(MSYs2), if not installed during RUBY installation, run below command:
  1. ridk install
4. install nokogiri
  1. gem install nokogiri
5. install hiptest-publisher
  1. gem install hiptest-publisher

To execute the automation suite:

- Clone this repo
- `npm install` to install all req'd dependencies
- `npm run getFeatureFiles --test-run-id=407464` to pull the feature files from HipTest/CucumberStudio (Replace 402901 with run id)
- `npm run testE2E -- --env env='qa' --headed --browser chrome` to run the cypress test using command line
- `npm run generateHTMLReport` to generate BDD reports

- To run from cypress runner, run command :  ./node_modules/.bin/cypress open
