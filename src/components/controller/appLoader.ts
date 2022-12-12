import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '7ecf71f95f0f428c89a2425bcadb0c19', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
