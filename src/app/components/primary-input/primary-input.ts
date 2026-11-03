import { Component, input, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

type InputTypes = "text" | "email" | "password"
@Component({
  imports: [
    ReactiveFormsModule
  ],
  selector: 'app-primary-input',
  styleUrl: './primary-input.scss',
  templateUrl: './primary-input.html',
})
export class PrimaryInput {

  @Input() type: InputTypes = "text";
  @Input() formName: string = "";
  @Input() placeHolder: string = "";
  @Input() label: string = "";
}
