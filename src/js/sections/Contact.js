import GoogleMapsApi from '../components/GoogleMapsApi';

class Contact {
  constructor() {
    this.block = document.querySelector('.contact');

    if (!this.block) return;

    this.init();
  }

  init() {
    this.buildMap();
  }

  buildMap() {
    const gmapApi = new GoogleMapsApi();

    gmapApi.load().then(() => {
      let mapContainer = this.block.querySelector('.contact__map'),
        zoom = parseFloat(mapContainer.dataset.zoom),
        markerLat = parseFloat(mapContainer.dataset.markerLat),
        markerLng = parseFloat(mapContainer.dataset.markerLng),
        lat = parseFloat(mapContainer.dataset.lat),
        lng = parseFloat(mapContainer.dataset.lng),
        coordinates =  {lat, lng};

      const map = new google.maps.Map(mapContainer, {
        zoom: zoom,
        center: coordinates,
        disableDefaultUI: true
      });

      const marker = new google.maps.Marker({
        position: { lat: markerLat, lng: markerLng },
        map: map
      });

    });

    return this;
  };
}

const contactMapAPI = new Contact();
