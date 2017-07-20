function Score(){
  this.score;
  this.height=50;
  this.width=200;
  this.margin='0 auto';
  this.position='relative';

  this.createBoard=function(){
  	this.score=document.createElement('div');
  	this.score.id='panel';
  	this.score.style.height=this.height+'px';
  	this.score.style.width=this.width+'px';
  	this.score.style.margin=this.margin;
  	this.score.style.position='this.position';
  	this.score.style.background='lightgreen';
  	this.score.innerHTML='Score: 0';
  }
}