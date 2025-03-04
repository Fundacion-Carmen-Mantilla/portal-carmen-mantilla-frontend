export interface FormField {
    name: string;
    label: string;
    type: 'text' | 'textarea' | 'select' | 'chips' | 'file' | 'radio' | 'checkbox';
    value?: any;
    options?: Array<{label: string; value: any}>;
    validators?: Array<{
        type: string;
        message: string;
        value?: any;
    }>;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    class?: string;
    gridClass?: string;
    multiple?: boolean;
}

export interface DynamicFormConfig {
    fields: FormField[];
    layout?: 'horizontal' | 'vertical' | 'grid';
    submitLabel?: string;
    cancelLabel?: string;
    title?: string;
}
