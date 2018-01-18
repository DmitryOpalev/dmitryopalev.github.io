  var winW = $( window ).width();
  var winH = $( window ).height();

// $( window ).resize(function() {
//   var winW = $( window ).width();
//   var winH = $( window ).height();
// });

var w = 20600;
var h = 2000;

var draw = SVG('field').size(w, h).viewbox(0, 0, w, h);
var group = new Array(); //Группировка графических частей для конкретного оборудования
var node = new Array();
var line = new Array();
var text = new Array();
var angle = new Array();
var angleLine = new Array();
var Stext = new Array();
var barBorderU = new Array();
var barU = new Array();
var padding = 0;
var scale = 1;
var coords = new Array(	)
var color = new Array();
var strokeWidth = 1;
var textColor = 'rgb(243,243,234)';
color[330] = 'rgb(0,201,0)';
color[220] = 'rgb(204,204,0)';
color[110] = 'rgb(70,153,204)';
color[35] = 'rgb(194,90,90)';
color[10] = 'rgb(200,150,100)';
color[6] = 'rgb(200,150,100)';


draw.path("M 0 0 v 300 h 500").stroke({color:'#fff', width: strokeWidth}).fill('none').move(19900,100).attr('class','dasharray'); 
draw.text('Юг-Крым').move(20300,370).fill(textColor);
draw.rect(150,10).stroke({color: color[220]}).fill(color[220]).move(20000,180); //Тамань
draw.text('ПС Тамань').move(20100,160).fill(textColor);
draw.path('M 0 0 v 30 h -800 v 90').stroke({color: color[220], width: strokeWidth}).fill('none').move(19230,190); //Тамань-Кафа
draw.path('M 0 0 v 60 h -800 v 60').stroke({color: color[220], width: strokeWidth}).fill('none').move(19260,190); //Тамань-Кафа
draw.path('M 0 0 v 90 h -800 v 30').stroke({color: color[220], width: strokeWidth}).fill('none').move(19290,190); //Тамань-Кафа

draw.rect(150,10).stroke({color: color[220], width: strokeWidth}).fill(color[220]).move(20000,590); //Камыш-Бурун
draw.rect(270,10).stroke({color: color[110], width: strokeWidth}).fill(color[110]).move(19940,825); //Камыш-Бурун-110
draw.text('ПС Камыш-Бурун').move(20160,595).fill(textColor);
draw.path('M 0 0 v 400').stroke({color: color[220], width: strokeWidth}).fill('none').move(20120,190);
drawAT(220,110,6).move(20015, 630);
drawAT(220,110,6).move(20105, 630);
drawRT(6,6).move(20020, 695);
drawRT(6,6).move(20110, 695);
drawLR2(6).move(20115, 775);
drawLR2(6).move(20025, 775);
draw.path("M 0 0 h -45 v 180").stroke({color: color[110], width: strokeWidth}).fill('none').move(19970,645);
draw.path("M 0 0 h 45 v 180").stroke({color: color[110], width: strokeWidth}).fill('none').move(20135,645);

draw.rect(120,10).stroke({color: color[110], width: strokeWidth}).fill(color[110]).move(20060,1055); //Залив
draw.text('ПС Залив').move(20190,1055).fill(textColor);
draw.rect(120,10).stroke({color: color[6], width: strokeWidth}).fill(color[6]).move(20060,1165); //Залив-6
draw.path("M 0 0 v 220").stroke({color: color[110], width: strokeWidth}).move(20090, 835);
draw.path("M 0 0 v 220").stroke({color: color[110], width: strokeWidth}).move(20150, 835);
drawT(110,6).move(20135,1095);
drawT(110,6).move(20075,1095);

draw.rect(120,10).stroke({color: color[35], width: strokeWidth}).fill(color[35]).move(20180,1330); //Камыш-Бурунская ТЭЦ
draw.rect(185,10).stroke({color: color[6], width: strokeWidth}).fill(color[6]).move(20180,1445); //Камыш-Бурунская ТЭЦ-6
draw.text('Камыш-Бурунская ТЭЦ/30').move(20350,1380).fill(textColor);
drawT3(110,35,6).move(20300,1195);
draw.path("M 0 0 v -100 h 30").stroke({color: color[35], width: strokeWidth}).fill('none').move(20270,1230);
draw.path("M 0 0 v 60 h 135 v 300").stroke({color: color[110], width: strokeWidth}).fill("none").move(20180,835);
draw.path("M 0 0 v 210").stroke({color: color[6], width: strokeWidth}).move(20335,1235);
drawT(35,6).move(20195,1370);
drawT(35,6).move(20255,1370);
drawGenerator(6).move(20255,1485);
drawGenerator(6).move(20315,1485);
drawGenerator(6).move(20195,1485);


