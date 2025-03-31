import LocationItem from "../support/objects/LocationItem";
import HomePage from "../support/pageObjects/HomePage";
import SearchPage from "../support/pageObjects/SearchPage";

describe("Results list Page", () => {
  let searchedLocation = "New York";

  beforeEach(() => {
    cy.GoToHome();
    HomePage.search.txtLocation.type(searchedLocation);
    HomePage.search.selectDateFromToday(1);
    cy.intercept("GET", "https://www.booking.com/searchresults*").as(
      "searchResults"
    );
    HomePage.search.btnSearch.click();

    cy.wait("@searchResults").its("response.statusCode").should("eq", 200);
  });

  it("Should validate new search is made when user select a different date", () => {
    cy.intercept("GET", "https://www.booking.com/searchresults*").as(
      "newSearchResults"
    );
    const dates = SearchPage.search.selectDateFromToday(6);
    SearchPage.search.btnSearch.click();

    cy.wait("@newSearchResults").then((req) => {
      expect(req.response.statusCode).to.eq(200);
      expect(req.request.url).to.include(
        `checkin=${dates.dateFrom}&checkout=${dates.dateTo}`
      );
    });
  });

  it("Should validate user selects an option in Property rating filter", () => {
    SearchPage.filters.seletcPropertyRating(1);

    SearchPage.getAppliedPropertyRatingFiltersBtn(1).should("be.visible");
  });

  it("Should validate user selects two options in Property rating filter", () => {
    SearchPage.filters.seletcPropertyRating(1);
    SearchPage.filters.seletcPropertyRating(3);

    SearchPage.shouldValidatePropertyRatingFiltersBtn(2);
  });
});
