import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Historial } from '../models/historial';
import { HistorialService } from '../service/historial.service';

@Component({
  selector: 'app-lista-historial',
  templateUrl: './lista-historial.component.html',
  styleUrls: ['./lista-historial.component.css']
})
export class ListaHistorialComponent implements OnInit {

  historial: Historial[] = [];

  constructor(private historialService: HistorialService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cargarHistoral();
  }

  cargarHistoral(): void {
    this.historialService.lista().subscribe(
      data => {
        this.historial = data;
        console.log(this.historial);
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.historialService.delete(id).subscribe(
      data => {
        this.toastr.success('Historial Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });

        this.cargarHistoral();

      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });

      }
    );
  }

}
