import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
    {
        path: 'multimedia',
        loadChildren: () => import('../multimedia/multimedia.routes').then((m) => m.multimediaRoutes)
    }
];
