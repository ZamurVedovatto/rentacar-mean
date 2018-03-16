import { Component, OnInit } from '@angular/core';

import { VeiculoService } from '../veiculo.service';
import { Veiculo } from '../veiculo';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-veiculo',
  templateUrl: './edit-veiculo.component.html',
  styleUrls: ['./edit-veiculo.component.css']
})
export class EditVeiculoComponent implements OnInit {

  constructor(
    public veiculoService: VeiculoService,
    public route:ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit() {
    this.getVeiculo();
  }

  model = new Veiculo();
  id = this.route.snapshot.params['id'];


  getVeiculo(){
    this.veiculoService.getVeiculo(this.id)
      .subscribe(veiculo => {
        this.model = veiculo;
      })
  }
  
  updateVeiculo(){
    this.veiculoService.updateVeiculo(this.id, this.model)
      .subscribe(()=> this.goBack())
  }

  goBack(){
    this.router.navigate(['/veiculo']);
  }
}
