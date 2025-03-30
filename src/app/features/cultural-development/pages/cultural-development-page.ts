import { Component } from '@angular/core';
import { News } from '../../../data/models/news/news.model';
import { NewsFormComponent } from '../../news/components/news-form/news-form.component';
import {
    CulturalDevelopmentFormComponent
} from '../components/cultural-development-form/cultural-development-form.component';
import { Multimedia } from '../../../data/models/multimedia/multimedia.model';
import { CulturalDevelopment } from '../../../data/models/cultural-development/cultural-development.model';

@Component({
    selector: 'app-cultural-development-page',
    imports: [CulturalDevelopmentFormComponent],
    template: ` <div class="container mx-auto p-4">
        <h1 class="text-2xl mb-4">Gestión de Desarrollo Cultural</h1>
        <app-cultural-development-form [loading]="isLoading" (submit)="handleSubmit($event)"></app-cultural-development-form>
    </div>`
})
export class CulturalDevelopmentPage {
    isLoading = false;

    handleSubmit(data: CulturalDevelopment): void {
        this.isLoading = true;
        console.log('Datos recibidos:', data);
        this.isLoading = false;
    }
}
