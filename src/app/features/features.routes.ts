import { Routes } from '@angular/router';

export const featuresRoutes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.routes').then((m) => m.dashboardRoutes)
    },
    {
        path: 'multimedia',
        loadChildren: () => import('./multimedia/multimedia.routes').then((m) => m.multimediaRoutes)
    }
];
