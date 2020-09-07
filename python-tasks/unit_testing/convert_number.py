istilah = {
    0: "nol",
    1: "satu",
    2: "dua",
    3: "tiga",
    4: "empat",
    5: "liam",
    6: "enam",
    7: "tujuh",
    8: "delapan",
    9: "sembilan",
    100: "seratus",
    10: "sepuluh",
    11: "sebelas"
}

def converter(e):
    if type(e) != int:
        return "Input must be int"
    if e < 0:
        return "Input can't be negative"
    if 0 <= e <= 9:
        return istilah[e]
    if e == 10:
        return "sepuluh"
    if e == 11:
        return "sebelas"
    if e == 100:
        return "seratus"
    if 12 <= e <= 19:
        _, remainder = divmod(e, 10)
        return "{} belas".format(istilah[remainder])
    if 20 <= e <= 99:
        val, remainder = divmod(e, 10)
        return "{} puluh {}".format(istilah[val], istilah[remainder])
    if 101 <= e <= 199:
        val, remainder = divmod(e, 100)
        if 1 <= remainder <= 19:
            return "{} {}".format(istilah[val * 100], istilah[remainder])
        else:
            x, y = divmod(remainder, 10)
            if y == 0:
                return "{} {} puluh".format(istilah[val * 100], istilah[x])
            return "{} {} puluh {}".format(istilah[val * 100], istilah[x], istilah[y])
    if 200 <= e <= 999:
        val, remainder = divmod(e, 100)
        if remainder == 0:
            return "{} ratus".format(istilah[val])
        if 1 <= remainder <= 19:
            return "{} ratus {}".format(istilah[val], istilah[remainder])
        else:
            x, y = divmod(remainder, 10)
            if y == 0:
                return "{} ratus {} puluh".format(istilah[val], istilah[x])
            return "{} ratus {} puluh {}".format(istilah[val], istilah[x], istilah[y])