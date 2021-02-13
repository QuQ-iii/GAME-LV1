//images/sounds : 
var monkeyBodyIMG, marsIMG, earthIMG, rocketIMG, rocketShipIMG, cap1IMG;
var shooter1IMG, rdBoxIMG, blueBoxIMG, sound;
var capSellerL, capSellerR, monkeyL, monkeyR, redCapIMG, blueCapIMG;
//starting screen sprites : 
var bg1;
var monkeyBody;

//starting screen buttons : 
var shopButton, levelsButton, howToPlayButton, backButton;

//SHOP :
var buyButton, buyButton2, sellButton;
var cap1, shooter1, rocketShip;

var rocket = "0";
var shooter = "0";

//LEVELS : 
var LV1Button, LV2Button, LV3Button, LV4Button, LV5Button;
var rocketim, earth, mars;

var gameState = "0";
var monkeyCount = 0;
var moneyCount = 0;
var capCount = 0;
var levelCount = 1;

var capSeller;

var redCap1, redCap2, redCap3, blueCap1, blueCap2, blueCap3;
var border1, border2, border3, border4;
var redBox, blueBox;
var back2button;

//LV 1 : 
var wall1, wall2;
var monkey1, monkey2;
var monkey1Stat = "no";
var monkey2Stat = "no";
var score = 0;

//LV 2 : 

//LV 3 : 

//LV 4 :

//LV 5 : 



