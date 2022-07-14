import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'cypress-firefox-flakiness-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    something: new FormControl('', Validators.required),
  });
  public result = new BehaviorSubject<string | null>(null);

  public handleSubmit(): void {
    const {name, something} = this.formGroup.getRawValue();
    this.result.next(`${name}:${something}`);
  }
}
