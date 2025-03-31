import LocationItem from "../objects/LocationItem";
import SearchForm from "./SearchForm";

export default new (class SearchPage {
  search = SearchForm;

  get lblBreadcrumb() {
    return cy.get('div[data-testid="breadcrumbs"]');
  }

  get lblGridTitle() {
    return cy.get('h1[aria-live="assertive"]');
  }

  get allLocationItems() {
    return cy.get('div[data-testid="property-card"]');
  }
  getAllLocationItems() {
    let locationItems = [];
    this.allLocationItems.then((items) => {
      items.each((item) => {
        locationItems.push(new LocationItem(item));
      });
    });

    return locationItems;
  }

  filters = {
    seletcPropertyRating(value) {
      cy.get('div[data-testid="filters-group"]')
        // .contains("Property rating")
        .contains("Categoría del alojamiento")
        .parents('div[data-testid="filters-group"]')
        .find(`div[data-filters-item *= "class=${value}"]`)
        .click();
    },
  };

  getAppliedPropertyRatingFiltersBtn(searchedValue) {
    return cy.get(`button[data-testid="filter:class=${searchedValue}"]`);
  }

  shouldValidatePropertyRatingFiltersBtn(searchedValue) {
    cy.get('button[data-testid="filter-group:filter-group-class"]').should(
      "contain.text",
      searchedValue
    );
  }
})();
