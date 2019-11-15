import { Component, OnInit } from '@angular/core';
import { ServicioPruebaService } from './services/servicio-prueba.service';
import { CommentModel } from './models/comment.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'app';

  constructor(
  ) {
  }
}
