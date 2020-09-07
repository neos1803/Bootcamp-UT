numbers = [1,2,3,4,"False",6,6,8,8,6,9]
grades = [87.5, 88.5, 60.5, 90.5, 88.5]

def modes(data):
    # if any(type(d) == str for d in data):
    #     return "Input must be list of integer"
    if len(data) <= 0:
        return "List can't be empty"
    if type(data) != list:
        return "Input must be a list"
    return max(set(data), key=data.count)

# print(modes([1,2,3,4,5,"Hey",6,8,8,6,9]))