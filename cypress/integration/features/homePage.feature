Feature: homePage

    Home Page testing scenarios

@happy-path
Scenario: Verify when user open the URL it should work properly
Given I open the URL to get music festival data
Then I verify URL is working      

@regression
Scenario: Verify band and festival combination is unique
Given I open the URL to get music festival data
When I verify URL is working
Then I verify band and music festival combination is unique

@regression
Scenario: Verify each band should have music festival name
Given I open the URL to get music festival data
When I verify URL is working
Then I verify each band should have music festival name

@regression
Scenario: Verify band and festival names follow pascal case format
Given I open the URL to get music festival data
When I verify URL is working
Then I verify that all band and music festival names should have pascal case format
