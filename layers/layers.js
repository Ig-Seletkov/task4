var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_C_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Cумма температур почвы > 10 градусов<br />\
    <img src="styles/legend/C_1_0.png" /> менее 1600<br />\
    <img src="styles/legend/C_1_1.png" /> 1600 - 1800<br />\
    <img src="styles/legend/C_1_2.png" /> 1800 - 2000<br />\
    <img src="styles/legend/C_1_3.png" /> 2000 - 2200<br />\
    <img src="styles/legend/C_1_4.png" /> 2200 - 2400<br />\
    <img src="styles/legend/C_1_5.png" /> более 2400<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/C_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [5746288.299159, 7563682.738619, 6644734.517880, 8783582.262429]
        })
    });
var format_T_2 = new ol.format.GeoJSON();
var features_T_2 = format_T_2.readFeatures(json_T_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T_2.addFeatures(features_T_2);
var lyr_T_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T_2, 
                style: style_T_2,
                popuplayertitle: 'Tяжелые металлы в почвах',
                interactive: true,
    title: 'Tяжелые металлы в почвах<br />\
    <img src="styles/legend/T_2_0.png" /> Районы по которым обследование почв не проводилось<br />\
    <img src="styles/legend/T_2_1.png" /> Районы по которым проведено обследование почв<br />' });
var format_P_3 = new ol.format.GeoJSON();
var features_P_3 = format_P_3.readFeatures(json_P_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_P_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P_3.addFeatures(features_P_3);
var lyr_P_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_P_3, 
                style: style_P_3,
                popuplayertitle: 'Pаспаханность почв',
                interactive: true,
    title: 'Pаспаханность почв<br />\
    <img src="styles/legend/P_3_0.png" /> 0 - 5 (очень слабо распаханные)<br />\
    <img src="styles/legend/P_3_1.png" /> 5 - 10 (слабо распаханные)<br />\
    <img src="styles/legend/P_3_2.png" /> 10 - 15 (средне распаханные)<br />\
    <img src="styles/legend/P_3_3.png" /> 15 - 20 (сильно распаханные<br />\
    <img src="styles/legend/P_3_4.png" /> 20 - 24 (очень сильно распаханные)<br />' });

lyr_ESRIGraylight_0.setVisible(true);lyr_C_1.setVisible(true);lyr_T_2.setVisible(true);lyr_P_3.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_C_1,lyr_T_2,lyr_P_3];
lyr_T_2.set('fieldAliases', {'name': 'Район', 'Co': 'Co', 'Cu': 'Cu', 'Zn': 'Zn', });
lyr_P_3.set('fieldAliases', {'name': 'Название района', 'area': 'Площадь (га)', 'plow': 'plow', });
lyr_T_2.set('fieldImages', {'name': 'TextEdit', 'Co': 'TextEdit', 'Cu': 'TextEdit', 'Zn': 'TextEdit', });
lyr_P_3.set('fieldImages', {'name': 'TextEdit', 'area': 'TextEdit', 'plow': 'TextEdit', });
lyr_T_2.set('fieldLabels', {'name': 'inline label - visible with data', 'Co': 'inline label - visible with data', 'Cu': 'inline label - visible with data', 'Zn': 'inline label - visible with data', });
lyr_P_3.set('fieldLabels', {'name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'plow': 'inline label - visible with data', });
lyr_P_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});