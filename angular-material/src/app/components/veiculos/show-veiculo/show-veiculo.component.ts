import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../data-models/cliente.model';
import { Veiculo } from '../../../data-models/veiculoModel';
import { VeiculoService } from '../../../services/veiculo.service';
import { ClienteService } from '../../../services/cliente.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-show-veiculo',
  templateUrl: './show-veiculo.component.html',
  styleUrls: ['./show-veiculo.component.css']
})
export class ShowVeiculoComponent implements OnInit {

  cliente: Cliente;
  veiculo: Veiculo;
  step = 0;

  constructor(
    public veiculoService: VeiculoService,
    public clienteService: ClienteService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.getVeiculo();
  }

  setStep(index: number) {
    this.step = index;
  }

  getVeiculo() {
    const id = this.route.snapshot.params['id'];
    this.veiculoService.getVeiculo(id)
      .subscribe(veiculo => {
        this.veiculo = veiculo;
        if (this.veiculo.aluguel) {
          this.getCliente(this.veiculo);
        }
      });
  }

  getCliente(veiculo) {
    this.clienteService.getCliente(veiculo.aluguel.idCliente)
      .subscribe(cliente => {
        this.cliente = cliente;
    });
  }

  showCliente() {
    const clienteCompleto = `${this.cliente.fullName} - ${this.cliente.email}`;
    return clienteCompleto;
  }

  goBack() {
    this.router.navigate(['/veiculo']);
  }

  difDays() {
    const now = moment();
    const firstDate =  this.veiculo.aluguel.periodo.inicio;
    return now.diff(firstDate, 'days');
  }

  beautyDataInicioAluguel() {
    return moment(this.veiculo.aluguel.periodo.inicio);
  }

  valorTotalLocacao() {
    const dias = this.difDays();
    return dias * Number(this.veiculo.valorDiaria);
  }


}
