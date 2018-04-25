import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './components/guards/auth.guard'; //colocar como provider e adicionar parametro nas rotas que desejamos proteger

//componentes de navegação gerais
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
import { FinalizarAluguelComponent } from './components/aluguel/finalizar-aluguel/finalizar-aluguel.component';

//componentes de Seguro
import { HomeSeguroComponent } from './components/seguro/home-seguro/home-seguro.component';
import { EditSeguroComponent } from './components/seguro/edit-seguro/edit-seguro.component';
import { AddSeguroComponent } from './components/seguro/add-seguro/add-seguro.component';
import { ShowSeguroComponent } from './components/seguro/show-seguro/show-seguro.component';

//componentes de Manutencao
import { EditManutencaoComponent } from './components/manutencao/edit-manutencao/edit-manutencao.component';
import { AddManutencaoComponent } from './components/manutencao/add-manutencao/add-manutencao.component';
import { ShowManutencaoComponent } from './components/manutencao/show-manutencao/show-manutencao.component';

//componentes de Usuario
import { LoginComponent } from './components/usuario/login/login.component';
import { PerfilComponent } from './components/usuario/perfil/perfil.component';
import { RegistrarComponent  } from './components/usuario/registrar/registrar.component';

const routes: Routes = [
  //rotas de navegação geral
  { path: '', component:HomeComponent }, //home geral
  { path: 'sobre', component:AboutComponent },

  //rotas de Cliente
  { path: 'cliente', component:HomeClienteComponent, canActivate:[AuthGuard] },
  { path: 'cliente/edit/:id', component:EditClienteComponent, canActivate:[AuthGuard] },
  { path: 'cliente/add', component:AddClienteComponent, canActivate:[AuthGuard] },
  { path: 'cliente/show/:id', component:ShowClienteComponent, canActivate:[AuthGuard] },

  //rotas de veiculos
  { path: 'veiculo', component:HomeVeiculoComponent, canActivate:[AuthGuard] },
  { path: 'veiculo/edit/:id', component:EditVeiculoComponent, canActivate:[AuthGuard] },
  { path: 'veiculo/add', component:AddVeiculoComponent, canActivate:[AuthGuard] },
  { path: 'veiculo/show/:id', component:ShowVeiculoComponent, canActivate:[AuthGuard] },

  //rotas de alugueis
  { path: 'aluguel', component:HomeAluguelComponent, canActivate:[AuthGuard] },
  { path: 'aluguel/edit/:id', component:EditAluguelComponent, canActivate:[AuthGuard] },
  { path: 'aluguel/add', component:AddAluguelComponent, canActivate:[AuthGuard] },
  { path: 'aluguel/show/:id', component:ShowAluguelComponent, canActivate:[AuthGuard] },
  { path: 'aluguel/finalizar/:id', component: FinalizarAluguelComponent, canActivate:[AuthGuard] },

  //rotas de alugueis
  { path: 'seguro', component:HomeSeguroComponent, canActivate:[AuthGuard] },
  { path: 'seguro/edit/:id', component:EditSeguroComponent, canActivate:[AuthGuard] },
  { path: 'seguro/add', component:AddSeguroComponent, canActivate:[AuthGuard] },
  { path: 'seguro/show/:id', component:ShowSeguroComponent, canActivate:[AuthGuard] },

  //rotas de manutencoes
  { path: 'manutencao/edit/:id', component:EditManutencaoComponent, canActivate:[AuthGuard] },
  { path: 'manutencao/add', component:AddManutencaoComponent, canActivate:[AuthGuard] },
  { path: 'manutencao/show/:id', component:ShowManutencaoComponent, canActivate:[AuthGuard] },

  //rotas de usuarios
  { path: 'usuario/registrar', component:RegistrarComponent },
  { path: 'usuario/login', component:LoginComponent},
  { path: 'usuario/perfil', component:PerfilComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
