temperatures = [72, 68, 75, 70, 78, 74, 71]

highest_temperature = max(temperatures)
lowest_temperature = min(temperatures)
average_temperature = sum(temperatures) / len(temperatures)

above_70 = [temp for temp in temperatures if temp > 70]

print(highest_temperature)
print(lowest_temperature)
print(average_temperature)
print(above_70)
