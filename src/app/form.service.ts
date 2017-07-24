import { Injectable } from '@angular/core';

@Injectable()
export class FormService {

  constructor() { }


  onValueChanged(data?: any, myForm?: any, formErrors?: any) {
    if (myForm) {

      const form = myForm;
      for (const field in formErrors) {

        formErrors[field] = '';
        const control = form.get(field);
        if (control && !control.valid) {

          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            formErrors[field] += messages[key] + ' ';
          }
        }
      }
    }
  }

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
    'email': {
      'required': 'Email is required.',
      'pattern': 'Email failed'
    },
    'password': {
      'required': 'Password is required.',
      'pattern': 'password failed'
    }
  };


  months = [
    { value: '01' },
    { value: '02' },
    { value: '03' },
    { value: '04' },
    { value: '05' },
    { value: '06' },
    { value: '07' },
    { value: '08' },
    { value: '09' },
    { value: '10' },
    { value: '11' },
    { value: '12' },
  ];

  years = [
    { value: '17' },
    { value: '18' },
    { value: '19' },
    { value: '20' },
    { value: '21' },
    { value: '22' },
    { value: '23' },
    { value: '24' },
    { value: '25' },
    { value: '26' },
    { value: '27' },
    { value: '28' }
  ]
}


