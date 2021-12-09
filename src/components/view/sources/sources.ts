import './sources.css';

import { SourcesTypes } from '../../../utilities/types';

class Sources {
    public draw(data: Array<SourcesTypes>) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
        const sources = document.querySelector('.sources') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);
            const sourceItemName = (sourceClone as HTMLElement).querySelector(
                '.source__item-name'
            ) as HTMLTemplateElement;
            const sourceItem = (sourceClone as HTMLElement).querySelector('.source__item') as HTMLTemplateElement;

            sourceItemName.textContent = item.name;
            sourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        sources.append(fragment);
    }

    public showSources() {
        const burger = document.getElementById('burger') as HTMLElement;
        const titleWrap = document.getElementById('title-wrap') as HTMLElement;
        const sources = document.getElementById('sources') as HTMLElement;
        titleWrap.addEventListener('click', () => {
            burger.classList.toggle('active');
            sources.classList.toggle('active');
        });
    }
}

export default Sources;
