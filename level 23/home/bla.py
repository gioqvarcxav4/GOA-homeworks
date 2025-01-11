def introduce_person(name, surname, age, country, city, hobby):
    print(f"My name is {name} {surname}, I am {age} years old, from {city}, {country}. My favorite hobby is {hobby}.")

def simple_calculator(num1, num2, operation):
    if operation == "addition":
        print(num1 + num2)
    elif operation == "subtraction":
        print(num1 - num2)
    elif operation == "multiplication":
        print(num1 * num2)
    elif operation == "division":
        if num2 == 0:
            print("Error: Division by zero")
        else:
            print(num1 / num2)

introduce_person('Giorgi', 'Qvartskhava', '15', 'Georgia', 'Zugdidi', 'Listening to music')
simple_calculator(12, 18, 'addition')
simple_calculator(11, 11, 'multiplications')
simple_calculator(50, 40, 'subtraction')
simple_calculator(10, 10, 'division')
simple_calculator(12, 0, 'division')