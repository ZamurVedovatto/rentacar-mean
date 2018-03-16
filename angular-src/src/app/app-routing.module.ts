import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

//componentes de navegação
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

//componenetes de Cliente
import { HomeClienteComponent } from './cliente/home-cliente/home-cliente.component';
import { EditClienteComponent } from './cliente/edit-cliente/edit-cliente.component';
import { AddClienteComponent } from './cliente/add-cliente/add-cliente.component';
import { ShowClienteComponent } from './cliente/show-cliente/show-cliente.component';

//componenetes de Veiculo
import { HomeVeiculoComponent } from './veiculo/home-veiculo/home-veiculo.component';
import { EditVeiculoComponent } from './veiculo/edit-veiculo/edit-veiculo.component';
import { AddVeiculoComponent } from './veiculo/add-veiculo/add-veiculo.component';
import { ShowVeiculoComponent } from './veiculo/show-veiculo/show-veiculo.component';

//componentes de Aluguel
/*
import { HomeAluguelComponent } from './aluguel/home-aluguel/home-aluguel.component';
import { EditAluguelComponent } from './aluguel/edit-aluguel/edit-aluguel.component';
import { AddAluguelComponent } from './aluguel/add-aluguel/add-aluguel.component';
import { ShowAluguelComponent } from './aluguel/show-aluguel/show-aluguel.component';
*/



const routes: Routes = [
  //rotas de navegação
  { path: '', component:HomeComponent },
  { path: 'sobre', component:AboutComponent },

  //rotas de Cliente
  { path: 'cliente', component:HomeClienteComponent },
  { path: 'cliente/edit/:id', component:EditClienteComponent },
  { path: 'cliente/add', component:AddClienteComponent },
  { path: 'cliente/show/:id', component:ShowClienteComponent },

  //rotas de veiculos
  { path: 'veiculo', component:HomeVeiculoComponent },
  { path: 'veiculo/edit/:id', component:EditVeiculoComponent },
  { path: 'veiculo/add', component:AddVeiculoComponent },
  { path: 'veiculo/show/:id', component:ShowVeiculoComponent }

  //rotas de alugueis
  /*
  { path: 'aluguel', component:HomeAluguelComponent },
  { path: 'aluguel/edit/:id', component:EditAluguelComponent },
  { path: 'aluguel/add', component:AddAluguelComponent },
  { path: 'aluguel/show/:id', component:ShowAluguelComponent }
  */

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
