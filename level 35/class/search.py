def search(text, word):
    if word in text:
        print('Word Found')
    else:
        print('Word Not Found')


text = 'This is awesome'
word = 'awesome'

search(text, word)