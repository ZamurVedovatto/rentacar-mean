import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../../../data-models/veiculo.model';
import { VeiculoService } from '../../../services/veiculo.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material'; // injetar no construtor

@Component({
  selector: 'app-add-veiculo',
  templateUrl: './add-veiculo.component.html',
  styleUrls: ['./add-veiculo.component.css']
})
export class AddVeiculoComponent implements OnInit {

  model = new Veiculo();

  constructor(
    public veiculoService: VeiculoService,
    public route: ActivatedRoute,
    public router: Router,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  addVeiculo() {
    this.model.historico_de_alugueis = [];
    this.model.historico_de_manutencoes = [];
    this.model.historico_de_seguros = [];

    this.veiculoService.addVeiculo(this.model)
      .subscribe(() => this.goBack());
  }

  goBack() {
    this.router.navigate(['/veiculo']);
  }

}


