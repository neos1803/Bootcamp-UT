def leapYear(e):
    if type(e) != int:
        return "Error input type"
    if e < 0:
        return "Year must start from 0"
    if e % 4 == 0:
        return True
    else:
        return False