import { Component, OnInit } from '@angular/core';

import { SeguroService } from '../seguro.service';
import { Seguro } from '../seguro';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-seguro',
  templateUrl: './add-seguro.component.html',
  styleUrls: ['./add-seguro.component.css']
})
export class AddSeguroComponent implements OnInit {

  constructor(
    public seguroService: SeguroService,
    public route:ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit() {
  }

  model = new Seguro();
  
  addSeguro(){
    this.seguroService.addSeguro(this.model)
      .subscribe(()=> this.goBack())
  }

  goBack(){
    this.router.navigate(['/seguro']);
  }
  
}
