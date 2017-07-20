function Animator(){
	var that=this;
	this.intervalId;
	this.value;
	this.speed=60;
	this.marker;
	
	this.villianAnimate=function(villians,hero,road,acident){	
	  that.intervalId=setInterval(function(){
	  	for(var i=0;i<villians.length;i++){
	  	  villians[i].move(hero,road,acident, villians[i].x);
	  	}  	
	  	if(hero.collision==1){
	  	  that.stopGame(hero,accident);
	  	}
	  },1000/180);
	}

	this.heroAnimate=function(hero,road){	  	
	 hero.move(road);
	}	

	this.stopGame=function(hero,accident){
	  clearInterval(that.intervalId);	
	  that.marker=document.getElementById('panel');
	  that.marker.style.width=500+'px';
      that.marker.innerHTML="Score: "+hero.score/2+"<h1>Press Enter to Reset.</h1>";  	
      that.clickevent=document.addEventListener('keyup',pressed,false);    
      function pressed(e){
      	if(e.keyCode==13 && hero.over==1){      		        
      	  hero.collision=0;
      	  hero.over=0;
      	  accident.reset();
      	}
      	
      }
  	}

}
