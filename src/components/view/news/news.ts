import './news.css';

import { ArticlesTypes } from '../../../utilities/types';

class News {
  public draw(data: Array<ArticlesTypes>) {
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

    news.forEach((item, idx) => {
      const newsClone = newsItemTemp.content.cloneNode(true) as HTMLTemplateElement;
      const newsItem = newsClone.querySelector('.news__item') as HTMLTemplateElement;
      if (idx % 2) newsItem.classList.add('alt');

      const metaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLTemplateElement;
      metaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

      const metaAuthor = newsClone.querySelector('.news__meta-author') as HTMLTemplateElement;
      metaAuthor.textContent = item.author || item.source.name;

      const metaDate = newsClone.querySelector('.news__meta-date') as HTMLTemplateElement;
      metaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

      const descriptionTitle = newsClone.querySelector('.news__description-title') as HTMLTemplateElement;
      descriptionTitle.textContent = item.title;

      const descriptionSource = newsClone.querySelector('.news__description-source') as HTMLTemplateElement;
      descriptionSource.textContent = item.source.name;

      const descriptionContent = newsClone.querySelector('.news__description-content') as HTMLTemplateElement;
      descriptionContent.textContent = item.description;

      const descriptionLink = newsClone.querySelector('.news__read-more a') as HTMLTemplateElement;
      descriptionLink.setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    const hotNews = document.querySelector('.news') as HTMLTemplateElement;
    hotNews.innerHTML = '';
    hotNews.appendChild(fragment);
  }
}

export default News;
