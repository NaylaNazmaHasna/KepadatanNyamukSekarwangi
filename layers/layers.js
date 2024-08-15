var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Waypoints_1 = new ol.format.GeoJSON();
var features_Waypoints_1 = format_Waypoints_1.readFeatures(json_Waypoints_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waypoints_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waypoints_1.addFeatures(features_Waypoints_1);
var lyr_Waypoints_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waypoints_1, 
                style: style_Waypoints_1,
                popuplayertitle: "Waypoints",
                interactive: true,
                title: '<img src="styles/legend/Waypoints_1.png" /> Waypoints'
            });
var format_naylabisawaypoints_2 = new ol.format.GeoJSON();
var features_naylabisawaypoints_2 = format_naylabisawaypoints_2.readFeatures(json_naylabisawaypoints_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_naylabisawaypoints_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_naylabisawaypoints_2.addFeatures(features_naylabisawaypoints_2);
var lyr_naylabisawaypoints_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_naylabisawaypoints_2, 
                style: style_naylabisawaypoints_2,
                popuplayertitle: "nayla bisa — waypoints",
                interactive: true,
                title: '<img src="styles/legend/naylabisawaypoints_2.png" /> nayla bisa — waypoints'
            });
var format_Sekarwangiadministrasidesa_ar_25k_3 = new ol.format.GeoJSON();
var features_Sekarwangiadministrasidesa_ar_25k_3 = format_Sekarwangiadministrasidesa_ar_25k_3.readFeatures(json_Sekarwangiadministrasidesa_ar_25k_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sekarwangiadministrasidesa_ar_25k_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekarwangiadministrasidesa_ar_25k_3.addFeatures(features_Sekarwangiadministrasidesa_ar_25k_3);
var lyr_Sekarwangiadministrasidesa_ar_25k_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sekarwangiadministrasidesa_ar_25k_3, 
                style: style_Sekarwangiadministrasidesa_ar_25k_3,
                popuplayertitle: "Sekarwangi — administrasidesa_ar_25k",
                interactive: true,
                title: '<img src="styles/legend/Sekarwangiadministrasidesa_ar_25k_3.png" /> Sekarwangi — administrasidesa_ar_25k'
            });
var format_Buffered_4 = new ol.format.GeoJSON();
var features_Buffered_4 = format_Buffered_4.readFeatures(json_Buffered_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_4.addFeatures(features_Buffered_4);
var lyr_Buffered_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_4, 
                style: style_Buffered_4,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_4.png" /> Buffered'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Waypoints_1.setVisible(true);lyr_naylabisawaypoints_2.setVisible(true);lyr_Sekarwangiadministrasidesa_ar_25k_3.setVisible(true);lyr_Buffered_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Waypoints_1,lyr_naylabisawaypoints_2,lyr_Sekarwangiadministrasidesa_ar_25k_3,lyr_Buffered_4];
lyr_Waypoints_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_naylabisawaypoints_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Sekarwangiadministrasidesa_ar_25k_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Buffered_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Waypoints_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_naylabisawaypoints_2.set('fieldImages', {'OBJECTID': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Sekarwangiadministrasidesa_ar_25k_3.set('fieldImages', {'OBJECTID': '', 'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Buffered_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Waypoints_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_naylabisawaypoints_2.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Sekarwangiadministrasidesa_ar_25k_3.set('fieldLabels', {'OBJECTID': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Buffered_4.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Buffered_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});