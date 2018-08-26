import { Component, OnInit, Input } from '@angular/core';
import {ArticleData} from '../articleData/ArticleData';

@Component({
  selector: 'app-new-article-form',
  templateUrl: './new-article-form.component.html',
  styleUrls: ['./new-article-form.component.css']
})
export class NewArticleFormComponent implements OnInit {
  @Input()
  articles: ArticleData[];
  title: string;
  link: string;

  onChangeTitle(txt: string) {
    this.title = txt;
  }

  onChangeLink(txt: string) {
    this.link = txt;
  }

  onButtonSaveClick() {
    const newArticle = new ArticleData(this.link, this.title);
    this.articles.push(newArticle);
  }

  constructor() { }

  ngOnInit() {
  }

}
