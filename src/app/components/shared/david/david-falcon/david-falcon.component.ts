import { Component, OnInit } from '@angular/core';
import { ServicioPruebaService } from '../../../../services/servicio-prueba.service';

@Component({
  selector: 'app-david-falcon',
  templateUrl: './david-falcon.component.html',
  styleUrls: ['./david-falcon.component.css']
})
export class DavidFalconComponent implements OnInit {
paises: any;


  constructor(private serv: ServicioPruebaService) { }

  ngOnInit() {
this.serv.mostrarPaises().subscribe(resp => {
  console.log(resp);
  this.paises = resp;
})

  }

}
