var wms_layers = [];

var format_pepohonan_0 = new ol.format.GeoJSON();
var features_pepohonan_0 = format_pepohonan_0.readFeatures(json_pepohonan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pepohonan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pepohonan_0.addFeatures(features_pepohonan_0);
var lyr_pepohonan_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pepohonan_0, 
                style: style_pepohonan_0,
                popuplayertitle: "pepohonan",
                interactive: true,
                title: '<img src="styles/legend/pepohonan_0.png" /> pepohonan'
            });
var format_sawah1_1 = new ol.format.GeoJSON();
var features_sawah1_1 = format_sawah1_1.readFeatures(json_sawah1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sawah1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sawah1_1.addFeatures(features_sawah1_1);
var lyr_sawah1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sawah1_1, 
                style: style_sawah1_1,
                popuplayertitle: "sawah1",
                interactive: true,
                title: '<img src="styles/legend/sawah1_1.png" /> sawah1'
            });
var format_Rumah_2 = new ol.format.GeoJSON();
var features_Rumah_2 = format_Rumah_2.readFeatures(json_Rumah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_2.addFeatures(features_Rumah_2);
var lyr_Rumah_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_2, 
                style: style_Rumah_2,
                popuplayertitle: "Rumah",
                interactive: true,
    title: 'Rumah<br />\
    <img src="styles/legend/Rumah_2_0.png" /> ....<br />\
    <img src="styles/legend/Rumah_2_1.png" /> abel<br />\
    <img src="styles/legend/Rumah_2_2.png" /> abi<br />\
    <img src="styles/legend/Rumah_2_3.png" /> Adek<br />\
    <img src="styles/legend/Rumah_2_4.png" /> adit<br />\
    <img src="styles/legend/Rumah_2_5.png" /> aldi<br />\
    <img src="styles/legend/Rumah_2_6.png" /> alim<br />\
    <img src="styles/legend/Rumah_2_7.png" /> amak kak elda<br />\
    <img src="styles/legend/Rumah_2_8.png" /> anes<br />\
    <img src="styles/legend/Rumah_2_9.png" /> arfi<br />\
    <img src="styles/legend/Rumah_2_10.png" /> asyid<br />\
    <img src="styles/legend/Rumah_2_11.png" /> ayang<br />\
    <img src="styles/legend/Rumah_2_12.png" /> bayu<br />\
    <img src="styles/legend/Rumah_2_13.png" /> bg arif<br />\
    <img src="styles/legend/Rumah_2_14.png" /> bg iton<br />\
    <img src="styles/legend/Rumah_2_15.png" /> bunga<br />\
    <img src="styles/legend/Rumah_2_16.png" /> butri<br />\
    <img src="styles/legend/Rumah_2_17.png" /> caca<br />\
    <img src="styles/legend/Rumah_2_18.png" /> cahaya<br />\
    <img src="styles/legend/Rumah_2_19.png" /> chilma<br />\
    <img src="styles/legend/Rumah_2_20.png" /> da hen<br />\
    <img src="styles/legend/Rumah_2_21.png" /> da iki<br />\
    <img src="styles/legend/Rumah_2_22.png" /> da pon<br />\
    <img src="styles/legend/Rumah_2_23.png" /> dadon<br />\
    <img src="styles/legend/Rumah_2_24.png" /> dapur noli<br />\
    <img src="styles/legend/Rumah_2_25.png" /> deni<br />\
    <img src="styles/legend/Rumah_2_26.png" /> dila<br />\
    <img src="styles/legend/Rumah_2_27.png" /> dimas<br />\
    <img src="styles/legend/Rumah_2_28.png" /> dinda<br />\
    <img src="styles/legend/Rumah_2_29.png" /> dini<br />\
    <img src="styles/legend/Rumah_2_30.png" /> dino<br />\
    <img src="styles/legend/Rumah_2_31.png" /> diva<br />\
    <img src="styles/legend/Rumah_2_32.png" /> fadila<br />\
    <img src="styles/legend/Rumah_2_33.png" /> fauzan<br />\
    <img src="styles/legend/Rumah_2_34.png" /> fauzi<br />\
    <img src="styles/legend/Rumah_2_35.png" /> ferdi<br />\
    <img src="styles/legend/Rumah_2_36.png" /> fika<br />\
    <img src="styles/legend/Rumah_2_37.png" /> friska<br />\
    <img src="styles/legend/Rumah_2_38.png" /> gilang<br />\
    <img src="styles/legend/Rumah_2_39.png" /> gio<br />\
    <img src="styles/legend/Rumah_2_40.png" /> hafis<br />\
    <img src="styles/legend/Rumah_2_41.png" /> hasnah<br />\
    <img src="styles/legend/Rumah_2_42.png" /> imam<br />\
    <img src="styles/legend/Rumah_2_43.png" /> iqbal<br />\
    <img src="styles/legend/Rumah_2_44.png" /> Irfan<br />\
    <img src="styles/legend/Rumah_2_45.png" /> irma<br />\
    <img src="styles/legend/Rumah_2_46.png" /> irsyad<br />\
    <img src="styles/legend/Rumah_2_47.png" /> kak elda<br />\
    <img src="styles/legend/Rumah_2_48.png" /> kak ipad<br />\
    <img src="styles/legend/Rumah_2_49.png" /> kak iput<br />\
    <img src="styles/legend/Rumah_2_50.png" /> kepala jorong<br />\
    <img src="styles/legend/Rumah_2_51.png" /> kia<br />\
    <img src="styles/legend/Rumah_2_52.png" /> mak en<br />\
    <img src="styles/legend/Rumah_2_53.png" /> makida<br />\
    <img src="styles/legend/Rumah_2_54.png" /> mamak<br />\
    <img src="styles/legend/Rumah_2_55.png" /> maya<br />\
    <img src="styles/legend/Rumah_2_56.png" /> mega<br />\
    <img src="styles/legend/Rumah_2_57.png" /> meli<br />\
    <img src="styles/legend/Rumah_2_58.png" /> miss<br />\
    <img src="styles/legend/Rumah_2_59.png" /> nabila<br />\
    <img src="styles/legend/Rumah_2_60.png" /> nafisa<br />\
    <img src="styles/legend/Rumah_2_61.png" /> ni yel<br />\
    <img src="styles/legend/Rumah_2_62.png" /> noli<br />\
    <img src="styles/legend/Rumah_2_63.png" /> nova<br />\
    <img src="styles/legend/Rumah_2_64.png" /> nugi<br />\
    <img src="styles/legend/Rumah_2_65.png" /> nyiak inuie<br />\
    <img src="styles/legend/Rumah_2_66.png" /> pardi<br />\
    <img src="styles/legend/Rumah_2_67.png" /> pia<br />\
    <img src="styles/legend/Rumah_2_68.png" /> pina<br />\
    <img src="styles/legend/Rumah_2_69.png" /> putri<br />\
    <img src="styles/legend/Rumah_2_70.png" /> rafel<br />\
    <img src="styles/legend/Rumah_2_71.png" /> ratu<br />\
    <img src="styles/legend/Rumah_2_72.png" /> rehan<br />\
    <img src="styles/legend/Rumah_2_73.png" /> rian<br />\
    <img src="styles/legend/Rumah_2_74.png" /> riski<br />\
    <img src="styles/legend/Rumah_2_75.png" /> rumah dan bengkel<br />\
    <img src="styles/legend/Rumah_2_76.png" /> rumah kosong<br />\
    <img src="styles/legend/Rumah_2_77.png" /> rumah rifki<br />\
    <img src="styles/legend/Rumah_2_78.png" /> sabri<br />\
    <img src="styles/legend/Rumah_2_79.png" /> silvi<br />\
    <img src="styles/legend/Rumah_2_80.png" /> siska<br />\
    <img src="styles/legend/Rumah_2_81.png" /> suci<br />\
    <img src="styles/legend/Rumah_2_82.png" /> sumi<br />\
    <img src="styles/legend/Rumah_2_83.png" /> syaid<br />\
    <img src="styles/legend/Rumah_2_84.png" /> tekda<br />\
    <img src="styles/legend/Rumah_2_85.png" /> tekta<br />\
    <img src="styles/legend/Rumah_2_86.png" /> tika<br />\
    <img src="styles/legend/Rumah_2_87.png" /> wahyu<br />\
    <img src="styles/legend/Rumah_2_88.png" /> warung kosong<br />\
    <img src="styles/legend/Rumah_2_89.png" /> widia<br />\
    <img src="styles/legend/Rumah_2_90.png" /> wulan<br />\
    <img src="styles/legend/Rumah_2_91.png" /> yuda<br />\
    <img src="styles/legend/Rumah_2_92.png" /> yulia<br />\
    <img src="styles/legend/Rumah_2_93.png" /> Zaitul<br />\
    <img src="styles/legend/Rumah_2_94.png" /> adam<br />\
    <img src="styles/legend/Rumah_2_95.png" /> <br />\
    <img src="styles/legend/Rumah_2_96.png" /> najwa<br />\
    <img src="styles/legend/Rumah_2_97.png" /> zaskia<br />'
        });
