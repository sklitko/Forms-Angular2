import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

const PHONE_REGEX = '\[0-9]{9}';
const NUMBER_REGEX = '[0-9]+$';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  payForm: FormGroup;

  yearSel = '17';
  monthSel = '01';

  months = [
    {value: '01'},
    {value: '02'},
    {value: '03'},
    {value: '04'},
    {value: '05'},
    {value: '06'},
    {value: '07'},
    {value: '08'},
    {value: '09'},
    {value: '10'},
    {value: '11'},
    {value: '12'},
    ];  

    years = [
      {value: '17'},
      {value: '18'},
      {value: '19'},
      {value: '20'},
      {value: '21'},
      {value: '22'},
      {value: '23'},
      {value: '24'},
      {value: '25'},
      {value: '26'},
      {value: '27'},
      {value: '28'}
    ]

  constructor(private fb: FormBuilder) { }

  ngOnInit():void {
    this.buildForm();
  }

   buildForm(): void {
    this.payForm = this.fb.group({
      'phone': ['', [
        Validators.required,
        Validators.pattern(PHONE_REGEX)
      ]],
      'amount': ['', [
        Validators.required,
        Validators.pattern(NUMBER_REGEX),
        Validators.min(5),
        Validators.max(5000),
      ]],
      'card': ['', [
        Validators.required,
        Validators.pattern('[0-9]{16}')
      ]],
      'cvv': ['', [
        Validators.required,
        Validators.pattern('[0-9]{3}')
      ]],
    });

    this.payForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }


   onValueChanged(data?: any) {
    if (!this.payForm) { return; }
    const form = this.payForm;
    for (const field in this.formErrors) {
      
      this.formErrors[field] = '';
      const control = form.get(field);
      //console.log(control);
      if (control && !control.valid) {
        
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          console.log(key);
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'phone': '',
    'amount': '',
    'card': '',
    'cvv': ''
  };

  validationMessages = {
    'phone': {
      'required': 'введите телефон',
      'pattern': 'введите правильный вариант телефона'
    },
    'amount': {
      'required': 'введите сумму',
      'pattern': 'введите сумму числами',
      'min': 'введите сумму больше 5',
      'max': 'введите сумму меньше 5000'
    },
    'card': {
      'required': 'введите номер карты',
      'pattern': 'введите правильный номер карты'
    },
    'cvv': {
      'required': 'введите cvv',
      'pattern': 'cvv не верный'
    },
  };
 
}
