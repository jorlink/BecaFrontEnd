import { Component, OnInit } from '@angular/core';
import { ServicioPruebaService } from '../../../../services/servicio-prueba.service';

@Component({
  selector: 'app-filtrador',
  templateUrl: './filtrador.component.html',
  styleUrls: ['./filtrador.component.css']
})
export class FiltradorComponent implements OnInit {
  aux;
  users;
  auxiliar;
  show;
  companyDetalle;

  constructor(protected servicioPruebaService: ServicioPruebaService) { }
  
  ngOnInit() {
   
  }

  
RescatarDatos(idDatos: string){
  this.aux = idDatos;
    const response = this.servicioPruebaService.filtrar(this.aux).subscribe(
      (data) => {
        console.log(data);
        this.users = data;
      }
    );  
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
