import { Component, Input } from '@angular/core';
import {
  ControlContainer,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
  selector: 'app-primary-input',
  styleUrl: './primary-input.scss',
  templateUrl: './primary-input.html',
})
export class PrimaryInput {
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() formName = '';
  @Input() placeHolder = '';
  @Input() label = '';
}