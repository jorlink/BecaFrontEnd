import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServicioPruebaService {
  urlAObtener: string;
  paises: string;

  constructor(
    private http: HttpClient
  ) {
    this.urlAObtener = environment.urlBack;
    this.paises = environment.url;
   }

  llamame() {
    console.log(this.urlAObtener);
    return this.http.get(this.urlAObtener + 'comments');
  }

  mostrarPaises() {
    this.http.get('this.paises')
  }

}
