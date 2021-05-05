import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//  external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaHistorialComponent } from './historial/lista-historial.component';
import { DetalleHistorialComponent } from './historial/detalle-historial.component';
import { NuevoHistorialComponent } from './historial/nuevo-historial.component';
import { EditarHistorialComponent } from './historial/editar-historial.component';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListaHistorialComponent,
    DetalleHistorialComponent,
    NuevoHistorialComponent,
    EditarHistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