function preload(){
    monkeyBodyIMG = loadImage("Images/monkeyFullBody.png");

    marsIMG = loadImage("Images/Mars.png");
    earthIMG = loadImage("Images/Earth.png");
    rocketIMG = loadImage("Images/rocket.png");
    rocketShipIMG = loadImage("Images/roketShip.png");
  
    cap1IMG = loadImage("Images/blueCap.png");
    shooter1IMG = loadImage("Images/shooter.png");
  
    redBoxIMG = loadImage("Images/redBox.png");
    blueBoxIMG = loadImage("Images/blueBox.png");
    sound = loadSound("footStep.mp3");

    blueCapIMG = loadImage("Images/blueCap.png");
    redCapIMG = loadImage("Images/redCap.png");

    monkeyR = loadImage("Images/MonkeyS.png");
    monkeyL = loadImage("Images/Monkey.png");

    capSellerR = loadImage("Images/capSeller.png.png");
    capSellerL = loadImage("Images/CapSellerS.png")
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);

    bg1 = createSprite(windowWidth/2, (windowHeight/2) + 50, windowWidth - 100, windowHeight - 200);
    bg1.shapeColor = "white";

    //start screen buttons : 
    monkeyBody = createSprite(windowWidth - (windowWidth - 300),windowHeight - (windowHeight - 300),100,100);
    monkeyBody.addImage("hi",monkeyBodyIMG);

    shopButton = createButton("SHOP");
    levelsButton = createButton("LEVELS");
    howToPlayButton = createButton("HOW TO PLAY?");
    backButton = createButton("BACK");
    backButton.position(windowWidth - 190,500);
    backButton.hide();

    //shop : 
    buyButton = createButton("BUY");
    buyButton.position(750,480);
    buyButton.hide();
    buyButton2 = createButton("BUY");
    buyButton2.position(1000,480);
    buyButton2.hide();
    sellButton = createButton("SELL");
    sellButton.position(1000,230);
    sellButton.hide();

    cap1 = createSprite(850,250,50,50);
    cap1.addImage("blue", cap1IMG);
    cap1.scale = 0.2;
    cap1.visible = false;

    shooter1 = createSprite(950,390,20,20);
    shooter1.addImage("gun", shooter1IMG);
    shooter1.scale = 0.4;
    shooter1.visible = false;

    rocketShip = createSprite(700,350,50,50);
    rocketShip.addImage("ship", rocketShipIMG);
    rocketShip.visible = false;
    rocketShip.scale = 0.4;

    //levels :
    LV1Button = createButton("LV 1");
    LV1Button.position(windowWidth - (windowWidth - 200),250);
    LV1Button.hide();
    LV2Button = createButton("LV 2");
    LV2Button.position(windowWidth - (windowWidth - 200),300);
    LV2Button.hide();
    LV3Button = createButton("LV 3");
    LV3Button.position(windowWidth - (windowWidth - 200),350);
    LV3Button.hide();
    LV4Button = createButton("LV 4");
    LV4Button.position(windowWidth/2,230);
    LV4Button.hide();
    LV5Button = createButton("LV 5");
    LV5Button.position((windowWidth - 200),300);
    LV5Button.hide();

    rocketim = createSprite(windowWidth/2, windowHeight/2, 50,50);
    rocketim.addImage("spaceShip", rocketIMG);
    rocketim.scale = 0.5;
    rocketim.visible = false;
    earth = createSprite(windowWidth - (windowWidth - 200),windowHeight/2,50,50);
    earth.addImage("earth", earthIMG);
    earth.scale = 0.6;
    earth.visible = false;

    mars = createSprite(windowWidth - 200,windowHeight/2,50,50);
    mars.addImage("mars", marsIMG);
    mars.scale = 0.6;
    mars.visible = false;

    //LV 1 : 
    monkey1 = createSprite(windowWidth - (windowWidth - 100), windowHeight -(windowHeight - 200),50,50);
    monkey1.visible = false;
    monkey1.addImage("m", monkeyR);
    monkey1.scale = 0.15;
    monkey2 = createSprite(windowWidth - 100,windowHeight -(windowHeight - 200),50,50);
    monkey2.visible = false;
    monkey2.addImage("m", monkeyR);
    monkey2.scale = 0.15;

    wall1 = createSprite(windowWidth/2, (windowHeight/2) + 100,20,100);
    wall2 = createSprite(windowWidth/2, (windowHeight/2) - 50,250,20);

    //LV 2 : 

    //LV 3 : 

    //LV 4 :

    //LV 5 : 

    //overall levels : 
    capSeller = createSprite(windowWidth/2, windowHeight/2,50,50);
    capSeller.visible = false;
    capSeller.addImage("seller", capSellerR);
    capSeller.scale = 0.10;

    back2Button = createButton("BACK");
    back2Button.position(windowWidth/2,(windowHeight/2) + 100);
    back2Button.hide();

        //caps : 
        redCap1 = createSprite(400,205,50,50);
        redCap1.visible = false;
        redCap1.addImage("red", redCapIMG);
        redCap1.scale = 0.15;
        redCap2 = createSprite(400,200,50,50);
        redCap2.visible = false;
        redCap2.addImage("red", redCapIMG);
        redCap2.scale = 0.15;
        redCap3 = createSprite(400,200,50,50);
        redCap3.visible = false;
        redCap3.addImage("red", redCapIMG);
        redCap3.scale = 0.15;
        
        blueCap1 = createSprite(500,215,50,50);
        blueCap1.visible = false;
        blueCap1.addImage("blue", blueCapIMG);
        blueCap1.scale = 0.15;
        blueCap2 = createSprite(500,200,50,50);
        blueCap2.visible = false;
        blueCap2.addImage("blue", blueCapIMG);
        blueCap2.scale = 0.15;
        blueCap3 = createSprite(500,200,50,50);
        blueCap3.visible = false;
        blueCap3.addImage("blue", blueCapIMG);
        blueCap3.scale = 0.15;

        //borders : 
        border1 = createSprite(windowWidth - 50, (windowHeight/2) + 50, 20,windowHeight - 200);
        border1.visible = false;
        border2 = createSprite(windowWidth - (windowWidth - 50), (windowHeight/2) + 50, 20,windowHeight - 200);
        border2.visible = false;
        border3 = createSprite(windowWidth/2, windowHeight - 50,windowWidth - 80,20);
        border3.visible = false;
        border4 = createSprite(windowWidth/2, windowHeight - (windowHeight - 150), windowWidth - 80,20);
        border4.visible = false;

        //boxes : 
        redBox = createSprite(windowWidth/4, windowHeight - 100,20,20);
        redBox.visible = false;
        redBox.addImage("red", redBoxIMG);
        redBox.scale = 0.3;
        redBox.visible = false;

        blueBox = createSprite(windowWidth/2 + (windowWidth/4), windowHeight - 105,20,20);
        blueBox.visible = false;
        blueBox.addImage("blue", blueBoxIMG);
        blueBox.scale = 0.3;
        blueBox.visible = false;
    
    
}

