from turtle import *

speed(100)
width(5)

penup()
goto(-300, 0)
pendown()

forward(600)
right(180)
forward(500)
right(90)
forward(250)
right(180)
forward(250)
right(90)
forward(100)
right(90)
forward(250)
penup()
goto(300, 0)
pendown()
forward(250)
penup()
goto(200, 0)
pendown()
forward(250)
right(180)
forward(100)
right(90)
forward(400)
penup()
goto(-67, 0)
pendown()
color("red")
begin_fill()
right(90)
forward(60)
right(90)
forward(100)
right(90)
forward(60)
end_fill()
penup()
goto(-200, 0)
pendown()
color("black")
left(90)
forward(300)
#finished door and the middle part now moving on to the windows
penup()
goto(-150, 125)
pendown()
color("blue")
begin_fill()
forward(30)
right(90)
forward(30)
right(90)
forward(30)
right(90)
forward(30)
end_fill()

penup()
goto(-80, 125)
pendown()
begin_fill()
right(90)
forward(30)
right(90)
forward(30)
right(90)
forward(30)
right(90)
forward(30)
end_fill()
penup()
goto(-10, 125)
pendown()
begin_fill()
right(90)
forward(30)
right(90)
forward(30)
right(90)
forward(30)
right(90)
forward(30)
end_fill()
penup()
goto(60, 125)
pendown()
begin_fill()
right(90)
forward(30)
right(90)
forward(30)
right(90)
forward(30)
right(90)
forward(30)
end_fill()
penup()
goto(130, 125)
pendown()
begin_fill()
right(90)
forward(30)
right(90)
forward(30)
right(90)
forward(30)
right(90)
forward(30)
end_fill()
#finished middle windows now starting the zigzag thingy
penup()
goto(-310, 210)
pendown()
color("grey")
begin_fill()
right(90)
forward(120)
left(90)
forward(40)
left(90)
forward(24)
left(90)
forward(10)
right(90)
forward(24)
right(90)
forward(10)
left(90)
forward(24)
left(90)
forward(10)
right(90)
forward(24)
right(90)
forward(10)
left(90)
forward(24)
left(90)
forward(40)
end_fill()
#starting mini rooves
penup()
goto(-298, 250)
pendown()
color("red")
begin_fill()
left(155)
forward(100)
right(125)
forward(100)
right(120)
forward(92)
end_fill()
penup()
goto(-310, 250)
pendown()
color("grey")
right(180)
forward(24)
#starting the secong zig zag thing
penup()
goto(310, 210)
pendown()
begin_fill()
left(180)
forward(120)
right(90)
forward(40)
right(90)
forward(24)
right(90)
forward(10)
left(90)
forward(24)
left(90)
forward(10)
right(90)
forward(24)
right(90)
forward(10)
left(90)
forward(24)
left(90)
forward(10)
right(90)
forward(24)
right(90)
forward(40)
end_fill()
#starting second roof
penup()
goto(298, 250)
pendown()
color("red")
begin_fill()
right(155)
forward(100)
left(125)
forward(100)
left(120)
forward(92)
end_fill()
penup()
goto(310, 250)
pendown()
color("grey")
left(180)
forward(24)









































exitonclick()