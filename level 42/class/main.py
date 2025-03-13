#N1
def replace_exclamation(st):
    res = ""
    for i in st:
        if i in "aeiouAEIOU":
            res += "!"
        else:
            res += i
    return res

#N2
def count_positives_sum_negatives(arr):
    if not arr: return []
    pos = 0
    neg = 0
    for i in arr:
        if i > 0:
            pos += 1
        if i < 0:
            neg += i
    return [pos, neg]