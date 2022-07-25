import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormlyModule} from "@ngx-formly/core";
import {FormlyMaterialModule} from "@ngx-formly/material";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyMaterialModule,
    FormlyModule.forRoot({
      validationMessages: [
        {name: 'required', message: 'You forgot something...'}
      ]
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
