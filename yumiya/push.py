import os
import sys

os.system("git add .")
if len(sys.argv) > 1:
    s = ""
    for i in range(1,len(sys.argv)):
        s += sys.argv[i] + ' '
    print(s)
    os.system('git commit -m "' + s + '"')
else:
    print('No argument, using standard commit message')
    os.system('git commit -m "Commit new changes"')

os.system("git push") 