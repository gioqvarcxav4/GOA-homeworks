#N1
def make_negative( number ):
    if number > 0:
        return -number
    else:
        return number
    
#N2
def say_hello(name):
    return "Hello, " + name

#N3
def switch_it_up(number):
    if number == 0:
        return 'Zero'
    elif number == 1:
        return "One"
    elif number == 2:
        return "Two"
    elif number == 3:
        return "Three"
    elif number == 4:
        return 'Four'
    elif number == 5:
        return "Five"
    elif number == 6:
        return "Six"
    elif number == 7:
        return "Seven"
    elif number == 8:
        return "Eight"
    elif number == 9:
        return "Nine"
    
#N4
def between(a,b):
    arr = []
    for i in range(a, b + 1):
        arr.append(i)
    return arr