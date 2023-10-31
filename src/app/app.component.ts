import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'basics-assignment-3';
  showFish = false;
  buttonClicks: Date[] = [];
  toggleShowFish() {
    this.showFish = !this.showFish;
    this.buttonClicks.push(new Date());
    // console.log('toogleShowFish()')
    // console.log(this.showFish)
  }
}
