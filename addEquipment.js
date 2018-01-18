function addLine(x1,x2,r0,x0,b0,L,enabled) {
	if(enabled==undefined) {enabled = true;}
	var x = x0*L;
	var r = r0*L;
	var b = 1/(b0/1000000*L/2);
	initialMatrix[initialMatrix.length] = new Array(x1,x2,{'R':r,'X':x,'enagled':enabled});
	initialMatrix[initialMatrix.length] = new Array(0,x2,{'R':0,'X':-b,'enagled':enabled});
	initialMatrix[initialMatrix.length] = new Array(x1,0,{'R':0,'X':-b,'enagled':enabled});
}

function addLoad(x,P,Q,Un,Umx,Umn) {
	load[x] = matingComplex(createComplex(P,Q));
	S[x] = matingComplex(createComplex(P,Q));
	Umax[x] = Un*(1+Umx/100);
	Umin[x] = Un*(1-Umn/100);
	Unom[x] = Un;
	U[x] = createComplex(Un,0);
}

function addGeneration(x,Sn,cosn,P,Un,Umx,Umn) {
	Snom[x] = Sn;
	cos[x] = cosn;
	load[x] = matingComplex(createComplex(-P,0));
	Umax[x] = Un*(1+Umx/100);
	Umin[x] = Un*(1-Umn/100);
	Unom[x] = Un;
	generation[x] = true;

	U[x] = createComplex(Un,0);
}

function addBalanced(x, Ufixed) {
	U[x] = createComplex(Ufixed,0);
	fixed[x] = true;
}

function addTransformator(x1,x2,uk,dP,Un,Snom,kT,Umx,enabled) {
	var z = uk/100*Math.pow(Un,2)/Snom;
	var r = dP*Math.pow(Un,2)/Math.pow(Snom,2);
	var x = Math.sqrt(Math.pow(z,2)-Math.pow(r,2));
	initialMatrix[initialMatrix.length] = new Array(x1,x2,{'R':r,'X':x,'enagled':enabled,'kT':kT});
	U[x1] = createComplex(Un,0);
	Unom[x1] = Un;
	Umax[x1] = Un*(1+Umx);
}