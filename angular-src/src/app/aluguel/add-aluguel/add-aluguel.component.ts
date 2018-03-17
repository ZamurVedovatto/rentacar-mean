import { Component, OnInit } from '@angular/core';

import { AluguelService } from '../aluguel.service';
import { Aluguel } from '../aluguel';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-aluguel',
  templateUrl: './add-aluguel.component.html',
  styleUrls: ['./add-aluguel.component.css']
})
export class AddAluguelComponent implements OnInit {

  constructor(
    public aluguelService: AluguelService,
    public route:ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit() {
  }

  model = new Aluguel();
  
  addAluguel(){
    this.aluguelService.addAluguel(this.model)
      .subscribe(()=> this.goBack())
  }

  goBack(){
    this.router.navigate(['/aluguel']);
  }
  
}
