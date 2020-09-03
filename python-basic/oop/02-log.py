import os.path
import datetime

save_path = 'C:/Users/AppandSec/Documents/Bootcamp-UT/python-basic/oop/'
save = os.path.join(save_path, 'app.log')
# f = open(save, "w")

class Log:
    @staticmethod
    def write(text, level):
        inp = "[{}] {}: {}".format(datetime.datetime.now(), level, text + "\n")
        with open(save, "a") as myFile:
            myFile.write(inp)
            myFile.close()
        # # print(inp)
        # f.write(inp)

log = Log()
log.write("Hey You", "LOVE")