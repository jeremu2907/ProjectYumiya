import os
import sys

os.system("git add .")
try:
    s = ""
    for i in len(sys.argv + 1):
        s += sys.argv[i] + ' '
    print(s)
    os.system('git commit -m "' + s + '"')
except:
    print('No argument, using standard commit message')
    os.system('git commit -m "Commit new changes"')
finally:
    os.system("git push") 