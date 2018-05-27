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
import * as moment from 'moment';

import { AppRoutingModule } from './app-routing.module'; /* put it in imports */

/* angular material - put it in imports*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
/* angular material components */
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatSortModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableDataSource} from '@angular/material';
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
    ShowVeiculoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule, MatTabsModule,
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
    AppRoutingModule
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
