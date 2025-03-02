import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ButtonDirective } from 'primeng/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { Password } from 'primeng/password';
import { Ripple } from 'primeng/ripple';
import { LoginCredentials } from '../../../../../data/models/auth/login.model';

@Component({
    selector: 'app-login-form',
    imports: [ButtonDirective, FormsModule, InputText, Password, ReactiveFormsModule, Ripple],
    templateUrl: './login-form.component.html',
    styleUrl: './login-form.component.scss'
})
export class LoginFormComponent  {
    @Output() submitForm = new EventEmitter<LoginCredentials>();
    loginForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    onSubmit(): void {
        if (this.loginForm.valid) {
            this.submitForm.emit(this.loginForm.value);
        }
    }

    getErrorMessage(field: string): string {
        // Lógica de mensajes de error
        return '';
    }

}
