import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HomeClienteComponent } from './cliente/home-cliente/home-cliente.component';
import { EditClienteComponent } from './cliente/edit-cliente/edit-cliente.component';
import { AddClienteComponent } from './cliente/add-cliente/add-cliente.component';
import { ShowClienteComponent } from './cliente/show-cliente/show-cliente.component';
import { ClienteService } from './cliente/cliente.service';
import { HomeVeiculoComponent } from './veiculo/home-veiculo/home-veiculo.component';
import { EditVeiculoComponent } from './veiculo/edit-veiculo/edit-veiculo.component';
import { AddVeiculoComponent } from './veiculo/add-veiculo/add-veiculo.component';
import { ShowVeiculoComponent } from './veiculo/show-veiculo/show-veiculo.component'; //colocar aluguelservice e veiculoservice aqui
import { VeiculoService } from './veiculo/veiculo.service';


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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ClienteService, VeiculoService], //colocar aluguelservice e veiculoservice aqui
  bootstrap: [AppComponent]
})

export class AppModule { }
