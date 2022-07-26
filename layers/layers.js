var wms_layers = [];


        var lyr_GooglecnSatellite_0 = new ol.layer.Tile({
            'title': 'Google.cn Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.com/intl/zh-CN_cn/permissions/geoguidelines/attr-guide.html">地图数据 ©2016 Google</a>',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_EspacosParceirosFLIP2019_2607Final_1 = new ol.format.GeoJSON();
var features_EspacosParceirosFLIP2019_2607Final_1 = format_EspacosParceirosFLIP2019_2607Final_1.readFeatures(json_EspacosParceirosFLIP2019_2607Final_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EspacosParceirosFLIP2019_2607Final_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EspacosParceirosFLIP2019_2607Final_1.addFeatures(features_EspacosParceirosFLIP2019_2607Final_1);
var lyr_EspacosParceirosFLIP2019_2607Final_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EspacosParceirosFLIP2019_2607Final_1, 
                style: style_EspacosParceirosFLIP2019_2607Final_1,
                interactive: true,
                title: '<img src="styles/legend/EspacosParceirosFLIP2019_2607Final_1.png" /> EspacosParceirosFLIP2019_26.07Final'
            });

lyr_GooglecnSatellite_0.setVisible(true);lyr_EspacosParceirosFLIP2019_2607Final_1.setVisible(true);
var layersList = [lyr_GooglecnSatellite_0,lyr_EspacosParceirosFLIP2019_2607Final_1];
lyr_EspacosParceirosFLIP2019_2607Final_1.set('fieldAliases', {'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_EspacosParceirosFLIP2019_2607Final_1.set('fieldImages', {'Nome': 'TextEdit', 'Descrição': '', });
lyr_EspacosParceirosFLIP2019_2607Final_1.set('fieldLabels', {'Nome': 'header label', 'Descrição': 'header label', });
lyr_EspacosParceirosFLIP2019_2607Final_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});