import { Component, OnInit } from '@angular/core';
import { ServicioPruebaService } from '../../../../services/servicio-prueba.service';

@Component({
  selector: 'app-tabla-usuario',
  templateUrl: './tabla-usuario.component.html',
  styleUrls: ['./tabla-usuario.component.css']
})
export class TablaUsuarioComponent implements OnInit {
  datosUsuarios;
  detalles;

  constructor(
    public servicioPruebaService: ServicioPruebaService
  ) { }

  ngOnInit() {
    const response = this.servicioPruebaService.obtenerUsuarios().subscribe(
      (data) => {
        console.log(data);
        this.datosUsuarios = data;
      }
    );
  }

  EnviarInfoVer( params) {
    console.log(params);
    this.detalles = params;
  }

}
