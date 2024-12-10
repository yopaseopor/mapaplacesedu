/**
 * OSM Cat config
 */


var imgSrc = 'src/img/';

var config = {
	initialConfig: {
		lon: 1.59647,
		lat: 41.69689,
		 //in radians (positive rotation clockwise, 0 means North)
		zoom: 8,
		zoomGeolocation: 17,
		units: 'metric'
	},
	i18n: {
		layersLabel: 'Layers',
		completeWith: 'Complete with:',
		editWith: 'Edit with:',
		openWith: 'Open with:',
		checkTools: 'Validation:',
		copyDialog: 'S\'ha copiat l\'enllaç al porta-retalls.Enlace copiado. Link has been copied',
		nodeLabel: 'Node:',
		noNodesFound: 'No nodes found.',
		wayLabel: 'Way:'
	},
	overpassApi: function(){
		// https://overpass-turbo.eu/
		var proxyOverpassApi = false;
		var overpassApi = 'https://overpass-api.de/api/interpreter';
		if (proxyOverpassApi)
		{
			overpassApi = 'https://mijndev.openstreetmap.nl/~ligfietser/fiets/api/interpreter/';
		}
		return overpassApi;
	},
	// Base layers
	layers: [
		new ol.layer.Tile({
			title: 'OpenStreetMap',
			iconSrc: imgSrc + 'osm_logo-layer.svg',
			source: new ol.source.OSM()
		}),
		new ol.layer.Tile({
			title: 'OpenStreetMap B&W',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			source: new ol.source.XYZ({
				attributions: '&copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a>',
				//url: 'https://toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png'
				url: 'https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({// OpenStreetMap France https://openstreetmap.fr
			title: 'OpenStreetMap France',
			iconSrc: imgSrc + 'osmfr_logo-layer.png',
			source: new ol.source.OSM({
				attributions: '&copy; <a href="https://www.openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
				url: 'https://{a-c}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: 'ES_CAT_ICGC - Actual',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_mapesbase/wms/service?',
				params: {'LAYERS': 'orto25c', 'VERSION': '1.1.1'}
			}),
			visible: false

		}),
		
		new ol.layer.Tile({
			title: 'OpenMapSurfer',
			iconSrc: imgSrc + 'openroute_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>, powered by <a href="https://mapsurfernet.com/" target="_blank">MapSurfer.NET</a>',
				url: 'https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'OpenCycleMap',
			iconSrc: imgSrc + 'opencycle_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a>, powered by &copy; <a href="http://www.thunderforest.com/" target="_blank">Thunderforest</a>',
				url: 'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=a5dd6a2f1c934394bce6b0fb077203eb'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Topotresc',
			iconSrc: imgSrc + 'topotresc_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data <a href="https://www.topotresc.com/" target="_blank">TopoTresk</a> by <a href="https://github.com/aresta/topotresc" target="_blank">aresta</a>',
				url: 'https://api.topotresc.com/tiles/{z}/{x}/{y}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'ArcGIS World Topo',
			iconSrc: imgSrc + 'worldtopomap_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer" target="_blank">ArcGIS</a>',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Positron (CartoDB)',
			iconSrc: imgSrc + 'cartodb_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions" target="_blank">CartoDB</a>',
				url: 'https://s.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Dark Matter (CartoDB)',
			iconSrc: imgSrc + 'cartodb_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions" target="_blank">CartoDB</a>',
				url: 'https://s.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Esri Sat',
			iconSrc: imgSrc + 'esri_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
			}),
			visible: false

		}),
		new ol.layer.Tile({
			title: 'PNOA',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'https://www.ign.es/wms-inspire/pnoa-ma?',
				params: {'LAYERS': 'OI.OrthoimageCoverage', 'VERSION': '1.3.0'}
			}),
			visible: false
			}),

		new ol.layer.Tile({
			title: 'Google Maps',
			iconSrc: imgSrc + 'gmaps_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,&copy; <a href="https://www.google.com/maps/" target="_blank">Google Maps</a>',
				url: 'https://mt{0-3}.google.com/vt/lyrs=m&z={z}&x={x}&y={y}'
			}),
			visible: false
		}),
		new ol.layer.Tile({// Google Sat
			title: 'Google Sat',
			iconSrc: imgSrc + 'gmaps_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,&copy; <a href="https://www.google.com/maps/" target="_blank">Google Maps</a>',
				url: 'https://mt{0-3}.google.com/vt/lyrs=s&z={z}&x={x}&y={y}'
			}),
			visible: false
		})
	],
	/**
	* @type Array
	* Overlay
	* group: string nom del grup
	* title: string titol de la capa
	* query: string consulta tal como https://overpass-turbo.eu
	* iconSrc: string ruta de la imatge
	* style: function see https://openlayers.org/en/latest/apidoc/module-ol_style_Style-Style.html
	*/
	overlays: [

 {

   group: 'Test',
   title: 'Primària Test4',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/primaria.geojson',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B1a.png',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
   style: function (feature) {
    var key_regex = /^ESPECIALITAT/
    var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
    var name = feature.get(name_key) || '';
    var styles = {
     'ESPECIALITAT': {
      'EES': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Citroen_2022.svg/1024px-Citroen_2022.svg.png',
       
       scale: 0.10
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'ESPECIALITAT': {
      'LE': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B1a.png',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'PERFIL': {
      'ORD': new ol.style.Style({
       zIndex: 100,
       stroke: new ol.style.Stroke({
        color: 'rgba(246, 99, 79, 1.0)',
        width: 1
       }),
       fill: new ol.style.Fill({
        color: 'rgba(246, 99, 79, 0.3)'
       }),
       text: new ol.style.Text({
        text: name
       })
      })
     }
    };
    for (var key in styles) {
     var value = feature.get(key);
     if (value !== undefined) {
      for (var regexp in styles[key]) {
       if (new RegExp(regexp).test(value)) {
        return styles[key][regexp];
       }
      }
     }
    }
    return null;
   } 
   
},
  
{

			group: 'Test',
   title: '100-400Test0',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/100-400.geojson',
	iconSrc: imgSrc + 'base/circle.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var key_regex = /^Denominació completa$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var key_regex2 = /^CS$/
				var name_key2 = feature.getKeys().filter(function(t){return t.match(key_regex2)}).pop() || "name2"
				var name2 = feature.get(name_key2) || '';
				var key_regex3 = /^CS$/
				var name_key3 = feature.getKeys().filter(function(t){return t.match(key_regex2)}).pop() || "name2"
				var name3 = feature.get(name_key2) || '';
				
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#00FF00',
					width: 1.25
				});

				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});

				var style3 = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name3,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 45
							}),
					fill: fill,
					stroke: stroke
				});
				var style2 = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: 'Places '+ name2,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
								font: '10px Arial',
								offsetX : 0,
								offsetY : 15
							}),
					fill: fill,
					stroke: stroke
				});
				return [style, style2, style3];
			}

},
  
