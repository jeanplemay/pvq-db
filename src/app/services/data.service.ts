import { Injectable } from '@angular/core';
import * as data from 'data/pvq-db.json';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private data: any;

    constructor() {
        this.data = data;
    }

    public getCompes(): any {
        return this.data.compes[0];
    }

    public getPatineurs(): any {
        return this.data.patineurs[0];
    }
}
