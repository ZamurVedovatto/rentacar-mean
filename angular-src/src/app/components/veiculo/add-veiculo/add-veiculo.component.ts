import { Component, OnInit } from '@angular/core';

import { VeiculoService } from '../veiculo.service';
import { Veiculo } from '../veiculo';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-veiculo',
  templateUrl: './add-veiculo.component.html',
  styleUrls: ['./add-veiculo.component.css']
})
export class AddVeiculoComponent implements OnInit {

  constructor(
    public veiculoService: VeiculoService,
    public route:ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit() {
  }

  model = new Veiculo();
  
  addVeiculo(){
    this.veiculoService.addVeiculo(this.model)
      .subscribe(()=> this.goBack())
  }

  goBack(){
    this.router.navigate(['/veiculo']);
  }
  
}
