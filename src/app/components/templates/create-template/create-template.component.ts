import { Component, OnInit } from '@angular/core';
import { Field, FieldType, Template } from 'src/app/models/template';
import { TemplateService } from 'src/app/services/template.service';

interface ComponentType {
  type: FieldType;
  icon: string;
  options: boolean;
}

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.scss']
})
export class CreateTemplateComponent implements OnInit {
  public model: Template;
  public fields: Field[] = [];
  public availableComponents: ComponentType[];
  public showFieldConf: boolean;
  public counter = 0;
  public currentField: Field;
  public entryTypes = [];

  constructor(private templateService: TemplateService) {
    this.availableComponents = [
      { type: FieldType.Oneline, icon: 'general-text-2-2', options: false },
      { type: FieldType.Multiline, icon: 'general-text-2-2', options: false },
      { type: FieldType.TxtRich, icon: 'general-text-2-2', options: false },
      { type: FieldType.SelectSingle, icon: 'general-drag', options: true },
      { type: FieldType.SelectMulti, icon: 'general-drag', options: true },
      { type: FieldType.Checklist, icon: 'general-survey', options: true },
      { type: FieldType.RadioBtns, icon: 'general-survey', options: true },
      { type: FieldType.DateTime, icon: 'general-calendar-date', options: false }
    ];
    this.model = {
      name: '',
      type: 'Select entry type',
      availableFrom: new Date(),
      availableTo: new Date(),
      fields: this.fields
    }
    this.entryTypes = [
      { option: 'Select entry type', value: '' },
      { option: 'Entry type #1', value: '1' },
      { option: 'Entry type #2', value: '2' },
      { option: 'Entry type #3', value: '3' },
      { option: 'Entry type #4', value: '4' }
    ]
  }

  ngOnInit(): void {

  }

  addNewField(component: ComponentType) {
    this.fields.push({ id: this.counter, type: component.type, icon: component.icon, label: 'New Field' });
    if (component.options) {
      this.fields[this.counter].options = [];
    }
    this.counter++;
  }

  showFieldConfiguration(event: boolean, field: Field) {
    this.showFieldConf = event;
    if (this.showFieldConf) {
      this.currentField = field;
    } else {
      this.currentField = null;
    }
  }

  deleteFieldFromList(event: number) {
    this.fields.splice(event, 1);
  }

  changeFieldPosition(event: { position: number, index: number }) {
    const selectedField = this.fields[event.index];
    this.deleteFieldFromList(event.index);
    switch (event.position) {
      case -2:
        this.fields.push(selectedField);
        break;
      case -1:
        this.fields.splice(event.index + 1, 0, selectedField);
        break;
      case 1:
        this.fields.splice(event.index - 1, 0, selectedField);
        break;
      case 2:
        this.fields.unshift(selectedField);
        break;
    }
  }

  createTemplate() {
    this.templateService.createTemplate(this.model);
  }

}
