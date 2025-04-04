import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import { authGuard } from './app/core/auth/guards/auth.guard';

export const appRoutes: Routes = [
    // {
    //     path: '',
    //     component: AppLayout,
    //     children: [
    //         { path: '', component: Dashboard },
    //         { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
    //         { path: 'documentation', component: Documentation },
    //         { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
    //     ]
    // },
    //

    {
        path: '',
        component: AppLayout,
        canActivate: [authGuard],
        children: [
            {
                path: 'features',
                loadChildren: () => import('./app/features/features.routes').then((m) => m.featuresRoutes)
            }
            // Otras rutas...
        ]
    },
    { path: 'landing', component: Landing },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./app/features/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];
