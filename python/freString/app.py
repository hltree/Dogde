import collections
import matplotlib.pyplot as plot
import glob
import sys

args = sys.argv
data = ''
target = []

for i, v in enumerate(args):
    if i == 1:
        if v == 'file':
            type = 'file'
        elif v == 'dir':
            type = 'dir'
    elif i > 1:
        if type == 'file':
            target.append(v)
        elif type == 'dir':
            target.append(glob.glob(v))


for v in target:
    if type == 'file':
        with open(v) as d:
            data += d.read()
    elif type == 'dir':
        for t in v:
            with open(t) as d:
                data += d.read()

count = collections.Counter(data.split())
r = count.most_common()
res = ''

for v in r:
    res += str(v) + '\n'

f = open('./result.txt','w')
f.write(res)
f.close()


# グラフ化してみる
x = []
y = []
for v in r:
    x.append(v[0])
for v in r:
    y.append(v[1])

plot.figure(figsize=(15,8))
plot.rcParams["font.size"] = 10
plot.xticks(rotation=90)
plot.bar(x, y)
plot.xlim(-1,40)
plot.savefig('./figure.png')