//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}
// main fur colour
let CatColR = 31
let CatColG = 22
let CatColB = 43
// main eye colour
let EyeYelR = 255
let EyeYelG = 182
let EyeYelB = 25
// secound colour
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
function wallpaper_background() {
  background(215,166,245); 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  noStroke()
fill (CatColR,CatColG,CatColB)
//ears
triangle(x+2,y-30,x+35,y-105,x+49,y-8)
triangle(x-2,y-30,x-35,y-105,x-49,y-8)

fill(SecColR,SecColG,SecColB)
ellipse(x-31,y-30,20,100)
ellipse(x+31,y-30,20,100)

//head
fill (CatColR,CatColG,CatColB)
ellipse(x,y, 100,80)

//ear thing
ellipse(x-21,y-30,15,50)
ellipse(x+21,y-30,15,50)


//yellow eyes
fill (EyeYelR, EyeYelG, EyeYelB)
ellipse(x-25,y-5,30,30)
ellipse(x+25,y-5,30,30)
ellipse(x-25,y-1,34,21)
ellipse(x+25,y-1,34,21)

//eye black
fill(0)
ellipse(x+22,y-8,10,15)
ellipse(x-22,y-8,10,15)

//secound eye colour
fill(SecColR,SecColG,SecColB)
ellipse(x-22, y-5,8,8)
ellipse(x+22,y-5,8,8)

//eyeshine
fill(255)
ellipse(x-22,y-11,3,3)
ellipse(x+22,y-11,3,3)

fill(0)
ellipse(x+5,y+14,10,10)
ellipse(x-5,y+14,10,10)
ellipse(x,y+15,13,12)
fill(CatColR,CatColG,CatColB)
ellipse(x+7,y+12,10,10)
ellipse(x-7,y+12,10,10)
//nose
fill(NosColR,NosColG,NosColB)
ellipse(x,y+10,10,5)




}


