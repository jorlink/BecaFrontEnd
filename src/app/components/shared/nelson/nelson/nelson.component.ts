import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nelson',
  templateUrl: './nelson.component.html',
  styleUrls: ['./nelson.component.css']
})
export class NelsonComponent implements OnInit {

  @ViewChild('map') mapElement: any;
  map: google.maps.Map;
  constructor() { }

  ngOnInit() {

    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);

  }

}
