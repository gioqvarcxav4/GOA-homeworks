#N1
name = input('Enter your name: ')
age = input('Enter you age: ')
greet = 'Hello {}, you are {} years old.'.format(name, age)
print(greet)

#N2
list = ['Python', 'is', 'fun']
print(' '.join(list))

#N3
synt = input('Write a sentence and watch as we split it up: ')
print(synt.split())

#N4
text = input('Write a sentence: ')
word = input('Wrtie the word you want to replace: ')
sub_word = input('Write the word you want to replace it with: ')
print(text.replace(word, sub_word))

#N5
mixd = input('Write anything in mixed-case: ')
print(mixd.lower())

#N6
text_pers = input("Write anything, we'll make it bigger: ")
print(text_pers.upper())