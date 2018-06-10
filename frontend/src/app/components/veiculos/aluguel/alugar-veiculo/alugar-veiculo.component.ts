import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../../../../data-models/veiculo.model';
import { VeiculoService } from '../../../../services/veiculo.service';
import { Cliente } from '../../../../data-models/cliente.model';
import { ClienteService } from '../../../../services/cliente.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-alugar-veiculo',
  templateUrl: './alugar-veiculo.component.html',
  styleUrls: ['./alugar-veiculo.component.css']
})
export class AlugarVeiculoComponent implements OnInit {

  id = this.route.snapshot.params['id'];
  model = new Veiculo();
  clientes: Cliente;
  dataRetirada: Date;
  idCliente;

  constructor(
    public veiculoService: VeiculoService,
    public clienteService: ClienteService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.getVeiculo();
    this.getClientes();
    this.getClientes();
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

  getClientes() {
    this.clienteService.getClientes()
      .subscribe(clientes => {
        this.clientes = clientes;
      });
  }

  addAluguel() {
    const aluguel = {
      'periodo': {
        'inicio': this.dataRetirada
      },
      'idCliente': this.idCliente
    };

    this.model.aluguel = aluguel;
    this.updateVeiculo();
  }

  goBack() {
    this.router.navigate(['/veiculo/show/' + this.id]);
  }
}