var format_fasilitas_3 = new ol.format.GeoJSON();
var features_fasilitas_3 = format_fasilitas_3.readFeatures(json_fasilitas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fasilitas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fasilitas_3.addFeatures(features_fasilitas_3);
var lyr_fasilitas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fasilitas_3, 
                style: style_fasilitas_3,
                popuplayertitle: "fasilitas",
                interactive: true,
    title: 'fasilitas<br />\
    <img src="styles/legend/fasilitas_3_0.png" /> kantin<br />\
    <img src="styles/legend/fasilitas_3_1.png" /> lapangan<br />\
    <img src="styles/legend/fasilitas_3_2.png" /> lapangan sepak bola<br />\
    <img src="styles/legend/fasilitas_3_3.png" /> musholla<br />\
    <img src="styles/legend/fasilitas_3_4.png" /> perpustakaan<br />\
    <img src="styles/legend/fasilitas_3_5.png" /> posyandu<br />\
    <img src="styles/legend/fasilitas_3_6.png" /> sekolah<br />\
    <img src="styles/legend/fasilitas_3_7.png" /> TPA<br />\
    <img src="styles/legend/fasilitas_3_8.png" /> WC umum<br />\
    <img src="styles/legend/fasilitas_3_9.png" /> <br />'
        });
var format_JalanSetapak_4 = new ol.format.GeoJSON();
var features_JalanSetapak_4 = format_JalanSetapak_4.readFeatures(json_JalanSetapak_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanSetapak_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanSetapak_4.addFeatures(features_JalanSetapak_4);
var lyr_JalanSetapak_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanSetapak_4, 
                style: style_JalanSetapak_4,
                popuplayertitle: "JalanSetapak",
                interactive: true,
                title: '<img src="styles/legend/JalanSetapak_4.png" /> JalanSetapak'
            });
