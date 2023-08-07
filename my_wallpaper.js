//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
//

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

    // //Grid settings
  // pWallpaper.grid_settings.cell_width  = 200;
  // pWallpaper.grid_settings.cell_height = 170;
  // pWallpaper.grid_settings.row_offset  = 100;
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}
// main fur colour (31,22,43)
let CatColR = 31
let CatColG = 22
let CatColB = 43
// main eye colour
let EyeYelR = 255
let EyeYelG = 182
let EyeYelB = 25
// secound colour (80,47,94)(245,171,222)
let SecColR = 80
let SecColG = 47
let SecColB = 94
//nose
let NosColR = 97
let NosColG = 12
let NosColB = 49
// head location
let x = 100
let y = 120
//eye direction (22)
let eyeR = x+22
let eyeL = x-22
//ear height (110)(100)
let earY = y-110;
let earMid = 100

let eyesmile = false
let lazyeye = false



function wallpaper_background() {
  background(215,166,245); 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  noStroke()


  //let BowRan = random(1);
//bow 
let BowRan = random(1);
//let BowRan = 1

if (BowRan > 0.5)
  {fill(16, 2, 171)
}else{
  fill (171, 2, 2)
  }
ellipse(x-15,y+38,30,25)
ellipse(x+15,y+38,30,25)
ellipse(x-5,y+49,10)
ellipse(x+5,y+49,10)
ellipse(x,y+40,23)

fill(EyeYelR, EyeYelG, EyeYelB)
ellipse(x,y+46,10)

fill(CatColR,CatColG,CatColB)
rect(x-2,y+47,4,1)
ellipse(x-2,y+47,3)
ellipse(x+2,y+47,3)


//ears
fill (CatColR,CatColG,CatColB)
triangle(x+2,y-30,x+35,earY,x+49,y-8)
triangle(x-2,y-30,x-35,earY,x-49,y-8)

fill(SecColR,SecColG,SecColB)
ellipse(x-31,y-30,20,earMid)
ellipse(x+31,y-30,20,earMid)

//head
fill (CatColR,CatColG,CatColB)
ellipse(x,y, 100,80)

//ear thing
ellipse(x-21,y-30,15,50)
ellipse(x+21,y-30,15,50)

let randVar = random(1);
//let randVar = 0.4;

if(randVar > 0.5){
  fill(161, 208, 255)

}else{
//yellow eyes
fill (EyeYelR, EyeYelG, EyeYelB)
}

if(randVar > 0.7){
  fill(235, 129, 208)
}

if(randVar > 0.9){
  fill(132, 217, 142)
}

ellipse(x-25,y-5,30,30)
ellipse(x+25,y-5,30,30)
ellipse(x-25,y-1,34,21)
ellipse(x+25,y-1,34,21)


//eye black
fill(0)
ellipse(eyeR,y-8,10,15)
ellipse(eyeL,y-8,10,15)

//secound eye colour
if(SecColR == 245){
  fill(31,22,43)
}
else{
  fill(SecColR,SecColG,SecColB)
}
ellipse(eyeL, y-5,8,8)
ellipse(eyeR,y-5,8,8)

//eyeshine
fill(255)
ellipse(eyeL,y-11,3,3)
ellipse(eyeR,y-11,3,3)

//mouth
fill(0)
ellipse(x+5,y+14,10,10)
ellipse(x-5,y+14,10,10)
ellipse(x,y+15,13,12)

fill(64, 7, 32)
ellipse(x,y+19,9,4)
fill(255)
ellipse(x-5,y+16,2,4)
ellipse(x+5,y+16,2,4)

fill(CatColR,CatColG,CatColB)
ellipse(x+7,y+12,12,10)
ellipse(x-7,y+12,12,10)
//nose
fill(NosColR,NosColG,NosColB)
ellipse(x,y+10,10,5)


if (eyesmile == true)
{fill(CatColR,CatColG,CatColB)
  ellipse(x-25,y+9,35,20)
  ellipse(x+25,y+9,35,20)}

if (lazyeye == true)
{fill(CatColR,CatColG,CatColB)
  rect(x-45,y-20,40,15)
  rect(x+5,y-20,40,15)}





}
