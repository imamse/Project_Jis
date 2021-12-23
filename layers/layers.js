var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_building_yes_1 = new ol.format.GeoJSON();
var features_building_yes_1 = format_building_yes_1.readFeatures(json_building_yes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_yes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_yes_1.addFeatures(features_building_yes_1);
var lyr_building_yes_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_yes_1, 
                style: style_building_yes_1,
                interactive: true,
                title: '<img src="styles/legend/building_yes_1.png" /> building_yes'
            });
var format_building_yes_2 = new ol.format.GeoJSON();
var features_building_yes_2 = format_building_yes_2.readFeatures(json_building_yes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_yes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_yes_2.addFeatures(features_building_yes_2);
var lyr_building_yes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_yes_2, 
                style: style_building_yes_2,
                interactive: true,
                title: '<img src="styles/legend/building_yes_2.png" /> building_yes'
            });
var format_sport_soccer_3 = new ol.format.GeoJSON();
var features_sport_soccer_3 = format_sport_soccer_3.readFeatures(json_sport_soccer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sport_soccer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sport_soccer_3.addFeatures(features_sport_soccer_3);
var lyr_sport_soccer_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sport_soccer_3, 
                style: style_sport_soccer_3,
                interactive: true,
                title: '<img src="styles/legend/sport_soccer_3.png" /> sport_soccer'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_building_yes_1.setVisible(true);lyr_building_yes_2.setVisible(true);lyr_sport_soccer_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_building_yes_1,lyr_building_yes_2,lyr_sport_soccer_3];
lyr_building_yes_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'motorcar': 'motorcar', });
lyr_building_yes_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'type': 'type', 'addr:housename': 'addr:housename', 'addr:housenumber': 'addr:housenumber', 'addr:street': 'addr:street', 'designation': 'designation', 'building:levels': 'building:levels', 'building:roof': 'building:roof', 'building:structure': 'building:structure', 'building:use': 'building:use', 'building:walls': 'building:walls', 'name': 'name', 'emergency': 'emergency', 'addr:city': 'addr:city', 'addr:full': 'addr:full', 'amenity': 'amenity', 'opening_hours': 'opening_hours', 'operator:type': 'operator:type', 'access:roof': 'access:roof', 'backup_generator': 'backup_generator', 'building:condition': 'building:condition', 'building:floor': 'building:floor', 'capacity:persons': 'capacity:persons', 'leisure': 'leisure', 'sport': 'sport', 'addr:postcode': 'addr:postcode', 'healthcare': 'healthcare', 'wheelchair': 'wheelchair', 'cuisine': 'cuisine', 'height': 'height', 'insurance': 'insurance', 'healthcare:speciality': 'healthcare:speciality', 'phone': 'phone', });
lyr_sport_soccer_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr:city': 'addr:city', 'leisure': 'leisure', 'sport': 'sport', 'surface': 'surface', });
lyr_building_yes_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'motorcar': '', });
lyr_building_yes_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'type': '', 'addr:housename': '', 'addr:housenumber': '', 'addr:street': '', 'designation': '', 'building:levels': '', 'building:roof': '', 'building:structure': '', 'building:use': '', 'building:walls': '', 'name': '', 'emergency': '', 'addr:city': '', 'addr:full': '', 'amenity': '', 'opening_hours': '', 'operator:type': '', 'access:roof': '', 'backup_generator': '', 'building:condition': '', 'building:floor': '', 'capacity:persons': '', 'leisure': '', 'sport': '', 'addr:postcode': '', 'healthcare': '', 'wheelchair': '', 'cuisine': '', 'height': '', 'insurance': '', 'healthcare:speciality': '', 'phone': '', });
lyr_sport_soccer_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'addr:city': '', 'leisure': '', 'sport': '', 'surface': '', });
lyr_building_yes_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'motorcar': 'no label', });
lyr_building_yes_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'type': 'no label', 'addr:housename': 'no label', 'addr:housenumber': 'no label', 'addr:street': 'no label', 'designation': 'no label', 'building:levels': 'no label', 'building:roof': 'no label', 'building:structure': 'no label', 'building:use': 'no label', 'building:walls': 'no label', 'name': 'no label', 'emergency': 'no label', 'addr:city': 'no label', 'addr:full': 'no label', 'amenity': 'no label', 'opening_hours': 'no label', 'operator:type': 'no label', 'access:roof': 'no label', 'backup_generator': 'no label', 'building:condition': 'no label', 'building:floor': 'no label', 'capacity:persons': 'no label', 'leisure': 'no label', 'sport': 'no label', 'addr:postcode': 'no label', 'healthcare': 'no label', 'wheelchair': 'no label', 'cuisine': 'no label', 'height': 'no label', 'insurance': 'no label', 'healthcare:speciality': 'no label', 'phone': 'no label', });
lyr_sport_soccer_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'addr:city': 'no label', 'leisure': 'no label', 'sport': 'no label', 'surface': 'no label', });
lyr_sport_soccer_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});