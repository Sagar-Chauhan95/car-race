function Control(){
  this.control;
  this.buttonLeft;
  this.buttonRight;
  this.height=50;
  this.width=200;
  this.margin='0 auto';
  this.background='lightgreen';

  this.createPanel=function(){
  	this.control=document.createElement('div');
  	this.control.style.height=this.height+'px';
  	this.control.style.width=this.width+'px';
  	this.control.style.margin=this.margin;
  	this.control.style.background=this.background;
  }

  this.createLeft=function(){
  	this.buttonLeft=document.createElement('input');
  	this.buttonLeft.style.float='left';
  	this.buttonLeft.type='submit';
  	this.buttonLeft.value='LEFT';
  	this.buttonLeft.id='left';
  	this.append(this.buttonLeft);
  }

  this.createRight=function(){
  	this.buttonRight=document.createElement('input');
  	this.buttonRight.style.float='right';
  	this.buttonRight.type='submit';
  	this.buttonRight.value='RIGHT';
  	this.buttonRight.id='right';
  	this.append(this.buttonRight);
  }

  this.append=function(object){
  	this.control.appendChild(object);
  }
}