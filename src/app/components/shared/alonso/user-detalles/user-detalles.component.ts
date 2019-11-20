import { Component, OnInit, Input } from '@angular/core';
import { DetalleModel } from '../../../../models/detalle.model';

@Component({
  selector: 'app-user-detalles',
  templateUrl: './user-detalles.component.html',
  styleUrls: ['./user-detalles.component.css']
})
export class UserDetallesComponent implements OnInit {

  @Input() detalle: DetalleModel;

  constructor() { }

  ngOnInit() {
  }

}
