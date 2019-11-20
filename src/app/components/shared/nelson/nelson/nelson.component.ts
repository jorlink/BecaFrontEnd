import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicioPruebaService } from '../../../../services/servicio-prueba.service';

@Component({
  selector: 'app-nelson',
  templateUrl: './nelson.component.html',
  styleUrls: ['./nelson.component.css'],


})
export class NelsonComponent implements OnInit {
  users;
  companyDetalle;
  show: boolean = false;
  auxiliar;
  valorInput;

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
    
    if(this.auxiliar != params || this.show == false)
    {
      this.show = true;
      console.log(params);
      this.companyDetalle = params;
    } 
    else
    {
      this.show = false;
    }

    this.auxiliar = params;
  }

}
