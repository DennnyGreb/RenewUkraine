var myIconPrev = L.divIcon({className: 'l-icon-prev',iconSize:20,popupAnchor:[-0,-5]});
	  var myIconCurr = L.divIcon({className: 'l-icon-curr',iconSize:20,popupAnchor:[-0,-5]});
	  var myIconNext = L.divIcon({className: 'l-icon-next',iconSize:20,popupAnchor:[-0,-5]});
	  
	  var myIcons = [myIconPrev, myIconCurr, myIconNext	];
	  var myTooltips = ['<strong>Visited</strong>', '<strong>Current</strong>', '<strong>Planned</strong>'	];
		
	//	Alliance, Ohio right now. And we will be in this area until next Tues/Wed when we start to travel. 
	//  Then we will go to Madison Wisconsin Thur/Fri (May 5,6) and 
	//  then back Sat/Sun to Racine Wisconsin. 
	//  Monday (May 9) we will drive on towards St. Cloud Minnesota.
      
      var map = L.map('map').setView([37.8, -96], 4);
      var markers = [
        ["Alliance, OH (Apr 26 - May 3)", 	40.915337, -81.105934, 1],
        ["Madison, WI (May 5,6)", 	43.073051, -89.401230, 2],
        ["Racine, WI (May 7,8)", 	42.726111, -87.805833, 2],
        ["St Cloud, MN (May 9)", 	45.560230, -94.172852, 2],
      ];
      
 
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZGVubnlncmViIiwiYSI6ImNrOXpqM3AyNTAyeGczZW42NTdhczl4bmQifQ.AARYAUjZGhzw24hxGAM7PQ'
      }).addTo(map);
      
      
      var markerArray = [];
      for (var i = 0; i < markers.length; i++) {
        marker = new L.marker([markers[i][1], markers[i][2]], {icon: myIcons[ markers[i][3] ]})
          .bindPopup(markers[i][0], {className:'l-popup'})
          .bindTooltip(myTooltips[ markers[i][3] ] + '<br />' + markers[i][0])
          .addTo(map);
        markerArray.push(marker);
      
		if  (markers[i][3]==1) {
			markerArray[i].openPopup();
			}
		}	
		
