var video;
var slider;
let panImage;
// let monitorBG;
let moonTexture;

let xOff = 0;
let yOff = 1;
let zOff = 2;

let locX;
let locY;
let angle;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  glContext = canvas.GL;
  canvas.id("p5canvas");
  canvas.parent("panDiv")

  // background(220);

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.id("p5video");
  video.hide();

  // slider = createSlider(10, 180, 120);
  // slider.id("blur-sldier");
  // slider.position(10, 10);

  //   var seriously = new Seriously();

  //   //投射视频位置
  //   var src = seriously.source("#p5video");
  //   var target = seriously.target("#p5canvas");

  //   //投射fliter
  //   var panorama = seriously.effect("panorama");
  //   panorama.fov = "#blur-sldier";
  //   panorama.source = src;
  //   target.source = panorama;

  //   seriously.go();

  panImage = loadImage("images/pan.png");
  // monitorBG = loadImage("images/monitorBG.png");
  moonTexture = loadImage("images/moon_texture.jpg");

  cursor(CROSS);
}

function draw() {
  // background(255, 0, 0);
  background(215, 220, 225);
  // glContext.clear(glContext.DEPTH_BUFFER_BIT);

  locX = mouseX - width / 2;
  locY = mouseY - height / 2;
  angle = Math.atan2(locY, locX);

  //中心物品
  push();
  translate(0, 0, 300);
  scale(0.9);
  coordinate();
  pop();

  //pan
  push();
  translate(0,0,0);
  rotateZ(angle);
  noStroke();
  let panR = 1000;
  image(panImage, -panR/2, -panR/2, panR, panR);
  rotateX(PI);
  pop();

  //background
  // push();
  // noStroke();
  // image(monitorBG, -windowWidth/2, -windowHeight/2, windowWidth, windowHeight);
  // pop();

  //cursor
  push();
  noStroke();
  translate(locX, locY);
  rotateX(millis() / 5000);
  rotateY(millis() / 3500);
  rotateZ(millis() / 4000);
  texture(moonTexture);
  sphere(48);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function coordinate() {
  //坐标
  let corHeight = 350;

  push();
  stroke(180, 195, 200);
  line(0, 0, 0, -corHeight);
  stroke(180, 195, 200);
  line(0, 0, corHeight, 0);
  pop();

  push();
  noStroke();
  fill(180, 195, 200);
  translate(0, -corHeight+12);
  rotateZ(PI);
  cone(10, 25);
  pop();

  push();
  noStroke();
  fill(180, 195, 200);
  translate(corHeight-12, 0);
  rotateZ(-PI / 2);
  cone(10, 25);
  pop();

  //中心球
  push();
  // rotateX(angle);
  // rotateY(angle);
  rotateZ(angle);

  rotateX(-PI / 2);
  rotateY(PI / 4);
  noStroke();
  texture(video);
  ellipsoid(200, 10, 200);
  pop();

  //绿球
  push();
  // drawingContext.setLineDash([0, 15]);
  stroke(180, 195, 200);
  strokeWeight(0.5);
  noFill();
  // translate(noise(xOff) * 100, noise(yOff) * height * 0.01, -noise(zOff) * 600);
  rotateY(millis() / 9000);
  rotateZ(angle);
  sphere(275);
  pop();
}

//---------------------------------------------------------------------------------------------------
//new canvas #1
let cursorImage;
let followImage;
let highlight1;
let highlight2;
let highlight3;
let highlight4;

var s1 = function(sketch) {
  sketch.setup = function() {
    let canvas1 = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
    sketch.background(255,255,255,0);
    // canvas1.position(0,0);
    canvas1.parent("mouseDiv");
    sketch.cursorImage = sketch.loadImage("images/cursor.png");
    sketch.followImage = sketch.loadImage("images/follow.png");
    sketch.highlight1 = sketch.loadImage("images/Monitor_2-1.png");
    sketch.highlight2 = sketch.loadImage("images/Monitor_2-2.png");
    sketch.highlight3 = sketch.loadImage("images/Monitor_2-3.png");
    sketch.highlight4 = sketch.loadImage("images/Monitor_2-4.png");
    sketch.noCursor();
    // sketch.cursor(CROSS);

    sketch.x = 100,
    sketch.y = 100,
    sketch.angle1 = 0.0,
    sketch.segLength = 210;
  }

  sketch.draw = function() {
    sketch.clear();

    //card page
    if(sketch.mouseX >= sketch.windowWidth*0.05078125 && sketch.mouseX <= sketch.windowWidth*0.20703125
      && sketch.mouseY >= sketch.windowHeight*0.08333333 && sketch.mouseY <= sketch.windowHeight*0.430555556){
        sketch.image(sketch.highlight1, 0, 0, sketch.windowWidth, sketch.windowHeight);
        sketch.image(sketch.highlight2, 0, 0, sketch.windowWidth, sketch.windowHeight);
        sketch.image(sketch.highlight3, 0, 0, sketch.windowWidth, sketch.windowHeight);
        sketch.image(sketch.highlight4, 0, 0, sketch.windowWidth, sketch.windowHeight);
    } else if(sketch.mouseX >= sketch.windowWidth*0.05078125 && sketch.mouseX <= sketch.windowWidth*0.28515625
      && sketch.mouseY >= sketch.windowHeight*0.569444444 && sketch.mouseY <= sketch.windowHeight*0.91666667){
        sketch.image(sketch.highlight1, 0, 0, sketch.windowWidth, sketch.windowHeight);
        sketch.image(sketch.highlight2, 0, 0, sketch.windowWidth, sketch.windowHeight);
        sketch.image(sketch.highlight3, 0, 0, sketch.windowWidth, sketch.windowHeight);
        sketch.image(sketch.highlight4, 0, 0, sketch.windowWidth, sketch.windowHeight);
    } else if(sketch.mouseX >= sketch.windowWidth*0.71484375 && sketch.mouseX <= sketch.windowWidth*0.94921875
      && sketch.mouseY >= sketch.windowHeight*0.08333333 && sketch.mouseY <= sketch.windowHeight*0.430555556){
        sketch.image(sketch.highlight1, 0, 0, sketch.windowWidth, sketch.windowHeight);
        sketch.image(sketch.highlight2, 0, 0, sketch.windowWidth, sketch.windowHeight);
        sketch.image(sketch.highlight3, 0, 0, sketch.windowWidth, sketch.windowHeight);
        sketch.image(sketch.highlight4, 0, 0, sketch.windowWidth, sketch.windowHeight);
    } else if(sketch.mouseX >= sketch.windowWidth*0.79296875 && sketch.mouseX <= sketch.windowWidth*0.94921875
      && sketch.mouseY >= sketch.windowHeight*0.569444444 && sketch.mouseY <= sketch.windowHeight*0.91666667){
        sketch.image(sketch.highlight1, 0, 0, sketch.windowWidth, sketch.windowHeight);
        sketch.image(sketch.highlight2, 0, 0, sketch.windowWidth, sketch.windowHeight);
        sketch.image(sketch.highlight3, 0, 0, sketch.windowWidth, sketch.windowHeight);
        sketch.image(sketch.highlight4, 0, 0, sketch.windowWidth, sketch.windowHeight);
    } else {
        sketch.image(sketch.highlight1, 0, 0, sketch.windowWidth, sketch.windowHeight);
        sketch.image(sketch.highlight2, 0, 0, sketch.windowWidth, sketch.windowHeight);
        sketch.image(sketch.highlight3, 0, 0, sketch.windowWidth, sketch.windowHeight);
        sketch.image(sketch.highlight4, 0, 0, sketch.windowWidth, sketch.windowHeight);
    }


    sketch.push();
    sketch.stroke(180, 195, 200);
    sketch.strokeWeight(3);
    sketch.drawingContext.setLineDash([0, 12]);
    sketch.line(sketch.windowWidth/2, sketch.windowHeight/2, sketch.mouseX, sketch.mouseY);
    sketch.pop();

    sketch.noStroke();
    sketch.fill(255);
    // sketch.drawingContext.filter = 'blur(75px)';

    sketch.image(sketch.cursorImage, sketch.mouseX-48, sketch.mouseY-48, 96, 96);

    //drag
    sketch.dx = sketch.mouseX - sketch.x;
    sketch.dy = sketch.mouseY - sketch.y;
    sketch.angle1 = sketch.atan2(sketch.dy, sketch.dx);
    sketch.x = sketch.mouseX - sketch.cos(sketch.angle1) * sketch.segLength;
    sketch.y = sketch.mouseY - sketch.sin(sketch.angle1) * sketch.segLength;

    sketch.push();
    sketch.stroke(180, 195, 200);
    sketch.strokeWeight(3);
    sketch.drawingContext.setLineDash([0, 12]);

    sketch.translate(sketch.x, sketch.y);
    sketch.rotate(sketch.angle1);
    sketch.line(0, 0, sketch.segLength, 0);
    sketch.pop();

    sketch.image(sketch.followImage, sketch.x-24, sketch.y-24, 48, 48);
  }

  sketch.windowResized = function() {
    sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
  }
};

new p5(s1);
