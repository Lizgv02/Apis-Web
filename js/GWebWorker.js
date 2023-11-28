// Geolocation functions

	    function initGeoApp()
	    {
	            if( navigator.geolocation )
	            {

	              navigator.geolocation.getCurrentPosition( success, failure);
	        }
	        else
	        {
	              alert("Your browser does not support geolocation services.");
	        }
	    }


	 function success(position)
	 {
		var map = new ol.Map({
    layers: [new ol.layer.Tile({source: new ol.source.OSM()})],
    target: 'map_canvas',
    view: new ol.View({
    projection: 'EPSG:4326',
		center: [position.coords.longitude, position.coords.latitude],
		zoom: 11})});
		}

		function failure()
		{
	    alert("Sorry, could not obtain location");
		}

	// Web Worker
	var worker = new Worker('js/PrimeNumberWebWorker.js');
	worker.addEventListener("message", function (oEvent) {
		console.log("Called back by the worker!\n");
	  }, false);

	worker.postMessage(""); // start the worker.

  	function displayWorker()
  	{
         worker.onmessage = function (event)
           {
             document.getElementById('result').innerHTML = event.data;
           };
    }

  function stopWorker()
   	{
       worker.terminate();
	}
