function Road(){
  var that=this;
  this.road;
  this.height=600;
  this.width=300;
  this.position='relative';
  this.background='url("./images/road.png")';
  this.margin='0 auto';
  this.overflow='hidden';

  this.createRoad=function(){
  	that.road=document.createElement('div');
  	that.road.style.width=that.width+'px';
  	that.road.style.height=that.height+'px';
  	that.road.style.position=that.position;
  	that.road.style.background=that.background;
  	that.road.style.margin=that.margin;
    that.road.style.overflow=that.overflow;
  }

  this.append=function(object){
  	that.road.appendChild(object);
  }
}