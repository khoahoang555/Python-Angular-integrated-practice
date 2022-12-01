import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { UserModel } from "../class/model/UserModel";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private httpClient: HttpClient) {}

    createNewUser(user: UserModel): Observable<UserModel> {
        return this.httpClient.post<UserModel>('http://localhost:5000/user', user);
    }
}