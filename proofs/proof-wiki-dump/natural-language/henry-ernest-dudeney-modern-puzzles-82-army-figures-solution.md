# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/82_-_Army_Figures/Solution



Modern Puzzles by Henry Ernest Dudeney: $82$
Army Figures
A certain division in an army was composed of a little over twenty thousand men, made up of five brigades.
It was know that one third of the first brigade,
two-sevenths of the second brigade,
seven-twelfths of the third,
nine-thirteenths of the fourth,
and fifteen-twenty-seconds of the fifth brigades happened in every case to be the same number of men.
Can you discover how many men there were in every brigade?


Solution
The $5$ brigades contained respectively $5670$, $6615$, $3240$, $2730$ and $2772$ men.


Proof
Let $a$, $b$, $c$, $d$ and $e$ be the number of men in each of the first, second, third, fourth and fifth brigades respectively.
We are given that:

$\dfrac a 3 = \dfrac {2 b} 7 = \dfrac {7 c} {12} = \dfrac {9 d} {13} = \dfrac {15 e} {22}$
Our first task is to place all these over a common denominator.
To do this we calculate:

$\lcm \set {3, 7, 12, 13, 22} = 3 \times 7 \times 4 \times 13 \times 11 = 12012$
which gives us:

$\dfrac {4004 a} {12012} = \dfrac {3432 b} {12012} = \dfrac {7007 c} {12012} = \dfrac {8316 d} {12012} = \dfrac {8190 e} {12012}$
That is:

$(1) \quad 4004 a = 3432 b = 7007 c = 8316 d = 8190 e$
Now we calculate:














\(\ds \)

\(\)







\(\ds \lcm \set {4004, 3432, 7007, 8316, 8190}\)




















\(\ds \)

\(=\)







\(\ds \lcm \set {2^2 \times 7 \times 11 \times 13, 2^3 \times 3 \times 11 \times 13, 7^2 \times 11 \times 13, 2^2 \times 3^3 \times 7 \times 11, 2 \times 3^2 \times 5 \times 7 \times 13}\)




















\(\ds \)

\(=\)







\(\ds 2^3 \times 3^3 \times 5 \times 7^2 \times 11 \times 13\)




















\(\ds \)

\(=\)







\(\ds 7 \, 567 \, 560\)









Dividing by each number in turn, we have:














\(\ds \dfrac {7 \, 567 \, 560} {4004}\)

\(=\)







\(\ds 1890\)




















\(\ds \dfrac {7 \, 567 \, 560} {3432}\)

\(=\)







\(\ds 2205\)




















\(\ds \dfrac {7 \, 567 \, 560} {7007}\)

\(=\)







\(\ds 1080\)




















\(\ds \dfrac {7 \, 567 \, 560} {8316}\)

\(=\)







\(\ds 910\)




















\(\ds \dfrac {7 \, 567 \, 560} {8190}\)

\(=\)







\(\ds 924\)









That is:














\(\ds 7 \, 567 \, 560\)

\(=\)







\(\ds 1890 \times 4004\)




















\(\ds \)

\(=\)







\(\ds 2205 \times 3432\)




















\(\ds \)

\(=\)







\(\ds 1080 \times 7007\)




















\(\ds \)

\(=\)







\(\ds 910 \times 8316\)




















\(\ds \)

\(=\)







\(\ds 924 \times 8190\)









Thus we have found a set of numbers which fulfil the conditions for $(1)$:

$\set {1890, 2205, 1080, 910, 924}$
and hence so does:

$\set {1890 k, 2205 k, 1080 k, 910 k, 924 k}$
for $k \in \Z_{\ge 1}$.

We have:

$1890 + 2205 + 1080 + 910 + 924 = 7009$
Setting $k = 3$ we get:

$5670 + 6615 + 3240 + 2730 + 2772 = 21027$
which fulfils the condition:

A certain division in an army was composed of a little over twenty thousand men ...
Hence we can state:














\(\ds a\)

\(=\)







\(\ds 5670\)




















\(\ds b\)

\(=\)







\(\ds 6615\)




















\(\ds c\)

\(=\)







\(\ds 3240\)




















\(\ds d\)

\(=\)







\(\ds 2730\)




















\(\ds e\)

\(=\)







\(\ds 2772\)









$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $82$. -- Army Figures
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $165$. Army Figures




