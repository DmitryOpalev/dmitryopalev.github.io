initialMatrix = [
	[1,2,{'R': 4,'X':8}],
	[1,3,{'R': 3,'X':7}],
	[3,4,{'R': 2,'X':2.5}],
	[2,4,{'R': 4,'X':7}],
	[2,5,{'R': 3,'X':4}],
	[4,6,{'R': 3.5,'X':5}],
	[5,6,{'R': 1,'X':3}],

	[1,0,{'B':78.3}],
	[2,0,{'B':64.8}],
	[3,0,{'B':32.4}],
	[4,0,{'B':48.6}],
	[5,0,{'B':29.8}],
	[6,0,{'B':27}]
]

load = [
0,
matingComplex(createComplex(0,0)),
matingComplex(createComplex(20,12)),
matingComplex(createComplex(12,8)),
matingComplex(createComplex(48,36)),
matingComplex(createComplex(36,26)),
matingComplex(createComplex(40,30))
]

deltaAllow = 0.001;
maxIterations = 1000;

joinMatrix = new Array();
Y = new Array();
var U = new Array();
var delta = new Array();
var mod = new Array();
var tempU = new Array();
maxPoint = 0;

for(var i=0; i<initialMatrix.length; i++) {
	var iM = initialMatrix[i];
	if(iM[0] > maxPoint) {maxPoint = iM[0];}
	if(iM[0] > maxPoint) {maxPoint = iM[0];}
}

for(var i=0; i<=maxPoint; i++) {
	U[i] = createComplex(0,0);
	if(i>0) U[i] = createComplex(10,4);
	delta[i] = 0;
	joinMatrix[i] = new Array();
	Y[i] = new Array();
	for(var j=0; j<=maxPoint; j++) {
		joinMatrix[i][j] = 0;
		Y[i][j] = 0;
	}
}

for(var i=0; i<initialMatrix.length; i++) {
	var iM = initialMatrix[i];
	joinMatrix[iM[0]][iM[1]] = 1;
	joinMatrix[iM[1]][iM[0]] = 1;
	if(iM[1]!=0 && iM[0]!=0) {
		Z = createComplex(iM[2]['R'], iM[2]['X']);
		Y[iM[0]][iM[1]] = dC(1,Z);
		Y[iM[1]][iM[0]] = dC(1,Z);
	} else {
		Y[iM[0]][iM[1]] = createComplex(0, (iM[2]['B']/1000000));
		Y[iM[1]][iM[0]] = createComplex(0, (iM[2]['B']/1000000));
	}

}

for(var i=1; i<Y.length; i++) {
	for(var j=1; j<Y.length; j++) {
		if(joinMatrix[i][j]==1) {
			Y[i][i] = sbC(Y[i][i],Y[i][j]);
		}
	}

}
count = 0;
checkDelta = false;
U[1] = createComplex(115,0);
delta[0] = 0;
while(count<maxIterations) {
	checkDelta = true;
	for(k=2; k<U.length; k++) {
		tempU[k] = U[k];
		U[k] = dC(dC(load[k],matingComplex(U[k])),Y[k][k]);
		for(var i=1; i<=maxPoint; i++) {
			if(joinMatrix[k][i]==1) {
				U[k] = sbC(U[k],dC(mC(U[i],Y[k][i]),Y[k][k]));
			}
		}
		delta[k] = getModule(sbC(U[k],tempU[k]));
		if(delta[k]>deltaAllow) {checkDelta = false;}
	}
	if(checkDelta==true) break;
	count++;
}
console.log('Сходимость результата: '+checkDelta);
console.log('Количество итераций: '+count);
console.table(U);