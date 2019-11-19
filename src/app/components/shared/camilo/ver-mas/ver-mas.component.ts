import { Component, OnInit, Input } from '@angular/core';
import { VerMasModel } from '../models/vermas.model';

@Component({
  selector: 'app-ver-mas',
  templateUrl: './ver-mas.component.html',
  styleUrls: ['./ver-mas.component.css']
})
export class VerMasComponent implements OnInit {
  @Input() verMas: VerMasModel;
  constructor() { }

  ngOnInit() {
    
  }

}
