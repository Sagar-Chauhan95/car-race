function Hero(){
  this.hero;
  this.height=100;
  this.width=100;
  this.x=100;
  this.y=500;
  this.position='absolute';
  this.background='url("./images/car.png")';
  this.clickevent1;
  this.clickevent;
  this.clickevent2;
  this.collision=0;
  this.over=0;
  this.score=0;
  var that=this;

  this.createHero=function(){
  	that.hero=document.createElement('div');
  	that.hero.style.height=that.height+'px';
  	that.hero.style.width=that.width+'px';
  	that.hero.style.left=that.x+'px';
  	that.hero.style.top=that.y+'px';
  	that.hero.style.position=that.position;
  	that.hero.style.background=that.background;
  }

  this.move=function(road){
  	that.clickevent=document.addEventListener('keyup',pressed,false);    
    function pressed(e){
      if(e.keyCode==37){
        if(that.x>=road.width/3){
        that.x=that.x-100;  
        that.hero.style.left=that.x;
      }
      }
      else if(e.keyCode==39){ 
        if(that.x<road.width/1.5){
        that.x=that.x+100;  
        that.hero.style.left=that.x;        
      }
      }
    }
  }
}