import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'd33991ee7c3044eb868894b0f8d1d189', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
