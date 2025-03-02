import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    constructor(private primeNgMessageService: MessageService) {}

    showSuccess(detail: string, summary = 'Éxito'): void {
        this.primeNgMessageService.add({
            severity: 'success',
            summary,
            detail,
            life: 3000
        });
    }

    showError(detail: string, summary = 'Error'): void {
        this.primeNgMessageService.add({
            severity: 'error',
            summary,
            detail,
            life: 5000
        });
    }

    showInfo(detail: string, summary = 'Información'): void {
        this.primeNgMessageService.add({
            severity: 'info',
            summary,
            detail,
            life: 3000
        });
    }

    showWarning(detail: string, summary = 'Advertencia'): void {
        this.primeNgMessageService.add({
            severity: 'warn',
            summary,
            detail,
            life: 4000
        });
    }

    clear(): void {
        this.primeNgMessageService.clear();
    }
}
