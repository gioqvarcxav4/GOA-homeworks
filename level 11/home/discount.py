price = int(input('Enter price: '))

if price > 50:
    print(price -price * 0.1)
elif 50 >= price >= 20:
    print(price - price * 0.05)
elif price < 20:
    print('No discount!')