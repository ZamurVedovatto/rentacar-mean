import { Component, OnInit } from '@angular/core';

import { SeguroService } from '../seguro.service';
import { Seguro } from '../seguro';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-seguro',
  templateUrl: './edit-seguro.component.html',
  styleUrls: ['./edit-seguro.component.css']
})
export class EditSeguroComponent implements OnInit {

  constructor(
    public seguroService: SeguroService,
    public route:ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit() {
    this.getSeguro();
  }

  model = new Seguro();
  id = this.route.snapshot.params['id'];


  getSeguro(){
    this.seguroService.getSeguro(this.id)
      .subscribe(seguro => {
        this.model = seguro;
      })
  }
  
  updateSeguro(){
    this.seguroService.updateSeguro(this.id, this.model)
      .subscribe(()=> this.goBack())
  }

  goBack(){
    this.router.navigate(['/seguro']);
  }
}
