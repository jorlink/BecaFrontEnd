import { Component, OnInit, Input } from '@angular/core';
import { DetalleModel } from '../../../../models/detalle.model';

@Component({
  selector: 'app-detalle-persona',
  templateUrl: './detalle-persona.component.html',
  styleUrls: ['./detalle-persona.component.css']
})
export class DetallePersonaComponent implements OnInit {

  @Input() detalle: DetalleModel;
  
  constructor() { }

  ngOnInit() {
  }

}
