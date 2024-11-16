age = int(input('Enter your age: '))

if age <= 13:
    print('Minor')
elif 13 <= age <= 19:
    print('Teen')
elif age >= 20:
    print('Adult')