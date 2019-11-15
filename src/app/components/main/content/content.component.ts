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
  variable: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  cualquiera: string;
>>>>>>> dev_seba
>>>>>>> master
=======
  cualquiera: string;
>>>>>>> e8d0cc4c2955687559bb40d33e473db7e7c34b5f
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
