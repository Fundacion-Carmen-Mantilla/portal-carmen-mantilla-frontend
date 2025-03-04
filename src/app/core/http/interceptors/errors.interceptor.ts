import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ApiResponse } from '../../../data/models/api-response.model';
import { catchError, mergeMap, of, tap, throwError } from 'rxjs';

export const errorsInterceptor: HttpInterceptorFn = (req, next) => {
    const messageService = inject(MessageService);

    return next(req).pipe(
        tap((event: any) => {
            if (event.body) {
                const response = event.body as ApiResponse<any>;
                if (!response?.success) {
                    messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: response.message || 'Ocurrió un error inesperado',
                        life: 5000
                    });
                    throw new Error(response.message); // Lanzar error para propagar
                }
            }
            return of(event);
        }),
        mergeMap((event) => {
            if (event instanceof Error) {
                return throwError(() => event); // ← Propaga el error
            }
            return of(event);
        })
    );
};
