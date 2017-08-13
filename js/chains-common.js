$(document).ready(function() {

	$('svg.chain').parent().each(function() {
		chain = $(this).find('.chain');
		width = chain.width();
		height = chain.height();
		basewidth = new Array(40, 40, 25, 20, 10, 10, 5, 5, 3, 2.4, 1.6);
		stroke = new Array(4,4,3,3,3,3,1,1,1,1,1,1,1);
		level = chain.data('level');
		all = level*level;
		num = chain.data('num');
		xNum = new Array(1,1,1,2,4,4,8,8,16,16,32);
		yNum = new Array(1,1,2,2,4,8,8,16,16,32,32);
		// x = new Array();
		// y = new Array();
		createField();
		
		// chain.find('.subchain').append('<svg x="15" y="0" ><path d="M30,30a20,20 30 1,0 40,0a20,20 0 1,0 -40,0" style="stroke: white; stroke-width: 2px;"/></svg>');
	});
		startChain0();
		startChain1();
		startChain2();
		startChain3();
		startChain4();
		
});

function createField() {
	xOfs = Math.floor(xNum[level]/2)*basewidth[level]*4;
	if(xOfs==0) {xOfs=basewidth[level]*2;}
	xOfs = width/2-xOfs;
	yOfs = Math.floor(yNum[level]/2)*basewidth[level]*4;
	if(yOfs==0) {yOfs=basewidth[level]*2;}
	yOfs = height/2-yOfs;
	for(var i = 0; i < xNum[level]; i++) {
		for(var j = 0; j < yNum[level]; j++) {
			x = xOfs+i*basewidth[level]*4;
			y = yOfs+j*basewidth[level]*4;
			if(num>0) {clss="needToFill"; num--;}
			else {clss='';}
			html = '<svg x="'+x+'" y="'+y+'" ><path class="'+clss+'" d="M'+(basewidth[level]+1)+','+(basewidth[level]*2+1)+'a'+basewidth[level]+','+basewidth[level]+' 30 1,0 '+(basewidth[level]*2)+',0a'+basewidth[level]+','+basewidth[level]+' 0 1,0 -'+(basewidth[level]*2)+',0" style="stroke: white; stroke-width: '+stroke[level]+'px;"/></svg>';
			chain.find('.subchain').append(html);
		}
	}
}

function startChain0() {
	new Vivus('SubChain0', {type: 'delayed', duration: 30}, function() {
	    var n = $("#SubChain0").find('svg').length;
	    t = 1000/n;
      	var i=0;
      	inter = setInterval(function() {
      			$("#SubChain0").find('svg').eq(i).find('.needToFill').attr('class','fillIt');
      			i++;
      			if(i==n) {clearInterval(inter);}
      		}, t);
	});

}

function startChain1() {
	new Vivus('SubChain1', {type: 'delayed', duration: 30}, function() {
	    var n = $("#SubChain1").find('svg').length;
	    var t = 1000/n;
      	var i=0;
      	inter = setInterval(function() {
      			$("#SubChain1").find('svg').eq(i).find('.needToFill').attr('class','fillIt');
      			i++;
      			if(i==n) {clearInterval(inter);}
      		}, t);
	});

}

function startChain2() {
	new Vivus('SubChain2', {type: 'delayed', duration: 30}, function() {
		var n = $("#SubChain2").find('svg').length;
	    var t = 1000/n;
      	var i=0;
      	inter = setInterval(function() {
      			$("#SubChain2").find('svg').eq(i).find('.needToFill').attr('class','fillIt');
      			i++;
      			if(i==n) {clearInterval(inter);}
      		}, t);
	});
}

function startChain3() {
	new Vivus('SubChain3', {type: 'delayed', duration: 30}, function() {
		var n = $("#SubChain3").find('svg').length;
	    var t = 1000/n;
      	var i=0;
      	inter = setInterval(function() {
      			$("#SubChain3").find('svg').eq(i).find('.needToFill').attr('class','fillIt');
      			i++;
      			if(i==n) {clearInterval(inter);}
      		}, 1000);
	});

}

function startChain4() {
	new Vivus('SubChain4', {type: 'delayed', duration: 30}, function() {
	    var n = $("#SubChain4").find('svg').length;
	    var t = 1000/n;
      	var i=0;
      	inter = setInterval(function() {
      			$("#SubChain4").find('svg').eq(i).find('.needToFill').attr('class','fillIt');
      			i++;
      			if(i==n) {clearInterval(inter);}
      		}, t);
	});

}
