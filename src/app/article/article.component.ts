import { Component, OnInit, Input } from '@angular/core';
import {ArticleData} from '../articleData/ArticleData';
// A exibição do artigo individual, com operaçoes de upvote e downvote
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input()
  article: ArticleData;

  onUpvoteClick() {
    this.article.votos++;
  }

  onDownvoteClick() {
    this.article.votos--;
  }

  constructor() { }

  ngOnInit() {
  }

}
