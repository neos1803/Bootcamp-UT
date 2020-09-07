def filmRating(e):
    if type(e) != int:
        return "Input must be int"
    if e <= 0:
        return "Age can't be zero and below"
    if 1 <= e <= 8:
        return "SEMUA USIA"
    if 9 <= e <= 12:
        return "BIMBINGAN ORANG TUA"
    if 13 <= e <= 20:
        return "REMAJA"
    if e >= 21:
        return "DEWASA" 