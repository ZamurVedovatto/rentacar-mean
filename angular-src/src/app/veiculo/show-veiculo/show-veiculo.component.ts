import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo.service';
import { Veiculo } from '../veiculo';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-show-veiculo',
  templateUrl: './show-veiculo.component.html',
  styleUrls: ['./show-veiculo.component.css']
})
export class ShowVeiculoComponent implements OnInit {

  constructor(
    public veiculoService: VeiculoService,
    public route:ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit() {
    this.getVeiculo();
  }

  veiculo:Veiculo;

  getVeiculo(){
    let id = this.route.snapshot.params['id'];
    this.veiculoService.getVeiculo(id)
      .subscribe(veiculo => {
        this.veiculo = veiculo;
      })
  }

  goBack(){
    this.router.navigate(['/veiculo']);
  }
}
