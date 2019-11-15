import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServicioPruebaService {
  urlAObtener: string;

  constructor(
    private http: HttpClient
  ) {
    this.urlAObtener = environment.urlBack;
   }

  llamame() {
    console.log(this.urlAObtener);
    return this.http.get(this.urlAObtener + 'comments');
  }

}
