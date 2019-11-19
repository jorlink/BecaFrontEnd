import { Component, OnInit } from '@angular/core';
import { ServicioPruebaService } from '../../../../services/servicio-prueba.service';

@Component({
  selector: 'app-galeria-fotos',
  templateUrl: './galeria-fotos.component.html',
  styleUrls: ['./galeria-fotos.component.css']
})
export class GaleriaFotosComponent implements OnInit {
  fotos;

  constructor(
    public servicioPruebaService: ServicioPruebaService
  ) { }

  ngOnInit() {
    const response = this.servicioPruebaService.obtenerFotos().subscribe(
      (data) => {
        console.log(data);
        this.fotos = data;
        this.fotos =  this.fotos.slice(0, 7);
      }
    );
    console.log(response);
  }

}
