var count = 0;
// var mic;

// var stars = [];

function setup() {
  let cnv = createCanvas(600, 600);
  cnv.parent("thisShnit");

  background(0);
  
  strokeWeight(3);
  angleMode(DEGREES);

  // mic = new p5.AudioIn();
  // mic.start();
  
  textSize(23 );
  
  // for (var i = 0; i < 1000; i++) {
	// stars[i] = new Star();
  // }
}


function draw(){
//background(30);
  
 if (count<=15){
   count++
 }else if (count>15){count=-35};
  background(30);
  // for (var i = 0; i < stars.length; i++) {
	// 	stars[i].draw();
  // }
  wing();
  
  body();
  
  jaw();
  arm();
  leg();
  eye();
  iris();
  mouseClicked();
}
 

// class Star {
// 	constructor() {
// 		this.x = random(width);
// 		this.y = random(height);
// 		this.size = random(0.25, 3);
// 		this.t = random(TAU);
// 	}
	
// 	draw() {
//         fill(255,255,255,150);
// 		this.t += 0.1;
// 		var scale = this.size + sin(this.t) * 2;
// 		noStroke();
// 		ellipse(this.x, this.y, scale, scale);
// 	}
// }

function mouseClicked(){
 //Twitter
  fill(41,211,217);
  if (mouseX >= width*0.175 &&
      mouseX <= width*0.35&&
      mouseY >=height*0.175 &&
      mouseY <= height*0.45){
    text('Im on Twitter!',width*0.5, height*0.15)
  }
  
  //UC Browser
    fill(255,204,0);
  if (mouseX >= width*0.5 &&
      mouseX <= width*0.8 &&
      mouseY >=height*0.2 &&
      mouseY <= height*0.45||
      mouseX >= width*0.32 &&
      mouseX <= width*0.65 &&
      mouseY >= height*0.4 &&
      mouseY <= height*0.65 ||
      mouseX >= width*0.2 &&
      mouseX <= width*0.65  &&
      mouseY >= height*0.65 &&
      mouseY <= height*0.9){
    text('Reading online novel B)',width*0.4, height*0.15)
  }
  
  //Instagram
    fill(196,127,186);
  if (mouseX >= width*0.6 &&
      mouseX <= width*0.7&&
      mouseY >=height*0.29 &&
      mouseY <= height*0.35){
    text('Looking at great arts on Instagram',width*0.3, height*0.1)
  }
  
  //Youtube
    fill(168,61,34);
  if (mouseX >= width*0.6  &&
      mouseX <= width*0.8  &&
      mouseY >=height*0.4  &&
      mouseY <= height*0.5 ){
    text('Watch dumb videos on Youtube',width*0.35,height*0.1 )
  }
  
  //Facebook
    fill(75,139,222);
  if (mouseX >= width*0.53    &&
      mouseX <= width*0.7  &&
      mouseY >=height*0.55  &&
      mouseY <= height*0.625){
    text('Quick check on Facebook ',width*0.4 , height*0.1)
  }
  
  //Discord
    fill(89,139,177);
  if (mouseX >= width*0.49 &&
      mouseX <= width*0.85  &&
      mouseY >=height*0.7 &&
      mouseY <= height*0.9){
    text('Replying to Discord chats ',width*0.4,height*0.1)
  }
}

function body(){
  //body
  push();
  stroke(255,204,0); 
  fill(255,241,133);  
  beginShape();
  vertex(width*.2,height*.9);
  vertex(width*.2,height*.6);
  vertex(width*.55,height*.2);
  vertex(width*.75,height*.2);
  vertex(width*.825,height*.325);
  vertex(width*.8,height*.4);
  vertex(width*.63,height*.5);
  vertex(width*.58,height*.65);
  vertex(width*.7,height*.9);
  endShape(CLOSE);
  pop(); 
}

function wing(){
    //wing
  push();  
  translate(width/2,height/2);
  rotate(count*.7);
  translate(width*-.5,height*-.5); 
  stroke(41,211,217);
  fill(145,251,255);
  beginShape();
  vertex(width*.175,height*.175);
  vertex(width*.26,height*.275);
  vertex(width*.175,height*.375);
  vertex(width*.32,height*.375);
  vertex(width*.35,height*.425);
  vertex(width*.35,height*.2);
  endShape(CLOSE);
  pop();
}
function arm(){
   //hand
  push();
  stroke(75,139,222);
  fill(133,186,255);
  beginShape();
  vertex(width*.53,height*.55);
  vertex(width*.7,height*.55);
  vertex(width*.7,height*.625);
  vertex(width*.53,height*.625);
  endShape(CLOSE);
  pop();
}

function leg(){
  //leg
  push();
  stroke(6,62,107);
  fill(21,87,140);
  beginShape();
  vertex(width*.5,height*.9);
  vertex(width*.8,height*.9);
  vertex(width*.85,height*.775);
  vertex(width*.76,height*.7);
  vertex(width*.65,height*.75);
  vertex(width*.54,height*.7);
  vertex(width*.45,height*.775);
  endShape(CLOSE);
  fill(255,241,133);
  noStroke();
  circle(width*.55,height*.81,width*.08);
  pop();
}

function jaw(){
   //jaw
  push();
  translate(width/2,height/2); 
  let count1 = -10;
  // let count1 = -10 + mic.getLevel()*250;
  rotate(count1*.2);
  translate(width*-.5,height*-.5);

  stroke(168,61,34);
  fill(227,61,45);
  beginShape();
  vertex(width*.6,height*.5);
  vertex(width*.6,height*.4);
  vertex(width*.675,height*.4);
  vertex(width*.6625,height*.44);
  vertex(width*.7375,height*.44);
  vertex(width*.725,height*.4);
  vertex(width*.8,height*.4);
  vertex(width*.8,height*.5);
  endShape(CLOSE);
  pop();
}

function eye(){
   //eye
  push();
  stroke(78,28,99);
  fill(169,127,186);
  beginShape();
  vertex(width*.58,height*.3);
  vertex(width*.65,height*.245);
  vertex(width*.72,height*.3);
  vertex(width*.69,height*.365);
  vertex(width*.61,height*.365);
  endShape(CLOSE);
  pop();
}

function iris(){
  //Iris
  push();
  stroke(11,133,57);
  fill(94,255,126);
  ellipse(map(mouseX,0,width,width*.605,width*.67),map(mouseY,0,height,height*.29,height*.335),width*.02,width*.05);
  //circle(width*.65,height*.3,width*.05);  
  pop(); 
}