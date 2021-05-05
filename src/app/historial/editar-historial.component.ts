import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Historial } from '../models/historial';
import { HistorialService } from '../service/historial.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-historial',
  templateUrl: './editar-historial.component.html',
  styleUrls: ['./editar-historial.component.css']
})
export class EditarHistorialComponent implements OnInit {

  historial: Historial = null;

  constructor(private historialService: HistorialService,
              private activatedRoute: ActivatedRoute,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    console.log('ingreso');
    const id = this.activatedRoute.snapshot.params.id;
    console.log('el id ', id);
    this.historialService.detail(id).subscribe(
      data => {
        console.log(data);
        this.historial = data;
        console.log(this.historial);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      }
      );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.historialService.update(id, this.historial).subscribe(
      data => {
        this.toastr.success('Historial Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );

  }

}
