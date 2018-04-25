import { Component, OnInit } from '@angular/core';
import { AluguelService } from '../aluguel.service';
import { Aluguel } from '../aluguel';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-finalizar-aluguel',
  templateUrl: './finalizar-aluguel.component.html',
  styleUrls: ['./finalizar-aluguel.component.css']
})
export class FinalizarAluguelComponent implements OnInit {

  constructor(
    public aluguelService: AluguelService,
    public route:ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit() {
    this.getAluguel();
  }

  aluguel: Aluguel;
  alugueis: Aluguel;

  getAluguel(){
    let id = this.route.snapshot.params['id'];
    this.aluguelService.getAluguel(id)
      .subscribe(aluguel => {
        this.aluguel = aluguel;
      })
  }

  getAlugueis() {
    this.aluguelService.getAlugueis()
      .subscribe(alugueis => {
        this.alugueis = alugueis;
      })
  }

  finalizarAluguel(id){
    //alterar este código
    this.aluguelService.deleteAluguel(id)
      .subscribe(()=> {
        this.getAlugueis();
      })
  }

  goBack(){
    this.router.navigate(['/aluguel']);
  }
}
