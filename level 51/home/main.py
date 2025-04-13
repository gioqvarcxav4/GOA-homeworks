#N1
import math

def find_next_square(sq):
    if math.isqrt(sq) ** 2 == sq:
        return (math.isqrt(sq) + 1)**2
    else:
        return -1

#N2
def row_sum_odd_numbers(n):
    return n ** 3

#N3
def nb_year(p0, percent, aug, p):
    years = 0
    while p0 < p:
        p0 = int(p0 + p0 * (percent / 100) + aug)
        years += 1
    return years

