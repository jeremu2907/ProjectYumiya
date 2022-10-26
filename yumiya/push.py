import os
import sys

os.system("git add .")
try:
    os.system("git commit -m '" + sys.argv[1] + "'")
except:
    print("No argument, using standard commit message")
    os.system("git commit -m 'Commit new changes'")
finally:
    os.system("git push")