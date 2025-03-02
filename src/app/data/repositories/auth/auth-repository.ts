import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AccessToken, LoginCredentials } from '../../models/auth/login.model';
import { Observable } from 'rxjs';
import { MeResponse, UserModel } from '../../models/auth/me.models';
import { ApiResponse } from '../../models/api-response.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class AuthRepository {
    private  apiUrl = `${environment.apiUrl}/auth`;

    constructor(private http: HttpClient) {}

    login(credentials: LoginCredentials): Observable<AccessToken> {
        return this.http.post<ApiResponse<AccessToken>>(`${this.apiUrl}/login`, credentials).pipe(
            map((response) => {
                if (!response.success) {
                    throw new Error(response.message);
                }
                return response.data;
            })
        );

    }

    me(): Observable<ApiResponse<UserModel>> {
        return this.http.get<ApiResponse<UserModel>>(`${this.apiUrl}/user`).pipe(
            map((response) => {
                if (!response.success) {
                    throw new Error(response.message);
                }
                return response;
            })
        );
    }

}
