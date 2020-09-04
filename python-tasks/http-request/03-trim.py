def Trim(text, r):
    if r >= len(text):
        return text
    return text[:r] + "."*(3)

print(Trim("ini adalah tulisan yang sangat panjang",8))
print(Trim("ini adala",8))