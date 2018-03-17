import { Component, OnInit } from '@angular/core';
import { AluguelService } from '../aluguel.service';
import { Aluguel } from '../aluguel';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-show-aluguel',
  templateUrl: './show-aluguel.component.html',
  styleUrls: ['./show-aluguel.component.css']
})
export class ShowAluguelComponent implements OnInit {

  constructor(
    public aluguelService: AluguelService,
    public route:ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit() {
    this.getAluguel();
  }

  aluguel: Aluguel;

  getAluguel(){
    let id = this.route.snapshot.params['id'];
    this.aluguelService.getAluguel(id)
      .subscribe(aluguel => {
        this.aluguel = aluguel;
      })
  }

  goBack(){
    this.router.navigate(['/aluguel']);
  }
}
