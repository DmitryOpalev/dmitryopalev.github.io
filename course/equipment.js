// function addLine(x1,x2,r0,x0,b0,L,enabled)
//addTransformator(x1,x2,uk,Unom,Snom,k,enabled)


addLine(1,2,0.118,0.4,2.6,100);
addTransformator(2,3,11,0.17,220,100,dC(createComplex(220.462,0),createComplex(115,0)));
addLine(3,4,0.118,0.4,2.6,100);
addLine(4,5,0.118,0.4,2.6,100);
addLine(5,6,0.118,0.4,2.6,100);
// addTransformator(x1,x2,uk,dP,Un,Snom,kT,enabled)

//addLoad(x,P,Q,Un,Umx,Umn)
addLoad(3,10,10,110,20,10);
addLoad(4,10,10,110,20,10);
addLoad(5,10,10,110,20,10);



addGeneration(6,30,0.8,10,110,5,5);
addBalanced(1,220);