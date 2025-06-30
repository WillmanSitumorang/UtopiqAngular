import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Creditur } from '../../../model/creditur.interface';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.scss'
})
export class Form {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl<number | null>(null, [Validators.required]),
    price: new FormControl<number | null>(null, [Validators.required]),
    job: new FormControl('',[Validators.required]),
    dp: new FormControl<number | null>(null, [Validators.required]),
    date: new FormControl('',[Validators.required, minDateValidator])
  })
  
  @Output() formEmitter = new EventEmitter<any>()
  
  
  submit() {
    this.formEmitter.emit(this.userForm.value)
    this.userForm.reset(); 
  }
}

function minDateValidator(control: AbstractControl) : ValidationErrors | null{
  const selectedDate = new Date(control.value);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return selectedDate < today ? { minDate: true } : null;
}