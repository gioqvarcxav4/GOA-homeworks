grade = int(input("Enter your grade (1-100): "))

if 90 <= grade <= 100:
    print("Your grade is A")
elif 80 <= grade < 90:
    print("Your grade is B")
elif 70 <= grade < 80:
    print("Your grade is C")
else:
    print("Your grade is D")
