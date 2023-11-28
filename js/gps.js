function geoFindMe() {
    var output = document.getElementById("mapa");
  
    if (!navigator.geolocation){
      output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
      return;
    }
  
    function success(position) {
      output.innerHTML= 'Latitud: '+ position.coords.latitude + '  Longitud: ' + position.coords.longitude;
      document.getElementById("accuracyOutput").innerHTML = position.coords.accuracy;
      document.getElementById("altitudeOutput").innerHTML = position.coords.aktitude;
      document.getElementById("altitudeAccuracyOutput").innerHTML = position.coords.altitudeAccuracy;
      document.getElementById("headingOutput").innerHTML = position.coords.heading;
      document.getElementById("latitudeOutput").innerHTML = position.coords.latitude;
      document.getElementById("longitudeOutput").innerHTML = position.coords.longitude;
      document.getElementById("speedOutput").innerHTML = position.coords.speed;
      var map = new ol.Map({
        layers: [new ol.layer.Tile({source: new ol.source.OSM()})],
        target: 'mapa',
        view: new ol.View({
        projection: 'EPSG:4326',
        center: [position.coords.longitude, position.coords.latitude],
        zoom: 4})}); 
    };
  
    function error() {
      output.innerHTML = "Unable to retrieve your location";
    };
  
    output.innerHTML = "<p>Locating…</p>";
  
    navigator.geolocation.getCurrentPosition(success, error);
  }