import { Component, OnInit, Input } from '@angular/core';
import {ArticleData} from '../articleData/ArticleData';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  @Input()
  articles: ArticleData[];
  constructor() { }

  ngOnInit() {
  }

}
