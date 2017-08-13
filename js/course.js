$(document).ready(function() {
	paddingLeft = 70;
	paddingRight = 0;
	paddingBottom = 70;
	width = ($('#courseGraph').width()-paddingLeft-paddingRight);
	// data = new Array(120, 125, 113, 119, 122, 120, 127);
	data = new Array('8178.19', '8078.4', '8593.45', '8426.6', '8752.15', '8875.36', '9807.98');
	dataDate = new Array('29.12.17','29.12.17','29.12.17','29.12.17','29.12.17','29.12.17','29.12.17');
	num = data.length;
	strokeWidth = 4;
	if(num>14) strokeWidth = 1;
	min = Math.min.apply({}, data);
	max = Math.max.apply({}, data);
	delW = (width-1)/(num-1);
	delH = 50;
	c = 0;
	deltaTemp = 1;
	while(deltaTemp<=1) {
		delta = Math.ceil((max-min)/4*Math.pow(10,c))/Math.pow(10,c);
		deltaTemp = Math.ceil((max-min)/4*Math.pow(10,c));
		c++;
	}
	average = Math.floor((max+min)/2*10)/10;
	lower = average-delta*2;
	lowerPx = 3*delH;
	height = 300;
	
	
	var field = SVG('courseGraph').size('100%', height);
	var course = SVG('courseGraph').size('100%',300).attr({'style':'position: absolute; left: 0; top: 0;'});
	var gradientCourseLinear = field.gradient('linear', function(stop) {
		  stop.at(0, '#040419')
		  stop.at(1, '#111')
		})
	var gradientCourseRadial = field.gradient('radial', function(stop) {
	  stop.at(0, 'white', 0.05)
	  stop.at(1, 'black', 0)
	})
	gradientCourseLinear.from(0,0).to(0,1);

	var bg1 = field.rect('100%', '100%').attr({ fill: gradientCourseLinear, 'data-ignore': true });
	var bg2 = field.rect('100%', '100%').attr({ fill: gradientCourseRadial, 'data-ignore': true });
	var text = new Array(
		field.text(''+Math.round(lower*100)/100).font({ fill: '#fff', family: 'Century Gothic', size: '13'  }).move(12,delH*5-10),
		field.text(''+Math.round((lower+delta*1)*100)/100).font({ fill: '#fff', family: 'Century Gothic', size: '13' }).move(12,delH*4-10),
		field.text(''+Math.round((lower+delta*2)*100)/100).font({ fill: '#fff', family: 'Century Gothic', size: '13'  }).move(12,delH*3-10),
		field.text(''+Math.round((lower+delta*3)*100)/100).font({ fill: '#fff', family: 'Century Gothic', size: '13'  }).move(12,delH*2-10),
		field.text(''+Math.round((lower+delta*4)*100)/100).font({ fill: '#fff', family: 'Century Gothic', size: '13'  }).move(12,delH*1-10)
		);

	dateText = new Array();
	dateBorder = new Array();
	dateTextPadding = 2;
	for(var i = 0; i<dataDate.length; i++) {
		dateBorder[dateBorder.length] = field.path('M'+(paddingLeft+i*delW-39-dateTextPadding*2)+','+(height-delH+15-dateTextPadding)+' h 40 v 15 h-40 v-15 m 40,8 h 5 l 5 -9 l -5 9').stroke({color: '#fff'}).rotate(-30);
		dateText[dateText.length] = field.text(''+dataDate[i]).font({ fill: '#fff', family: 'Century Gothic', size: '8' }).move(paddingLeft+i*delW-38,height-delH+18).rotate(-30);
		
	}

	lineV = new Array();
	lineH = new Array();
	SupFlag = 0;
	for(var i = 0; i<num; i++) {
		
	  	lineV[lineV.length] = field.path('M'+(delW*i+paddingLeft)+',0 v-300')
	  	.stroke({ width: 1, color: '#fff', opacity: 1})
	  	.attr({'data-i':(delW*i+paddingLeft),'stroke-dasharray': '5 5','stroke-width':'1','stroke-opacity':'0.7'}); //.animate(1000).attr({'stroke-dashoffset':'100'}).move((delW*i), 0);
		if(i==0 || i==(num-1)) {lineV[lineV.length-1].attr({'stroke-dasharray':'none','stroke-opacity':'1'})}
	}

	for(var i = 1; i<(height/delH); i++) {
		lineH[lineH.length] = field.path('M'+(paddingLeft)+','+(delH*i)+' h'+(width+5)+'')
	  	.stroke({ width: 1, color: '#fff', opacity: 1})
	  	.attr({'stroke-dasharray': '5 5','stroke-opacity': '0'});
	  	if(i==5) {lineH[lineH.length-1].attr({'stroke-dasharray':'none','stroke-opacity':'1'})}
	}


	var mouseLineV = field.line(-1,0,-1,height-delH).stroke({'color':'#f9a011'});
	var mouseLineH = field.line(paddingLeft,-1,width+paddingLeft,-1).stroke({'color':'#f9a011'});
	pathBody = 'M';
	for(var i = 0; i<num; i++) {
		hpx = Math.round(i*delW)+paddingLeft;
		vpx = height-Math.round((data[i]-lower)/delta*50)-delH;
		if(i==0) {	
			pathBody += hpx+','+vpx;
		} else {pathBody += ' '+hpx+' '+vpx;}
	}
	var path = course.path(pathBody).fill('#fff').stroke({ color: '#fff', width: strokeWidth, linecap: 'round', linejoin: 'round' });
	path.filter(function(add) {

	  var blur = add.offset(0, 0).gaussianBlur(3)
	  add.blend(add.source, blur);

	  this.size('100%','100%').move(0,0)
	})
	var mouseCircle = field.circle(10).move(-10,-10).fill('#f9a011').attr({'z-index':'100'});
	var xNum = field.group();
	var xNumBorder = field.path("M0,0 0 10 55 10 65 0 55 -10 0 -10z").attr({'style':'fill: rgba(255,255,255,.5);'}).stroke({'color':'#f9a011'}).move(5, -10);
	var xNumText = field.text(''+Math.round((lower+delta*1)*100)/100).font({ fill: '#1111CC', family: 'Century Gothic', size: '13' }).move(12,-8);
	xNumBorder.filter(function(add) {
	xNum.add(xNumBorder).add(xNumText).y(-20);
	  var blur = add.offset(0, 0).gaussianBlur(3)
	  add.blend(add.source, blur);

	  this.size('200%','200%').move('-50%', '-50%')
	})
	var err = SVG('courseGraph').size(0,300).attr({'style':'position: absolute; left: 0; top: 0;','id':'err'});
	field.mousemove(function() {
		alert('');
	});

	$('#courseGraph').mousemove(function(e) {
		offset = $(this).offset();
		mouseX = e.pageX - offset.left;
		mouseY = e.pageY - offset.top;
		if(mouseX<paddingLeft) {mouseX = paddingLeft;}
		dataPoint = Math.round((mouseX-paddingLeft)/(width)*num-0.5);
		dataX = dataPoint*delW+paddingLeft;
		dataY = height-delH-(data[dataPoint]-lower)/delta*delH;
		mouseCircle.x(dataX-5);
		mouseCircle.y(dataY-5);
		mouseLineV.x(dataX);
		mouseLineH.y(dataY);
		xNum.y(dataY);
		for(var i =0; i<num; i++) {
			dateBorder[i].stroke({color:'#fff'}).attr({'style':'fill: rgba(255,255,255,0);'});
			// dateText[i].font({fill: 'red'});
		}
		dateBorder[dataPoint].stroke({color:'#f9a011'}).attr({'style':'fill: rgba(255,255,255,.1);'});
		// dateText[dataPoint].stroke({color: '#111'});
		xNumTextValue = data[dataPoint];//Math.round((lower+(-dataY+(height-delH))/delH*delta)*100)/100;
		xNumText.text(xNumTextValue+'');
	});

new Vivus('err', {duration: 1}, function() {
	var i = 0;
	var j = 0;
	var allowFlag = 0;
	var k = 1;
	var inter = setInterval(function() {
			if(delW>50) {k = 1;}
			if(delW<50) {k = 2;}
			if(delW<20) {k = 4;}
			if(delW<10) {k = 8;}
			if(delW<5) {k = 16;}
			if(delW<2) {k = 32;}
			
			if(i>=lineV.length/k-1) {clearInterval(inter);}
			lineV[i*k].animate(130).attr({'stroke-dashoffset':'100'}).move((delW*i*k+paddingLeft), -delH);
			i++;
		},70);

	var interSec = setInterval(function() {
			if(j>=lineH.length) {clearInterval(interSec);}
			lineH[lineH.length-j-1].animate(130).attr({'stroke-opacity':'0.7'}).move(paddingLeft-5,delH*(lineH.length-j));
			j++;

		},70);

});
new Vivus('SvgjsSvg1008', {type: 'delayed', duration: 100});
});
