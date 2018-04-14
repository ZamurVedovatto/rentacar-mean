import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo.service';
import { Veiculo } from '../veiculo';


@Component({
  selector: 'app-home-veiculo',
  templateUrl: './home-veiculo.component.html',
  styleUrls: ['./home-veiculo.component.css']
})
export class HomeVeiculoComponent implements OnInit {

  constructor(
    public veiculoService: VeiculoService
  ) { }

  ngOnInit() {
    this.getVeiculos();
  }

  veiculos: Veiculo;

  getVeiculos() {
    this.veiculoService.getVeiculos()
      .subscribe(veiculos => {
        this.veiculos = veiculos;
      })
  }

  deleteVeiculo(id){
    this.veiculoService.deleteVeiculo(id)
      .subscribe(()=> {
        this.getVeiculos();
      })
  }

  

}
