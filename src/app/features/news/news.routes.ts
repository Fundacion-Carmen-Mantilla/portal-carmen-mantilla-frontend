import { Routes } from '@angular/router';
import { NewsPage } from './pages/news-page';

export const newsRoutes: Routes = [
    {
        path: 'create',
        component: NewsPage
    }
];
