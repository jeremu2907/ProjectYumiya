import os
import sys

os.system("git add .")
try:
    s = "'"
    for i in sys.argv:
        s += i + ' '
    s = "'"
    os.system("git commit -m '" + s + "'")
except:
    print("No argument, using standard commit message")
    os.system("git commit -m 'Commit new changes'")
finally:
    os.system("git push")

