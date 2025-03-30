import { Component, OnInit } from '@angular/core';

import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [AppMenuitem, RouterModule],
    template: ` <ul class="layout-menu">
        @for (item of model; track item; let i = $index) {
            @if (!item.separator) {
                <li app-menuitem [item]="item" [index]="i" [root]="true"></li>
            }
            @if (item.separator) {
                <li class="menu-separator"></li>
            }
        }
    </ul>`
})
export class AppMenu implements OnInit {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }]
            },
            {
                label: 'Publicaciones',
                items: [
                    {
                        label: 'Multimedia',
                        icon: 'pi pi-fw pi-images',
                        routerLink: ['features/multimedia/create'],
                    },
                    {
                        label: 'Noticias',
                        icon: 'pi pi-fw pi-book',
                        routerLink: ['features/news/create']
                    },
                    {
                        label: 'Desarrollo Cultural',
                        icon: 'pi pi-fw pi-palette',
                        routerLink: ['features/cultural-development/create']
                    }
                ]
            },
            {
                label: 'Usuarios',
                items: [
                    {
                        label: 'Administración de Usuarios',
                        icon: 'pi pi-fw pi-users',
                        routerLink: ['/users/administration']
                    },
                    {
                        label: 'Roles y Permisos',
                        icon: 'pi pi-fw pi-shield',
                        routerLink: ['/users/roles-permissions']
                    }
                ]
            },
            {
                label: 'Sistema',
                icon: 'pi pi-fw pi-cog',
                routerLink: ['/system'],
                items: [
                    {
                        label: 'Configuración General',
                        icon: 'pi pi-fw pi-sliders-h',
                        items: [
                            {
                                label: 'General',
                                icon: 'pi pi-fw pi-globe',
                                routerLink: ['/system/general-settings']
                            },
                            {
                                label: 'Seguridad',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/system/security-settings']
                            },
                            {
                                label: 'Integraciones',
                                icon: 'pi pi-fw pi-th-large',
                                routerLink: ['/system/integrations']
                            },
                            {
                                label: 'Personalización',
                                icon: 'pi pi-fw pi-pencil',
                                routerLink: ['/system/customization']
                            },
                            {
                                label: 'Mantenimiento',
                                icon: 'pi pi-fw pi-wrench',
                                routerLink: ['/system/maintenance']
                            }
                        ]
                    }
                ]
            }
        ];
    }
}
