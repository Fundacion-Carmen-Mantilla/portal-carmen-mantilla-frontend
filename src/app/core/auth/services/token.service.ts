import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
    private tokenSubject = new BehaviorSubject<string | null>(this.getStoredToken());

    setToken(token: string): void {
        localStorage.setItem('token', token);
        this.tokenSubject.next(token);
    }

    getToken(): Observable<string | null> {
        return this.tokenSubject.asObservable();
    }

    getStoredToken(): string | null {
        return localStorage.getItem('token');
    }

    removeToken(): void {
        localStorage.removeItem('token');
        this.tokenSubject.next(null);
    }

    isTokenValid(): boolean {
        const token = this.getStoredToken();
        return !!token;
    }

}
