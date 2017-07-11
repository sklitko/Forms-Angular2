import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

const NUMBER_REGEX = '[0-9]+$';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  
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

  constructor() { }

  ngOnInit() {
  }

   amountFormControl = new FormControl('', [
    Validators.required,
    Validators.min(5),
    Validators.max(5000),
    Validators.pattern(NUMBER_REGEX)
    ]
  );
 
}
