//Naming variables
var diwaliDiya, diwaliAnimation;
var soundFire;

function preload()
{
    //Loading animation
    diwaliAnimation = loadAnimation("Diwali0.png", "Diwali1.png", "Diwali2.png", "Diwali3.png", "Diwali4.png", "Diwali5.png");
    
    //Loading sound
    soundFire = loadSound("y2mate.com - FIREWORKS GREEN SCREEN AND SOUND EFFECTS.mp3");
}


function setup()
{
    createCanvas(540, 520);

     //Looping the sound
     soundFire.loop();

    //Creating sprite for diwali diya
    diwaliDiya = createSprite(250, 250);
    diwaliDiya.addAnimation("firing", diwaliAnimation);
    diwaliDiya.scale = 0.7;
}


function draw()
{
    background("purple");
  
    drawSprites();

    //Adding text for hD
    stroke("black");
    textSize(25);
    fill("white");
    text("HAPPY DIWALI!!", 160, 490);

    //Adding text for AM
    stroke("black");
    textSize(15);
    fill("turquoise");
    text("BY-ABHINAV MISHRA", 250, 510);

}