{

			group: 'Test',
   title: '100-400Test1',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/100-400.geojson',
	iconSrc: imgSrc + 'base/circle.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var key_regex = /^Denominació completa$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var key_regex2 = /^CS$/
				var name_key2 = feature.getKeys().filter(function(t){return t.match(key_regex2)}).pop() || "name2"
				var name2 = feature.get(name_key2) || '';
				
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#00FF00',
					width: 1.25
				});

				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				var style2 = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: 'Places '+ name2,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
								font: '10px Arial',
								offsetX : 0,
								offsetY : 15
							}),
					fill: fill,
					stroke: stroke
				});
				return [style, style2];
			}

},
  
{

			group: 'Test',
   title: '100-400 Test2',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/100-400.geojson',
	iconSrc: imgSrc + 'base/circle.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var key_regex = /^Denominació completa$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var key_regex2 = /^COD_LLOC$/
				var name_key2 = feature.getKeys().filter(function(t){return t.match(key_regex2)}).pop() || "name2"
				var name2 = feature.get(name_key2) || '';
				var key_regex3 = /^CS$/
				var name_key3 = feature.getKeys().filter(function(t){return t.match(key_regex2)}).pop() || "name3"
				var name3 = feature.get(name_key2) || '';
				
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#00FF00',
					width: 1.25
				});

				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 15
							}),
					fill: fill,
					stroke: stroke
				});

				var style2 = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name2,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				var style3 = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: 'Places '+ name3,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
								font: '10px Arial',
								offsetX : 0,
								offsetY : 45
							}),
					fill: fill,
					stroke: stroke
				});
				return [style, style2, style3];
			}

},
  
{

			group: 'Test',
   title: '100-400 Test5',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/100-400.geojson',
	iconSrc: imgSrc + 'base/circle.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var key_regex = /^Denominació completa$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var key_regex2 = /CS/
				var name_key2 = feature.getKeys().filter(function(t){return t.match(key_regex2)}).pop() || "name2"
				var name2 = feature.get(name_key2) || '';
				
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#00FF00',
					width: 1.25
				});

				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				var style2 = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name2,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
								font: '10px Arial',
								offsetX : 0,
								offsetY : 15
							}),
					fill: fill,
					stroke: stroke
				});
				return [style, style2];
			}

},
  
