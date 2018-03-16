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


//componentes de Aluguel





const routes: Routes = [
  //rotas de navegação
  { path: '', component:HomeComponent },
  { path: 'sobre', component:AboutComponent },

  //rotas de Cliente
  { path: 'cliente', component:HomeClienteComponent },
  { path: 'cliente/edit/:id', component:EditClienteComponent },
  { path: 'cliente/add', component:AddClienteComponent },
  { path: 'cliente/show/:id', component:ShowClienteComponent }

  //rotas de veiculos

  //rotas de alugueis


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
