import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
  private controller: AppController;

  private view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start() {
    const sources = document.querySelector('.sources') as HTMLElement;
    const sourcesContainer = document.getElementById('sources') as HTMLElement;
    const burger = document.getElementById('burger') as HTMLElement;
    sources.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
    sources.addEventListener('click', () => {
      sourcesContainer.classList.remove('active');
      burger.classList.remove('active');
    });
    this.controller.getSources((data) => this.view.drawSources(data));
    this.view.startBurger();
  }
}

export default App;
