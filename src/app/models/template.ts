export interface Template {
    name: string;
    type: string;
    availableFrom: Date;
    availableTo: Date;
    fields: Field[];
}

export interface Field {
    id: number;
    type: FieldType;
    icon: string;
    name?: string;
    label: string;
    options?: string[];
}

export enum FieldType {
    Oneline = 'Text - one line',
    Multiline = 'Text - multiline',
    TxtRich = 'Text - rich',
    SelectSingle = 'Select from list - single',
    SelectMulti = 'Select from list - multi',
    Checklist = 'Checklist',
    RadioBtns = 'Radiobuttons',
    DateTime = 'Date/time picker'
}