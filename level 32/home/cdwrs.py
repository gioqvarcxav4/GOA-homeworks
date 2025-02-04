#N1
def between(a,b):
    result = []
    for i in range(a, b + 1):
        result.append(i)
    return result
    pass

#N2
def solution(string):
    return string[:: -1]
    pass

#N3
def boolean_to_string(b):
    return str(b)

#N4
def create_array(n):
    res = []
    i = 1
    while i <= n:
        res.append(i) 
        i += 1  
    return res
    