import { Component, OnInit } from '@angular/core';

import { AluguelService } from '../aluguel.service';
import { Aluguel } from '../aluguel';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-aluguel',
  templateUrl: './edit-aluguel.component.html',
  styleUrls: ['./edit-aluguel.component.css']
})
export class EditAluguelComponent implements OnInit {

  constructor(
    public aluguelService: AluguelService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.getAluguel();
  }

  aluguel = new Aluguel();
  id = this.route.snapshot.params['id'];


  getAluguel(){
    this.aluguelService.getAluguel(this.id)
      .subscribe(aluguel => {
        this.aluguel = aluguel;
      })
  }
  
  updateAluguel(){
    this.aluguelService.updateAluguel(this.id, this.aluguel)
      .subscribe(()=> this.goBack())
  }


  goBack(){
    this.router.navigate(['/aluguel']);
  }
}
