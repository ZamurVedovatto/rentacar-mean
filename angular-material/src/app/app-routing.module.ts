import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

// colocar AuthGuard em Provider e adicionar parametro 'canActivate: [AuthGuard]' nas rotas que devem ser protegidas
import { AuthGuard } from './components/guards/auth.guard';

// componentes de navegação gerais
import { SystemAboutComponent } from './components/system-about/system-about.component';

// componentes de Usuario
import { LoginComponent } from './components/usuario/login/login.component';
import { PerfilComponent } from './components/usuario/perfil/perfil.component';
import { RegistrarComponent  } from './components/usuario/registrar/registrar.component';

// componentes de Veiculo
import { ShowVeiculoComponent } from './components/veiculos/show-veiculo/show-veiculo.component';
import { HomeVeiculoComponent } from './components/veiculos/home-veiculo/home-veiculo.component';
import { AddVeiculoComponent } from './components/veiculos/add-veiculo/add-veiculo.component';
import { EditVeiculoComponent } from './components/veiculos/edit-veiculo/edit-veiculo.component';

import { AlugarVeiculoComponent } from './components/veiculos/aluguel/alugar-veiculo/alugar-veiculo.component';
import { EditarAluguelComponent } from './components/veiculos/aluguel/editar-aluguel/editar-aluguel.component';

import { AddManutencaoComponent } from './components/veiculos/manutencao/add-manutencao/add-manutencao.component';
import { EditManutencaoComponent } from './components/veiculos/manutencao/edit-manutencao/edit-manutencao.component';

import { AddSeguroComponent } from './components/veiculos/seguro/add-seguro/add-seguro.component';
import { EditSeguroComponent } from './components/veiculos/seguro/edit-seguro/edit-seguro.component';

// componentes de Cliente
import { ShowClienteComponent } from './components/cliente/show-cliente/show-cliente.component';
import { HomeClienteComponent } from './components/cliente/home-cliente/home-cliente.component';
import { AddClienteComponent } from './components/cliente/add-cliente/add-cliente.component';
import { EditClienteComponent } from './components/cliente/edit-cliente/edit-cliente.component';

// componentes de Servicos
import { ShowServicoComponent } from './components/servico/show-servico/show-servico.component';
import { HomeServicoComponent } from './components/servico/home-servico/home-servico.component';
import { AddServicoComponent } from './components/servico/add-servico/add-servico.component';
import { EditServicoComponent } from './components/servico/edit-servico/edit-servico.component';

import { TabsComponent } from './components/tabs/tabs.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: TabsComponent},

  // rotas de navegação geral
  { path: 'sobre', component: SystemAboutComponent },

  // rotas de usuarios
  { path: 'usuario/registrar', component: RegistrarComponent },
  { path: 'usuario/login', component: LoginComponent},
  { path: 'usuario/perfil', component: PerfilComponent, canActivate: [AuthGuard]},

  // rotas de veiculos
  { path: 'veiculo', component: HomeVeiculoComponent, canActivate: [AuthGuard] },
  { path: 'veiculo/edit/:id', component: EditVeiculoComponent, canActivate: [AuthGuard] },
  { path: 'veiculo/add', component: AddVeiculoComponent, canActivate: [AuthGuard] },
  { path: 'veiculo/show/:id', component: ShowVeiculoComponent, canActivate: [AuthGuard] },
  { path: 'veiculo/alugar/:id', component: AlugarVeiculoComponent, canActivate: [AuthGuard]},
  { path: 'veiculo/editaraluguel/:id', component: EditarAluguelComponent, canActivate: [AuthGuard]},

  { path: 'veiculo/novamanutencao/:id', component: AddManutencaoComponent, canActivate: [AuthGuard]},
  { path: 'veiculo/editarmanutencao/:id', component: EditManutencaoComponent, canActivate: [AuthGuard]},

  { path: 'veiculo/novoseguro/:id', component: AddSeguroComponent, canActivate: [AuthGuard]},
  { path: 'veiculo/editarseguro/:id', component: EditSeguroComponent, canActivate: [AuthGuard]},

  // rotas de clientes
  { path: 'cliente', component: HomeClienteComponent, canActivate: [AuthGuard] },
  { path: 'cliente/edit/:id', component: EditClienteComponent, canActivate: [AuthGuard] },
  { path: 'cliente/add', component: AddClienteComponent, canActivate: [AuthGuard] },
  { path: 'cliente/show/:id', component: ShowClienteComponent, canActivate: [AuthGuard] },

    // rotas de servicos
    { path: 'servico', component: HomeServicoComponent, canActivate: [AuthGuard] },
    { path: 'servico/edit/:id', component: EditServicoComponent, canActivate: [AuthGuard] },
    { path: 'servico/add', component: AddServicoComponent, canActivate: [AuthGuard] },
    { path: 'servico/show/:id', component: ShowServicoComponent, canActivate: [AuthGuard] }

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
