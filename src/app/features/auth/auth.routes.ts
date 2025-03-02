import { Routes } from '@angular/router';
import { Access } from '../../pages/auth/access';
import { Login } from '../../pages/auth/login';
import { Error } from '../../pages/auth/error';
import { LoginFormComponent } from './components/login-form/login-form/login-form.component';
import { LoginPage } from './pages/login/login.page';

export default [
    { path: 'access', component: Access },
    { path: 'error', component: Error },
    { path: 'login', component: LoginPage }
] as Routes;
