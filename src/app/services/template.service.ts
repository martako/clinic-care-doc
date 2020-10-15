import { Injectable } from '@angular/core';
import { Template } from '../models/template';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor() { }

  public createTemplate(template: Template) {
    console.log('Created Templated saved in model: ', template);
    alert(JSON.stringify(template, undefined, 4));
  }
}
