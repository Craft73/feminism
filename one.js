

let data=[[277,20,396,334,0,129,1027],
        [364,125,1167,7697,7,115,9360],
        [608,107,740,21810,372,598,23637]];

let types=["象形","指事","会意","形声","转注","假借"];
let typesE=[
    'Illustration of a shape',
    'pointing at things',
    'assembled meanings',
    "shape and sound",
    "comment by turning",
    'Phonographs'
]

let instruction=[
    "pictograms of optically perceivable or imaginable things",
    "ideograms of simple relationships, often derived from a pictogram",
    "combination of two pictograms",
    "combination of signific and phonetic part  is a combination of pictogram and a character of which the sound is used",
    "the characters have been conciously designed in a very similar way, but with one part mirrored horizontally.",
    " loan-characters borrowed for a word pronounced similarly but with a different meaning"

]
console.log(data);

function setup(){
    var can2 = createCanvas(windowWidth, windowHeight);
    can2.parent("chart2");

    
    
    
}

function draw(){
    var width0=width-20;

    for(i=0;i<6;i++){
        let elt=createElement("h1",types[i]).size(width0/6,100);
        elt.position(width0/6*i,height+100);
        elt.style('textAlign',"CENTER");
        elt.style('color',"white");
        let elt2=createElement("h2",typesE[i]).size(width0/6,100);
        elt2.position(width0/6*i,height+140);
        elt2.style('textAlign',"CENTER");
        elt2.style('color',"white");
        let elt3=createSpan(instruction[i]).size(width0/6-20,100);
        elt3.position(width0/6*i+10,height+260);
        elt3.style('textAlign',"CENTER");
        elt3.style('color',"white");
        
    }
    let elt4= createElement("h3","If divide all 9353 characters to the six part:").size(width,100)
    elt4.position(0,height*1.45);

    background(color("#333"));
    let c=[color(121,125,98),color(155,155,122),color(230,209,156),color(243,193,98),color(141,156,165),color(116,129,144)]
    noLoop();
    var x=[];
    
    var w=[];
    w[0]=width0*map(data[0][6],1207,24235,0.6,1);
    w[1]=width0*map(data[1][6],1207,24235,0.6,1);
    w[2]=width0;
    var x0=[(width0-w[0])/2,(width0-w[1])/2,0];
    console.log(w)
    for(i=0;i<6;i++){
        x[i]=[];
        // rect(width0/6*i,0,width0/6,height*0.6);
        x[i][3]=width0/6;
        x0[3]=width0/6*(i+1);
        for (j=0;j<3;j++){
            
            x[i][j]=data[j][i]/data[j][6]*w[j]; 
            x0[j]=x0[j]+x[i][j];

        }
        // noFill();
        // stroke(20);
        fill(c[i]);
        noStroke();
        beginShape();
        curveVertex(x0[3],0);
        curveVertex(x0[3],0);
        curveVertex(x0[3],height*.6);
        curveVertex(x0[3],height*.6);
        curveVertex(x0[3],height*.6);
        curveVertex(x0[0],height*.7);
        curveVertex(x0[1],height*.8);
        curveVertex(x0[2],height*.9);
        curveVertex(x0[2],height);
        curveVertex(x0[2],height);
        curveVertex(x0[2]-x[i][2],height);
        curveVertex(x0[2]-x[i][2],height);
        curveVertex(x0[2]-x[i][2],height*.9);
        curveVertex(x0[1]-x[i][1],height*.8);
        curveVertex(x0[0]-x[i][0],height*.7);
        curveVertex(x0[3]-x[i][3],height*.6);
        curveVertex(x0[3]-x[i][3],height*.6);
        curveVertex(x0[3]-x[i][3],height*.6);
        curveVertex(x0[3]-x[i][3],0);
        curveVertex(x0[3]-x[i][3],0);
        endShape();

        
        
        for(j=0;j<3;j++){
            fill(255);
            noStroke();
            textAlign(CENTER);
            textSize(10);
            if(x[i][j]>150){
                text((data[j][i]+' characters'),(2*x0[j]-x[i][j])/2,height*(0.7+j*0.1)-5);
            }else
            text(data[j][i],(2*x0[j]-x[i][j])/2,height*(0.7+j*0.1)-5);
            // console.log(data[i][j])
            stroke(255);
            strokeWeight(1);
            if(j==1){
                strokeWeight(3);
            }
            line(x0[j]-x[i][j]+2,height*(0.7+j*0.1),x0[j]-1,height*(0.7+j*0.1))
            // console.log(x0[j]-x[i][j],x[i][j])
        }
        // console.log(x0[3],500,x[0]+x0[0],650,x[1]+x0[1],800,x[2]+x0[2],950)
    }
    
    stroke(255);
    strokeWeight(2);
    line(width0/2-50,height/2+10,width0/2,height/2+30);
    line(width0/2,height/2+30,width0/2+50,height/2+10);
    line(width0/2-50,height/2+30,width0/2,height/2+50);
    line(width0/2,height/2+50,width0/2+50,height/2+30);


    noStroke();
    // textAlign(LEFT);
    text("About 1200 B.C.",x0[1]+60,height*0.7-5);
    text("1226 Characters in total",x0[1]+60,height*0.7+12);
    text("A.D.121",x0[1]+70,height*0.8-5);
    text("1226 Characters in total",x0[1]+70,height*0.8+12);
    text("About A.D.1150",x0[1]+30,height*0.9-5);
    text("124235 Characters in total",x0[1]+30,height*0.9+12);

    

}