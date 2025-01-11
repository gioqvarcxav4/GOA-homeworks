print("Think of a number between 1 and 100, and I will try to guess it.")

attempts = 3

for attempt in range(attempts):
    guess = 50

    print("My guess is:", guess)

    feedback = input("Your response (high, low, correct): ").lower()

    if feedback == "correct":
        print("I guessed your number correctly! Well done!")
        break
    elif feedback == "high":
        print("Too high!")
    elif feedback == "low":
        print("Too low!")
    else:
        print("Invalid input, please enter 'high', 'low', or 'correct'.")

    if attempt == attempts - 1:
        print("Unfortunately, I couldn't guess your number.")
