function Accident(){
	var that=this;
  this.game=document.getElementById('game');
  this.IntervalId;
  var score;
  this.value;
  var road;
  var score;
  var villians;

  this.init=function(){
  	//Creating Road
  	score=0;
    this.value;
    road=new Road();
    score=new Score();
    villians=[];

  	road.createRoad();
  	that.game.appendChild(road.road);
  	
    //Creating ScoreBoard
  
    score.createBoard();
    that.game.appendChild(score.score);
  	//Creating Hero
  	var hero=new Hero();
  	hero.createHero();
  	road.append(hero.hero);
  	//Creating Villians
  	

  	//Creating Animation Effects
  	var animator=new Animator();
  	animator.heroAnimate(hero,road);
  	
    var villian1=new Villians(0);
    villian1.createVillian();      
    road.append(villian1.villian);
    villians.push(villian1);
      
    var villian2=new Villians(0);
    villian2.createVillian();
    road.append(villian2.villian);      
    villians.push(villian2);

    var villian3=new Villians(-300);
    villian3.createVillian();
    road.append(villian3.villian);      
    villians.push(villian3);
    
    var villian4=new Villians(-300);
    villian4.createVillian();
    road.append(villian4.villian);      
    villians.push(villian4);

    animator.villianAnimate(villians,hero,road,accident);          
  }

  this.reset=function(){
    that.game.removeChild(road.road);
    that.game.removeChild(score.score);
    accident.init();
  }
}
var accident=new Accident();
accident.init();