import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
// import { UserService } from './services/user.service'; /* put it in providers */
import { VeiculoService } from './services/veiculo.service';
import { ClienteService } from './services/cliente.service';
import { FornecedorService } from './services/fornecedor.service';
import { LOCALE_ID } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import * as moment from 'moment';

import { AppRoutingModule } from './app-routing.module'; /* put it in imports */

/* angular material - put it in imports*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
/* angular material components */
import {
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatTabsModule,
  MatCardModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatTableModule,
  MatListModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatSelectModule,
  MatDividerModule,
  MatSortModule,
  MatGridListModule,
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatRippleModule,
  MatStepperModule
} from '@angular/material';
/* end - angular material */

/* components - put it in declarations*/
import { GalleryComponent } from './components/gallery/gallery.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
/* end - components */

/* usuario components */
import { LoginComponent } from './components/usuario/login/login.component';
import { RegistrarComponent } from './components/usuario/registrar/registrar.component';
import { PerfilComponent } from './components/usuario/perfil/perfil.component';
import { ValidarUsuarioService } from './components/usuario/validar-usuario.service';
import { AuthService } from './components/usuario/auth.service';
import { SystemAboutComponent } from './components/system-about/system-about.component';

/* veiculo components */
import { HomeVeiculoComponent } from './components/veiculos/home-veiculo/home-veiculo.component';
import { ShowVeiculoComponent } from './components/veiculos/show-veiculo/show-veiculo.component';
import { AddVeiculoComponent } from './components/veiculos/add-veiculo/add-veiculo.component';
import { EditVeiculoComponent } from './components/veiculos/edit-veiculo/edit-veiculo.component';
import { AlugarVeiculoComponent } from './components/veiculos/aluguel/alugar-veiculo/alugar-veiculo.component';
import { EditarAluguelComponent } from './components/veiculos/aluguel/editar-aluguel/editar-aluguel.component';
import { AddManutencaoComponent } from './components/veiculos/manutencao/add-manutencao/add-manutencao.component';
import { EditManutencaoComponent } from './components/veiculos/manutencao/edit-manutencao/edit-manutencao.component';
import { AddSeguroComponent } from './components/veiculos/seguro/add-seguro/add-seguro.component';
import { EditSeguroComponent } from './components/veiculos/seguro/edit-seguro/edit-seguro.component';

/* cliente components */
import { ShowClienteComponent } from './components/cliente/show-cliente/show-cliente.component';
import { HomeClienteComponent } from './components/cliente/home-cliente/home-cliente.component';
import { AddClienteComponent } from './components/cliente/add-cliente/add-cliente.component';
import { EditClienteComponent } from './components/cliente/edit-cliente/edit-cliente.component';

/* cliente components */
import { ShowServicoComponent } from './components/servico/show-servico/show-servico.component';
import { HomeServicoComponent } from './components/servico/home-servico/home-servico.component';
import { AddServicoComponent } from './components/servico/add-servico/add-servico.component';
import { EditServicoComponent } from './components/servico/edit-servico/edit-servico.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ToolbarComponent,
    LoginComponent,
    RegistrarComponent,
    PerfilComponent,
    SystemAboutComponent,
    HomeVeiculoComponent,
    ShowVeiculoComponent,
    AddVeiculoComponent,
    EditVeiculoComponent,
    AlugarVeiculoComponent,
    EditarAluguelComponent,
    ShowClienteComponent,
    HomeClienteComponent,
    AddClienteComponent,
    EditClienteComponent,
    ShowServicoComponent,
    HomeServicoComponent,
    AddServicoComponent,
    EditServicoComponent,
    AddManutencaoComponent,
    EditManutencaoComponent,
    AddSeguroComponent,
    EditSeguroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatTableModule,
    MatListModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatSelectModule,
    MatDividerModule,
    MatSortModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatRippleModule,
    MatStepperModule,
    CdkTableModule
  ],
  entryComponents: [
  ],
  providers: [
    // UserService,
    ValidarUsuarioService,
    AuthService,
    VeiculoService,
    ClienteService,
    FornecedorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
