#!/bin/python3

import math
import os
import random
import re
import sys


#
# Complete the 'findSubstring' function below.
#
# The function is expected to return a STRING.
# The function accepts following parameters:
#  1. STRING s
#  2. INTEGER k
#
s = 'nmadipdakdnmasfipa'


def findSubstring(s, k):

    a = s.split()
    b = ['a', 'e', 'i', 'o', 'u']
    c = ''
    for i in a:
        if i in b:
            c = c+i
            print([i])
            continue
        else:
            c = c+i
    print(c)


findSubstring(s, 6)
