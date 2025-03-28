#N1
def solution(text, ending):
    if text.endswith(ending):
        return True
    else:
        return False

#N2
def basic_op(operator, value1, value2):
    if operator == '+':
        return value1 + value2
    if operator == '-':
        return value1 - value2
    if operator == '*':
        return value1 * value2
    if operator == '/':
        return value1 / value2
    
#N3
def century(year):
    return (year + 99) // 100
