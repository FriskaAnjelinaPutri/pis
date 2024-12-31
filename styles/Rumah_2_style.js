var size = 0;
var placement = 'point';
function categories_Rumah_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '....':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(139,69,69,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'abel':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(169,89,19,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'abi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(142,88,43,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Adek':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(141,79,72,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'adit':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(110,34,42,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'aldi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(201,159,110,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'alim':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(141,86,76,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'amak kak elda':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(160,82,60,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'anes':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(153,89,82,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'arfi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(120,41,34,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'asyid':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(113,39,44,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ayang':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(173,103,87,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'bayu':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(144,72,73,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'bg arif':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(116,36,47,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'bg iton':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(127,37,43,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'bunga':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(155,62,55,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'butri':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(118,50,55,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'caca':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(125,33,34,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'cahaya':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(144,46,46,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'chilma':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(118,50,58,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'da hen':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(112,48,51,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'da iki':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(145,59,56,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'da pon':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(131,42,42,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'dadon':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(134,38,38,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'dapur noli':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(144,60,58,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'deni':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(141,65,68,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'dila':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(128,52,57,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'dimas':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(119,28,30,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'dinda':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(146,89,50,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'dini':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(116,34,39,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'dino':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(143,53,51,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'diva':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(116,32,32,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'fadila':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(146,78,64,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'fauzan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(101,31,27,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'fauzi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(110,40,24,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ferdi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(140,83,54,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'fika':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(117,56,52,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'friska':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,5,1,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'gilang':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(149,57,53,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'gio':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(145,80,75,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'hafis':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(146,49,58,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'hasnah':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(127,29,27,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'imam':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(158,38,46,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'iqbal':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(154,42,53,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Irfan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(135,47,53,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'irma':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(141,56,41,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'irsyad':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(151,36,37,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'kak elda':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(128,46,38,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'kak ipad':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(146,31,35,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'kak iput':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(137,28,36,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'kepala jorong':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(156,46,61,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'kia':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(164,26,52,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'mak en':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(134,26,30,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'makida':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(131,40,43,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'mamak':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(148,30,39,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'maya':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(145,59,60,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'mega':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(130,34,41,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'meli':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(169,69,52,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'miss':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(166,52,50,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'nabila':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(140,39,34,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'nafisa':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(131,61,33,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ni yel':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(131,27,26,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'noli':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(134,40,38,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'nova':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(117,43,40,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'nugi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(146,45,52,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'nyiak inuie':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(118,22,33,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'pardi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(132,40,40,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'pia':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(137,44,44,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'pina':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(145,55,19,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'putri':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(144,34,30,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'rafel':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(133,36,27,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ratu':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(136,31,33,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'rehan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(149,29,33,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'rian':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(157,39,49,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'riski':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(157,43,39,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'rumah dan bengkel':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(141,47,61,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'rumah kosong':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(149,43,48,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'rumah rifki':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(125,38,33,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'sabri':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(146,20,31,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'silvi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(143,51,54,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'siska':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(148,43,38,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'suci':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(152,76,75,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'sumi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(122,36,30,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'syaid':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(142,40,38,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'tekda':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(136,46,44,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'tekta':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(154,42,34,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'tika':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(114,40,36,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'wahyu':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(156,45,37,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'warung kosong':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(135,61,59,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'widia':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(139,49,47,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'wulan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(155,59,67,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'yuda':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(152,57,54,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'yulia':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(134,69,50,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Zaitul':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(144,72,68,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'adam':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(126,48,36,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(138,56,57,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'najwa':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(129,28,30,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'zaskia':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(140,53,53,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Rumah_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Nama");
    var labelText = "";
    size = 0;
    var labelFont = "10.4px \'Arial Narrow\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Nama") !== null) {
        labelText = String(feature.get("Nama"));
    }
    
var style = categories_Rumah_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
