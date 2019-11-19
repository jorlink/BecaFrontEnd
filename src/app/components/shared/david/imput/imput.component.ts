import { Component, OnInit, imput } from '@angular/core';

@Component({
  selector: 'app-imput',
  templateUrl: './imput.component.html',
  styleUrls: ['./imput.component.css']
})
export class ImputComponent implements OnInit {

@imput() pais: any;
  constructor() { }

  ngOnInit() {
  }

}
