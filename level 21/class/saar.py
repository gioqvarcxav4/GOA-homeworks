# 1. გამოიტანს 4-ს, რადგან ოთხი ელემენტიდან ამოვიებთ 1-ს და დაგვრჩება 3 ელემენტი, როდესაც სამ ელემენტს მივუმატებთ 6-ის რაოდენობას სიაშია(1), მივიღებთ 4-ს
# 2. კოდი გამოიტანს 4-ს რადგან 5 ელემენტს დავამატებთ 2-ს, შემდეგ გამოვაკლებთ 1-ს და დავუმატებთ ისევ 2-ს (0 და 1), ხოლო ინდექსით მესამე იქნება 4

queue = ['John', 'Amy', 'Bob', 'Adam']
new_member = input('Enter the name of a new member: ')
queue.append(new_member)
print(queue)