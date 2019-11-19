import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { PostserviceService } from '../services/postservice.service';
import { User } from '../models/user';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
@Input() completo: User;

  constructor(
      ) { 


  }

  ngOnInit() {
        
      }


}
