import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input()
  control: FormControl | any = null;

  @Input()
  label!: any;

  showErrors() {
    const { dirty, touched, errors } = this.control;

    return dirty && touched && errors;
  }
}
