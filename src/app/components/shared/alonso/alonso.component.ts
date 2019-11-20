import { Component, OnInit } from '@angular/core';
import { ServicioPruebaService } from '../../../services/servicio-prueba.service';

@Component({
  selector: 'app-alonso',
  templateUrl: './alonso.component.html',
  styleUrls: ['./alonso.component.css']
})
export class AlonsoComponent implements OnInit {

  userDetalle;
  detalles;

  constructor(
    public servicio: ServicioPruebaService
  ) {

   }

  ngOnInit() {
    const response = this.servicio.obtenerUsuarios().subscribe(
      (data) => {
        console.log(data);
        this.userDetalle = data;
      }
    )
  }

  EnviarInfoEmpleados(params){
    console.log(params);
    this.detalles = params;
  }

}
