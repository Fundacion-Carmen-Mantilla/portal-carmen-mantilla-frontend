import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DynamicFormComponent } from '../../../../shared/components/dynamic-form/dynamic-form.component';
import { Multimedia } from '../../../../data/models/multimedia/multimedia.model';
import { DynamicFormConfig } from '../../../../data/models/form/dynamic-form.model';

@Component({
    selector: 'app-multimedia-form',
    imports: [DynamicFormComponent],
    templateUrl: './multimedia-form.component.html',
    styleUrl: './multimedia-form.component.scss'
})
export class MultimediaFormComponent {
    @Input() loading = false;
    @Input() multimedia?: Multimedia;
    @Output() submit = new EventEmitter<Multimedia>();
    @Output() onCancel = new EventEmitter<void>();

    formConfig: DynamicFormConfig = {
        title: 'Crear multimedia',
        fields: [
            {
                name: 'title',
                label: 'Título',
                type: 'text',
                required: true,
                gridClass: 'col-span-2',
                validators: [{ type: 'minLength', value: 3, message: 'Mínimo 3 caracteres' }],
                placeholder: 'Ingrese el título'
            },
            {
                name: 'category',
                label: 'Categoría',
                type: 'select',
                required: true,
                gridClass: 'col-span-1',
                options: [
                    { label: 'Eventos', value: 'events' },
                    { label: 'Noticias', value: 'news' },
                    { label: 'Galería', value: 'gallery' }
                ]
            },
            {
                name: 'status',
                label: 'Estado',
                type: 'select',
                required: true,
                gridClass: 'col-span-1',
                options: [
                    { label: 'Borrador', value: 'draft' },
                    { label: 'Publicado', value: 'published' },
                    { label: 'Archivado', value: 'archived' }
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
                name: 'description',
                label: 'Descripción',
                type: 'textarea',
                required: true,
                gridClass: 'col-span-full',
                placeholder: 'Ingrese la descripción'
            },
            {
                name: 'images',
                label: 'Imágenes',
                type: 'file',
                required: true,
                gridClass: 'col-span-full',
                validators: [
                    {
                        type: 'required',
                        message: 'Debe seleccionar al menos una imagen'
                    }
                ]
            }
        ],
        layout: 'grid',
        submitLabel: 'Guardar publicación'
    };

    onSubmit(formData: any): void {
        this.submit.emit(formData);
    }
}
