import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  
  @ViewChild("mapContainer", { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat = 9.9312;
  lng = 76.2673;
  langulage ="ja"

  markers = [
    {
      position: new google.maps.LatLng(9.9312, 75.935242),
      map: this.map,
      title: "Temples"
    },
    {
      position: new google.maps.LatLng(9.9312, 76.76326),
      map: this.map,
      title: "Temples"
    }
  ];

  markers2 = [
    {
      position: new google.maps.LatLng(9.1112, 75.935242),
      map: this.map,
      title: "Parks",
    },
    {
      position: new google.maps.LatLng(9.1212, 76.76326),
      map: this.map,
      title: "Parks"
    }
  ];

  markers3 = [
    {
      position: new google.maps.LatLng(9.1112, 76.935242),
      map: this.map,
      title: "Malls"
    },
    {
      position: new google.maps.LatLng(9.1212, 76.86326),
      map: this.map,
      title: "Malls"
    }
  ];

  //Coordinates to set the center of the map
  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8
  };

  //Default Marker
  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
    title: "Hello World!"
  });

  ngAfterViewInit(): void {
    this.mapInitializer();
    localStorage.setItem("ln","ja")
  }

  mapInitializer(markertype:string = "0"): void {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);

    //Adding Click event to default marker
    this.marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: this.marker.getTitle()
      });
      infoWindow.open(this.marker.getMap(), this.marker);
    });

    //Adding default marker to map
    this.marker.setMap(this.map);

    //Adding other markers
    if(markertype=="0"){
      this.loadAllMarkers();
    }
    else if(markertype=="1"){
      this.loadAllMarkers1();
    }
    else{
      this.loadAllMarkers2();
    }
  }

  loadAllMarkers(): void {
    this.markers.forEach(markerInfo => {
      //Creating a new marker object
      const marker = new google.maps.Marker({
        ...markerInfo
      });

      //creating a new info window with markers info
      const infoWindow = new google.maps.InfoWindow({
        content: marker.getTitle()
      });

      //Add click event to open info window on marker
      marker.addListener("click", () => {
        infoWindow.open(marker.getMap(), marker);
      });

      //Adding marker to google map
      marker.setMap(this.map);
    });
  }

  loadAllMarkers1(): void {
    this.markers2.forEach(markerInfo => {
      //Creating a new marker object
      const marker = new google.maps.Marker({
        ...markerInfo
      });

      //creating a new info window with markers info
      const infoWindow = new google.maps.InfoWindow({
        content: marker.getTitle()
      });

      //Add click event to open info window on marker
      marker.addListener("click", () => {
        infoWindow.open(marker.getMap(), marker);
      });

      //Adding marker to google map
      marker.setMap(this.map);
    });
  }

  loadAllMarkers2(): void {
    this.markers3.forEach(markerInfo => {
      //Creating a new marker object
      const marker = new google.maps.Marker({
        ...markerInfo
      });

      //creating a new info window with markers info
      const infoWindow = new google.maps.InfoWindow({
        content: marker.getTitle()
      });

      //Add click event to open info window on marker
      marker.addListener("click", () => {
        infoWindow.open(marker.getMap(), marker);
      });

      //Adding marker to google map
      marker.setMap(this.map);
    });
  }

  public showMarker1(){
    this.mapInitializer();
  }

  public showMarker2(){
    this.mapInitializer("1");
  }

  public showMarker3(){
    this.mapInitializer("2");
  }

}
