const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var mouse;


// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
  

  createCanvas(1200,400);
 
}


function draw(){
background("white");
mouse=mouseX;
fill("black");
//ellipse(mouse,200,50,50);

  // change the value of Red based on the mouse movement about the X axis
    if(mouse>800){
     background(255,00,00) ;
    }
  // change the value of Green based on the mouse movement about the X axis
  if(mouse>400 && mouse<=800){
    background(00,255,00) ;
   }
  
  // change the value of Blue based on the mouse movement about the X axis
  if(mouse>0 && mouse<=400){
    background(00,00,255) ;
   }
  // Use the map() function to do so. 
   let x1 = map(mouseX, 0, 1200, 0, 255);
   ellipse(x1, 200, 50, 50);
  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}