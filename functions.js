function isInt(n){ return Number(n) === n && n % 1 === 0 }

function isFloat(n){ return n === Number(n) && n % 1 !== 0 }

function createEmptyComplex() {
	return {'Re':0,'Im':0}
}

function matingComplex(a) {
	if(isInt(a) || isFloat(a)) {a = createComplex(a,0);}
	Re = a['Re'];
	Im = -a['Im'];
	return createComplex(Re, Im);
}

function createComplex(Re, Im) {
	return {'Re':Re,'Im':Im}
}

/* ПРЕОБРАЗОВАНИЯ */

//M - модуль
//d - угол
function Polar2Decart(M,d) {
	Re = M*Math.cos(d*Math.PI/180);
	Im = M*Math.sin(d*Math.PI/180);
	return createComplex(Re,Im);
}
function P2D(M,d) {
	return Polar2Decart(M,d);
}

/* АРИФМЕТИЧЕСКИЕ ДЕЙСТВИЯ С КОМПЛЕКСНЫМИ МАТРИЦАМИ */

//Умножение
function multiplyMatrix(a,b) {
	var c = new Array();
	for(var i=0; i<a.length; i++) {
		c[i] = new Array();
		for(var j =0; j<a[0].length; j++) {
			c[i][j]=createComplex(0,0);
			for(var k=0; k<a[0].length; k++) {
				
				c[i][j] = smC(c[i][j],mC(a[i][k],b[k][j]));
			}

		}
	}
	return c;
}
function mM(a,b) {
	return multiplyMatrix(a,b);
}

/* АРИФМЕТИЧЕСКИЕ ДЕЙСТВИЯ С КОМПЛЕКСНЫМИ ЧИСЛАМИ */

//Умножение
function multiplyComplex(a,b) {
	if(isInt(a) || isFloat(a)) {a = createComplex(a,0);}
	if(isInt(b) || isFloat(b)) {b = createComplex(b,0);}
	Re = a['Re']*b['Re']-a['Im']*b['Im'];
	Im = a['Re']*b['Im']+a['Im']*b['Re'];
	return createComplex(Re, Im);
}

//Сложение
function sumComplex(a,b) {
	if(isInt(a) || isFloat(a)) {a = createComplex(a,0);}
	if(isInt(b) || isFloat(b)) {b = createComplex(b,0);}
	Re = a['Re']+b['Re'];
	Im = a['Im']+b['Im'];
	return createComplex(Re, Im);
}

//Вычитание
function subtractionComplex(a,b) {
	if(isInt(a) || isFloat(a)) {a = createComplex(a,0);}
	if(isInt(b) || isFloat(b)) {b = createComplex(b,0);}
	Re = a['Re']-b['Re'];
	Im = a['Im']-b['Im'];
	return createComplex(Re, Im);
}

//Деление
function divideComplex(a,b) {
	if(isInt(a) || isFloat(a)) {a = createComplex(a,0);}
	if(isInt(b) || isFloat(b)) {b = createComplex(b,0);}
	Re = (a['Re']*b['Re']+a['Im']*b['Im'])/(Math.pow(b['Re'],2)+Math.pow(b['Im'],2));
	Im = (a['Im']*b['Re']-a['Re']*b['Im'])/(Math.pow(b['Re'],2)+Math.pow(b['Im'],2));
	return createComplex(Re, Im);
}

/* МАТЕМАТИЧЕСКИЕ ФУНКЦИИ */

//Возведение в квадрат
function sqrC(a) {
	return mC(a,a);
}

/* Карткая форма арифметических функций */

//Умножение
function mC(a,b) {
	return multiplyComplex(a,b);
}

//Деление
function dC(a,b) {
	return divideComplex(a,b);
}

//Вычитание
function sbC(a,b) {
	return subtractionComplex(a,b);
}

//Сложение
function smC(a,b) {
	return sumComplex(a,b);
}

function getModule(a) {
	return Math.sqrt(Math.pow(a['Re'],2)+Math.pow(a['Im'],2));
}

function getAngle(a) {
	var d = 0;
	var y = a['Im']*getModule(a);
	var x = a['Re']*getModule(a);
	if(a['Re']<0 && a['Im']>0) {d=180;}
	if(a['Re']<0 && a['Im']<0) {d=-180;}
	ang = Math.atan(a['Im']/a['Re'])*180/Math.PI+d;
	return ang;
}

//Визуальная чать

function throwMessage(m, type,UorI,n) {
	if(UorI=="node") {var x = coords[n]['x']; var y = coords[n]['y'];}
	html = "<div class='message "+type+"' attr-x='"+x+"' attr-y='"+y+"' n-id='"+n+"'>"+m+"</div>";
	$('#messages').prepend(html);
}

function turnOff(groupId) {
	for(var i=0; i<group[groupId].children().length; i++) {
		var defColor = group[groupId].children()[i].attr('def-color');
		if(defColor!=undefined) {group[groupId].children()[i].addClass('dasharray');}
	}
}

function turnOn(groupId) {
	for(var i=0; i<group[groupId].children().length; i++) {
		var defColor = group[groupId].children()[i].attr('def-color');
		if(defColor!=undefined) {group[groupId].children()[i].removeClass('dasharray');}
	}
}