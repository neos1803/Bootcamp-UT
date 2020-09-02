from collections import Counter
import string

def joinList():
    first = ['Behind', 'every', 'great', 'man']
    second = ['is', 'a', 'woman']
    third = ['rolling', 'her', 'eyes']
    print(*((first + second) + third))

def createDict():
    menus = ["chicken strip", "beef burger", "steakhouse", "mushroom swiss", "whopper"]
    price = [15,10,12,20,30]
    d = dict(zip(menus, price))
    n = { key: value for key, value in sorted(d.items(), key=lambda item: item[1]) }
    print(n)

def charOccurence(s):
    c = Counter(s)
    n = { k: v for k,v in c.items() }
    print(n)

def bubble_sort(l):
    step = 0
    for _ in range(len(l)):
        isDone = False
        j = 0
        while j < len(l)-1:
            if (l[j] > l[j + 1]) :
                l[j], l[j+1] = l[j + 1], l[j]
                isDone = True
                step = step + 1
                print("Step", step , ":", l)
            j = j + 1
        if isDone == False:
            break

def charReplace(s):
    # l = list(s)
    # for i in range(len(l) - 3):
    #     l[i] = "*"
    l = [ "*" for i in range (len(list(s)) - 3)] + [ s[i] for i in range (len(s)-3, len(s)) ]
    print("".join(l))

def missingLetter(args):
    # letters = string.ascii_lowercase
    letters = string.ascii_lowercase if args[0] >= "a" else string.ascii_uppercase
    for l in letters[letters.index(args[0]):]:
        if l not in args:
            return l

def sortOddOnly(args):
    n = sorted([i for i in args if i % 2 != 0])
    counter = 0
    for i in range(len(args)):
        if args[i] % 2 != 0:
            args[i] = n[counter]
            counter += 1
    print(args)

# Nomor 1
joinList()
# Nomor 2
createDict()
# Nomor 3
charOccurence("Mammals")
# Nomor 4
bubble_sort([12,3,5,4,8,9])
# Nomor 5
charReplace("23dn3ir30fd2eddd")
# Nomor 6
print(missingLetter(["c","d","e","g","h"]))
# Nomor 7 Dummy
# sortEvenOnly([9,4,2,4,1,5,3,0])
# Nomor 7
sortOddOnly([9,4,2,4,1,5,3,0])