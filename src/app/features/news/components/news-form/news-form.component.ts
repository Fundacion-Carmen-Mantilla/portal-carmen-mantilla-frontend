import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DynamicFormConfig } from '../../../../data/models/form/dynamic-form.model';
import { DynamicFormComponent } from '../../../../shared/components/dynamic-form/dynamic-form.component';
import { Multimedia } from '../../../../data/models/multimedia/multimedia.model';
import { News } from '../../../../data/models/news/news.model';

@Component({
    selector: 'app-news-form',
    imports: [DynamicFormComponent],
    templateUrl: './news-form.component.html',
    styleUrl: './news-form.component.scss'
})
export class NewsFormComponent {
    @Input() loading = false;
    @Input() news?: News;
    @Output() submit = new EventEmitter<News>();

    newsFormConfig: DynamicFormConfig = {
        layout: 'grid',
        submitLabel: 'Publicar',
        fields: [
            {
                name: 'title',
                label: 'Título de la Noticia',
                type: 'text',
                required: true,
                placeholder: 'Ingrese el título',
                gridClass: 'col-span-full',
                validators: [{ type: 'minLength', value: 5, message: 'Debe tener 5 o más caracteres' }]
            },
            {
                name: 'summary',
                label: 'Resumen',
                type: 'textarea',
                required: true,
                placeholder: 'Ingrese un breve resumen',
                gridClass: 'col-span-full',
                validators: [{ type: 'minLength', value: 10, message: 'El resumen debe tener al menos 10 caracteres' }]
            },
            {
                name: 'content',
                label: 'Contenido',
                type: 'textarea',
                required: true,
                placeholder: 'Escriba el contenido completo de la noticia',
                gridClass: 'col-span-full',
                validators: [{ type: 'minLength', value: 50, message: 'El contenido debe tener al menos 50 caracteres' }]
            },
            {
                name: 'category',
                label: 'Categoría',
                type: 'select',
                required: true,
                placeholder: 'Seleccione la categoría',
                gridClass: 'col-span-full',
                options: [
                    { label: 'Política', value: 'politica' },
                    { label: 'Economía', value: 'economia' },
                    { label: 'Deportes', value: 'deportes' },
                    { label: 'Cultura', value: 'cultura' }
                ]
            },
            {
                name: 'tags',
                label: 'Etiquetas',
                type: 'select',
                placeholder: 'Seleccionar o crear etiquetas',
                options: [
                    { label: 'Evento', value: 'evento' },
                    { label: 'Noticia', value: 'noticia' },
                    { label: 'Destacado', value: 'destacado' },
                    { label: 'Importante', value: 'importante' }
                ],
                multiple: true,
                gridClass: 'col-span-2'
            },
            {
                name: 'publicationDate',
                label: 'Fecha de Publicación',
                type: 'text',
                required: true,
                placeholder: 'YYYY-MM-DD',
                gridClass: 'col-span-full',
                validators: [{ type: 'pattern', value: '^\\d{4}-\\d{2}-\\d{2}$', message: 'El formato debe ser YYYY-MM-DD' }]
            },
            {
                name: 'images',
                label: 'Imágenes de la Noticia',
                type: 'file',
                required: false,
                gridClass: 'col-span-full'
            }
        ]
    };

    onSubmit(formValue: News): void {
        console.log('Datos del formulario:', formValue);
        // Aquí se agregará la lógica para procesar la creación de la noticia
    }

}
