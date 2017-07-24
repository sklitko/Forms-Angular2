import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { FormService } from '../../form.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  YearSel = new Date().getFullYear().toString().substr(-2);
  MonthSel = new Date().getMonth().toString().length ===1 ? "0"+(new Date().getMonth()+1).toString():(new Date().getMonth()+1).toString();

  payForm: FormGroup;




  constructor(private fb: FormBuilder, private formService: FormService) { }

  ngOnInit():void {
    this.buildForm();
    
  }

   buildForm(): void {
    this.payForm = this.fb.group({
      'phone': ['', [
        Validators.required,
        Validators.pattern('\[0-9]{9}')
      ]],
      'amount': ['', [
        Validators.required,
        Validators.pattern('[0-9]+$'),
        Validators.min(5),
        Validators.max(5000),
      ]],
      'card': ['', [
        Validators.required,
        Validators.pattern('[0-9]{16}')
      ]],
      'years': [this.YearSel, [
        Validators.required
      ]],
      'months': [this.MonthSel, [
        Validators.required
      ]],

      'cvv': ['', [
        Validators.required,
        Validators.pattern('[0-9]{3}')
      ]],
    });

    this.payForm.valueChanges.subscribe(data => this.formService.onValueChanged(data, this.payForm, this.formErrors));

   }


  formErrors = {
    'phone': '',
    'amount': '',
    'card': '',
    'cvv': ''
  };


}
