import { IOptions, INewsAndSources } from '../../utilities/interfaces';
import { ResponseStatus } from '../../utilities/enum';

class Loader {
    constructor(private baseLink: string, private options: IOptions) {}

    public getResp(
        { endpoint, options = {} }: { endpoint: string; options?: IOptions },
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    public errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === ResponseStatus.Unauthorized || res.status === ResponseStatus.NotFound)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }

    public makeUrl(options: IOptions, endpoint: string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;
        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });
        return url.slice(0, -1);
    }

    public load(method: string, endpoint: string, callback: (data: Partial<INewsAndSources>) => void, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
