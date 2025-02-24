#N1
def bool_to_word(boolean):
    if boolean == True:
        return "Yes"
    else:
        return "No"
    
#N2
def grow(arr):
    final = 1
    for num in arr:
        final *= num
    return final
    pass