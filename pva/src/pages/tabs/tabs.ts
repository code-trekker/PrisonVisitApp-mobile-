import { Component } from '@angular/core';

import { AboutPage } from '../about/about';

import { HomePage } from '../home/home';
import { VisitPage } from '../visit/visit';
import { CommentPage } from '../comment/comment';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = VisitPage;
  tab4Root = CommentPage;

  constructor() {

  }
}
