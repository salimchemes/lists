import { Component } from '@angular/core';

import { InfinitPage } from '../infinit/infinit';
import { RegularPage } from '../regular/regular';
import { VirtualPage } from '../virtual/virtual';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = InfinitPage;
  tab2Root: any = RegularPage;
  tab3Root: any = VirtualPage;

  constructor() {

  }
}
