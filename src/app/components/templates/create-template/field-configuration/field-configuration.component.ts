import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Field } from 'src/app/models/template';

@Component({
  selector: 'app-field-configuration',
  templateUrl: './field-configuration.component.html',
  styleUrls: ['./field-configuration.component.scss']
})
export class FieldConfigurationComponent implements OnInit {
  @Input() field: Field;
  @Output() goBackToComponents = new EventEmitter<boolean>();
  public fieldOptions: string[];
  public option: string;

  constructor() { }

  ngOnInit(): void {
  }

  goBackToAvailableComponents() {
    this.goBackToComponents.emit(false);
  }

  addNewOption() {
    this.field.options.push('');
  }

  trackByFn(index: any, item: any) {
    return index;
  }

}
