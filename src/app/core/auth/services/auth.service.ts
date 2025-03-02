import { inject, Injectable } from '@angular/core';
import { AccessToken, AuthResponse, LoginCredentials } from '../../../data/models/auth/login.model';
import { AuthRepository } from '../../../data/repositories/auth/auth-repository';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';
import { MeResponse } from '../../../data/models/auth/me.models';
import { TokenService } from './token.service';
import { ApiResponse } from '../../../data/models/api-response.model';
import { ToastService } from './toast.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private authRepository: AuthRepository = inject(AuthRepository);
    private tokenService: TokenService = inject(TokenService);
    private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.tokenService.isTokenValid());
    private messageService: ToastService = inject(ToastService);

    get isAuthenticated$(): Observable<boolean> {
        return this.isAuthenticatedSubject.asObservable();
    }

    login(credentials: LoginCredentials): Observable<AccessToken> {
        return this.authRepository.login(credentials).pipe(
            tap((response: AccessToken) => {
                this.tokenService.setToken(response.access_token);
                this.isAuthenticatedSubject.next(true);
            }),
            catchError((error) => {
                this.messageService.showError(
                    error.message || 'Error durante el inicio de sesión'
                );
                throw error;
            })
        );
    }

    me(): Observable<MeResponse> {
        return this.authRepository.me().pipe(
            tap((response: MeResponse) => {
                localStorage.setItem('user', JSON.stringify(response.data));
            })
        );
    }

    logout(): void {
        this.tokenService.removeToken();
        localStorage.removeItem('user');
        this.isAuthenticatedSubject.next(false);
    }
}
