#If - else operations
a = 65
b = 567
if b > a:
  print("b is greater than a")

a = 56
b = 56
if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")

a = 156
b = 67
if b > a:
  print("b is greater than a")
else:
  print("b is not greater than a")

#while loops

num = 4
while num < 10:
  print(num)
  if num == 5:
    break
  num += 1

i = 0
while i < 6:
  i += 1
  if i == 3:
    continue
  print(i)

i  = 1
while i < 6:
  print(i)
  i += 1
else:
  print('i is no longer less than 6')

#for loops

fruit = "banana"
for a in fruit:
  print(a)

fruits = ["apple", "peach", "mango"]
for x in fruits:
  print(x)
  if x == "peach":
    break
  
for x in range(6):
  print(x)

#functions

def function():
  print("Hello Zugdido")

function()

def func(x, y):
  print(x + ' ' + y)

func("Giorgi", "Qvartskhava")

def chemi_func(x, y, z):
  print(x + ' ' + y + ' ' + z)

chemi_func('Hello', 'from', 'Giorgi')

#lists
list = ["milk", "cola", "xulis mjave"]
list.remove("xulis mjave")
print(list)

fruits = ['banana', 'cherry', 'mango', 'watermelon', 'dragonfruit']
new_fruits = []

for x in fruits:
  if 'a' in x:
    new_fruits.append(x)
print(new_fruits)

#mesame magalitis dawera mezareba :))))))))).. rac iyo davwere