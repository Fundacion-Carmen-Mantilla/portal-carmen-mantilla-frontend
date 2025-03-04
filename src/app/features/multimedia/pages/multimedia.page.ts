import { Component } from '@angular/core';
import { MultimediaFormComponent } from '../components/multimedia-form/multimedia-form.component';

@Component({
    selector: 'app-multimedia-page',
    template: ` <div class="container mx-auto p-4">
        <h1 class="text-2xl mb-4">Gestión de Multimedia</h1>
        <app-multimedia-form [loading]="isLoading" (submit)="handleFormSubmit($event)"></app-multimedia-form>
    </div>`,

    imports: [MultimediaFormComponent]
})
export class MultimediaPage {
    isLoading = false;

    handleFormSubmit(data: any): void {
        this.isLoading = true;
        // Lógica para guardar/actualizar multimedia (ej: llamar a un servicio)
        console.log('Datos recibidos:', data);
        this.isLoading = false;
    }
}
