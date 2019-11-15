import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostserviceService {

  urlAObtener: string;

  constructor(
    private http:HttpClient
  ) {
    this.urlAObtener = environment.urlBack;
   }
   llamame(): Observable <any>{
     console.log(this.urlAObtener);
     return this.http.get(this.urlAObtener+'posts');
   }
}