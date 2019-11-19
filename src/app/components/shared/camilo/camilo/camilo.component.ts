import { Component, OnInit } from '@angular/core';
import { DetenidosdesaparecidosService } from './app-service/servicio1/detenidosdesaparecidos.service';

@Component({
  selector: 'app-camilo',
  templateUrl: './camilo.component.html',
  styleUrls: ['./camilo.component.css']
})
export class CamiloComponent implements OnInit {

  title = 'demo131';
  users: any[] = [];
  vermas;


  constructor(
  protected detenidosdesaparecidosService: DetenidosdesaparecidosService
  ) {
  }
  ngOnInit() {

    this.detenidosdesaparecidosService.getUsers()
    .subscribe(
      (data) => {
        this.users = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  VerInfo(params){
    console.log(params)
    this.vermas = params;
  }

}
