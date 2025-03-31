export default class LocationItem {
  constructor(divItem) {
    this.divItem = divItem;
  }

  get lblLocation() {
    return this.divItem.get('span[data-testid="address"]');
  }
}
