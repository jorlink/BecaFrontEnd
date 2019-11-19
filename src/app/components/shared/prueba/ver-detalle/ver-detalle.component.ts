import { Component, OnInit, Input } from '@angular/core';
import { DetalleModel } from '../../../../models/detalle.model';

@Component({
  selector: 'app-ver-detalle',
  templateUrl: './ver-detalle.component.html',
  styleUrls: ['./ver-detalle.component.css']
})
export class VerDetalleComponent implements OnInit {
  @Input() detallitos: DetalleModel;
  constructor() {
   }

  ngOnInit() {
  }

}
