//Create variables here
var dog,happyDog,database,foodS,foodStock,dogimg,dogimg2,foodamount;

function preload()
{
  //load images here
  dogimg = loadImage("dogImg.png");
  dogimg2 = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250,200,50,50);
  dog.addImage(dogimg);
  dog.scale=0.5;
  database=firebase.database();
  
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  foodamount
}


function draw() { 
  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogimg2);
  }

  drawSprites();
  fill("orange");
  //textSize(40);
  text("Milk left = " + foodStock,100,450);
  
  
  //stroke("Black");
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}


