import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Button } from 'primeng/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicFormConfig, FormField } from '../../../data/models/form/dynamic-form.model';
import { DropdownModule } from 'primeng/dropdown';
import { InputText } from 'primeng/inputtext';
import { FileUpload } from 'primeng/fileupload';
import { ChipModule } from 'primeng/chip';
import { Textarea } from 'primeng/textarea';
import { Select } from 'primeng/select';
import { MultiSelect } from 'primeng/multiselect';
import { ProgressBar } from 'primeng/progressbar';

@Component({
    selector: 'app-dynamic-form',
    imports: [Button, DropdownModule, ReactiveFormsModule, InputText, FileUpload, ChipModule, Textarea, Select, MultiSelect, ProgressBar],
    templateUrl: './dynamic-form.component.html',
    styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit {
    @Input() config!: DynamicFormConfig;
    @Input() loading = false;
    @Output() formSubmit = new EventEmitter<any>();
    @Output() formCancel = new EventEmitter<void>();
    totalSize: number = 0;
    totalSizePercent: number = 0;
    maxFileSize: number = 5000000; // 5MB

    form!: FormGroup;
    previewImages: Array<{
        name: string;
        url: string;
        file: File;
        order: number;
    }> = [];

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.initForm();
    }

    private initForm(): void {
        const group: any = {};

        this.config.fields.forEach((field) => {
            const validators = this.getValidators(field);
            group[field.name] = [
                {
                    value: field.value || '',
                    disabled: field.disabled
                },
                validators
            ];
        });

        this.form = this.fb.group(group);
    }

    private getValidators(field: FormField) {
        const validators = [];

        if (field.required) {
            validators.push(Validators.required);
        }

        field.validators?.forEach((validator) => {
            switch (validator.type) {
                case 'minLength':
                    validators.push(Validators.minLength(validator.value));
                    break;
                case 'maxLength':
                    validators.push(Validators.maxLength(validator.value));
                    break;
                case 'pattern':
                    validators.push(Validators.pattern(validator.value));
                    break;
                // Agregar más validadores según necesidad
            }
        });

        return validators;
    }

    onSubmit(): void {
        if (this.form.valid) {
            this.formSubmit.emit(this.form.value);
        } else {
            Object.keys(this.form.controls).forEach((key) => {
                const control = this.form.get(key);
                if (control?.invalid) {
                    control.markAsTouched();
                }
            });
        }
    }

    onCancel(): void {
        this.formCancel.emit();
    }

    getErrorMessage(field: FormField): string {
        const control = this.form.get(field.name);

        if (control?.errors) {
            if (control.errors['required']) {
                return `${field.label} es requerido`;
            }
            // Agregar más mensajes de error según necesidad
        }

        return '';
    }

    /**
     * Maneja el evento cuando se remueve un chip
     * @param event MouseEvent del chip removido
     */
    onChipRemove(event: MouseEvent): void {
        console.log('Chip removido:', event);
    }

    /**
     * Maneja el evento cuando hay un error al cargar una imagen en el chip
     * @param event Event del error de imagen
     */
    onChipImageError(event: Event): void {
        console.log('Error al cargar la imagen del chip:', event);
        // Podemos establecer una imagen por defecto si es necesario
        const imgElement = event.target as HTMLImageElement;
        if (imgElement) {
            imgElement.src = 'assets/images/placeholder.png'; // Imagen por defecto
        }
    }

    getLayoutClass(): string {
        switch (this.config.layout) {
            case 'grid':
                return 'grid grid-cols-2 gap-4';
            case 'horizontal':
                return 'flex flex-row gap-4';
            case 'vertical':
            default:
                return 'flex flex-col gap-4';
        }
    }

    onSelectedFiles(event: any, fieldName: string) {
        const files = event.currentFiles;
        this.previewImages = files.map((file: File) => ({
            name: file.name,
            url: URL.createObjectURL(file),
            file: file
        }));

        this.form.patchValue({
            [fieldName]: files
        });

        this.totalSize = 0;
        files.forEach((file: File) => {
            this.totalSize += file.size;
        });
        this.totalSizePercent = (this.totalSize / this.maxFileSize) * 100;
    }

    removeFile(event: any, file: any, removeCallback: Function, index: number) {
        removeCallback(event, index);
        this.totalSize -= file.size;
        this.totalSizePercent = (this.totalSize / this.maxFileSize) * 100;

        // Actualizar el formulario
        const currentFiles = this.form.get('images')?.value || [];
        this.form.patchValue({
            images: currentFiles.filter((_: File, i: number) => i !== index)
        });
    }

    formatSize(bytes: number): string {
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
}
