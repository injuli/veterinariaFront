import { Component, OnInit } from '@angular/core';
import { HistorialService } from '../service/historial.service';
import { Historial } from '../models/historial';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-historial',
  templateUrl: './nuevo-historial.component.html',
  styleUrls: ['./nuevo-historial.component.css']
})
export class NuevoHistorialComponent implements OnInit {

  nombre = '';
  apellido = '';
  cedula: number = null;
  tipo = '';
  genero = '';


  constructor(private historialService: HistorialService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const historial = new Historial(this.nombre, this.apellido, this.cedula, this.tipo, this.genero);
    this.historialService.save(historial).subscribe(
      data => {
        this.toastr.success('Historial Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);

      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);

      }
    );

  }

}
