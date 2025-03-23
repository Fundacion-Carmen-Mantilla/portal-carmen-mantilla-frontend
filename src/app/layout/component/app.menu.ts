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
                        routerLink: ['/publications/cultural-development'],
                        items: [
                            {
                                label: 'Ministerio de Cultura',
                                icon: 'pi pi-fw pi-building',
                                items: [
                                    {
                                        label: '2020',
                                        icon: 'pi pi-fw pi-calendar',
                                        items: [
                                            {
                                                label: '#ComparteLoQueSomos',
                                                icon: 'pi pi-fw pi-bookmark',
                                                routerLink: ['/publications/cultural-development/ministry/2021']
                                            }
                                        ]
                                    },
                                    {
                                        label: '2021',
                                        icon: 'pi pi-fw pi-calendar',
                                        items: [
                                            {
                                                label: 'Aprendiendo y danzando',
                                                icon: 'pi pi-fw pi-bookmark',
                                                routerLink: ['/publications/cultural-development/ministry/2021']
                                            },
                                            {
                                                label: 'Formados danzamos unidos',
                                                icon: 'pi pi-fw pi-bookmark',
                                                routerLink: ['/publications/cultural-development/ministry/2021']
                                            }
                                        ]
                                    },
                                    {
                                        label: '2022',
                                        icon: 'pi pi-fw pi-calendar',
                                        items: [
                                            {
                                                label: 'Aprendiendo, danzando y formados seguimos unidos',
                                                icon: 'pi pi-fw pi-bookmark',
                                                routerLink: ['/publications/cultural-development/ministry/2021']
                                            }
                                        ]
                                    },
                                    {
                                        label: '2023',
                                        icon: 'pi pi-fw pi-calendar',
                                        items: [
                                            {
                                                label: 'Aprendiendo, danzamos por la vida, al ritmo de la paz',
                                                icon: 'pi pi-fw pi-bookmark',
                                                routerLink: ['/publications/cultural-development/ministry/2021']
                                            }
                                        ]
                                    },
                                    {
                                        label: '2024',
                                        icon: 'pi pi-fw pi-calendar',
                                        items: [
                                            {
                                                label: 'Aprendiendo, conservamos el patrimonio cultural y medio ambiental',
                                                icon: 'pi pi-fw pi-bookmark',
                                                routerLink: ['/publications/cultural-development/ministry/2021']
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                label: 'Gobernación del Magdalena',
                                icon: 'pi pi-fw pi-building',
                                items: [
                                    {
                                        label: '2020',
                                        icon: 'pi pi-fw pi-calendar',
                                        items: [
                                            {
                                                label: 'Formar para danzar en el pais del pocabuy',
                                                icon: 'pi pi-fw pi-bookmark',
                                                routerLink: ['/publications/cultural-development/governorship/2021']
                                            }
                                        ]
                                    },
                                    {
                                        label: '2023',
                                        icon: 'pi pi-fw pi-calendar',
                                        items: [
                                            {
                                                label: 'Talleres de danza conservamos la tradicion y el patrimonio',
                                                icon: 'pi pi-fw pi-bookmark',
                                                routerLink: ['/publications/cultural-development/governorship/2021']
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                label: 'Danza por Parejas',
                                icon: 'pi pi-fw pi-building',
                                items: [
                                    {
                                        label: '2020',
                                        icon: 'pi pi-fw pi-calendar',
                                        routerLink: ['/publications/cultural-development/governorship/2021']
                                    }
                                ]
                            }
                        ]
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