draw.rect(150,10).stroke({color: color[220], width: strokeWidth}).fill(color[220]).move(19170,310); //Кафа
draw.text('ПС Кафа').move(19340,305).fill(textColor);
draw.path('M 0 0 v -90 h -480 v 90').stroke({color: color[220], width: strokeWidth}).fill('none').move(18720,220); //Кафа-Насосная-2

draw.rect(210,10).stroke({color: color[220], width: strokeWidth}).fill(color[220]).move(19140,710); //Феодосийская
draw.rect(210,10).stroke({color: color[110], width: strokeWidth}).fill(color[110]).move(19140,850); //Феодосийская-110
draw.rect(120,10).stroke({color: color[6], width: strokeWidth}).fill(color[6]).move(19075,1030); //Феодосийская-6
draw.rect(60,10).stroke({color: color[6], width: strokeWidth}).fill(color[6]).move(19250,1030); //Феодосийская-6
drawAT(220,110,6).move(19155,750);
draw.path("M 0 0 h 15 v 85").stroke({color: color[110], width: strokeWidth}).fill('none').move(19185,765);;
drawAT(220,110,35).move(19215,750);
draw.path("M 0 0 h 15 v 85").stroke({color: color[110], width: strokeWidth}).fill('none').move(19245,765);;
draw.path("M 0 0 h -55 v 45").stroke({color: color[6], width: strokeWidth}).fill('none').move(19100,780); 
draw.path("M 0 0 v 30 h -170").stroke({color: color[35], width: strokeWidth}).fill('none').move(19060,795); 
drawLR(35).move(19045,870);
drawBSC(35).move(19045,940);
drawLR(6).move(19085,870);
drawT3(110,6,35).move(19155,890);
drawLR(6).move(19155,985);
drawT3(110,35,10).move(19215,890);
drawBSC(35).move(19215,995);
draw.path("M 0 0 h 15 v 115").stroke({color: color[10], width: strokeWidth}).fill('none').move(19265,915); 
draw.path("M 0 0 v 30").stroke({color: color[35], width: strokeWidth}).move(19230,940);
draw.path("M 0 0 v 115").stroke({color: color[6], width: strokeWidth}).move(19100,915);
draw.text('ПС Феодосийская').move(19370,705).fill(textColor);
draw.path('M 0 0 v 390').stroke({color: color[220], width: strokeWidth}).move(19260,320); //Кафа-Феодосийск
draw.path('M 0 0 v 390').stroke({color: color[220], width: strokeWidth}).move(19290,320);

draw.rect(150,10).stroke({color: color[220], width: strokeWidth}).fill(color[220]).move(19520,590); //Насосная-3
draw.text('ПС Насосная-3').move(19745,595).fill(textColor);
draw.path("M 0 0 v 100").stroke({color: color[220], width: strokeWidth}).fill('none').move(19550,600);
draw.path("M 0 0 v -150 h 230 v 30").stroke({color: color[220], width: strokeWidth}).move(19320,560).fill('none'); //Феодосийск - Насосная-3
draw.path("M 0 0 v -30 h 330 v 30").stroke({color: color[220], width: strokeWidth}).move(19700,560).fill('none'); //Насосная-3 - Камыш-Бурун

draw.rect(150,10).stroke({color: color[220], width: strokeWidth}).fill(color[220]).move(18600,310); //Насосная-2
draw.text('ПС Насосная-2').move(18770,305).fill(textColor);
draw.path('M 0 0 v -30 h -480 v 30').stroke({color: color[220], width: strokeWidth}).fill('none').move(18150,280); //Насосная-2 - Джанкой

draw.rect(210,10).stroke({color: color[220], width: strokeWidth}).fill(color[220]).move(17970,310); //Джанкой
draw.rect(210,10).stroke({color: color[330], width: strokeWidth}).fill(color[330]).move(17910,210); 
draw.text('ПС Джанкой').move(18150,205).fill(textColor);
draw.path('M0 0 v -45 h -10').stroke({color: color[220], width: strokeWidth}).fill('none').move(18110,265);
drawAT(330,220,10).move(18080,250);
draw.path('M0 0 v -45 h -10').stroke({color: color[220], width: strokeWidth}).fill('none').move(18050,265);
drawAT(330,220,10).move(18020,250);
draw.path('M0 0 v -45 h -40').stroke({color: color[220], width: strokeWidth}).fill('none').move(17960,265);
drawAT(330,220,10).move(17930,250);
draw.path('M0 0 v -35').stroke({color: color[10], width: strokeWidth}).fill('none').move(17945,295);
drawSynchComp(10).move(17930,330);

