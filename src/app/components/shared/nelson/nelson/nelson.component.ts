import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nelson',
  templateUrl: './nelson.component.html',
  styleUrls: ['./nelson.component.css']
})
export class NelsonComponent implements OnInit {

<<<<<<< HEAD
  @ViewChild('map') mapElement: any;
  map: google.maps.Map;
=======
  title = 'Mapa Everis';
  lat = -33.4446063;
  lng = -70.6587166;

>>>>>>> 3697d172f01df874587952aec8c9feedf343e0a9
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
