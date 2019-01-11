import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  map_theme } from '../../app/utils/MapStyle';
import { Destinos } from '../../app/utils/Destinos';
import * as $ from 'jquery';
declare var google;   

@IonicPage()
@Component({
  selector: 'page-rutas',
  templateUrl: 'rutas.html',
})
export class RutasPage {
map: any;
markers=[];
infoWin=null;
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
  maxZoom: 7,
  minZoom:6.5,
  mapTypeControl:false,
  scaleControl:true,
  zoomControl:true,
  })




   // Bounds for North America
   var strictBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(18.140073, -93.683923 ),
    new google.maps.LatLng(20.997539, -86.638555)
  );

  // Listen for the dragend event
  google.maps.event.addListener(map, 'dragend', function() {
    if (strictBounds.contains(map.getCenter())) return;

    // We're out of bounds - Move the map back within the bounds

    var c = map.getCenter(),
        x = c.lng(),
        y = c.lat(),
        maxX = strictBounds.getNorthEast().lng(),
        maxY = strictBounds.getNorthEast().lat(),
        minX = strictBounds.getSouthWest().lng(),
        minY = strictBounds.getSouthWest().lat();

    if (x < minX) x = minX;
    if (x > maxX) x = maxX;
    if (y < minY) y = minY;
    if (y > maxY) y = maxY;

    map.setCenter(new google.maps.LatLng(y, x));
  });

  
  resolve(map);
})

    return prom;
  }

drawMarker(mark:any){
  console.log("En draw", mark);
  let pin = './assets/imgs/marker-tren.png'
  var marker = new google.maps.Marker({
  position: mark.coords,
    map: this.map,
    title: mark.name,
    icon: pin,
    

  });

  marker.addListener('click', ()=> {

  //  this.map.setCenter(mark.coords);

  //Image-> ' <img src="./assets/imgs/01.png" width="50%" alt="">'+ 
    var contentString = '<div style="width:100% " >'+
    '<div >'+
    '</div>'+
    '<h1 >'+mark.nombre+'</h1>'+
    '<div >'+
' <div style="width: 100%; display: flex; flex-direction: column; justify-content: center;  text-align: justify">'+
'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ut volup possimus, dolorum qui nam magnam, dolor excepturi illum odio deserunt sequi quidem quibusdam sunt eos.</div>'+
    '</div>'+
    '</div>';

    var iwOuter = $('.gm-style-iw');

    /* The DIV we want to change is above the .gm-style-iw DIV.
     * So, we use jQuery and create a iwBackground variable,
     * and took advantage of the existing reference to .gm-style-iw for the previous DIV with .prev().
     */
    var iwBackground = iwOuter.prev();
    // Remove the background shadow DIV
    console.log(iwBackground);
    iwBackground.children(':nth-child(2)').css({ 'display': 'none' });
    // Remove the white background DIV
    iwBackground.children(':nth-child(4)').css({ 'display': 'none' });
    iwOuter.parent().parent().css({ right: '50px' ,transition:'.5s all'});
    // Moves the shadow of the arrow 76px to the left margin 
    iwBackground.children(':nth-child(3)').find('div').children().css({ 'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'z-index': '-1' });
    var iwCloseBtn = iwOuter.next();
    // Apply the desired effect to the close button
    iwCloseBtn.css({transition:'.5s all',
      opacity: '1', // by default the close button has an opacity of 0.7
      right: '60px', top: '23px', // button repositioning
      width: '25px', height: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '999',
      textTransform: 'uppercase',
      border: '1px solid #EF7622', // increasing button border and new color
      'border-radius': '50%',   // circular effect
      'color': '#EF7622',
      fontSize: '16px',
      'box-shadow': '0 0 0px #3990B9' // 3D effect to highlight the button
    });
    iwCloseBtn.text('X');
    if (this.infoWin) {
      this.infoWin.close();
      console.log("Deberia cerrarla")
  }
    this.infoWin = new google.maps.InfoWindow({
      content: contentString
    });

      this.infoWin.open(this.map, marker);



  });

  return marker;
}

}
