import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { FormService } from '../../form.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: string;
  email: string;

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private formService: FormService) { }

  ngOnInit(): void {
    this.buildForm();
  }


  buildForm(): void {
    this.loginForm = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')
      ]],
      'password': ['', [
        Validators.required,
        Validators.pattern('(?=^.{10,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')
      ]]
    });

    this.loginForm.valueChanges.subscribe(data => this.formService.onValueChanged(data, this.loginForm, this.formErrors));

  }

  formErrors = {
    'email': '',
    'password': ''
  };



}


