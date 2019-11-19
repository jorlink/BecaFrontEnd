import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicioPruebaService } from '../../../../services/servicio-prueba.service';

@Component({
  selector: 'app-nelson',
  templateUrl: './nelson.component.html',
  styleUrls: ['./nelson.component.css']
})
export class NelsonComponent implements OnInit {
  users;
  companyDetalle;
  constructor(private servicioPruebaService: ServicioPruebaService) { }

  ngOnInit() {
    const response = this.servicioPruebaService.obtenerUsuarios().subscribe(
      (data) => {
        console.log(data);
        this.users = data;
      }
    )
  }
    
  VerInfo(params)
  {
    console.log(params);
    this.companyDetalle = params;
  }

}
