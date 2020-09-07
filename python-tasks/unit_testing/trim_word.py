def Trim(text, r):
    if type(text) != str:
        return "Input text must be string"
    if type(r) != int:
        return "Range must be integer"
    if r >= len(text):
        return text
    return text[:r] + "."*(3)