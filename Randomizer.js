var flavour = [
  {tag:"beets"},
  {tag:"broccoli"},
  {tag:"carrot"},
  {tag:"chocolate"},
  {tag:"durian"},
  {tag:"soap"},
  {tag:"strawberry"}
  ];
var topping = [
  {tag: "beans"},
  {tag:"boba"},
  {tag: "broccoli"},
  {tag:"coins"},
  {tag:"garlic"},
  {tag: "pearls"}
  ];

var flavour1Index;
var flavour2Index;
var flavour3Index;
var topping1Index;
var topping2Index;
var receipt;
var cuplid;
var cupstraw;
var flv = [];
var toppy = [];
var button;


function preload() {
  receipt = loadImage('Randomizer-assets/a receipt.PNG');
  cupstraw = loadImage('Randomizer-assets/cup straw.PNG');
  cuplid = loadImage('Randomizer-assets/cup lid.PNG');

  for(let i = 0; i <= 6 ; i++) {
    flv[i] = loadImage(`Randomizer-assets/flv${i}.PNG`)
  };

  for(let n = 0; n<=5; n++) {
    toppy[n] = loadImage(`Randomizer-assets/top${n}.PNG`)
  }

}

function setup() {
  let cnv =createCanvas(600, 600);
  cnv.parent('thisShnit');
  background(42,169,196);

  textStyle(BOLD)
  textSize(30);
  text("Click to make your drink",width*0.25,height*0.1);
  

  image(cupstraw,width*0.073,height*0.146);
  image(cuplid,width*0.073,height*0.146);
  image(receipt,width*0.073,height*0.146);


  button = createButton("Click to make your order");
  button.mousePressed(buttonPressed);
  button.class("randomizerButton");
  button.parent('thisShnit');
}


function randomizer() {
  animating = false;

  if (flavour[0]){
    fill(255);
    noStroke();
    rect(380,285,100,115);

    fill(0);
    textSize(19);
    textAlign(LEFT,TOP);

    //flavour1
    flavour1Index = int(random(flavour.length));
    text(flavour[flavour1Index].tag,380,290);
    push();
    blendMode(OVERLAY);
    image(flv[flavour1Index],width*0.073,height*0.146);
    pop();

    //flavour2
    flavour.splice( flavour1Index,1);
    flavour2Index = int(random(flavour.length));
    text(flavour[flavour2Index].tag,380,310);
    push();
    blendMode(OVERLAY);
    image(flv[flavour2Index],width*0.073,height*0.146);
    pop();
    
    //flavour3
    flavour.splice( flavour2Index, 1);
    flavour3Index = int(random(flavour.length));
    text(flavour[flavour3Index].tag,380,330);
    push();
    blendMode(OVERLAY);
    image(flv[flavour3Index],width*0.073,height*0.146);
    pop();

    //topping1
    topping1Index = int(random(topping.length));
    text(topping[topping1Index].tag,380,360);
    blendMode(NORMAL);
    image(toppy[topping1Index],44,88);

    //topping2
    topping.splice(topping1Index, 1);
    topping2Index = int(random(topping.length));
    text(topping[topping2Index].tag,380,380);
    image(toppy[topping2Index],44,88);

    image(cuplid,width*0.073,height*0.146)

  } else {
    background(42,169,196);
    rect();
    textAlign(CENTER, TOP);
    textSize(40);
    image(cupstraw,width*0.073,height*0.146);
    image(cuplid,width*0.073,height*0.146);
    text("We ran out TAT",width/2,height/8);
  }
}

function draw() {
  // if(animating == true){};


}



function buttonPressed() {
  //animating = true;
  setTimeout(randomizer,1000);

}

