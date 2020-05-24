var ground, rect, rect2, rect3, rect4, rect5, rect6, rect7,rect8,box;

function preload() {
  backgroundImg = loadImage("sprites/tutty.png");
}

function setup() {
    createCanvas(1500,450);

    ground = createSprite(500,440,1800,20);
    rect = createSprite(600,330,600,200);
    rect2 = createSprite(335,220,70,50);
    rect3 = createSprite(445,220,70,50);
    rect4 = createSprite(550,220,70,50);
    rect5 = createSprite(650,220,70,50);
    rect6 = createSprite(765,220,70,50);
    rect7 = createSprite(865,220,70,50);
    rect8 = createSprite(200,255,50,350);
    rect9 = createSprite(1000,255,50,350);
    box = createSprite(600,380,130,100);

    ground.shapeColor = "black";
    rect.shapeColor = (195);
    rect2.shapeColor = (181,101,29);
    rect3.shapeColor = (181,101,29);
    rect4.shapeColor = (181,101,29);
    rect5.shapeColor = (181,101,29);
    rect6.shapeColor = (181,101,29);
    rect7.shapeColor = (181,101,29);
    rect8.shapeColor = (181,101,29);
    rect9.shapeColor = (181,101,29);
    }

function draw() {
    background(255,204,203);

    strokeWeight(3);
    stroke("green");

    ground.display();
    rect.display();
    rect2.display();

    drawSprites();
}