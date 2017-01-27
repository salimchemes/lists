import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-virtual',
  templateUrl: 'virtual.html'
})
export class VirtualPage {

  properties = [];
  constructor(public navCtrl: NavController) {
    for (let i = 0; i < 1000; i++) {
      this.properties.push({ name: "Test Name" + i, city: "Parana", state: "Entre Rios", imageUrl: "/assets/house.jpg" });
    }
  }
}
