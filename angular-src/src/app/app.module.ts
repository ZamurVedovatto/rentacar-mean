import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

import { HomeClienteComponent } from './components/cliente/home-cliente/home-cliente.component';
import { EditClienteComponent } from './components/cliente/edit-cliente/edit-cliente.component';
import { AddClienteComponent } from './components/cliente/add-cliente/add-cliente.component';
import { ShowClienteComponent } from './components/cliente/show-cliente/show-cliente.component';
import { ClienteService } from './components/cliente/cliente.service';

import { HomeVeiculoComponent } from './components/veiculo/home-veiculo/home-veiculo.component';
import { EditVeiculoComponent } from './components/veiculo/edit-veiculo/edit-veiculo.component';
import { AddVeiculoComponent } from './components/veiculo/add-veiculo/add-veiculo.component';
import { ShowVeiculoComponent } from './components/veiculo/show-veiculo/show-veiculo.component';
import { VeiculoService } from './components/veiculo/veiculo.service';

import { HomeAluguelComponent } from './components/aluguel/home-aluguel/home-aluguel.component';
import { EditAluguelComponent } from './components/aluguel/edit-aluguel/edit-aluguel.component';
import { AddAluguelComponent } from './components/aluguel/add-aluguel/add-aluguel.component';
import { ShowAluguelComponent } from './components/aluguel/show-aluguel/show-aluguel.component';
import { FinalizarAluguelComponent } from './components/aluguel/finalizar-aluguel/finalizar-aluguel.component';
import { AluguelService } from './components/aluguel/aluguel.service';

import { AddSeguroComponent } from './components/seguro/add-seguro/add-seguro.component';
import { EditSeguroComponent } from './components/seguro/edit-seguro/edit-seguro.component';
import { HomeSeguroComponent } from './components/seguro/home-seguro/home-seguro.component';
import { ShowSeguroComponent } from './components/seguro/show-seguro/show-seguro.component';
import { SeguroService } from './components/seguro/seguro.service';

import { EditManutencaoComponent } from './components/manutencao/edit-manutencao/edit-manutencao.component';
import { ManutencaoService } from './components/manutencao/manutencao.service';

import { LoginComponent } from './components/usuario/login/login.component';
import { RegistrarComponent } from './components/usuario/registrar/registrar.component';
import { PerfilComponent } from './components/usuario/perfil/perfil.component';
import { ValidarUsuarioService } from './components/usuario/validar-usuario.service'; // colocar também em Providers
import { AuthService } from './components/usuario/auth.service'; // colocar também em Providers

import { FlashMessagesModule } from 'angular2-flash-messages'; // colocar também em Imports
import { AngularFontAwesomeModule } from 'angular-font-awesome'; // colocar também em Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgDatepickerModule } from 'ng2-datepicker';
import { AddManutencaoComponent } from './components/manutencao/add-manutencao/add-manutencao.component';
import { ShowManutencaoComponent } from './components/manutencao/show-manutencao/show-manutencao.component';
import { ManutencaoVeiculoComponent } from './components/veiculo/manutencao-veiculo/manutencao-veiculo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HomeClienteComponent,
    EditClienteComponent,
    AddClienteComponent,
    ShowClienteComponent,
    HomeVeiculoComponent,
    EditVeiculoComponent,
    AddVeiculoComponent,
    ShowVeiculoComponent,
    HomeAluguelComponent,
    EditAluguelComponent,
    AddAluguelComponent,
    ShowAluguelComponent,
    FinalizarAluguelComponent,
    LoginComponent,
    RegistrarComponent,
    PerfilComponent,
    AddSeguroComponent,
    EditSeguroComponent,
    HomeSeguroComponent,
    ShowSeguroComponent,
    EditManutencaoComponent ,
    AddManutencaoComponent,
    ShowManutencaoComponent,
    ManutencaoVeiculoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FlashMessagesModule.forRoot(),
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    NgDatepickerModule
  ],
  providers: [ClienteService, VeiculoService, AluguelService, SeguroService, ManutencaoService, ValidarUsuarioService, AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
