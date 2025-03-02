import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule, AppFloatingConfigurator, ReactiveFormsModule],
    template: `
        <div class="min-h-screen bg-[var(--color-darkblue)] flex items-center justify-center p-6">
          <div class="w-full max-w-[400px] bg-white dark:bg-surface-900 rounded-3xl shadow-2xl p-8">
            <!-- Logo -->
            <div class="text-center mb-8">
              <img src="assets/images/logo-circular.png" alt="Logo del Portal" class="h-20 mx-auto mb-4" />
            </div>
        
            <div class="space-y-8">
              <!-- Encabezado -->
              <div class="text-center">
                <h1 class="text-2xl font-bold text-[var(--primary)] mb-3">Portal Administrativo</h1>
                <p class="text-[var(--secondary)] text-sm">Ingresa tus credenciales para continuar</p>
              </div>
        
              <!-- Formulario -->
              <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="space-y-6">
                <!-- Campo de correo -->
                <div class="space-y-2">
                  <label class="block text-sm font-medium text-[var(--primary)]"> Correo electrónico </label>
                  <div class="relative">
                    <input pInputText type="email" formControlName="email" class="w-full p-3 rounded-lg border border-[var(--color-brown)] focus:border-[var(--color-midblue)]" placeholder="ejemplo@correo.com" />
                    <i class="pi pi-envelope absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-brown)]"></i>
                  </div>
                  <!-- Mensaje de error para email -->
                  @if (loginForm.get('email')?.invalid && loginForm.get('email')?.touched) {
                    <small class="text-[var(--danger)]">
                      {{ getErrorMessage('email') }}
                    </small>
                  }
                </div>
        
                <!-- Campo de contraseña -->
                <div class="space-y-2">
                  <label class="block text-sm font-medium text-[var(--primary)]"> Contraseña </label>
                  <div class="relative">
                    <p-password formControlName="password" [feedback]="false" [toggleMask]="true" styleClass="w-full" inputStyleClass="w-full p-3 rounded-lg border border-[var(--color-brown)]" placeholder="Ingresa tu contraseña" />
                  </div>
                  <!-- Mensaje de error para password -->
                  @if (loginForm.get('password')?.invalid && loginForm.get('password')?.touched) {
                    <small class="text-[var(--danger)]">
                      {{ getErrorMessage('password') }}
                    </small>
                  }
                </div>
        
                <!-- Enlace de recuperación -->
                <div class="text-right">
                  <a href="#" class="text-sm text-[var(--color-midblue)] hover:text-[var(--color-darkblue)] transition-colors duration-300"> ¿Olvidaste tu contraseña? </a>
                </div>
        
                <!-- Botón de inicio de sesión -->
                <button pButton type="submit" [disabled]="loginForm.invalid" label="Iniciar Sesión" class="w-full p-3 bg-[var(--primary)] hover:bg-[var(--color-midblue)] transition-colors duration-300 rounded-lg" pRipple></button>
              </form>
            </div>
          </div>
        </div>
        `,
    styles: [
        `
            :host ::ng-deep {
                .p-password input {
                    width: 100% !important;
                }

                .p-button {
                    background-color: var(--primary) !important;
                    border-color: var(--primary) !important;

                    &:hover {
                        background-color: var(--color-midblue) !important;
                        border-color: var(--color-midblue) !important;
                    }

                    &:focus {
                        box-shadow: 0 0 0 2px var(--color-green) !important;
                    }
                }

                input:focus {
                    box-shadow: 0 0 0 2px var(--color-green) !important;
                    border-color: var(--color-midblue) !important;
                }

                .p-password-input:focus {
                    box-shadow: 0 0 0 2px var(--color-green) !important;
                    border-color: var(--color-midblue) !important;
                }
            }
        `
    ]
})
export class Login {
    loginForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    ngOnInit(): void {}

    onSubmit(): void {
        if (this.loginForm.valid) {
            console.log('Formulario válido', this.loginForm.value);
            // Aquí puedes agregar tu lógica de autenticación
        } else {
            Object.keys(this.loginForm.controls).forEach((key) => {
                const control = this.loginForm.get(key);
                if (control?.invalid) {
                    control.markAsTouched();
                }
            });
        }
    }

    getErrorMessage(field: string): string {
        const control = this.loginForm.get(field);

        if (control?.hasError('required')) {
            return 'Este campo es requerido';
        }

        if (field === 'email' && control?.hasError('email')) {
            return 'Por favor, ingresa un correo electrónico válido';
        }

        if (field === 'password' && control?.hasError('minlength')) {
            return 'La contraseña debe tener al menos 6 caracteres';
        }

        return '';
    }
}
