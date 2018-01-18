//Определеям наибольший узел, т.е. размер матриц
for(var i=0; i<initialMatrix.length; i++) {
	var iM = initialMatrix[i];
	if(iM[0] > maxPoint) {maxPoint = iM[0];}
	if(iM[1] > maxPoint) {maxPoint = iM[1];}
}


//Создание матриц с нулями
for(var i=0; i<=initialMatrix.length-1; i++) {
	delta[i] = 0;
	dU[i] = createComplex(0,0);
	I[i] = createComplex(0,0);
	Mi[i] = new Array();
	Mu[i] = new Array();
	YY[i] = new Array();
	for(var j=0; j<=initialMatrix.length-1; j++) {
		Mi[i][j] = 0;
		Mu[i][j] = 0;
		YY[i][j] = 0;
	}
}
//Заполнение матриц
for(var i=1; i<initialMatrix.length; i++) {

	var iM = initialMatrix[i];
	if(iM[2]['R']!=undefined || iM[2]['X']!=undefined) { //Если есть сопротивления, добавляем в диагональ YY
		var Z = createComplex(iM[2]['R'], iM[2]['X']);
		YY[i][i] = dC(1,Z);
	}
	Mi[iM[0]][i] = -1; //Выходим из узла
	Mu[i][iM[0]] = 1; //Входим в узел

	if(iM[2]['kT']!=undefined) {//Если есть кТ и входим в узел
		Mi[iM[1]][i] = matingComplex(iM[2]['kT']);
		Mu[i][iM[1]] = mC(-1,iM[2]['kT']);
	} else {//Входим в узел
		Mi[iM[1]][i] = 1;
		Mu[i][iM[1]] = -1;
	}
}

Y = mM(mM(Mi,YY),Mu); //Матрица проводимостей окончательная

checkDelta = false;
delta[0] = 0;

function oneStepOfCycle() {
	checkDelta = true;
	for(k=1; k<U.length; k++) {
		//Статические характеристики нагрузки
		if(fixed[k]!=true && generation[k]!=true && load[k]!=undefined) {
			load[k] = matingComplex(createComplex(
				S[k]['Re']*(0.83-0.3*getModule(U[k])/Unom[k]+0.47*Math.pow(getModule(U[k]),2)/Math.pow(Unom[k],2)),
				-S[k]['Im']*(3.7-7*getModule(U[k])/Unom[k]+4.3*Math.pow(getModule(U[k]),2)/Math.pow(Unom[k],2)) 
				));
		}
		//Узел генерации, моделирование АРВ
		if(generation[k]==true && loadEnabled[k]!=false) {
			var p = (Unom[k]-getModule(U[k]))/Unom[k];
			var Qmax = Math.sqrt(Math.pow(Snom[k],2)-Math.pow(load[k]['Re'],2));
			if(p>=0) {var Qavailable = Qmax-Math.abs(load[k]['Im']);}
			if(p<0) {var Qavailable = Math.abs(load[k]['Im']);}
			load[k]['Im'] = load[k]['Im']+Qavailable*p;
			if(load[k]['Im']>Qmax) {load[k]['Im']=Qmax;}
		}
		dU[k] = createComplex(0,0);
		tempU[k] = U[k];
		if(fixed[k]!=true) {
			if(load[k]==undefined) {load[k] = createComplex(0,0); S[k] = createComplex(0,0);}
			if(loadEnabled[k]==false) {load[k] = createComplex(0,0);}
			U[k] = dC(dC(load[k],matingComplex(U[k])),Y[k][k]);
			
			for(var i=1; i<=maxPoint; i++) {
				if(i!=k) {
					U[k] = 
					sbC(
						U[k],
						dC(
							mC(
								U[i],
								Y[k][i]
								),
							Y[k][k])
						);
				}
			}
		}
			// console.table(load);


		// if(fixed[k]==true) {
		// 	for(var i=1; i<U.length; i++) {
		// 		dU[k] = smC(dU[k],mC(Mu[k][i],U[i]));
		// 		I[k] = mC(dU[k],Y[k][k]);
		// 		load[k] = mC(U[k],I[k]);
		// 	}
		// }

		delta[k] = getModule(sbC(U[k],tempU[k]));
		if(delta[k]>deltaAllow) {checkDelta = false;}
	}

	// for(var n=1; n<U.length;n++) {
	// 	var a = Math.round(getAngle(U[n])*1000)/1000;
	// 	text[n].text(Math.round(getModule(U[n])*1000)/1000+'');
	// 	if(load[n]!=undefined) Stext[n].text(''+(Math.round(load[n]['Re']*1000)/1000)+'+'+(-Math.round(load[n]['Im']*1000)/1000)+"i");
	// 	angle[n].text('∠'+(Math.round(getAngle(U[n])*1000)/1000)+'°');
	// }


	count++;
	if(checkDelta==true) {
		throwMessage('Рассчет завершен','success');
		for(var i=0; i<U.length; i++) {
			if(Unom[i]!=undefined) {
			if(getModule(U[i])<Umin[i]) {errors = true; throwMessage('Напряжение в узле '+i+' ниже допустимого','error','node',i);}
			if(getModule(U[i])>Umax[i]) {errors = true; throwMessage('Напряжение в узле '+i+' выше допустимого','error','node',i);}
			
			}
		}
		// if(errors==true) {audioError.play();} else {audioSuccess.play();}
	}
	if(checkDelta!=true && count<maxIterations) {setTimeout(oneStepOfCycle,timeDelay);}
}

function startCalculation() {
	$('#messages').empty();
	checkDelta = false;
	errors = false;
	count = 0; 
	setTimeout(oneStepOfCycle(),timeDelay);
}

startCalculation();