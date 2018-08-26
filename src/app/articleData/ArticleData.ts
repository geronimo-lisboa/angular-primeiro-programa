// Representa os dados do artigo, que serão exibidos pelo
// ArticleListComponent. Um artigo tem link, titulo e votos.
export class ArticleData {
  link: string;
  votos: number;
  titulo: string;

  constructor(_link, _titulo){
    this.link = _link;
    this.votos = 1;
    this.titulo = _titulo;
  }
}
