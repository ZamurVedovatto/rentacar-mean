import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../../../data-models/veiculo.model';
import { VeiculoService } from '../../../services/veiculo.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-veiculo',
  templateUrl: './edit-veiculo.component.html',
  styleUrls: ['./edit-veiculo.component.css']
})
export class EditVeiculoComponent implements OnInit {

  model = new Veiculo();
  id = this.route.snapshot.params['id'];

  constructor(
    public veiculoService: VeiculoService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.getVeiculo();
  }

  getVeiculo() {
    this.veiculoService.getVeiculo(this.id)
      .subscribe(veiculo => {
        this.model = veiculo;
      });
  }

  updateVeiculo() {
    this.veiculoService.updateVeiculo(this.id, this.model)
      .subscribe(() => this.goBack());
  }

  goBack() {
    this.router.navigate(['/veiculo']);
  }
}