var format_jalankaki_5 = new ol.format.GeoJSON();
var features_jalankaki_5 = format_jalankaki_5.readFeatures(json_jalankaki_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalankaki_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalankaki_5.addFeatures(features_jalankaki_5);
var lyr_jalankaki_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalankaki_5, 
                style: style_jalankaki_5,
                popuplayertitle: "jalan kaki",
                interactive: true,
                title: '<img src="styles/legend/jalankaki_5.png" /> jalan kaki'
            });
var format_jalanutama_6 = new ol.format.GeoJSON();
var features_jalanutama_6 = format_jalanutama_6.readFeatures(json_jalanutama_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanutama_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanutama_6.addFeatures(features_jalanutama_6);
var lyr_jalanutama_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanutama_6, 
                style: style_jalanutama_6,
                popuplayertitle: "jalan utama",
                interactive: true,
                title: '<img src="styles/legend/jalanutama_6.png" /> jalan utama'
            });

lyr_pepohonan_0.setVisible(true);lyr_sawah1_1.setVisible(true);lyr_Rumah_2.setVisible(true);lyr_fasilitas_3.setVisible(true);lyr_JalanSetapak_4.setVisible(true);lyr_jalankaki_5.setVisible(true);lyr_jalanutama_6.setVisible(true);
var layersList = [lyr_pepohonan_0,lyr_sawah1_1,lyr_Rumah_2,lyr_fasilitas_3,lyr_JalanSetapak_4,lyr_jalankaki_5,lyr_jalanutama_6];
lyr_pepohonan_0.set('fieldAliases', {'id': 'id', });
lyr_sawah1_1.set('fieldAliases', {'id': 'id', });
lyr_Rumah_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas M2': 'Luas M2', });
lyr_fasilitas_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_JalanSetapak_4.set('fieldAliases', {'id': 'id', });
lyr_jalankaki_5.set('fieldAliases', {'id': 'id', });
lyr_jalanutama_6.set('fieldAliases', {'id': 'id', });
lyr_pepohonan_0.set('fieldImages', {'id': 'TextEdit', });
lyr_sawah1_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Rumah_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas M2': 'TextEdit', });
lyr_fasilitas_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_JalanSetapak_4.set('fieldImages', {'id': 'TextEdit', });
lyr_jalankaki_5.set('fieldImages', {'id': 'TextEdit', });
lyr_jalanutama_6.set('fieldImages', {'id': 'TextEdit', });
lyr_pepohonan_0.set('fieldLabels', {'id': 'no label', });
lyr_sawah1_1.set('fieldLabels', {'id': 'no label', });
lyr_Rumah_2.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', 'Luas M2': 'no label', });
lyr_fasilitas_3.set('fieldLabels', {'id': 'hidden field', 'nama': 'inline label - always visible', });
lyr_JalanSetapak_4.set('fieldLabels', {'id': 'header label - visible with data', });
lyr_jalankaki_5.set('fieldLabels', {'id': 'header label - visible with data', });
lyr_jalanutama_6.set('fieldLabels', {'id': 'no label', });
lyr_jalanutama_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});