import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, InputComponent],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css',
})
export class CardFormComponent implements OnInit {
  fullName: string = 'Name';
  cardNumber: String = 'Card Number';
  expiration: String = 'Expiration Date';
  cvvNumber: String = 'CVV';
  cardForm = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(65),
      //Validators.pattern(/\s/),
    ]),

    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
      //Validators.pattern(/\s/),
    ]),

    expiration: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(16),
      //Validators.pattern(/\s/),
    ]),

    cvvNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
      //Validators.pattern(/\s/),
    ]),
  });

  constructor() {
    console.log(this.cardForm.controls.fullName);
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
}
