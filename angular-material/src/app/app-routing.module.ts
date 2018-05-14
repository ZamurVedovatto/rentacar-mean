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

import { TabsComponent } from './components/tabs/tabs.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: TabsComponent},

  // rotas de navegação geral
  { path: 'sobre', component: SystemAboutComponent },

  // rotas de usuarios
  { path: 'usuario/registrar', component: RegistrarComponent },
  { path: 'usuario/login', component: LoginComponent},
  { path: 'usuario/perfil', component: PerfilComponent, canActivate: [AuthGuard]}
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
