import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service'; /* put it in providers */
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
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { SettingsComponent } from './components/settings/settings.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { FormComponent } from './components/form/form.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { MyDialogComponent } from './components/dialog/mydialog/mydialog.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
/* end - components */

/* usuario components */
import { LoginComponent } from './components/usuario/login/login.component';
import { RegistrarComponent } from './components/usuario/registrar/registrar.component';
import { PerfilComponent } from './components/usuario/perfil/perfil.component';
import { ValidarUsuarioService } from './components/usuario/validar-usuario.service';
import { AuthService } from './components/usuario/auth.service';
import { MenuLateralPrincipalComponent } from './components/menu-lateral-principal/menu-lateral-principal.component';
import { SystemAboutComponent } from './components/system-about/system-about.component';

/* veiculo components */
import { HomeVeiculoComponent } from './components/veiculos/home-veiculo/home-veiculo.component';
import { ShowVeiculoComponent } from './components/veiculos/show-veiculo/show-veiculo.component';
import { AddVeiculoComponent } from './components/veiculos/add-veiculo/add-veiculo.component';
import { EditVeiculoComponent } from './components/veiculos/edit-veiculo/edit-veiculo.component';
import { AlugarVeiculoComponent } from './components/veiculos/alugar-veiculo/alugar-veiculo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent,
    SettingsComponent,
    GalleryComponent,
    PaginatorComponent,
    ToolbarComponent,
    TabsComponent,
    FormComponent,
    DialogComponent,
    MyDialogComponent,
    TooltipComponent,
    SnackbarComponent,
    MenuComponent,
    SidenavComponent,
    DataTableComponent,
    HomeDashboardComponent,
    LoginComponent,
    RegistrarComponent,
    PerfilComponent,
    MenuLateralPrincipalComponent,
    MenuLateralPrincipalComponent,
    SystemAboutComponent,
    HomeVeiculoComponent,
    ShowVeiculoComponent,
    AddVeiculoComponent,
    EditVeiculoComponent,
    AlugarVeiculoComponent
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
    MyDialogComponent
  ],
  providers: [
    UserService,
    ValidarUsuarioService,
    AuthService,
    VeiculoService,
    ClienteService,
    FornecedorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
