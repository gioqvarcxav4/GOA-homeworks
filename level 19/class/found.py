list = [1, 2, 3, 4, 5, 6, 7]
num = int(input('Enter a number: '))
for num in list:
    if num in list:
        print('Number found')
    else:
        print("couldn't find number!")
    