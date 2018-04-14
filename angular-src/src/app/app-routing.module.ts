import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

//componentes de navegação principais
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

//componentes de Cliente
import { HomeClienteComponent } from './components/cliente/home-cliente/home-cliente.component';
import { EditClienteComponent } from './components/cliente/edit-cliente/edit-cliente.component';
import { AddClienteComponent } from './components/cliente/add-cliente/add-cliente.component';
import { ShowClienteComponent } from './components/cliente/show-cliente/show-cliente.component';

//componentes de Veiculo
import { HomeVeiculoComponent } from './components/veiculo/home-veiculo/home-veiculo.component';
import { EditVeiculoComponent } from './components/veiculo/edit-veiculo/edit-veiculo.component';
import { AddVeiculoComponent } from './components/veiculo/add-veiculo/add-veiculo.component';
import { ShowVeiculoComponent } from './components/veiculo/show-veiculo/show-veiculo.component';

//componentes de Aluguel
import { HomeAluguelComponent } from './components/aluguel/home-aluguel/home-aluguel.component';
import { EditAluguelComponent } from './components/aluguel/edit-aluguel/edit-aluguel.component';
import { AddAluguelComponent } from './components/aluguel/add-aluguel/add-aluguel.component';
import { ShowAluguelComponent } from './components/aluguel/show-aluguel/show-aluguel.component';

//componentes de Usuario
import { RegistrarComponent  } from './components/usuario/registrar/registrar.component';
import { HomeUsuarioComponent } from './components/usuario/home-usuario/home-usuario.component';
import { LoginComponent } from './components/usuario/login/login.component';
import { PerfilComponent } from './components/usuario/perfil/perfil.component';


const routes: Routes = [
  //rotas de navegação
  { path: '', component:HomeComponent }, //home
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
  { path: 'veiculo/show/:id', component:ShowVeiculoComponent },

  //rotas de alugueis
  { path: 'aluguel', component:HomeAluguelComponent },
  { path: 'aluguel/edit/:id', component:EditAluguelComponent },
  { path: 'aluguel/add', component:AddAluguelComponent },
  { path: 'aluguel/show/:id', component:ShowAluguelComponent },

  //rotas de usuarios
  { path: 'usuario', component: HomeUsuarioComponent},
  { path: 'usuario/registrar', component:RegistrarComponent },
  { path: 'usuario/login', component:LoginComponent},
  { path: 'usuario/perfil', component:PerfilComponent}
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
