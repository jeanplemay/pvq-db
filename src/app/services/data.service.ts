import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private data: any;

    constructor(public http: HttpClient) { }

    public load() :Promise<any>  {

        const promise = this.getPromiseData().then( res => {
            this.data = res;
        });
  
        return promise;
    }

    private getPromise(file: string): Promise<any> {
        const salt = (new Date()).getTime();
        return lastValueFrom(this.http.get<any>(environment.apiUrl + 'data/' + file + '?' + salt));
    }

    public getPromiseData(): Promise<any> {
        return this.getPromise("pvq-db.json");
    }

    public getCompes(): any {
        return this.data.compes[0];
    }

    public getPatineurs(): any {
        return this.data.patineurs[0];
    }
}
