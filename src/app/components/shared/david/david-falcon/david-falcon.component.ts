import { Component, OnInit } from '@angular/core';
import { ServicioPruebaService } from '../../../../services/servicio-prueba.service';

@Component({
  selector: 'app-david-falcon',
  templateUrl: './david-falcon.component.html',
  styleUrls: ['./david-falcon.component.css']
})
export class DavidFalconComponent implements OnInit {
paises: any;
resultados: any;
mostrar = false;
valor: string;
ocultar = false;

  constructor(private serv: ServicioPruebaService) { }

  ngOnInit() {
this.serv.mostrarPaises().subscribe(resp => {
  console.log(resp);
  this.paises = resp;
  console.log(this.paises)
})

  }

  
  buscarPais(valor: string) {
    // console.log( valor );
    // tslint:disable-next-line: no-unused-expression
    this.resultados == '';
    let resultado: string[] = [];
    this.valor = valor.toLowerCase();
    // this.resultado = '';
    // tslint:disable-next-line: prefer-for-of
    for ( let i = 0; i < this.paises.length; i++) {
    const pais = this.paises[i];
    const nombre = pais.name.toLowerCase();
    // console.log(nombre);
    if (nombre.indexOf(this.valor) >= 0 ) {

     resultado.push(pais);
   this.resultados = resultado;
      console.log(resultado);
     this.mostrar = true; 
} else {
  if( valor == ''){
    console.log('no debi entrar');
    this.ocultar = true;
  }
  }
  


  }
  }

}
