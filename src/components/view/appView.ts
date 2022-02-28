import News from './news/news';
import Sources from './sources/sources';
import { INewsAndSources } from '../../utilities/interfaces';

export class AppView {
  news: News;

  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data: Partial<INewsAndSources> | undefined) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  public drawSources(data: Partial<INewsAndSources> | undefined) {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }

  public startBurger() {
    const sources = document.getElementById('sources') as HTMLElement;
    const burger = document.getElementById('burger') as HTMLElement;
    window.addEventListener('load', () => {
      sources.classList.add('active');
      burger.classList.add('active');
    });
    this.sources.showSources();
    this.sources.showBtnToTop();
  }
}

export default AppView;
