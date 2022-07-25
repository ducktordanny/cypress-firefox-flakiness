import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";

import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'cypress-firefox-flakiness-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public formGroup = new FormGroup({});
  public model = {name: '', urls: []};
  public readonly formlyFields: Array<FormlyFieldConfig> = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'name',
        appearance: 'outline',
        tabindex: 0,
        required: true,
        attributes: {'data-test-id': 'name-input'},
      },
      validation: {
        show: false,
      },
    },
  ];
}
