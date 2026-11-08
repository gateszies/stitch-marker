import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="current-step"
export default class extends Controller {
  static targets = ["step"]
  static values = { patternId: Number }

  connect() {
    this.restore();
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
  save() {
    const allItems = this.stepTargets;
    const isChecked  = allItems.map(element => 
      element.querySelector("input").checked
    );
    const checkedJson = JSON.stringify(isChecked);
    localStorage.setItem(`pattern_${this.patternIdValue}`, checkedJson);
  }
  restore() {
    const checkedJson = localStorage.getItem(`pattern_${this.patternIdValue}`);
    const isChecked = JSON.parse(checkedJson);
    if (!isChecked) return;

    isChecked.forEach((checked, index) => {
      this.stepTargets[index].querySelector("input").checked = checked;
    });
  }
}
