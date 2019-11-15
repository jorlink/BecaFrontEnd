import { Component, OnInit } from '@angular/core';
import { ServicioPruebaService } from '../../../services/servicio-prueba.service';
import { CommentModel } from '../../../models/comment.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  condicional: boolean;
  varTest = 6;
  largoTabla: number;
<<<<<<< HEAD
  variable: string;
=======
  cualquiera: string;
>>>>>>> aff5a5206414d913bc6bf5f75120b849f02d06a3
  comentarios: CommentModel[] = [];


  constructor(
    public servicioPruebaService: ServicioPruebaService
  ) {
    this.condicional = true;
    this.largoTabla = 10;
   }

  ngOnInit() {
    const response = this.servicioPruebaService.llamame().subscribe(
      (data: CommentModel[]) => {
        console.log(data);
        this.comentarios = data;
      }
    );
    console.log(response);
  }

  cambiarLargo(numero) {
    console.log(this.comentarios);
    this.comentarios = this.comentarios.slice(0, numero);
  }

}
