var kT115_10 = dC(createComplex(242,0),P2D(121,0));
var kT1 = createComplex(1,0);

initialMatrix = [
	[0,0,{}]
]

load = [//Фактическая нагрузка в узлах
0
]

S = [//Дубликат для учета статических характеристик
0
]

var cycle;
var timeDelay = 0; //Задержка между итерациями расчета
var deltaAllow = 0.000001; //Допустимая погрешность
var maxIterations = 10000; //Максимальное число итераций
var fixed = new Array(); //Узлы неизменной мощности и напряжения
var generation = new Array();
var Mi = new Array(); 	//Матрица  токов по закону Кирхгофа
var Mu = new Array(); 	//Матрица напряжений между узлами
var YY = new Array(); 	//Матрица проводимостей диагональная
var Y; 	//Матрица проводимостей окончательная
var U = new Array(); //Массив фактических напряжений
var dU = new Array(); //Массив разницы нваряжений по концам ветви
var I = new Array(); //Массив токов ветви
var Unom = new Array(); //Массив номинальных напряжений в узлах
var Umax = new Array(); //Массив коэффициентов по допустимому максимальному напряжению
var Umin = new Array(); //Массив коэффициентов по допустимому минимальному напряжению
var Snom = new Array();
var cos = new Array();
var loadEnabled = new Array(); //Вкл-выкл нагрузки, генерации
var delta = new Array();
var mod = new Array();
var tempU = new Array();
var maxPoint = 0; //Максимальный номер узла для определения размеров матриц
var ignore = new Array();
var errors = false;
var count = 0;


U[0] = createComplex(0,0);



$('#messages').on('click','.message',function() {
	var x = $(this).attr('attr-x');
	var y = $(this).attr('attr-y');
	var nid = $(this).attr('n-id');
	$('#field').css({'top':winH/2-coords[nid]['y'],'left':winW/2-coords[nid]['x']});
});