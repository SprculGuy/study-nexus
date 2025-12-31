#include<stdio.h>
#include<stdlib.h>
#include<graphics.h>
					// before using this .h file, set up this...

int main()
{
	int gd=0, gm;				gd=0 - means autodetection or selection of best possible gd
	initgraph(&gd, &gm, "");	graphics_driver, graphics_mode, "graphics_driver_file-path"		|"" - default working path
		//initgeaph switch text mode"box(character) type" console to graphics mode"pixel(dots) type" console...
	
	int x=100,y=80,r=20;
	setcolour(0);				//Black	 (0-15)
	circle(x,y,r);
	getch();
											 _
	int x1=0,y1=0,x2=200,y2=200;	
	setcolour(15);				//White	
	rectangle(x1,y1,x2,y2);
	getch();

	int x1=200,y1=400,x2=700,y2=500;
	setcolour(14);				//Yellow
	line(x1,y1,x2,y2);
	getch();

	int x=800,y=600,starting=0,ending=360,xr=700,yr=500;
	setcolour(1);				//Blue	
	ellipse(x,y,starting,ending,xr,yr);
	getch();

	closegraph();
	return 0;
}

