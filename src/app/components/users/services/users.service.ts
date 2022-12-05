import {Injectable} from '@angular/core';
import {ApiService} from "../../../service/api.service";

const routerUsers = '/users/';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(private api: ApiService) {
    }

    show(data): any {
        const url = routerUsers + 'show';
        return this.api.get(url, data);
    }

    store(data): any {
        const url = routerUsers + '/store';
        return this.api.post(url, data);
    }

    update(data): any {
        const url = routerUsers + '/update' ;
        return this.api.put(url, data);
    }

    delete(data): any {
        const url = routerUsers + '/' + data.id;
        return this.api.delete(url);
    }

}
