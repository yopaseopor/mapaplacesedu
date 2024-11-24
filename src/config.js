/**
 * OSM Cat config
 */


var imgSrc = 'src/img/';

var config = {
	initialConfig: {
		lon: 1.59647,
		lat: 41.69689,
		rotation: 0, //in radians (positive rotation clockwise, 0 means North)
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
			group: 'Survey:date',
			title: 'No Survey:date',
			query: '(nwr[!"survey:date"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,0,0,0.4)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0,1)',
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
			title: 'Falta Wheelchair',
			query: '(node[!wheelchair][shop]({{bbox}});node[!wheelchair][amenity]({{bbox}});node[!wheelchair][office]({{bbox}}););out meta;',
			iconSrc: imgSrc + 'accessibilitat/wheelchair_unknown.svg',
			iconStyle: 'background-color:#714601',
			scale: 0.25,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/wheelchair_unknown.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Test',
			title: 'Falta Check_date (nodes)',
			query: '(node[!check_date][shop]({{bbox}});node[!check_date][amenity]({{bbox}});node[!check_date][office]({{bbox}}););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#000000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Test',
			title: 'Check_date > 2020',
			query: '(nwr[~"^check_date$"~"201[0-9]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255,0,0,0.4)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
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
			title: 'Check_date < 2020',
			query: '(nwr[~"^check_date$"~"202[0-9]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,255,0,0.4)',
			style: function (feature) {
				var key_regex = /^check_date$/
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
			title: 'Falta Check_date (nodes)',
			query: '(node[!check_date][shop]({{bbox}});node[!check_date][amenity]({{bbox}});node[!check_date][office]({{bbox}}););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#000000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Test',
			title: '2016',
			query: '(nwr[~"^survey:date$"~"201[6]."]({{bbox}});node(w);nwr[~"^survey:date:2016$"~"201[6]."]({{bbox}});node(w));out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(187,92,120,1)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(187,92,120,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(187,92,120,1)',
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
			group: 'Survey:date',
			title: 'Survey:date > 2020',
			query: '(nwr[~"^survey:date$"~"201[0-9]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255,0,0,1)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
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
			group: 'Survey:date',
			title: '> 2015',
			query: '(nwr[~"^survey:date$"~"201[0-5]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(117,63,79,1)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(117,63,79,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(117,63,79,1)',
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
			group: 'Survey:date',
			title: '2016',
			query: '(nwr[~"^survey:date$"~"201[6]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(187,92,120,1)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(187,92,120,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(187,92,120,1)',
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
			group: 'Survey:date',
			title: '2017',
			query: '(nwr[~"^survey:date$"~"201[7]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255,152,124,1)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,152,124,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,152,124,1)',
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
			group: 'Survey:date',
			title: '2018',
			query: '(nwr[~"^survey:date$"~"201[8]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255,209,124,1)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,209,124,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,209,124,1)',
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
			group: 'Survey:date',
			title: '2019',
			query: '(nwr[~"^survey:date$"~"201[9]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255,251,124,1)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,251,124,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,251,124,1)',
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
			group: 'Survey:date',
			title: '2020',
			query: '(nwr[~"^survey:date$"~"202[0]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(190,255,124,1)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(190,255,124,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(190,255,124,1)',
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
			group: 'Survey:date',
			title: '2021',
			query: '(nwr[~"^survey:date$"~"202[1]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(124,255,166,1)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(124,255,166,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(124,255,166,1)',
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
			group: 'Survey:date',
			title: '2022',
			query: '(nwr[~"^survey:date$"~"202[2]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(124,255,245,1)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(124,255,245,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(124,255,245,1)',
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
			group: 'Survey:date',
			title: '2023',
			query: '(nwr[~"^survey:date$"~"202[3]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,0,255,1)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,255,1)',
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
			group: 'Survey:date',
			title: '2024',
			query: '(nwr[~"^survey:date$"~"202[4]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 187, 46, 204,1)',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 187, 46, 204,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 187, 46, 204,1)',
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
			group: 'Survey:date',
			title: '2020 < Survey:date',
			query: '(nwr[~"^survey:date$"~"202[0-9]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,255,0,1)',
			style: function (feature) {
				var key_regex = /^survey:date$/
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
			group: 'Check_date',
			title: 'No check_date',
			query: '(nwr[!"check_date"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,0,0,0.4)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,0,1)',
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
			group: 'Check_date',
			title: 'check_date > 2020',
			query: '(nwr[~"^check_date$"~"201[0-9]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255,0,0,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
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
			group: 'Check_date',
			title: '> 2015',
			query: '(nwr[~"^check_date$"~"201[0-5]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(117,63,79,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(117,63,79,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(117,63,79,1)',
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
			group: 'Check_date',
			title: '2016',
			query: '(nwr[~"^check_date$"~"201[6]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(187,92,120,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(187,92,120,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(187,92,120,1)',
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
			group: 'Check_date',
			title: '2017',
			query: '(nwr[~"^check_date$"~"201[7]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255,152,124,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,152,124,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,152,124,1)',
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
			group: 'Check_date',
			title: '2018',
			query: '(nwr[~"^check_date$"~"201[8]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255,209,124,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,209,124,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,209,124,1)',
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
			group: 'Check_date',
			title: '2019',
			query: '(nwr[~"^check_date$"~"201[9]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255,251,124,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,251,124,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,251,124,1)',
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
			group: 'Check_date',
			title: '2020',
			query: '(nwr[~"^check_date$"~"202[0]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(190,255,124,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(190,255,124,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(190,255,124,1)',
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
			group: 'Check_date',
			title: '2021',
			query: '(nwr[~"^check_date$"~"202[1]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(124,255,166,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(124,255,166,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(124,255,166,1)',
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
			group: 'Check_date',
			title: '2022',
			query: '(nwr[~"^check_date$"~"202[2]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(124,255,245,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(124,255,245,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(124,255,245,1)',
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
			group: 'Check_date',
			title: '2023',
			query: '(nwr[~"^check_date$"~"202[3]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,0,255,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,255,1)',
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
			group: 'Check_date',
			title: '2024',
			query: '(nwr[~"^check_date$"~"202[4]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 187, 46, 204,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 187, 46, 204,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 187, 46, 204,1)',
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
			group: 'Check_date',
			title: '2020 < check_date',
			query: '(nwr[~"^check_date$"~"202[0-9]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(0,255,0,1)',
			style: function (feature) {
				var key_regex = /^check_date$/
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
			title: 'Check_date_extended2',
			query: '(nwr[~"^check_date:opening_hours$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(255,209,124,1)',
			style: function (feature) {
				var key_regex = /^check_date:opening_hours$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,209,124,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,209,124,1)',
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
			title: '0-98',
			query: '(nwr[~"^survey:date$"~"20[0-9][0-9]."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#753f4f',
			style: function (feature) {
				var key_regex = /^survey:date$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#753f4f',
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
			title: 'Falta Check_date (ways)',
			query: '(way[!check_date]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#000000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.2)'
				});
				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Test',
			title: 'Falta survey:date (nodes)',
			query: '(nwr[!"survey:date"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'accessibilitat/wheelchair_unknown.svg',
			iconStyle: 'background-color:#714601',
			scale: 0.25,
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/wheelchair_unknown.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Test',
			title: 'Falta survey:date (ways)',
			query: '(nwr[!"survey:date"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#000000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.2)'
				});
				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Test',
			title: 'Surveydate_Exact year',
			query: '(nwr[~"^survey:date$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#0000ff',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#0000ff',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Test',
			title: 'Check_date_Exact year',
			query: '(nwr[~"^check_date$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#0000ff',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#0000ff',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},

		{
			group: 'Test',
			title: 'Stops signs',
			geojson: 'https://raw.githubusercontent.com/yopaseopor/osmhistoricmap/master/src/img/base/test.geojson',
			iconSrc: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						scale: 0.4,
						src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png'
					})
				});
				return style;
			}
    },
			// Overlay: Test
		{
			group: 'Test',
			title: 'node[name=]',
			query: 'node[name=]({{bbox}});out meta;'
		},

		
				// Right Ticket
		{
			group: 'Test',
			title: 'Right Ticket',
			query: '(way["parking:lane:right"="parallel"]["parking:condition:right"="ticket"]({{bbox}});node(w);way["parking:lane:right"="diagonal"]["parking:condition:right"="ticket"]({{bbox}});node(w);way["parking:lane:right"="perpendicular"]["parking:condition:right"="ticket"]({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'base/lineline.png',
			iconStyle: 'background-color:#0000FF',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#0000FF',
					width: 3 ,
					lineDash: [10, 10]
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
	
		{
			group: 'Test',
			title: 'ES_1932-1939 II Spanish Republic',
			geojson: 'https://raw.githubusercontent.com/yopaseopor/osmhistoricmap/master/src/img/base/2021_06_27_senyals_transit_bcn.geojson',
			iconSrc: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png',
			query: '(nwr[~"^name:193[0-9]-193[0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconStyle: 'background-color:#714601',
			style: function (feature) {
				var key_regex = /^name:193[0-9]-193[0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
					'amenity': {
						'parking': new ol.style.Style({
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
		 
		},
		{
			group: 'Test',
			title: '1961',
			query: '(nwr[~"^name:197[0-9]$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#0000ff',
			style: function (feature) {
				var key_regex = /^name:197[0-9]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#0000ff',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
},
  {
   group: 'Test',
   title: '1962',
   query: '(nwr[~"^name:197[0-9]$"~"."]({{bbox}});node(w););out meta;',
   iconSrc: imgSrc + 'base/circle.svg',
   iconStyle: 'background-color:#0000ff',
   style: function (feature) {
    var key_regex = /^name:197[0-9]$/
    var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
    var name = feature.get(name_key) || '';
    var fill = new ol.style.Fill({
     color: 'rgba(0,0,255,0.4)'
    });

var vectorLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: 'https://raw.githubusercontent.com/yopaseopor/osmhistoricmap/master/src/img/base/test.geojson'
    }),
  style: function (feature) {
    style.getText().setText(feature.get('highway'));
    return style;
  },
});
    var stroke = new ol.style.Stroke({
     color: '#0000ff',
     width: 1.25
    });
    var style = new ol.style.Style({
     image: new ol.style.Circle({
      fill: fill,
      stroke: stroke,
      radius: 5
     }),
       text: new ol.style.Text({
        text: name
       }),
     fill: fill,
     stroke: stroke
    });
    return style;
   }
  },

		{
			group: 'Test',
			title: '2020-2026 Peatge',
			query: '(nwr[~".:20.$"~"."]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#ef7cff',
			style: function (feature) {
				var key_regex = /^name:202[0-4]$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#ef7cff',
					width: 5
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		
		},
		

		{
			group: 'Test',
			title: 'node[name=]',
			query: 'node[name=]({{bbox}});out meta;'
		},
		{
			group: 'Test',
			title: 'building',
			query: '(node({{bbox}});rel(bn)->.foo;way(bn);node(w)->.foo;rel(bw););out;',
			style: function (feature) {
				var name = feature.get('name') || '';
				var styles = {
					'amenity': {
						'parking': new ol.style.Style({
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
					'highway': {
						'service': new ol.style.Style({
							stroke: new ol.style.Stroke({
								color: 'rgba(255, 255, 255, 1.0)',
								width: 2
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