function draw(){
    background("black");

    if(gameState !== "LEVELS"){
        fill("white");
        textSize(20);
        text("MONEY : $" + moneyCount, 50,50);
        text("CAPS : " + capCount, 250,50);
        text("MONKEYS : " + monkeyCount, 400,50);
      }
    
    if(gameState === "0"){
        drawSprites();
        monkeyBody.visible = true;

        textSize(70);
        fill("black");
        text("SPACE EXPEDITION", 545,250);
        textSize(20);
        text("One small step for man, a giant leap for mankind", 650,300);

        shopButton.position(windowWidth - 150,350);
        shopButton.mousePressed(function(){
            gameState = "SHOP";

        });

        levelsButton.position(windowWidth - 160,420);
        levelsButton.mousePressed(function(){
            gameState = "LEVELS";

        });

        howToPlayButton.position(windowWidth - 190,500);
        howToPlayButton.mousePressed(function(){
            gameState = "H2P?";

        });
    }else{
    hide();
    }

    if(gameState === "LEVELS"){

        if(rocket === "1"
        && shooter === "1"){
            fill("white");
            stroke("white");
            strokeWeight(5);
            for(var i = windowWidth - (windowWidth - 200); i < windowWidth/2; i = i + 20){
                line(i,windowHeight/2,i+10,windowHeight/2);
            }
        }

        if(levelCount === 5){
            fill("white");
            stroke("white");
            strokeWeight(5);
            for(var i = windowWidth/2;i < windowWidth - 200; i = i + 20){
                line(i,windowHeight/2,i+10,windowHeight/2);
            }
        }

        drawSprites();
        noStroke();

        bg1.visible = false;
        monkeyBody.visible = false;
        rocketim.visible = true;
        earth.visible = true;
        mars.visible = true;


        LV1Button.show();
        LV2Button.show();
        LV3Button.show();
        LV4Button.show();
        LV5Button.show();

        fill("white");
        textSize(40);
        text("LEVELS : will be unlocked once the required items are bought", (windowWidth/2) - 550,100);

        LV1Button.mousePressed(function(){
        if(levelCount === 1
            || levelCount === 2
            || levelCount === 3
            || levelCount === 4
            || levelCount === 5){
            gameState = "LV 1";
        }
        })
        LV2Button.mousePressed(function(){
        if(levelCount === 2
            || levelCount === 3
            || levelCount === 4
            || levelCount === 5){
            gameState = "LV 2";
        }
        })
        LV3Button.mousePressed(function(){
        if(levelCount === 3
            || levelCount === 4
            || levelCount === 5){
            gameState = "LV 3";
        }
        })
        LV4Button.mousePressed(function(){
        if(levelCount === 4
        && rocket === "1"
        && shooter === "1"){
            gameState = "LV 4";
        }
        })
        LV5Button.mousePressed(function(){
        if(levelCount === 5){
            gameState = "LV 5";
        }
        })

        backButton.show();
        backButton.mousePressed(function(){
            gameState = "0";
            backButton.hide();
            show();
        });
    }else{
        bg1.visible = true;
        earth.visible = false;
        mars.visible = false;
        rocketim.visible = false;
        LV5Button.hide();
        LV4Button.hide();
        LV3Button.hide();
        LV2Button.hide();
        LV1Button.hide();

    }

    if(gameState === "SHOP"){
        drawSprites();
        rocketShip.visible = true;
        cap1.visible = true;
        shooter1.visible = true;

        textSize(100);
        fill("white");
        text("SHOP!!",700,130)
        textSize(30);
        fill("black");
        text("$1,000", 900,250);
        text("$5,000",900,500);
        text("$10,000",630,500);

        buyButton.show();
        buyButton2.show();
        sellButton.show();

        buyButton.mousePressed(function(){
        if(moneyCount > 1000){
            rocket = "1";
            moneyCount = moneyCount - 10000;
        }
        })
        buyButton2.mousePressed(function(){
        if(moneyCount > 500){
            shooter = "1";
            moneyCount = moneyCount - 5000;
        }
        })
        sellButton.mousePressed(function(){
        if(capCount >= 1){
            moneyCount = moneyCount + 1000;
            capCount = capCount - 1;
        }
        })

        backButton.show();
        backButton.mousePressed(function(){
            gameState = "0";
            backButton.hide();
            show();
        });
    }else{
        rocketShip.visible = false;
        buyButton.hide();
        buyButton2.hide();
        sellButton.hide();
        shooter1.visible = false;
        cap1.visible = false;
    }

    if(gameState === "H2P?"){
        drawSprites();
        monkeyBody.visible = true;

        textSize(70);
        fill("black");
        text("HOW TO PLAY?",550,250);

        textSize(20);
        fill("grey");
        text("> You are the Cap Seller who wants to become an astronaut! \n" 
        + "> These pesky monkeys have stolen your caps, so you have to get them back. \n"
        + "> It just so happens that the monkeys will follow everything you do! \n" 
        + "> Use the 'up, down, left, right' arrows to move. Once you collect the hat, use \n"
        + "   'space bar' to drop the hat in the box. \n" 
        + "> Make the monkeys pick up the caps and drop them off in their respective boxes. \n"
        + "> Earn money by selling your caps in the SHOP and buy a shooter and rocket ship \n"
        + "   to advance to space! + learn space facts along the way!",495,300);

        backButton.show();
        backButton.mousePressed(function(){
            gameState = "0";
            backButton.hide();
            show();
        });
    }

    //transition : 
    
    if(gameState === "transition"){
        textSize(50);
        fill("white");
        text("WELL DONE! This level is completed!!", (windowWidth/2) - 500, windowHeight/2);
        back2Button.show();
        back2Button.mousePressed(function(){
            gameState = "LEVELS";
            back2Button.hide();
        });
    }else{
        back2Button.hide();
    }

    //LEVELS : 

    if(gameState === "LV 1"){
        textSize(20);
        text("GET ALL CAPS TO ADVANCE!",windowWidth/2, windowHeight - (windowHeight - 100));
        backButton.hide();
        bg1.visible = false;
        monkeyBody.visible = false;

        border1.visible = true;
        border2.visible = true;
        border3.visible = true;
        border4.visible = true;

        redBox.visible = true;
        blueBox.visible = true;

        capSeller.visible = true;
        blueCap1.visible = true;
        redCap1.visible = true;
        monkey1.visible = true;
        monkey2.visible = true;

        wall1.visible = true;
        wall2.visible = true;

        redCap1.collide(border1);
        redCap1.collide(border2);
        redCap1.collide(border3);
        redCap1.collide(border4);
        redCap1.collide(wall1);
        redCap1.collide(wall2);

        blueCap1.collide(border1);
        blueCap1.collide(border2);
        blueCap1.collide(border3);
        blueCap1.collide(border4);
        blueCap1.collide(wall1);
        blueCap1.collide(wall2);

        monkey1.collide(border1);
        monkey1.collide(border2);
        monkey1.collide(border3);
        monkey1.collide(border4);
        monkey1.collide(monkey2);
        monkey1.collide(capSeller);
        monkey1.collide(redBox);
        monkey1.collide(blueBox);
        monkey1.collide(wall1);
        monkey1.collide(wall2);

        monkey2.collide(border1);
        monkey2.collide(border2);
        monkey2.collide(border3);
        monkey2.collide(border4);
        monkey2.collide(monkey1);
        monkey2.collide(capSeller);
        monkey2.collide(redBox);
        monkey2.collide(blueBox);
        monkey2.collide(wall1);
        monkey2.collide(wall2);

        capSeller.collide(border1);
        capSeller.collide(border2);
        capSeller.collide(border3);
        capSeller.collide(border4);
        capSeller.collide(monkey1);
        capSeller.collide(monkey2);
        capSeller.collide(redBox);
        capSeller.collide(blueBox);
        capSeller.collide(wall1);
        capSeller.collide(wall2);

        if(capCount === 2){
            gameState = "transition";
            levelCount = 2;
        }

        if(keyDown("space")){
            if(monkey1Stat === "yes:red"){
                redCap1.velocityY = +5;
                monkey1Stat = "fall:red";
            }
            if(monkey2Stat === "yes:red"){
                redCap1.velocityY = +5;
                monkey2Stat = "fall:red";
            }
            if(monkey1Stat === "yes:blue"){
                blueCap1.velocityY = +5;
                monkey1Stat = "fall:blue";
            }
            if(monkey2Stat === "yes:blue"){
                blueCap1.velocityY = +5;
                monkey2Stat = "fall:blue";
            }
        }

        if(monkey1Stat === "fall:red"){
            if(redCap1.isTouching(redBox)){
                capCount = capCount+1;
                monkey1Stat = "no";
            }
        }
        if(monkey2Stat === "fall:red"){
            if(redCap1.isTouching(redBox)){
                capCount = capCount+1;
                monkey2Stat = "no";
            }
        }
        if(monkey1Stat === "fall:blue"){
            if(blueCap1.isTouching(blueBox)){
                capCount = capCount+1;
                monkey1Stat = "no";
            }
        }
        if(monkey2Stat === "fall:blue"){
            if(blueCap1.isTouching(blueBox)){
                capCount = capCount+1;
                monkey2Stat = "no";
            }
        }

        if(keyDown(UP_ARROW)){
            monkey1.y = monkey1.y - 5;
            monkey2.y = monkey2.y - 5;
            capSeller.y = capSeller.y - 5;
        }
        if(keyDown(DOWN_ARROW)){
            monkey1.y = monkey1.y + 5;
            monkey2.y = monkey2.y + 5;
            capSeller.y = capSeller.y + 5;
        }
        if(keyDown(LEFT_ARROW)){
            monkey1.x = monkey1.x - 5;
            monkey2.x = monkey2.x - 5;
            capSeller.x = capSeller.x - 5;

        }
        if(keyDown(RIGHT_ARROW)){
            monkey1.x = monkey1.x + 5;
            monkey2.x = monkey2.x + 5;
            capSeller.x = capSeller.x + 5;

        }

        if(monkey1.isTouching(redCap1)
        && monkey1Stat === "no"){
          monkey1Stat = "yes:red";
        }
        if(monkey2.isTouching(redCap1)
        && monkey2Stat === "no"){
          monkey2Stat = "yes:red";
        }
        if(monkey1.isTouching(blueCap1)
        && monkey1Stat === "no"){
          monkey1Stat = "yes:blue";
        }
        if(monkey2.isTouching(blueCap1)
        && monkey2Stat === "no"){
          monkey2Stat = "yes:blue";
        }

        if(monkey1Stat === "yes:red"){
            redCap1.x = monkey1.x;
            redCap1.y = monkey1.y - 40;
        }
        if(monkey1Stat === "yes:blue"){
            blueCap1.x = monkey1.x;
            blueCap1.y = monkey1.y - 40;
        }
        if(monkey2Stat === "yes:red"){
            redCap1.x = monkey2.x;
            redCap1.y = monkey2.y - 40;
        }
        if(monkey2Stat === "yes:blue"){
            blueCap1.x = monkey2.x;
            blueCap1.y = monkey2.y - 40;
        }



        drawSprites();
       
    }else{
        border1.visible = false;
        border2.visible = false;
        border3.visible = false;
        border4.visible = false;

        redBox.visible = false;
        blueBox.visible = false;

        capSeller.visible = false;
        blueCap1.visible = false;
        redCap1.visible = false;
        monkey1.visible = false;
        monkey2.visible = false;

        wall1.visible = false;
        wall2.visible = false;
    } 

    
}

async function hide(){
    shopButton.hide();
    levelsButton.hide();
    howToPlayButton.hide();
}
  
async function show(){
    shopButton.show();
    levelsButton.show();
    howToPlayButton.show();
}
   