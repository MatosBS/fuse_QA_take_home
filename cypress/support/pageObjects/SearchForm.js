export default new (class SearchForm {
  get txtLocation() {
    return cy.get('form input[name = "ss"]');
  }
  get btnDateFrom() {
    return cy.get('form button[data-testid = "date-display-field-start"]');
  }
  get btnDateTo() {
    return cy.get('form button[data-testid = "date-display-field-end"]');
  }
  get btnOcupancy() {
    return cy.get('form button[data-testid = "occupancy-config"]');
  }
  get btnSearch() {
    return cy.get('form button[type = "submit"]');
  }

  getDateBtn(date) {
    return cy.get(`span[data-date="${date}"]`);
  }

  selectDates(checkInDate, checkOutDate) {
    this.btnDateFrom.click();
    cy.get(`button[data-date="${checkInDate}"]`).click();
    this.btnDateTo.click();
    cy.get(`button[data-date="${checkOutDate}"]`).click();
  }

  selectDateFromToday(daysFromToday) {
    this.btnDateFrom.click();

    const currentDate = new Date().toJSON().slice(0, 10);
    const currentDateSpan = this.getDateBtn(currentDate);
    currentDateSpan.click();

    var dateTo = new Date();
    dateTo = dateTo.setDate(dateTo.getDate() + daysFromToday);
    dateTo = new Date(dateTo).toJSON().slice(0, 10);
    const dateToSpan = this.getDateBtn(dateTo);
    dateToSpan.click();
    return {
      dateFrom: currentDate,
      dateTo: dateTo,
    };
  }
})();
