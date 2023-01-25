export default class HomePage{

    //function to check string is in pascal case(first letter of each workd should be in caps) or not.
    isPascalCase(str) 
    {
        return /^[A-Z ][a-z ]+(?:[A-Z ][a-z ]+)*$/.test(str);
    }

    //function to get each row of whole festival data
    getFestivalData()
    {
        return cy.get("app-festivals ol li");
    } 

    //function to get whole festival data
    getListElement()
    {
        return cy.get("app-festivals ol");
    }
    
}