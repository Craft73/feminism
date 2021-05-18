var lines
var words
var xinternal=12;
var yinternal=15;

function preload(){
    lines=loadStrings("data/char1.txt")
}

function setup(){
    let elt = document.getElementById('chart1');
    var myCanvas=createCanvas(windowWidth,windowHeight);
    myCanvas.parent(elt);
    myCanvas.position(0,0);
    myCanvas.id("xx");
    background(51,51,51);
    // text(lines,100,100);
    // words=split(lines," ");
    console.log(lines.length);
    var j=0;
    for(var i=0; i<lines.length;i++){
        words=split(lines[i],"");
  
        var x=i%(floor(width/xinternal))*xinternal+xinternal;
        var y =floor(i/floor(width/xinternal))*yinternal+yinternal;

                fill(255);
                textSize(9);
                text(words[0],x,y);
    }
    fill(20,20,20,180);
    // rectMode(CENTER);
    noStroke();
    rect(0,0,windowWidth,windowHeight);
    fill(255);
    textAlign(CENTER);
    textFont('Source Han Serif',144);
    text("9353 汉字",windowWidth/2,windowHeight/2-50);
    textSize(72);
    text("9353 characters",windowWidth/2,windowHeight/2+50);
    textSize(16);
    text("According to Shuowen Jiezi, one of the oldest and the most important character dictionaries in ancient China",windowWidth/2,windowHeight/2+125);
}