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
import { ClienteService } from './cliente/cliente.service'; //colocar aluguelservice e veiculoservice aqui


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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ClienteService], //colocar aluguelservice e veiculoservice aqui
  bootstrap: [AppComponent]
})

export class AppModule { }
