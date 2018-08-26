import { Component } from '@angular/core';
import {ArticleData} from './articleData/ArticleData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: ArticleData[];

  constructor() {
    this.articles = new Array<ArticleData>();
  }
}
