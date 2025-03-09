#N1
def set_alarm(employed, vacation):
    if employed == True and vacation == False:
        return True
    else:
        return False
    
#N2
def update_light(current):
    if current == "green":
        return "yellow"
    if current == "yellow":
        return "red"
    if current == "red":
        return "green"
    
#N3
def whatday(num):
    if num == 1:
        return "Sunday"
    if num == 2:
        return "Monday"
    if num == 3:
        return "Tuesday"
    if num == 4:
        return "Wednesday"
    if num == 5:
        return 'Thursday'
    if num == 6:
        return "Friday"
    if num == 7:
        return "Saturday"
    else:
        return "Wrong, please enter a number between 1 and 7"