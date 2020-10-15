import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { CreateTemplateComponent } from './components/templates/create-template/create-template.component';
import { ManageTemplateComponent } from './components/templates/manage-template/manage-template.component';
import { FieldConfigurationComponent } from './components/templates/create-template/field-configuration/field-configuration.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { FieldComponent } from './components/templates/create-template/field/field.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TemplatesComponent,
    CreateTemplateComponent,
    ManageTemplateComponent,
    FieldConfigurationComponent,
    HeaderComponent,
    FieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
