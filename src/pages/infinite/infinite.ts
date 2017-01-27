import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-infinite',
  templateUrl: 'infinite.html'
})
export class InfinitePage {
  private start: number = 0;
  private iteration: number = 0;
  properties = [];
  constructor(public navCtrl: NavController) {
    for (let i = 0; i < 50; i++) {
      this.properties.push({ name: "Test Name " + i, city: "Parana", state: "Entre Rios", imageUrl: "assets/house.jpg" });
    }
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    this.start += 50;
    this.iteration += 1;

    setTimeout(() => {
 
      for (let i = 0; i < 50; i++) {
        this.properties.push({ name: "Test Name " + i + " scroll# " + this.iteration, city: "Parana", state: "Entre Rios", imageUrl: "assets/house.jpg" });
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 3000);
  }


}
