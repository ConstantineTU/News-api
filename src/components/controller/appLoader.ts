import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: 'd073dea73cd74cdca8e7abad55146412', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
