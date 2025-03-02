import { LoginFormComponent } from '../../components/login-form/login-form/login-form.component';
import { Component, inject, Inject } from '@angular/core';
import { AuthService } from '../../../../core/auth/services/auth.service';
import { LoginCredentials } from '../../../../data/models/auth/login.model';
import { Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ToastService } from '../../../../core/auth/services/toast.service';

@Component({
    selector: 'app-login-page',
    standalone: true,
    imports: [LoginFormComponent, ToastModule],
    providers: [
        ToastService
    ],
    template: `
        <p-toast></p-toast>
        <div class="min-h-screen bg-[var(--color-darkblue)] p-6">
            <app-login-form (submitForm)="onLoginSubmit($event)"></app-login-form>
        </div>
    `
})
export class LoginPage {
    authService: AuthService = inject(AuthService);
    router: Router = inject(Router);

    onLoginSubmit(credentials: LoginCredentials): void {
        this.authService.login(credentials).subscribe({
            next: () => {
               void this.router.navigate(['/dashboard']);
            },
            error: (error) => {
                console.error('Error en el login:', error);
                // Manejar el error
            }
        });
    }
}
