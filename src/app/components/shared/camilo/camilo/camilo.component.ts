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

<<<<<<< HEAD
  constructor(protected userService: UserService) { }

  
  ngOnInit() {

    this.userService.getUsers()
    .subscribe(
      (data) => { // si funca
=======
  constructor(
  protected detenidosdesaparecidosService: DetenidosdesaparecidosService
  ) {
  }
  ngOnInit() {

    this.detenidosdesaparecidosService.getUsers()
    .subscribe(
      (data) => { // Success
>>>>>>> 6b0eb784ebe9598f038fdb0a3939bfc2652a93ae
        this.users = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
