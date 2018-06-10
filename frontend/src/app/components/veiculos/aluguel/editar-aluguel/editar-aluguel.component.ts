import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../../../../data-models/veiculo.model';
import { VeiculoService } from '../../../../services/veiculo.service';
import { Cliente } from '../../../../data-models/cliente.model';
import { ClienteService } from '../../../../services/cliente.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-editar-aluguel',
  templateUrl: './editar-aluguel.component.html',
  styleUrls: ['./editar-aluguel.component.css']
})

export class EditarAluguelComponent implements OnInit {

  id = this.route.snapshot.params['id'];
  model = new Veiculo();
  clientes: Cliente;
  cliente: Cliente;
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
  }

  getVeiculo() {
    this.veiculoService.getVeiculo(this.id)
      .subscribe(veiculo => {
        this.model = veiculo;
        this.getCliente(this.model.aluguel.idCliente);
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

  getCliente(id) {
    this.clienteService.getCliente(id)
      .subscribe(cliente => {
        this.cliente = cliente;
      });
  }

  goBack() {
    this.router.navigate(['/veiculo/show/' + this.id]);
  }
}
