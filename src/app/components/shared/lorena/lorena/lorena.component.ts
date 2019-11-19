import { Component, OnInit, Input } from '@angular/core';
import { ServicioPruebaService } from '../../../../services/servicio-prueba.service';
import { post } from 'selenium-webdriver/http';
import { DetalleModel } from '../../../../models/detalle.model';

@Component({
  selector: 'app-lorena',
  templateUrl: './lorena.component.html',
  styleUrls: ['./lorena.component.css']
})
export class LorenaComponent implements OnInit {

detallePersonal;
detalles;


constructor(
  public servicio: ServicioPruebaService
) { }

  ngOnInit() {
    const response = this.servicio.obtenerUsuarios().subscribe(
      (data) => {
        console.log(data);
        this.detallePersonal = data;
      }
    )
  }

  EnviarInfoEmpleados(params){
    console.log(params);
    this.detalles = params;
  }

  BuscarID(){
  }
 
}
