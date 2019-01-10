import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  map_theme } from '../../app/utils/MapStyle';
import { Destinos } from '../../app/utils/Destinos';

declare var google;   

@IonicPage()
@Component({
  selector: 'page-rutas',
  templateUrl: 'rutas.html',
})
export class RutasPage {
map: any;
markers=[];
@ViewChild('map') mapElement: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RutasPage');

this.loadMap().then((map)=>{
this.map= map;
Destinos.forEach(destino => {
  console.log(destino)
  this.markers.push(this.drawMarker(destino));
});
})

  }

  loadMap(){
let prom= new Promise((resolve,reject)=>{
  let estilo= map_theme;
  var map= new google.maps.Map(this.mapElement.nativeElement,{
  zoom:6.8,
  center:{lat:19.22683 , lng:-89.168715},
  styles: estilo,
  maxZoom: 6.9,
  minZoom:6.7,
  mapTypeControl:false,
  scaleControl:true,
  zoomControl:true,
  })


  resolve(map);
})

    return prom;
  }

drawMarker(mark:any){
  console.log("En draw", mark);
  let pin = './assets/imgs/pira.png'
  var marker = new google.maps.Marker({
  position: mark.coords,
    map: this.map,
    title: mark.name,
    icon: pin,
    

  });
  marker.addListener('click', ()=> {
    var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    'sandstone rock formation in the southern part of the '+
    'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
    'south west of the nearest large town, Alice Springs; 450&#160;km '+
    '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
    'features of the Uluru - Kata Tjuta National Park. Uluru is '+
    'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
    'Aboriginal people of the area. It has many springs, waterholes, '+
    'rock caves and ancient paintings. Uluru is listed as a World '+
    'Heritage Site.</p>'+
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
    '(last visited June 22, 2009).</p>'+
    '</div>'+
    '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

      infowindow.open(this.map, marker);
    
  });

  return marker;
}

}
