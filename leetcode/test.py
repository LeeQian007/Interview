# count = {3: times}
count = {}

# get() --> (the key, the default value)
count[3] = 1 + count.get(3,0)
print(count)