draw.rect(210,10).stroke({color: color[330], width: strokeWidth}).fill(color[330]).move(17970,610); //Симферопольская 330
draw.path('M 0 0 v -60 h 1050 v -330').stroke({color: color[220], width: strokeWidth}).fill('none').move(18150,320); //Кафа - Симферопольская
draw.path('M 0 0 v -30 h 1050 v -360').stroke({color: color[220], width: strokeWidth}).fill('none').move(18180,320); //Кафа - Симферопольская
draw.path('M 0 0 v -30 h 120 v -400 h -180 v 30').stroke({color: color[330], width: strokeWidth}).fill('none').move(18090,180);
draw.rect(240,10).stroke({color: color[220], width: strokeWidth}).fill(color[220]).move(17970,710); //220
draw.text('ПС Симферопольская').move(18230,705).fill(textColor);
draw.path('M 0 0 h 15 v 45').stroke({color: color[220], width: strokeWidth}).move(18105,665);
drawAT(330,220,35).move(18075,650);
draw.path('M 0 0 h 15 v 45').stroke({color: color[220], width: strokeWidth}).move(18045,665);
drawAT(330,220,35).move(18015,650);

drawAT(220,110,10).move(17985,750);
draw.path('M 0 0 h 15 v 75').stroke({color: color[110], width: strokeWidth}).move(18015,765);
drawAT(220,110,10).move(18045,750);
draw.path('M 0 0 h 15 v 75').stroke({color: color[110], width: strokeWidth}).move(18075,765);
drawSynchComp(10).move(17895,860);
draw.path('M 0 0 v -80 h 75').stroke({color: color[10], width: strokeWidth}).fill('none').move(17910, 780);
drawSynchComp(10).move(17955,860);
draw.path('M 0 0 v -50 h 90 v -15').stroke({color: color[10], width: strokeWidth}).fill('none').move(17970, 795);
draw.rect(180,10).stroke({color: color[110], width: strokeWidth}).fill(color[110]).move(18000,840); //110

draw.path('M 0 0 v 90 h -210 v 60').stroke({color: color[110], width: strokeWidth}).move(17820,850).fill('none');
draw.path('M 0 0 v 120 h -60 v 30').stroke({color: color[110], width: strokeWidth}).move(18000,850).fill('none');
drawT(110,10).move(17985,1030);
drawT(110,10).move(17940,1030);
drawT(110,10).move(17895,1030);
drawT(110,10).move(17850,1030);
draw.path('M 0 0 h 135').stroke({color: color[110], width: strokeWidth}).move(17865,1000);

drawGenerator(10).move(17985,1105);
drawGenerator(10).move(17940,1105);
drawGenerator(10).move(17895,1105);
drawGenerator(10).move(17850,1105);

drawT(110,10).move(17805,1030);
drawT(110,10).move(17760,1030);
drawGenerator(10).move(17805,1105);
drawGenerator(10).move(17760,1105);
draw.path('M 0 0 h 45').stroke({color: color[110], width: strokeWidth}).move(17775,1000);

draw.text('Симферопольская МГТЭС/135').move(17770,1200).fill(textColor);
// group[0] = draw.group().attr({
// 	'gid':0,
// 	'class':'context',
// 	'context':'generation',
// 	'nid':'6',
// 	'title':'Северовосточная МГТЭС'});
// group[0].circle(30*scale).fill('rgba(255,255,255,0)').move(590,350).attr({'def-color':textColor}).stroke({'color':textColor});
// group[0].path('M590,350  a5,5 1 0,0 10,0 M610,350 a5,5 1 0,0 -10,0').attr({'def-color':textColor}).fill('rgba(255,255,255,0)').move(595,360).stroke({'color':textColor});
// group[0].line(605,380,605,405).attr({'def-color':textColor}).stroke({'color':textColor});

// group[1] = draw.group().attr({
// 	'gid':0,
// 	'class':'context',
// 	'context':'line',
// 	'nid':'6',
// 	'title':'Северозапад-2 - Северозапад-3'});
// group[1].line(605,605,405,605).stroke({ width: 1, color: '#32B0FF' });
// group[1].rect(200,30).move(405,590).stroke().fill('rgba(0,0,0,0)');

// var coordLineH = draw.line(0,0,w,0).stroke({ width: 1, color: textColor });
// var coordLineV = draw.line(0,0,0,h).stroke({ width: 1, color: textColor });

