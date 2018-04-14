import { Component, OnInit } from '@angular/core';
import { AluguelService } from '../aluguel.service';
import { Aluguel } from '../aluguel';


@Component({
  selector: 'app-home-aluguel',
  templateUrl: './home-aluguel.component.html',
  styleUrls: ['./home-aluguel.component.css']
})
export class HomeAluguelComponent implements OnInit {

  constructor(
    public aluguelService: AluguelService
  ) { }

  ngOnInit() {
    this.getAlugueis();
  }

  alugueis: Aluguel;

  getAlugueis() {
    this.aluguelService.getAlugueis()
      .subscribe(alugueis => {
        this.alugueis = alugueis;
      })
  }

  deleteAluguel(id){
    this.aluguelService.deleteAluguel(id)
      .subscribe(()=> {
        this.getAlugueis();
      })
  }

  

}
