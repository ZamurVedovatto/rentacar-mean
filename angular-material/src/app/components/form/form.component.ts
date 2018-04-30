import { Component, OnInit } from '@angular/core';
import { Address } from '../../data-models/address.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  address = new Address();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(JSON.stringify(this.address));
  }

}
