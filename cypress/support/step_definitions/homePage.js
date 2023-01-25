import { Before, Given, Then, defineStep } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pages/homePage";

let env, url, homePageObj;
//setting environment variables, url  before actual execution.
Before(() => {
    env = Cypress.env('env');
    url = Cypress.env(env).url
    cy.log(`env is ${env}`);
    homePageObj = new HomePage();
});

Given("I open the URL to get music festival data", () => {
    cy.visit(url);
    cy.wait(7000); // wait is added as sometimes loading of data is taking too much time.
});

//Just to check data is loading or not.
defineStep("I verify URL is working", () =>{
    homePageObj.getFestivalData().should("exist");
});

//Each band name should have music festival name if it is empty then test case will fail.
Then("I verify each band should have music festival name", () => {
    let result = 1;
    homePageObj.getListElement().find("li ul li").each(listElement => {
        let text = listElement.text().trim(); 
        if(text.length <= 0)
        {
            result = 0;
            return false;
        }
    }).then(() => {
        expect(result,"TestCase failed as no Festival name is present for : "+homePageObj.getListElement().find("li ul")).to.be.equal(1);
    })
});

// Verifying each band and music festival names following pascal case if not then test case will fail
Then("I verify that all band and music festival names should have pascal case format", () => {
    let allListElements = [];
    let formatedText;
    homePageObj.getFestivalData().each(listElement => {
        let text = listElement.text().trim(); 
        allListElements.push(text); 
    }).then(() => {
        allListElements.forEach((value) => {
            formatedText = homePageObj.isPascalCase(value);
            expect(formatedText,"TestCase failed at :" +value).to.be.true;
            
        });
    });
});

//This is to verify band and music festival pair should appear only once in whole list.
Then("I verify band and music festival combination is unique", () => {
    let allListElements = [];
    homePageObj.getListElement().find('li').each(function(listElement,index){
        let text = listElement.text().trim(); 
        allListElements.push(text);
        if(index % 2 == 0)
        {
            cy.log("allListElements :"+allListElements[index]);
            cy.get('app-festivals ol li:contains('+allListElements[index]+')').should('length',1);
        }
        
    });
});