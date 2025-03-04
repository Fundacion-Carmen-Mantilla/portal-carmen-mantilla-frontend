import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { authInterceptor } from './auth/interceptors/auth.interceptor';
import { ToastModule } from 'primeng/toast';
import { errorsInterceptor } from './http/interceptors/errors.interceptor';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [provideHttpClient(withFetch(), withInterceptorsFromDi(), withInterceptors([authInterceptor, errorsInterceptor]))],
    exports: [ToastModule]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
