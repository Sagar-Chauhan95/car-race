function Villians(y){
  this.y=y;
  this.marker;
  this.villian;
  this.keyEvent;
  var that=this;
  this.width=100;
  this.height=100;
  this.position='absolute'; 
  this.x=Math.floor((Math.random()*3))*100;
  this.background='url("./images/block.png")';
  this.intervalId;
  
  this.createVillian=function(){
  	that.villian=document.createElement('div');
  	that.villian.counted=0;
    that.villian.style.top=that.y+'px';
    that.villian.style.left=that.x+'px';
    that.villian.style.width=that.width+'px';
    that.villian.style.position=that.position;
    that.villian.style.height=that.height+'px'; 
    that.villian.style.background=that.background;
  }

  this.move=function(hero,road,accident,x){
    
      if(that.y>=hero.y-hero.height && that.y<road.height && x==hero.x){
        hero.collision=1;
        hero.over=1;
      }
      if(that.y>=600){
        ++hero.score;
        that.marker=document.getElementById('panel');
        that.marker.innerHTML="Score: "+hero.score/2;
        that.y=0;
        that.x=Math.floor((Math.random()*3))*100;
        that.villian.style.left=that.x;
      } 
      that.y +=1;
      that.villian.style.top=that.y;   
  }
}