// $(document).mousemove(function(e){
// 	var wX = e.pageX; // положения по оси X
//     var wY = e.pageY; // положения по оси Y
//     offset = $('#field').offset();
//     var fX = offset.left;
//     var fY = offset.top;
// 	coordLineH.move(0,(wY-fY));
// 	coordLineV.move((wX-fX),0);
// });

function drawT(h,l) {
	var group = draw.group();
	group.circle(30).fill('none').stroke({color: color[h], width: strokeWidth});
	group.circle(30).fill('none').stroke({color: color[l], width: strokeWidth}).move(0,15);
	group.path("M 0 0 v -30").stroke({color: color[h], width: strokeWidth}).move(15,-30);
	group.path("M 0 0 v 30").stroke({color: color[l], width: strokeWidth}).move(15,45);
	return group;
}

function drawT3(h,l,m) {
	var group = draw.group();
	group.circle(30).fill('none').stroke({color: color[h], width: strokeWidth});
	group.circle(30).fill('none').stroke({color: color[l], width: strokeWidth}).move(0,20);
	group.circle(30).fill('none').stroke({color: color[m], width: strokeWidth}).move(20,10);
	group.path("M 15 0 v -30").stroke({color: color[h], width: strokeWidth});
	return group;
}

function drawAT(h,m,l) {
	var group = draw.group();
	group.circle(30).fill('none').stroke({color: color[m], width: strokeWidth});
	group.circle(30).fill('none').stroke({color: color[l], width: strokeWidth}).move(0,15);
	group.path("M15,-10 A15,30 0 0,1 30,15").fill('none').stroke({color: color[h], width: strokeWidth});
	group.path("M 0 0 v -20").stroke({color: color[h], width: strokeWidth}).move(15,-30);
	return group;
}

function drawGenerator(col) {
	var group = draw.group();
	group.circle(30).fill('none').stroke({color: color[col], width: strokeWidth}).fill('none');
	group.path("M5 15 a 5 5 0 0 1 10 0 a 5 5 0 0 0 10 0").stroke({color: color[col], width: strokeWidth}).fill('none');
	group.path('M 15 0 v -30').stroke({color: color[col], width: strokeWidth});
	return group;
}

function drawSynchComp(col) {
	var group = draw.group();
	group.circle(30).fill('none').stroke({color: color[col], width:strokeWidth});
	group.line(8,13,22,13).stroke({color: color[col], width:strokeWidth});
	group.line(8,17,22,17).stroke({color: color[col], width:strokeWidth});
	return group;
}

function drawRT(h,l) {
	var group = draw.group();
	group.circle(20).fill('none').stroke({color: color[h], width:strokeWidth});
	group.circle(20).fill('none').stroke({color: color[l], width:strokeWidth}).move(0,10);
	group.path("M 0 0 v -20").stroke({color: color[h], width:strokeWidth}).move(10,-20);
	return group;
}

function drawLR2(col) {
	var group = draw.group();
	group.path("M 0 0 a 15 15 0 1 1 10 0").stroke({color: color[col], width:strokeWidth}).fill('none');
	group.path("M 0 0 v -14 h 20 v 20").stroke({color: color[col], width:strokeWidth}).fill('none').move(10,-14);
	group.path("M 0 0 v -14 h -20 v 20").stroke({color: color[col], width:strokeWidth}).fill('none');
	group.path("M 0 0 l 3 5 l 3 -5").stroke({color: color[col], width:strokeWidth}).fill('none').move(-23,1);
	group.path("M 0 0 l 3 5 l 3 -5").stroke({color: color[col], width:strokeWidth}).fill('none').move(27,1);
	group.path("M 0 0 v -20").stroke({color: color[col], width:strokeWidth}).fill('none').move(5,-50);
	return group;
}

function drawLR(col) {
	var group = draw.group();
	group.path("M 0 0 a 15 15 0 1 0 15 -15").stroke({color: color[col], width:strokeWidth}).fill('none');
	group.path("M 15 -15 v -30").stroke({color: color[col], width:strokeWidth});
	group.path("M 0 0 h 15 v 45").stroke({color: color[col], width:strokeWidth}).fill('none');
	return group;
}

function drawBSC(col) {
	var group = draw.group();
	group.path("M 0 0 L 15 -26 L 30 0 z").stroke({color: color[col], width:strokeWidth}).fill('none');
	group.path("M 6 -4 h 18").stroke({color: color[col], width:strokeWidth});
	group.path("M 6 -7 h 18").stroke({color: color[col], width:strokeWidth});
	return group;
}