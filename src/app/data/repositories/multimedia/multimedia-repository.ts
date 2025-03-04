import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Multimedia } from '../../models/multimedia/multimedia.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../../models/api-response.model';

@Injectable({
    providedIn: 'root'
})
export class MultimediaRepository {
    private apiUrl = `${environment.apiUrl}/multimedia`;

    constructor(private http: HttpClient) {}

    getAll(): Observable<Multimedia[]> {
        return this.http.get<ApiResponse<Multimedia[]>>(this.apiUrl).pipe(
            map((response) => {
                return response.data;
            })
        );
    }

    getById(id: number): Observable<Multimedia> {
        return this.http.get<ApiResponse<Multimedia>>(`${this.apiUrl}/${id}`).pipe(
            map((response) => {
                return response.data;
            })
        );
    }

    create(multimedia: Multimedia): Observable<Multimedia> {
        return this.http.post<ApiResponse<Multimedia>>(this.apiUrl, multimedia).pipe(
            map((response) => {
                return response.data;
            })
        );
    }

    update(id: number, multimedia: Multimedia): Observable<Multimedia> {
        return this.http.put<ApiResponse<Multimedia>>(`${this.apiUrl}/${id}`, multimedia).pipe(
            map((response) => {
                return response.data;
            })
        );
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

}
