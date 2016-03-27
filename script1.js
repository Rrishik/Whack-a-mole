var activDiv,currDiv,a,t,clickedDiv,c=0,ti,tf,trt=0,start=0,clickChk,i=0,p=1.9,b,te=2500;
addEventListener("load" , function(){
  setPage();
  gameStart();
});

function setPage(){
  var i;
  for (i=1;i<10;i++){
    document.getElementById("div"+i).style.backgroundColor="#ff7f2a";
    document.getElementById("div"+i).style.cursor = "pointer";
    document.getElementById("div"+i).style.height="80px";
    document.getElementById("div"+i).style.width="80px";
    document.getElementById("div"+i).style.borderRadius="50%";
    document.getElementById("div"+i).style.float="left";
    document.getElementById("div"+i).style.margin="20px";
  }
}

function gameStart(){
  document.getElementById("Button").addEventListener("click", function(){
    divRand();
    start=1;
  });
}

function divRand() {
  activDiv=Math.floor(Math.random()*9+1);
  t=((Math.random()*1.9+0.1).toFixed(3))*1000;
  a=setTimeout(divColorStart,t);
  t-=5;
}

function divColorStart() {
  setPage();
  if (i%2==0) {
    document.getElementById("div"+activDiv).style.backgroundColor="rgb(42, 147, 255)";
  }
  else {
    document.getElementById("div"+activDiv).style.backgroundColor="rgb(180, 255, 180)";
  }
  var Tstart=new Date();
  ti=Tstart.getTime();
  d=0;
  i++;
  b=setTimeout(end,te);
  te-=10;
}

function end() {
  setPage();
  alert("OOPS!! Time Up!\nYour avg Reaction Time was :" + trt/c + "ms\n"+ "Score : "+ c);
  c=0;
  trt=0;
  p=1.9;
  te=2500;
}

function divClick(d) {
  clearTimeout(b);
  currDiv=d;
  document.getElementById("div"+currDiv).style.backgroundColor="rgb(50, 255, 50)";
  var Tstop=new Date();
  tf=Tstop.getTime();
  if (activDiv==currDiv){
    trt=trt+(tf-ti);
    c++;
    divRand();
  }
  else{
    alert("OOPS!! You hit the wrong hole!\nYour avg Reaction Time was :" + trt/c + "ms\n"+ "Score : "+ c);
    document.getElementById("line1").innnerHTML = "OOPS!! You hit the wrong hole!";
    document.getElementById("output").innnerHTML = "Your average Reaction Time was : &nbsp" + trt + '<br>' + "Score : &nbsp" + c;
    c=0;
    trt=0;
    p=1.9;
    te=2500;
    setPage();
  }
}
