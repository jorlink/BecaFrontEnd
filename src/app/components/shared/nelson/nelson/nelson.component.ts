import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nelson',
  templateUrl: './nelson.component.html',
  styleUrls: ['./nelson.component.css']
})
export class NelsonComponent implements OnInit {

  title = 'Mapa Everis';
  lat = -33.4446063;
  lng = -70.6587166;

  constructor() { }

  ngOnInit() {
  }

}
