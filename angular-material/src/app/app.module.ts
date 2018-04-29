import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

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
/* end - components */

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
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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
    MatSnackBarModule
  ],
  entryComponents: [
    MyDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
