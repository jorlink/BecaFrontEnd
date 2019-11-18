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

  constructor(
  protected detenidosdesaparecidosService: DetenidosdesaparecidosService
  ) {
  }
  ngOnInit() {

    this.detenidosdesaparecidosService.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
