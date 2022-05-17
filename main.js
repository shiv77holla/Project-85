canvas=document.getElementById("myCanvas")
ctx= canvas.getContext("2d")
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_width=100
greencar_height=200
car_x=10
car_y=320

function add() {
background_imgTag= new Image();
background_imgTag.onload= load_bg;
background_imgTag.src= background_image;
	
car_imgTag= new Image()
car_imgTag.onload= load_car;
car_imgTag.src= greencar_image;
}

function load_bg() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width , canvas.height)
}

function load_car() {
	ctx.drawImage(car_imgTag, car_x, car_y, greencar_width, greencar_height)
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
if(car_y>=0){
car_y= car_y-10
load_bg();
load_car();}
}

function down()
{
	if(car_y<=500){
		car_y= car_y+10
		load_bg();
		load_car();}
}

function left()
{
	if(car_x>=0){
		car_x= car_x-10
			load_bg();
		load_car();
		}
}

function right()
{
	if(car_x<=700){
        car_x= car_x+10
        load_bg();
        load_car();
        }
}
