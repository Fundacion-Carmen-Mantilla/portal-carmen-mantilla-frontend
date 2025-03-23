import { Component } from '@angular/core';
import { NewsFormComponent } from '../components/news-form/news-form.component';
import { News } from '../../../data/models/news/news.model';

@Component({
    selector: 'app-news-page',
    imports: [NewsFormComponent],
    template: ` <div class="container mx-auto p-4">
        <h1 class="text-2xl mb-4">Gestión de Noticias</h1>
        <app-news-form [loading]="isLoading" (submit)="handleSubmit($event)"></app-news-form>
    </div>`
})
export class NewsPage {
    isLoading = false;

    handleSubmit(data: News): void {
        this.isLoading = true;
        console.log('Datos recibidos:', data);
        this.isLoading = false;
    }
}
