import {Component, OnInit, Input, ɵstringify} from '@angular/core';
import {ArticleData} from '../articleData/ArticleData';

@Component({
  selector: 'app-new-article-form',
  templateUrl: './new-article-form.component.html',
  styleUrls: ['./new-article-form.component.css']
})
export class NewArticleFormComponent implements OnInit {
  @Input()
  articles: ArticleData[];

  addNewArticle(title: HTMLInputElement, link: HTMLInputElement) {
    const newArticle = new ArticleData(link.value, title.value);
    this.articles.push(newArticle);
  }

  constructor() { }

  ngOnInit() {
  }

}
