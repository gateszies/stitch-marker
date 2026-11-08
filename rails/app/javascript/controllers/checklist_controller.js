import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="current-step"
export default class extends Controller {
  static targets = ["step"]
  connect() {
    this.checkCurrentStep();
  }
  checkCurrentStep() {
    const allItems = this.stepTargets;
    const currentItem  = allItems.find(element => 
      !element.querySelector("input").checked
    );
    allItems.forEach(element => {
      currentItem === element ? element.setAttribute('aria-current', 'step') : element.removeAttribute('aria-current');
    });
  }
}
