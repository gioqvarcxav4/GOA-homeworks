import turtle

def draw_rectangle(t, width, height, color):
    t.fillcolor(color)
    t.begin_fill()
    for _ in range(2):
        t.forward(width)
        t.left(90)
        t.forward(height)
        t.left(90)
    t.end_fill()

def draw_castle():
    t = turtle.Turtle()
    screen = turtle.Screen()
    screen.bgcolor("skyblue")
    
    t.speed(5)
    
    # Set up initial position
    t.penup()
    t.goto(-150, -100)
    t.pendown()

    # Left tower
    draw_rectangle(t, 50, 150, "gray")
    
    # Move to the central part
    t.penup()
    t.goto(-100, 50)
    t.pendown()
    
    # Central gate wall
    draw_rectangle(t, 200, 100, "gray")
    
    # Right tower
    t.penup()
    t.goto(100, -100)
    t.pendown()
    draw_rectangle(t, 50, 150, "gray")
    
    # Draw the gate
    t.penup()
    t.goto(-50, -100)
    t.pendown()
    draw_rectangle(t, 100, 70, "brown")
    
    # Draw battlements on towers
    def draw_battlement(x, y):
        t.penup()
        t.goto(x, y)
        t.pendown()
        for _ in range(3):
            draw_rectangle(t, 20, 20, "gray")
            t.penup()
            t.forward(30)
            t.pendown()

    # Left tower battlements
    draw_battlement(-150, 50)
    
    # Right tower battlements
    draw_battlement(100, 50)
    
    # Central wall battlements
    draw_battlement(-50, 150)
    
    # Finish
    t.hideturtle()
    turtle.done()

# Call the function to draw the castle
draw_castle()
