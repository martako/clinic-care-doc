import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Field } from 'src/app/models/template';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit, OnChanges {
  @Input() field: Field;
  @Input() currentField: Field;
  @Input() index: number;
  @Output() showFieldConfiguration = new EventEmitter<boolean>();
  @Output() deleteFieldFromList = new EventEmitter<number>();
  @Output() changeFieldPositionNumber = new EventEmitter<{ position: number, index: number }>();
  public showFieldOptions: boolean;
  public currentFieldInEdit: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.field.id === this.currentField?.id) {
      this.currentFieldInEdit = true;
    } else {
      this.currentFieldInEdit = false;
    }
  }

  showFieldOptionButtons() {
    this.showFieldOptions = true;
  }

  hideFieldOptionButtons() {
    this.showFieldOptions = false;
  }

  goToSettings() {
    this.showFieldConfiguration.emit(true);
  }

  deleteField(index: number) {
    this.deleteFieldFromList.emit(index);
  }

  changeFieldPosition(position: number, index: number) {
    this.changeFieldPositionNumber.emit({ position: position, index: index });
  }
}
