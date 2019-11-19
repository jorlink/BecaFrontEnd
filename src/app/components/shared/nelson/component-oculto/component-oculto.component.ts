import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-oculto',
  templateUrl: './component-oculto.component.html',
  styleUrls: ['./component-oculto.component.css']
})
export class ComponentOcultoComponent implements OnInit {
  @Input() detalleCompany;
  
  constructor() { }

  ngOnInit() {
  }

}
