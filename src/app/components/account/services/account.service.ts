import { Injectable } from '@angular/core';
import {ApiService} from "../../../service/api.service";

const routerAccount = '/account/';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

    constructor(private api: ApiService) {
    }

    show(): any {
        const url = routerAccount + 'show';
        return this.api.get(url);
    }

    store(data): any {
        const url = routerAccount + 'store';
        return this.api.post(url, data);
    }

    update(data): any {
        const url = routerAccount + 'update' ;
        return this.api.put(url, data);
    }

    delete(data): any {
        const url = routerAccount + '/' + data.id;
        return this.api.delete(url);
    }
}
