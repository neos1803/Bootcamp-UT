numbers = [1,2,3,4,5,6,6,8,8,6,9]
grades = [87.5, 88.5, 60.5, 90.5, 88.5]

def modes(e):
    return max(set(e), key=e.count)

if __name__ == "__main__":
    print(modes(numbers))
    print(modes(grades))