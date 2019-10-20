import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    bearerToken: any;

    constructor(
        private http: HttpClient,
    ) {}

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        })
    };

    createUser(user) {

        const body = user;
        return this.http.post('/api/api/user/register', body, this.httpOptions);
    }
}