{

			group: 'Test',
   title: 'Primària Tot',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/tot.geojson',
	iconSrc: imgSrc + 'base/circle.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var key_regex = /^Denominació completa$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var key_regex2 = /^TOT_DOT$/
				var name_key2 = feature.getKeys().filter(function(t){return t.match(key_regex2)}).pop() || "name2"
				var name2 = feature.get(name_key2) || '';
				
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#00FF00',
					width: 1.25
				});

				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				var style2 = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: 'Places '+ name2,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
								font: '10px Arial',
								offsetX : 0,
								offsetY : 15
							}),
					fill: fill,
					stroke: stroke
				});
				return [style, style2];
			}

},
 {

   group: 'Test',
   title: 'Tot2-100-400',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/tot.geojson',
	iconSrc: imgSrc + 'base/circle.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
   style: function (feature) {
    var key_regex = /^Denominació completa/
    var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
    var name = feature.get(name_key) || '';
    var styles = {
     'COD_LLOC': {
      'INF': new ol.style.Style({
       image: new ol.style.Circle({
								radius: 6,
								fill: new ol.style.Fill({
									color: 'rgba(140, 208, 95, 1.0)'
								}),
								stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							})
							}),
       text: new ol.style.Text({
        text: name,
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'COD_LLOC': {
      'PRI': new ol.style.Style({
          image: new ol.style.Circle({
								radius: 4,
								fill: new ol.style.Fill({
									color: 'rgba(140, 100, 95, 1.0)'
								}),
								stroke: new ol.style.Stroke({
								color: 'rgba(255, 0, 255, 1.0)',
								width: 3
							})
							}),
       text: new ol.style.Text({
        text: name,
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'QUALIFICADOR': {
      'ORD': new ol.style.Style({
          image: new ol.style.Circle({
								radius: 7,
								fill: new ol.style.Fill({
									color: 'rgba(140, 100, 95, 1.0)'
								}),
								stroke: new ol.style.Stroke({
								color: 'rgba(255, 0, 255, 1.0)',
								width: 1
							})
							}),
       text: new ol.style.Text({
        text: name,
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     }
    };
    for (var key in styles) {
     var value = feature.get(key);
     if (value !== undefined) {
      for (var regexp in styles[key]) {
       if (new RegExp(regexp).test(value)) {
        return styles[key][regexp];
       }
      }
     }
    }
    return null;
   } 
   
},
 {

   group: 'Test',
   title: 'CS-100-400',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/100-400.geojson',
	iconSrc: imgSrc + 'base/circle.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
   style: function (feature) {
    var key_regex = /^CS/
    var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
    var name = feature.get(name_key) || '';
    var styles = {
     'Comissió Serveis': {
      '1': new ol.style.Style({
       image: new ol.style.Circle({
								radius: 1,
								displacement: [15, 30],
								fill: new ol.style.Fill({
									color: 'rgba(0, 0, 141, 0.8)'
								}),
								stroke: new ol.style.Stroke({
								color: 'rgba(0, 0, 141, 1.0)',
								width: 2
							})
							}),
       text: new ol.style.Text({
        text: name,
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'Comissió Serveis': {
      '2': new ol.style.Style({
          image: new ol.style.Circle({
								radius: 1,
								displacement: [10, 20],
								fill: new ol.style.Fill({
									color: 'rgba(0, 0, 183, 0.8)'
								}),
								stroke: new ol.style.Stroke({
								color: 'rgba(0, 0, 183, 1.0)',
								width: 2
							})
							}),
       text: new ol.style.Text({
        text: name,
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'Comissió Serveis': {
      '3': new ol.style.Style({
          image: new ol.style.Circle({
								radius: 1,
								displacement: [15, 30],
								fill: new ol.style.Fill({
									color: 'rgba(140, 100, 95, 0.8)'
								}),
								stroke: new ol.style.Stroke({
								color: 'rgba(255, 0, 255, 1.0)',
								width: 2
							})
							}),
       text: new ol.style.Text({
        text: name,
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'Comissió Serveis': {
      '4': new ol.style.Style({
          image: new ol.style.Circle({
								radius: 1,
								displacement: [15, 30],
								fill: new ol.style.Fill({
									color: 'rgba(140, 100, 95, 0.8)'
								}),
								stroke: new ol.style.Stroke({
								color: 'rgba(255, 0, 255, 1.0)',
								width: 2
							})
							}),
       text: new ol.style.Text({
        text: name,
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'Comissió Serveis': {
      '5': new ol.style.Style({
          image: new ol.style.Circle({
								radius: 1,
								displacement: [15, 30],
								fill: new ol.style.Fill({
									color: 'rgba(140, 100, 95, 0.8)'
								}),
								stroke: new ol.style.Stroke({
								color: 'rgba(255, 0, 255, 1.0)',
								width: 2
							})
							}),
       text: new ol.style.Text({
        text: name,
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     }
    };
    for (var key in styles) {
     var value = feature.get(key);
     if (value !== undefined) {
      for (var regexp in styles[key]) {
       if (new RegExp(regexp).test(value)) {
        return styles[key][regexp];
       }
      }
     }
    }
    return null;
   } 
   
},
 {

   group: 'Test',
   title: '401',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/100-400.geojson',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs1.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
   style: function (feature) {
    var key_regex = /Denominació completa/
    var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
    var name = feature.get(name_key) || '';
    var styles = {
     'Comissió Serveis': {
      '1': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs1.svg',
       
       scale: 0.10
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'Comissió Serveis': {
      '2': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs2.svg',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'Comissió Serveis': {
      '3': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs3.svg',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'Comissió Serveis': {
      '4': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs4.svg',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'Comissió Serveis': {
      '5': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs5.svg',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'Comissió Serveis': {
      '6': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs6.svg',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'Comissió Serveis': {
      '7': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs7.svg',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'Comissió Serveis': {
      '8': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs8.svg',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'Comissió Serveis': {
      '9': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs9.svg',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'Comissió Serveis': {
      '10': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs10.svg',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'Comissió Serveis': {
      '11': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs11.svg',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'Comissió Serveis': {
      '12': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs12.svg',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'Comissió Serveis': {
      '13': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs13.svg',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'Comissió Serveis': {
      '14': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs14.svg',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'Comissió Serveis': {
      '15': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs15.svg',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'traffic_sign': {
      'ES:B1a': new ol.style.Style({
       zIndex: 100,
       stroke: new ol.style.Stroke({
        color: 'rgba(246, 99, 79, 1.0)',
        width: 1
       }),
       fill: new ol.style.Fill({
        color: 'rgba(246, 99, 79, 0.3)'
       }),
       text: new ol.style.Text({
        text: name
       })
      })
     }
    };
    for (var key in styles) {
     var value = feature.get(key);
     if (value !== undefined) {
      for (var regexp in styles[key]) {
       if (new RegExp(regexp).test(value)) {
        return styles[key][regexp];
       }
      }
     }
    }
    return null;
   } 
   
},
 {

   group: 'Test',
   title: 'PRI CS4',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/PRI2.geojson',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs1.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
   style: function (feature) {
    var key_regex = /Denominació completa/
    var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
    var name = feature.get(name_key) || '';
    var styles = {
     'TOT_DOT': {
      '1': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs1.svg',
       
       scale: 0.10
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'TOT_DOT': {
      '2': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs2.svg',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'TOT_DOT': {
      '3': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs3.svg',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'TOT_DOT': {
      '4': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs4.svg',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'TOT_DOT': {
      '5': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs5.svg',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'TOT_DOT': {
      '6': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs6.svg',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'TOT_DOT': {
      '7': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs7.svg',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'TOT_DOT': {
      '8': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs8.svg',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'TOT_DOT': {
      '9': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs9.svg',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'TOT_DOT': {
      '10': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs10.svg',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'TOT_DOT': {
      '11': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs11.svg',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'TOT_DOT': {
      '12': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs12.svg',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'TOT_DOT': {
      '13': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs13.svg',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'TOT_DOT': {
      '14': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs14.svg',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'TOT_DOT': {
      '15': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs15.svg',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'TOT_DOT': {
      '16': new ol.style.Style({
       zIndex: 100,
       stroke: new ol.style.Stroke({
        color: 'rgba(246, 99, 79, 1.0)',
        width: 1
       }),
       fill: new ol.style.Fill({
        color: 'rgba(246, 99, 79, 0.3)'
       }),
       text: new ol.style.Text({
        text: name
       })
      })
     }
    };
    for (var key in styles) {
     var value = feature.get(key);
     if (value !== undefined) {
      for (var regexp in styles[key]) {
       if (new RegExp(regexp).test(value)) {
        return styles[key][regexp];
       }
      }
     }
    }
    return null;
   } 
   
},
  
{
			group: 'Test',
			title: 'TestPRI PP-1',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/PRI2.geojson',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs1.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
   style: function (feature) {
				var key_regex = /^Denominació completa$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var key_regex2 = /^PP$/
				var name_key2 = feature.getKeys().filter(function(t){return t.match(key_regex2)}).pop() || "name2"
				var name2 = feature.get(name_key2) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#00FF00',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs1.svg',
                     scale: 0.1
      }),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				var style2 = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: 'Accessibilitat '+ name2,
								color: 'rgba(0,128,0,0.4)',
								font: '10px Arial',
								offsetX : 0,
								offsetY : 15
							}),
					fill: fill,
					stroke: stroke
				});
				return [style, style2];
			}

},
  
{
			group: 'Test',
			title: 'PRIPropietari provisional0',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/PRI2.geojson',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs2.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
   style: function (feature) {
				var key_regex = /^Denominació completa$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var key_regex2 = /^PP$/
				var name_key2 = feature.getKeys().filter(function(t){return t.match(key_regex2)}).pop() || "name2"
				var name2 = feature.get(name_key2) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#00FF00',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs1.svg',
                     scale: 0.1
      }),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '12px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				var style2 = new ol.style.Style({
					image: new ol.style.RegularShape({
						fill: fill,
						stroke: stroke,
						points: 4,
						radius: 10
					}),
							text: new ol.style.Text({
								text: 'PP '+ name2,
								color: 'rgba(0,128,0,0.4)',
								font: '12px Arial',
								offsetX : 0,
								offsetY : 15
							}),
					fill: fill,
					stroke: stroke
				});
				return [style, style2];
			}

},
  
{
			group: 'PRI',
			title: 'Total Dotació',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/PRI2.geojson',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/tot_dot.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
   style: function (feature) {
				var key_regex = /^Denominació completa$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var key_regex2 = /^TOT_DOT$/
				var name_key2 = feature.getKeys().filter(function(t){return t.match(key_regex2)}).pop() || "name2"
				var name2 = feature.get(name_key2) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( '+ name2 * 10 +', '+ name2 * 20 +', '+ name2 * 30 +',1)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba( '+ name2 * 20 +', '+ name2 * 50 +', '+ name2 * 80 +',1)',
					width: 3
				});
				var style = new ol.style.Style({
					text: new ol.style.Text({
								text: name,
								font: '12px Verdana',
								offsetX : 0,
								offsetY : 15
							}),
					fill: fill,
					stroke: stroke
				});
				var style2 = new ol.style.Style({
					image: new ol.style.RegularShape({
						fill: fill,
						stroke: stroke,
						points: 5,
						radius: name2 * 10,
						radius2: name2 * 4,
						angle: 0
					}),
							text: new ol.style.Text({
								text: name2,
								font: '12px Arial',
								offsetX : 0,
								offsetY : 0,
								fill: new ol.style.Fill({
                            color: 'rgba(200,200,200,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return [style, style2];
			}

},
  
{
			group: 'PRI',
			title: 'Comissió de serveis',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/PRI2.geojson',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
   style: function (feature) {
				var key_regex = /^Denominació completa$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var key_regex2 = /^Comissió Serveis$/
				var name_key2 = feature.getKeys().filter(function(t){return t.match(key_regex2)}).pop() || "name2"
				var name2 = feature.get(name_key2) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( '+ name2 * 30 +', '+ name2 * 50 +', '+ name2 * 80 +',1)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba( '+ name2 * 30 +', '+ name2 * 50 +', '+ name2 * 80 +',1)',
					width: 3
				});
				var style = new ol.style.Style({
					text: new ol.style.Text({
								text: name,
								font: '12px Verdana',
								offsetX : 0,
								offsetY : 15
							}),
					fill: fill,
					stroke: stroke
				});
				var style2 = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: name2 * 5
					}),
							text: new ol.style.Text({
								text: name2,
								font: '12px Arial',
								offsetX : 0,
								offsetY : 0,
								fill: new ol.style.Fill({
                            color: 'rgba(200,200,200,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return [style, style2];
			}

},
  
{
			group: 'PRI',
			title: 'Destinació definitiva',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/PRI2.geojson',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/dd.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
   style: function (feature) {
				var key_regex = /^Denominació completa$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var key_regex2 = /^DD$/
				var name_key2 = feature.getKeys().filter(function(t){return t.match(key_regex2)}).pop() || "name2"
				var name2 = feature.get(name_key2) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( '+ name2 * 30 +', '+ name2 * 50 +', '+ name2 * 80 +',1)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba( '+ name2 * 30 +', '+ name2 * 50 +', '+ name2 * 80 +',1)',
					width: 3
				});
				var style = new ol.style.Style({
					text: new ol.style.Text({
								text: name,
								font: '12px Verdana',
								offsetX : 0,
								offsetY : 15
							}),
					fill: fill,
					stroke: stroke
				});
				var style2 = new ol.style.Style({
					image: new ol.style.RegularShape({
						fill: fill,
						stroke: stroke,
						points: 3,
						radius: name2 * 5
					}),
							text: new ol.style.Text({
								text: name2,
								font: '12px Arial',
								offsetX : 0,
								offsetY : 0,
								fill: new ol.style.Fill({
                            color: 'rgba(200,200,200,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return [style, style2];
			}

},
  
{
			group: 'PRI',
			title: 'Propietari Provisional',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/PRI2.geojson',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/pp.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
   style: function (feature) {
				var key_regex = /^Denominació completa$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var key_regex2 = /^PP$/
				var name_key2 = feature.getKeys().filter(function(t){return t.match(key_regex2)}).pop() || "name2"
				var name2 = feature.get(name_key2) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( '+ name2 * 30 +', '+ name2 * 50 +', '+ name2 * 80 +',1)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba( '+ name2 * 30 +', '+ name2 * 50 +', '+ name2 * 80 +',1)',
					width: 3
				});
				var style = new ol.style.Style({
					text: new ol.style.Text({
								text: name,
								font: '12px Verdana',
								offsetX : 0,
								offsetY : 15
							}),
					fill: fill,
					stroke: stroke
				});
				var style2 = new ol.style.Style({
					image: new ol.style.RegularShape({
						fill: fill,
						stroke: stroke,
						points: 4,
						radius: name2 * 5
					}),
							text: new ol.style.Text({
								text: name2,
								font: '12px Arial',
								offsetX : 0,
								offsetY : 0,
								fill: new ol.style.Fill({
                            color: 'rgba(200,200,200,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return [style, style2];
			}

},
 
  
{
			group: 'PRI',
			title: 'Interí',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/PRI2.geojson',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/in.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
   style: function (feature) {
				var key_regex = /^Denominació completa$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var key_regex2 = /^IN$/
				var name_key2 = feature.getKeys().filter(function(t){return t.match(key_regex2)}).pop() || "name2"
				var name2 = feature.get(name_key2) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( '+ name2 * 30 +', '+ name2 * 50 +', '+ name2 * 80 +',1)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba( '+ name2 * 30 +', '+ name2 * 50 +', '+ name2 * 80 +',1)',
					width: 3
				});
				var style = new ol.style.Style({
					text: new ol.style.Text({
								text: name,
								font: '12px Verdana',
								offsetX : 0,
								offsetY : 15
							}),
					fill: fill,
					stroke: stroke
				});
				var style2 = new ol.style.Style({
					image: new ol.style.RegularShape({
						fill: fill,
						stroke: stroke,
						points: 5,
						radius: name2 * 5
					}),
							text: new ol.style.Text({
								text: name2,
								font: '12px Arial',
								offsetX : 0,
								offsetY : 0,
								fill: new ol.style.Fill({
                            color: 'rgba(200,200,200,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return [style, style2];
			}

},
 
  
{
			group: 'PRI',
			title: 'No fix',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/PRI2.geojson',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/nf.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
   style: function (feature) {
				var key_regex = /^Denominació completa$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var key_regex2 = /^NF$/
				var name_key2 = feature.getKeys().filter(function(t){return t.match(key_regex2)}).pop() || "name2"
				var name2 = feature.get(name_key2) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( '+ name2 * 30 +', '+ name2 * 50 +', '+ name2 * 80 +',1)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba( '+ name2 * 30 +', '+ name2 * 50 +', '+ name2 * 80 +',1)',
					width: 3
				});
				var style = new ol.style.Style({
					text: new ol.style.Text({
								text: name,
								font: '12px Verdana',
								offsetX : 0,
								offsetY : 15
							}),
					fill: fill,
					stroke: stroke
				});
				var style2 = new ol.style.Style({
					image: new ol.style.RegularShape({
						fill: fill,
						stroke: stroke,
						points: 6,
						radius: name2 * 5
					}),
							text: new ol.style.Text({
								text: name2,
								font: '12px Arial',
								offsetX : 0,
								offsetY : 0,
								fill: new ol.style.Fill({
                            color: 'rgba(200,200,200,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return [style, style2];
			}

},
 
  
{
			group: 'PRI',
			title: 'Supressió plaça',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/PRI2.geojson',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/ps.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
   style: function (feature) {
				var key_regex = /^Denominació completa$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var key_regex2 = /^PS$/
				var name_key2 = feature.getKeys().filter(function(t){return t.match(key_regex2)}).pop() || "name2"
				var name2 = feature.get(name_key2) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( '+ name2 * 30 +', '+ name2 * 50 +', '+ name2 * 80 +',1)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba( '+ name2 * 30 +', '+ name2 * 50 +', '+ name2 * 80 +',1)',
					width: 3
				});
				var style = new ol.style.Style({
					text: new ol.style.Text({
								text: name,
								font: '12px Verdana',
								offsetX : 0,
								offsetY : 15
							}),
					fill: fill,
					stroke: stroke
				});
				var style2 = new ol.style.Style({
					image: new ol.style.RegularShape({
						fill: fill,
						stroke: stroke,
						points: 7,
						radius: name2 * 5
					}),
							text: new ol.style.Text({
								text: name2,
								font: '12px Arial',
								offsetX : 0,
								offsetY : 0,
								fill: new ol.style.Fill({
                            color: 'rgba(200,200,200,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return [style, style2];
			}

},
 
  
{
			group: 'PRI',
			title: 'Reforç',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/PRI2.geojson',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/rf.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
   style: function (feature) {
				var key_regex = /^Denominació completa$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var key_regex2 = /^RF$/
				var name_key2 = feature.getKeys().filter(function(t){return t.match(key_regex2)}).pop() || "name2"
				var name2 = feature.get(name_key2) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( '+ name2 * 30 +', '+ name2 * 50 +', '+ name2 * 80 +',1)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba( '+ name2 * 30 +', '+ name2 * 50 +', '+ name2 * 80 +',1)',
					width: 3
				});
				var style = new ol.style.Style({
					text: new ol.style.Text({
								text: name,
								font: '12px Verdana',
								offsetX : 0,
								offsetY : 15
							}),
					fill: fill,
					stroke: stroke
				});
				var style2 = new ol.style.Style({
					image: new ol.style.RegularShape({
						fill: fill,
						stroke: stroke,
						points: 8,
						radius: name2 * 5
					}),
							text: new ol.style.Text({
								text: name2,
								font: '12px Arial',
								offsetX : 0,
								offsetY : 0,
								fill: new ol.style.Fill({
                            color: 'rgba(200,200,200,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return [style, style2];
			}

},
  
{
			group: 'Test',
			title: 'PRIPropietari provisional1',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/PRI2.geojson',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs2.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
   style: function (feature) {
				var key_regex = /^Denominació completa$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var key_regex2 = /^PP$/
				var name_key2 = feature.getKeys().filter(function(t){return t.match(key_regex2)}).pop() || "name2"
				var name2 = feature.get(name_key2) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#00FF00',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs1.svg',
                     scale: 0.1
      }),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '12px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				var style2 = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: 'PP '+ name2,
								color: 'rgba(0,128,0,0.4)',
								font: '12px Arial',
								offsetX : 0,
								offsetY : 15
							}),
					fill: fill,
					stroke: stroke
				});
				return [style, style2];
			}

},
		{
			group: 'Test',
			title: 'PRIPropietari provisional2',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/PRI2.geojson',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/pp.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var maxspeed = feature.get('PP') || '';
				if (maxspeed === ''){
					return undefined;
				}
				var styles = [];

				/* draw the segment line */ 
				var width = (parseFloat(maxspeed) / 0.3) + 0.5;
				var color = linearColorInterpolation([0, 255, 0], [255, 0, 0], Math.max(maxspeed, 2) / 20);
				var fill = new ol.style.Fill({
					color: 'rgb(' + color.join() + ')'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgb(' + color.join() + ')',
					width: width
				});
				styles.push(new ol.style.Style({
					stroke: stroke
				}));

				// doesn't show speed sign in roundabout and similars
				if (!feature.get('junction')) {
					/* show the speed sign */ 
					var coords = feature.getGeometry().getCoordinates();

					styles.push(new ol.style.Style({
						image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
						text: new ol.style.Text({
							text: maxspeed
						})
					}));
				}

				return styles;
			}
},
		{
			group: 'Test',
			title: 'PRI Propietari provisional4',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/PRI2.geojson',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/pp.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var maxspeed = feature.get('PP') || '';
				if (maxspeed === ''){
					return undefined;
				}
				var styles = [];

				/* draw the segment line */ 
				var width = (parseFloat(maxspeed) / 0.3) + 0.5;
				var color = 'rgba( '+ maxspeed * 30 +', '+ maxspeed * 50 +', '+ maxspeed * 80 +',1)';
				var fill = new ol.style.Fill({
					color: color
				});
				var stroke = new ol.style.Stroke({
					color: color,
					width: width
				});
				styles.push(new ol.style.Style({
					stroke: stroke
				}));

				// doesn't show speed sign in roundabout and similars
				if (!feature.get('junction')) {
					/* show the speed sign */ 
					var coords = feature.getGeometry().getCoordinates();

					styles.push(new ol.style.Style({
						image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
						text: new ol.style.Text({
							text: maxspeed
						})
					}));
				}

				return styles;
			}
},
		{
			group: 'PRI',
			title: 'Total dotació',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/PRI2.geojson',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/tot_dot.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var maxspeed = feature.get('TOT_DOT') || '';
				if (maxspeed === ''){
					return undefined;
				}
				var styles = [];

				/* draw the segment line */ 
				var scale = (parseFloat(maxspeed) / 50) + 0.5;
				var color = linearColorInterpolation([0, 255, 0], [255, 0, 0], Math.max(maxspeed, 2) / 20);
				var fill = new ol.style.Fill({
					color: 'rgb(' + color.join() + ')'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgb(' + color.join() + ')',
					scale: scale
				});
				styles.push(new ol.style.Style({
					stroke: stroke
				}));

				// doesn't show speed sign in roundabout and similars
				if (!feature.get('junction')) {
					/* show the speed sign */ 
					var coords = feature.getGeometry().getCoordinates();

					styles.push(new ol.style.Style({
						image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/tot_dot_buit.svg',
                     scale: scale
      }),
						text: new ol.style.Text({
						text: maxspeed,
						font: '14px Arial',
								offsetX : 0,
								offsetY : 0,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
						})
					}));
				}

				return styles;
			}
},
		{
			group: 'PRI',
			title: 'Comissió Serveis',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/PRI2.geojson',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var maxspeed = feature.get('Comissió Serveis') || '';
				if (maxspeed === ''){
					return undefined;
				}
				var styles = [];

				/* draw the segment line */ 
				var scale = (parseFloat(maxspeed) / 50) + 0.5;
				var color = linearColorInterpolation([0, 255, 0], [255, 0, 0], Math.max(maxspeed, 2) / 20);
				var fill = new ol.style.Fill({
					color: 'rgb(' + color.join() + ')'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgb(' + color.join() + ')',
					scale: scale
				});
				styles.push(new ol.style.Style({
					stroke: stroke
				}));

				// doesn't show speed sign in roundabout and similars
				if (!feature.get('junction')) {
					/* show the speed sign */ 
					var coords = feature.getGeometry().getCoordinates();

					styles.push(new ol.style.Style({
						image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/cs_buit.svg',
                     scale: scale
      }),
						text: new ol.style.Text({
						text: maxspeed,
						font: '14px Arial',
								offsetX : 0,
								offsetY : 0,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
						})
					}));
				}

				return styles;
			}
},
		{
			group: 'PRI',
			title: 'Destinació Definitiva',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/PRI2.geojson',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/dd.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var maxspeed = feature.get('DD') || '';
				if (maxspeed === ''){
					return undefined;
				}
				var styles = [];

				/* draw the segment line */ 
				var scale = (parseFloat(maxspeed) / 50) + 0.5;
				var color = linearColorInterpolation([0, 255, 0], [255, 0, 0], Math.max(maxspeed, 2) / 20);
				var fill = new ol.style.Fill({
					color: 'rgb(' + color.join() + ')'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgb(' + color.join() + ')',
					scale: scale
				});
				styles.push(new ol.style.Style({
					stroke: stroke
				}));

				// doesn't show speed sign in roundabout and similars
				if (!feature.get('junction')) {
					/* show the speed sign */ 
					var coords = feature.getGeometry().getCoordinates();

					styles.push(new ol.style.Style({
						image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/dd_buit.svg',
                     scale: scale
      }),
						text: new ol.style.Text({
						text: maxspeed,
						font: '14px Arial',
								offsetX : 0,
								offsetY : 0,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
						})
					}));
				}

				return styles;
			}
},
		{
			group: 'PRI',
			title: 'Propietari Provisional',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/PRI2.geojson',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/pp.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var maxspeed = feature.get('PP') || '';
				if (maxspeed === ''){
					return undefined;
				}
				var styles = [];

				/* draw the segment line */ 
				var scale = (parseFloat(maxspeed) / 50) + 0.5;
				var color = linearColorInterpolation([0, 255, 0], [255, 0, 0], Math.max(maxspeed, 2) / 20);
				var fill = new ol.style.Fill({
					color: 'rgb(' + color.join() + ')'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgb(' + color.join() + ')',
					scale: scale
				});
				styles.push(new ol.style.Style({
					stroke: stroke
				}));

				// doesn't show speed sign in roundabout and similars
				if (!feature.get('junction')) {
					/* show the speed sign */ 
					var coords = feature.getGeometry().getCoordinates();

					styles.push(new ol.style.Style({
						image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/pp_buit.svg',
                     scale: scale
      }),
						text: new ol.style.Text({
						text: maxspeed,
						font: '14px Arial',
								offsetX : 0,
								offsetY : 0,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
						})
					}));
				}

				return styles;
			}
},
		{
			group: 'PRI',
			title: 'Interí',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/PRI2.geojson',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/in.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var maxspeed = feature.get('IN') || '';
				if (maxspeed === ''){
					return undefined;
				}
				var styles = [];

				/* draw the segment line */ 
				var scale = (parseFloat(maxspeed) / 50) + 0.5;
				var color = linearColorInterpolation([0, 255, 0], [255, 0, 0], Math.max(maxspeed, 2) / 20);
				var fill = new ol.style.Fill({
					color: 'rgb(' + color.join() + ')'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgb(' + color.join() + ')',
					scale: scale
				});
				styles.push(new ol.style.Style({
					stroke: stroke
				}));

				// doesn't show speed sign in roundabout and similars
				if (!feature.get('junction')) {
					/* show the speed sign */ 
					var coords = feature.getGeometry().getCoordinates();

					styles.push(new ol.style.Style({
						image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/in_buit.svg',
                     scale: scale
      }),
						text: new ol.style.Text({
						text: maxspeed,
						font: '14px Arial',
								offsetX : 0,
								offsetY : 0,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
						})
					}));
				}

				return styles;
			}
},
		{
			group: 'PRI',
			title: 'No Fix',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/PRI2.geojson',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/nf.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var maxspeed = feature.get('NF') || '';
				if (maxspeed === ''){
					return undefined;
				}
				var styles = [];

				/* draw the segment line */ 
				var scale = (parseFloat(maxspeed) / 50) + 0.5;
				var color = linearColorInterpolation([0, 255, 0], [255, 0, 0], Math.max(maxspeed, 2) / 20);
				var fill = new ol.style.Fill({
					color: 'rgb(' + color.join() + ')'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgb(' + color.join() + ')',
					scale: scale
				});
				styles.push(new ol.style.Style({
					stroke: stroke
				}));

				// doesn't show speed sign in roundabout and similars
				if (!feature.get('junction')) {
					/* show the speed sign */ 
					var coords = feature.getGeometry().getCoordinates();

					styles.push(new ol.style.Style({
						image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/nf_buit.svg',
                     scale: scale
      }),
						text: new ol.style.Text({
						text: maxspeed,
						font: '14px Arial',
								offsetX : 0,
								offsetY : 0,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
						})
					}));
				}

				return styles;
			}
},
		{
			group: 'PRI',
			title: 'PS',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/PRI2.geojson',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/ps.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var maxspeed = feature.get('PS') || '';
				if (maxspeed === ''){
					return undefined;
				}
				var styles = [];

				/* draw the segment line */ 
				var scale = (parseFloat(maxspeed) / 50) + 0.5;
				var color = linearColorInterpolation([0, 255, 0], [255, 0, 0], Math.max(maxspeed, 2) / 20);
				var fill = new ol.style.Fill({
					color: 'rgb(' + color.join() + ')'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgb(' + color.join() + ')',
					scale: scale
				});
				styles.push(new ol.style.Style({
					stroke: stroke
				}));

				// doesn't show speed sign in roundabout and similars
				if (!feature.get('junction')) {
					/* show the speed sign */ 
					var coords = feature.getGeometry().getCoordinates();

					styles.push(new ol.style.Style({
						image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/ps_buit.svg',
                     scale: scale
      }),
						text: new ol.style.Text({
						text: maxspeed,
						font: '14px Arial',
								offsetX : 0,
								offsetY : 0,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
						})
					}));
				}

				return styles;
			}
},
		{
			group: 'PRI',
			title: 'RF',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/PRI2.geojson',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/rf.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var maxspeed = feature.get('RF') || '';
				if (maxspeed === ''){
					return undefined;
				}
				var styles = [];

				/* draw the segment line */ 
				var scale = (parseFloat(maxspeed) / 50) + 0.5;
				var color = linearColorInterpolation([0, 255, 0], [255, 0, 0], Math.max(maxspeed, 2) / 20);
				var fill = new ol.style.Fill({
					color: 'rgb(' + color.join() + ')'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgb(' + color.join() + ')',
					scale: scale
				});
				styles.push(new ol.style.Style({
					stroke: stroke
				}));

				// doesn't show speed sign in roundabout and similars
				if (!feature.get('junction')) {
					/* show the speed sign */ 
					var coords = feature.getGeometry().getCoordinates();

					styles.push(new ol.style.Style({
						image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/img/base/rf_buit.svg',
                     scale: scale
      }),
						text: new ol.style.Text({
						text: maxspeed,
						font: '14px Arial',
								offsetX : 0,
								offsetY : 0,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
						})
					}));
				}

				return styles;
			}
},

 {

   group: 'Test',
   title: 'CS-100-4005',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/100-400.geojson',
	iconSrc: imgSrc + 'base/circle.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
   style: function (feature) {
    var key_regex = /TOT_DOT/
    var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
    var name = feature.get(name_key) || '';
	    var key_regex2 = /Denominació completa/
    var name_key2 = feature.getKeys().filter(function(t){return t.match(key_regex2)}).pop() || "name2"
    var name2 = feature.get(name_key2) || '';
    var styles = {
     'TOT_DOT': {
      '1': new ol.style.Style({
       image: new ol.style.Circle({
								radius: 4,
								displacement: [15, 30],
								fill: new ol.style.Fill({
									color: 'rgba(0, 0, 141, 0.8)'
								}),
								stroke: new ol.style.Stroke({
								color: 'rgba(0, 0, 141, 1.0)',
								width: 2
							})
							}),
       text: new ol.style.Text({
        text: name,
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'TOT_DOT': {
      '1': new ol.style.Style({
          image: new ol.style.Circle({
								radius: 8,
								displacement: [10, 20],
								fill: new ol.style.Fill({
									color: 'rgba(0, 0, 183, 0.8)'
								}),
								stroke: new ol.style.Stroke({
								color: 'rgba(0, 0, 183, 1.0)',
								width: 2
							})
							}),
       text: new ol.style.Text({
        text: name2,
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'TOT_DOT': {
      '3': new ol.style.Style({
          image: new ol.style.Circle({
								radius: 12,
								displacement: [15, 30],
								fill: new ol.style.Fill({
									color: 'rgba(140, 100, 95, 0.8)'
								}),
								stroke: new ol.style.Stroke({
								color: 'rgba(255, 0, 255, 1.0)',
								width: 2
							})
							}),
       text: new ol.style.Text({
        text: name,
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'TOT_DOT': {
      '4': new ol.style.Style({
          image: new ol.style.Circle({
								radius: 16,
								displacement: [15, 30],
								fill: new ol.style.Fill({
									color: 'rgba(140, 100, 95, 0.8)'
								}),
								stroke: new ol.style.Stroke({
								color: 'rgba(255, 0, 255, 1.0)',
								width: 2
							})
							}),
       text: new ol.style.Text({
        text: name,
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'TOT_DOT': {
      '"6"': new ol.style.Style({
          image: new ol.style.Circle({
								radius: 20,
								displacement: [15, 30],
								fill: new ol.style.Fill({
									color: 'rgba(140, 100, 95, 0.8)'
								}),
								stroke: new ol.style.Stroke({
								color: 'rgba(255, 0, 255, 1.0)',
								width: 2
							})
							}),
       text: new ol.style.Text({
        text: name,
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     }
    };
    for (var key in styles) {
     var value = feature.get(key);
     if (value !== undefined) {
      for (var regexp in styles[key]) {
       if (new RegExp(regexp).test(value)) {
        return styles[key][regexp];
       }
      }
     }
    }
    return null;
   } 
   
},
 {

   group: 'Test',
   title: 'CS-100-4004',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/100-400.geojson',
	iconSrc: imgSrc + 'base/circle.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
   style: function (feature) {
    var key_regex = /Denominació completa/
    var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
    var name = feature.get(name_key) || '';
    var styles = {
     'TOT_DOT': {
      '1': new ol.style.Style({
       image: new ol.style.Circle({
								radius: 4,
								displacement: [15, 30],
								fill: new ol.style.Fill({
									color: 'rgba(0, 0, 141, 0.8)'
								}),
								stroke: new ol.style.Stroke({
								color: 'rgba(0, 0, 141, 1.0)',
								width: 2
							})
							}),
       text: new ol.style.Text({
        text: name,
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'TOT_DOT': {
      '2': new ol.style.Style({
          image: new ol.style.Circle({
								radius: 8,
								displacement: [10, 20],
								fill: new ol.style.Fill({
									color: 'rgba(0, 0, 183, 0.8)'
								}),
								stroke: new ol.style.Stroke({
								color: 'rgba(0, 0, 183, 1.0)',
								width: 2
							})
							}),
       text: new ol.style.Text({
        text: name,
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'TOT_DOT': {
      '3': new ol.style.Style({
          image: new ol.style.Circle({
								radius: 12,
								displacement: [15, 30],
								fill: new ol.style.Fill({
									color: 'rgba(140, 100, 95, 0.8)'
								}),
								stroke: new ol.style.Stroke({
								color: 'rgba(255, 0, 255, 1.0)',
								width: 2
							})
							}),
       text: new ol.style.Text({
        text: name,
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'TOT_DOT': {
      '4': new ol.style.Style({
          image: new ol.style.Circle({
								radius: 16,
								displacement: [15, 30],
								fill: new ol.style.Fill({
									color: 'rgba(140, 100, 95, 0.8)'
								}),
								stroke: new ol.style.Stroke({
								color: 'rgba(255, 0, 255, 1.0)',
								width: 2
							})
							}),
       text: new ol.style.Text({
        text: name,
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'TOT_DOT': {
      '5': new ol.style.Style({
          image: new ol.style.Circle({
								radius: 20,
								displacement: [15, 30],
								fill: new ol.style.Fill({
									color: 'rgba(140, 100, 95, 0.8)'
								}),
								stroke: new ol.style.Stroke({
								color: 'rgba(255, 0, 255, 1.0)',
								width: 2
							})
							}),
       text: new ol.style.Text({
        text: name,
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     }
    };
    for (var key in styles) {
     var value = feature.get(key);
     if (value !== undefined) {
      for (var regexp in styles[key]) {
       if (new RegExp(regexp).test(value)) {
        return styles[key][regexp];
       }
      }
     }
    }
    return null;
   } 
   
},
 {

   group: 'Test',
   title: 'Primària Test',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/primaria.geojson',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B1a.png',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
   style: function (feature) {
    var key_regex = /^PRIMARIA/
    var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
    var name = feature.get(name_key) || '';
    var styles = {
     'PRIMARIA': {
      'SI': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Citroen_2022.svg/1024px-Citroen_2022.svg.png',
       
       scale: 0.10
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'PRIMARIA': {
      'NO': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B1a.png',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'ESPECIALITAT': {
      'PAN': new ol.style.Style({
       zIndex: 100,
       stroke: new ol.style.Stroke({
        color: 'rgba(246, 99, 79, 1.0)',
        width: 1
       }),
       fill: new ol.style.Fill({
        color: 'rgba(246, 99, 79, 0.3)'
       }),
       text: new ol.style.Text({
        text: name
       })
      })
     }
    };
    for (var key in styles) {
     var value = feature.get(key);
     if (value !== undefined) {
      for (var regexp in styles[key]) {
       if (new RegExp(regexp).test(value)) {
        return styles[key][regexp];
       }
      }
     }
    }
    return null;
   } 
   
},
		{
			group: 'Test',
			title: 'Primària No',
	geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/primaria.geojson',
	iconSrc: imgSrc + 'base/circle.svg',
	iconStyle: 'background-color:rgba(0,255,0,1)',
			style: function (feature) {
				var key_regex = /^PRIMARIA$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,255,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
},
 {

   group: 'Test',
   title: 'Primària Sí2',
	geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/primaria.geojson',
	iconSrc: imgSrc + 'base/circle.svg',
	iconStyle: 'background-color:rgba(0,255,0,1)',
   style: function (feature) {
    var key_regex = /^Nom_Local/
    var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
    var name = feature.get(name_key) || '';
    var styles = {
     'Primària': {
      'Sí': new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'Nom_Local': {
      'Sn': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B1a.png',
       
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'traffic_sign': {
      'ES:B1a': new ol.style.Style({
       zIndex: 100,
       stroke: new ol.style.Stroke({
        color: 'rgba(246, 99, 79, 1.0)',
        width: 1
       }),
       fill: new ol.style.Fill({
        color: 'rgba(246, 99, 79, 0.3)'
       }),
       text: new ol.style.Text({
        text: name
       })
      })
     }
    };
    for (var key in styles) {
     var value = feature.get(key);
     if (value !== undefined) {
      for (var regexp in styles[key]) {
       if (new RegExp(regexp).test(value)) {
        return styles[key][regexp];
       }
      }
     }
    }
    return null;
   } 
   
},
	
		{
			group: 'Test',
			title: 'Primària Sí',
			geojson: 'https://raw.githubusercontent.com/yopaseopor/mapaplacesedu/main/src/primaria.geojson',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,255,0,1)',
			query: '(nwr[~"^name:193[0-9]-193[0-9]$"~"."]({{bbox}});node(w););out meta;',
			style: function (feature) {
				var key_regex = /^name:193[0-9]-193[0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
					'PRIMARIA': {
						'SI': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(170, 170, 170, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(170, 170, 170, 0.3)'
							})
						})
					},
					'building': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
										},
					'place': {
						'.*': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'highway': {
						'residential': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 7
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'living_street': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 7
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'pedestrian': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 7
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'tertiary': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 8
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'secondary': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 8
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'primary': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 8
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'trunk': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 8
							}),
							text: new ol.style.Text({
								text: name,
								placement: 'line'
							})
						}),
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 3
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'landuse': {
						'forest|grass|allotments': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(140, 208, 95, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'leisure': {
						'.*': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(140, 208, 95, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(140, 208, 95, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					},
					'natural': {
						'tree': new ol.style.Style({
							image: new ol.style.Circle({
								radius: 2,
								fill: new ol.style.Fill({
									color: 'rgba(140, 208, 95, 1.0)'
								}),
								stroke: null
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		}
	],

	//Es crida sempre que es fa click sobre el mapa
	onClickEvent: function(evt, view, coordinateLL) {
		
		var complete = $('<div>').html(config.i18n.completeWith);
		
		//Mapcomplete survey_date
		complete.append($('<a>').css('marginLeft', 5).attr({title: 'Validation data', href: 'https://pietervdvn.github.io/mc/legacy/0.27.4/theme.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Ftestcheckdate.json&language=en#welcome', target: '_blank'}).html($('<img>').attr({src:'https://raw.githubusercontent.com/yopaseopor/mcquests/master/images/icones/mc_checkdate.svg', height: 20, width: 20})));

var edit = $('<div>').html(config.i18n.editWith);
		//@@ID editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'iD', href: 'https://www.openstreetmap.org/edit?editor=id&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/ID.svg', height: 20, width: 20})));
		//Level0 editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'Potlatch 2', href: 'https://level0.osmz.ru/index.php?center=' + coordinateLL[1] + ',' + coordinateLL[0], target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/L0_logo.png', height: 20, width: 20})));
		//JOSM, Mercator, Potlach2 (remote control) editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'JOSM', href: 'https://www.openstreetmap.org/edit?editor=remote&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/JOSM Logotype 2019.svg', height: 20, width: 20})));
		//@@RapiD editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'iD', href: 'https://rapideditor.org/edit#background=Bing&datasets=fbRoads,msBuildings&disable_features=boundaries&map=' + view.getZoom() + '/' + coordinateLL[1] + '/' + coordinateLL[0], target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones_web/rapid_logo.png', height: 20, width: 20})));

		var open = $('<div>').html(config.i18n.openWith);
		//OSM
		open.append($('<a>').css('marginLeft', 5).attr({title: 'OSM', href: 'https://www.openstreetmap.org/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osm_logo-layer.svg', height: 20, width: 20})));
		//Latest OpenStreetMap Edits per Tile
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Latest OpenStreetMap Edits per Tile', href: 'https://resultmaps.neis-one.org/osm-change-tiles#' + view.getZoom() + '/' + coordinateLL[1] + '/' + coordinateLL[0], target: '_blank'}).html($('<img>').attr({src: imgSrc + 'neis-one_logo.png', height: 20, width: 20})));
		//Here WeGo
		open.append($('<a>').css('marginLeft', 5).attr({title: 'HERE WeBo', href: 'https://wego.here.com/?map=' + coordinateLL[1] + ',' + coordinateLL[0] + ',' + Math.min(view.getZoom(), 18) + ',normal', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'here_logo.png', height: 20, width: 20})));
		//Google
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Google Maps', href: 'https://maps.google.es/maps?ll=' + coordinateLL[1] + ',' + coordinateLL[0] + '&z=' + Math.min(view.getZoom(), 21), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'gmaps_logo_layer.png', height: 20, width: 20})));

		var tool = $('<div>').html(config.i18n.checkTools);
		//Notes a OSM
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Notes a OSM', href: 'https://www.openstreetmap.org/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom() + '&layers=N', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osm_logo-layer.svg', height: 20, width: 20})));
		//Keep right!
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Keep right!', href: 'https://www.keepright.at/report_map.php?lang=es&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + Math.min(view.getZoom(), 19) + '&ch50=1&ch191=1&ch195=1&ch201=1&ch205=1&ch206=1&ch311=1&ch312=1&ch313=1&ch402=1&number_of_tristate_checkboxes=8&highlight_error_id=0&highlight_schema=0show_ign=1&show_tmpign=1&layers=B0T&ch=0%2C50%2C70%2C170%2C191%2C195%2C201%2C205%2C206%2C220%2C231%2C232%2C311%2C312%2C313%2C402', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'keepright_logo.png', height: 20, width: 20})));
		//Geofabrik Tools
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Geofabrik Tools', href: 'https://tools.geofabrik.de/osmi/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + Math.min(view.getZoom(), 18) + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'geofabrik.png', height: 20, width: 20})));

return $.merge($.merge($.merge(open, tool), complete), edit);
	},

	//Es crida per cada element trobat al fer click
	forFeatureAtPixel: function(evt, feature) {
		var node = $('<div>').css('borderTop', '1px solid');
		var metaNode = feature.get('meta');

		if (metaNode && metaNode['type']) {
			var nodeType = metaNode['type'];
			node.append([config.i18n[nodeType==='node' ? 'nodeLabel' : 'wayLabel'], ' ', $('<a>').css('fontWeight', 900).attr({href: 'https://www.openstreetmap.org/' + nodeType + '/' + feature.getId(), target: '_blank'}).html(feature.getId()), '<br/>']);
		} else {
			node.append([config.i18n.nodeLabel, ' ', $('<span>').css('fontWeight', 900).html(feature.getId()), '<br/>']);
		}

		$.each(feature.getProperties(), function (index, value) {
			if (typeof value !== 'object') {
				node.append([$('<a>').attr({href: 'https://wiki.openstreetmap.org/wiki/Key:' + index + '?uselang=ca', target: '_blank'}).html(index), ': ', value, '<br/>']);
			}
		});

		if (metaNode) {
			var metaNodeDiv = $('<div>').css({'borderLeft': '1px solid', 'margin': '2px 0 0 3px', 'paddingLeft': '3px'});
			$.each(metaNode, function (index, value) {
				if (index !== 'id' && index !== 'type' && index !== 'uid') {
					var valueEl = value;
					switch (index) {
						case 'user':
							valueEl = $('<a>').attr({href: 'https://www.openstreetmap.org/user/' + value, target: '_blank'}).html(value);
							break;
						case 'changeset':
							valueEl = $('<a>').attr({href: 'https://www.openstreetmap.org/changeset/' + value, target: '_blank'}).html(value);
							break;
					}
					metaNodeDiv.append([index, ': ', valueEl, '<br/>']);
				}
			});
			node.append(metaNodeDiv);
		}

		return node;
	},

	//Es crida sempre que es fa click sobre el mapa
	onClickEventExtra: function(evt, view, coordinateLL, numFeatures) {

		if (!numFeatures) {
			//TODO Consulta dels nodes proxims a la posicio
			var marge = 0.0003,
				query = 'node({{bbox}});out;';

			query = query.replace('{{bbox}}', (coordinateLL[1] - marge) + ',' + (coordinateLL[0] - marge) + ',' + (coordinateLL[1] + marge) + ',' + (coordinateLL[0] + marge));
			console.log('query:', query);
		}

		return {};
	}
};
