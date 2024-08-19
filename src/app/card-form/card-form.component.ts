import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css',
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
<<<<<<< HEAD
      Validators.maxLength(65),
=======
      Validators.maxLength(64),
>>>>>>> 3ed15c998d8500c53a76ce6247005d3012edf56e
    ]),
  });
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
}
