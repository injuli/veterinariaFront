import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaHistorialComponent } from './historial/lista-historial.component';
import { DetalleHistorialComponent } from './historial/detalle-historial.component';
import { NuevoHistorialComponent } from './historial/nuevo-historial.component';
import { EditarHistorialComponent } from './historial/editar-historial.component';

const routes: Routes = [
  {path: '', component: ListaHistorialComponent },
  {path: 'detalle/:id', component: DetalleHistorialComponent},
  {path: 'nuevo', component: NuevoHistorialComponent},
  {path: 'editar/:id', component: EditarHistorialComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
