import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camilo',
  templateUrl: './camilo.component.html',
  styleUrls: ['./camilo.component.css']
})
export class CamiloComponent implements OnInit {

  title = 'demo131';
  users: any[] = [];

  constructor(protected userService: UserService) { }

  
  ngOnInit() {

    this.userService.getUsers()
    .subscribe(
      (data) => { // si funca
        this.users = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
