import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServicioPruebaService {
  urlAObtener: string;
  paises: string;
  fitroID: number;

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

  obtenerFotos() {
    return this.http.get(this.urlAObtener + 'photos');
  }

  obtenerUsuarios() {
    return this.http.get(this.urlAObtener + 'users');
  }

  mostrarPaises() {
    return this.http.get(this.paises);
  }

  filtrar(fitroID) {
    return this.http.get(this.urlAObtener + 'users?id=' + fitroID );
  }

}