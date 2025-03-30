import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DynamicFormConfig } from '../../../../data/models/form/dynamic-form.model';
import { DynamicFormComponent } from '../../../../shared/components/dynamic-form/dynamic-form.component';
import { CulturalDevelopment } from '../../../../data/models/cultural-development/cultural-development.model';

@Component({
    selector: 'app-cultural-development-form',
    imports: [DynamicFormComponent],
    templateUrl: './cultural-development-form.component.html',
    styleUrl: './cultural-development-form.component.scss'
})
export class CulturalDevelopmentFormComponent {
    @Input() loading = false;
    @Input() multimedia?: CulturalDevelopment;
    @Output() submit = new EventEmitter<CulturalDevelopment>();
    @Output() onCancel = new EventEmitter<void>();
    formConfig: DynamicFormConfig = {
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
                name: 'description',
                label: 'Descripción',
                type: 'textarea',
                required: true,
                gridClass: 'col-span-full',
                placeholder: 'Ingrese la descripción'
            },
            {
                name: 'institution',
                label: 'Institución',
                type: 'select',
                required: true,
                gridClass: 'col-span-1',
                options: [
                    { label: 'Ministerio de Cultura', value: 'min-cultura' },
                    { label: 'Gobernación del Magdalena', value: 'gov-magdalena' }
                ]
            },
            {
                name: 'project',
                label: 'Proyecto',
                type: 'select',
                required: true,
                gridClass: 'col-span-1',
                options: [
                    { label: 'Danzando por la paz', value: 'danzamos-paz' },
                    { label: 'Formados danzamos', value: 'formados-danzamos' },
                    { label: 'Bailando pensando', value: 'bailando-pensando' }
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
                gridClass: 'col-span-1'
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
