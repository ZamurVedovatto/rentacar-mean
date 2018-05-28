import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente } from '../../../data-models/cliente.model';
import { ClienteService } from '../../../services/cliente.service';
import { Veiculo } from '../../../data-models/veiculo.model';
import { VeiculoService } from '../../../services/veiculo.service';
import { Fornecedor } from '../../../data-models/fornecedor.model';
import { FornecedorService } from '../../../services/fornecedor.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
// import { CdkTableModule} from '@angular/cdk/table';
import * as moment from 'moment';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';

@Component({
  selector: 'app-show-veiculo',
  templateUrl: './show-veiculo.component.html',
  styleUrls: ['./show-veiculo.component.css']
})
export class ShowVeiculoComponent implements OnInit {

  seguradora: Fornecedor;
  oficina: Fornecedor;
  cliente: Cliente;
  veiculo: Veiculo;
  swal: SweetAlert = _swal as any;

  constructor(
    public veiculoService: VeiculoService,
    public clienteService: ClienteService,
    public fornecedorService: FornecedorService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.getVeiculo();
  }

  getVeiculo() {
    const id = this.route.snapshot.params['id'];
    this.veiculoService.getVeiculo(id)
      .subscribe(veiculo => {
        this.veiculo = veiculo;
        // console.log(this.veiculo);
        // const aluguel = this.veiculo.aluguel;
        // this.veiculo.historico_de_alugueis.push(aluguel);

        if (this.veiculo.aluguel) {
          this.getCliente(this.veiculo);
        }

        if (this.veiculo.manutencao) {
          this.getOficina(this.veiculo);
        }

        if (this.veiculo.seguro) {
          this.getSeguradora(this.veiculo);
        }

      });
  }

  deleteVeiculo(id) {
    this.veiculoService.deleteVeiculo(id)
      .subscribe(() => {
        this.goBack();
      });
  }

  cliqueExcluir(id) {
    swal({
      title: `Excluir ${this.veiculo.fabrica} - ${this.veiculo.modelo}?`,
      buttons: {
        cancel: {
          text: 'Cancelar',
          value: null,
          visible: true,
          className: '',
          closeModal: true,
        },
        confirm: {
          text: 'OK',
          value: true,
          visible: true,
          className: '',
          closeModal: true
        }
      }
    }).then((value) => {
      if (value) {
        this.deleteVeiculo(id);
      }
    });
  }

  getOficina(veiculo) {
    this.fornecedorService.getFornecedor(veiculo.manutencao.idOficina)
      .subscribe(oficina => {
        this.oficina = oficina;
    });
  }

  getSeguradora(veiculo) {
    this.fornecedorService.getFornecedor(veiculo.seguro.idSeguradora)
      .subscribe(seguradora => {
        this.seguradora = seguradora;
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

  showOficina() {
    const oficinaCompleto = `${this.oficina.nomeFantasia} - ${this.oficina.email}`;
    return oficinaCompleto;
  }

  showSeguradora() {
    const seguradoraCompleto = `${this.seguradora.nomeFantasia} - ${this.seguradora.email}`;
    return seguradoraCompleto;
  }

  goBack() {
    this.router.navigate(['/veiculo']);
  }

  difDays() {
    const now = moment();
    const firstDate =  this.veiculo.aluguel.periodo.inicio;
    return now.diff(firstDate, 'days');
  }

  beautyData(data) {
    const dataMoment = moment(data);
    return moment(dataMoment);
  }

  valorTotalLocacao() {
    const dias = this.difDays();
    return dias * Number(this.veiculo.valorDiaria);
  }


}
