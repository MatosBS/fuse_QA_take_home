import LocationItem from "../support/objects/LocationItem";
import HomePage from "../support/pageObjects/HomePage";
import SearchPage from "../support/pageObjects/SearchPage";

describe("Home Page", () => {
  let searchedLocation = "New York";

  beforeEach(() => {
    cy.GoToHome();
  });

  it("Should validate user makes a valid search", () => {
    HomePage.search.txtLocation.type(searchedLocation);
    HomePage.search.selectDateFromToday(7);
    cy.intercept("GET", "/searchresults.html*").as("searchResults");
    HomePage.search.btnSearch.click();

    cy.wait("@searchResults").its("response.statusCode").should("eq", 200);

    cy.url().should("include", searchedLocation.replaceAll(" ", "+"));

    SearchPage.lblBreadcrumb.should("be.visible");
    SearchPage.lblBreadcrumb.invoke("text").should("include", searchedLocation);

    SearchPage.lblGridTitle.should("contain.text", searchedLocation);

    cy.get('div[data-testid="property-card"]').each(($el) => {
      const locationItem = new LocationItem(cy.wrap($el));
      locationItem.lblLocation.should("contain.text", searchedLocation);
      locationItem.lblLocation.should("be.visible");
    });
  });
});
