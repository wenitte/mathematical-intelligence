# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/38_-_The_Picnic/Solution/Proof_1

Puzzles and Curious Problems by Henry Ernest Dudeney: $38$
The Picnic
Four married couples had a picnic together, and their refreshments included $32$ bottles of lemonade.
Mary only disposed of one bottle,
Anne had two,
Jane swallowed the contents of three,
and Elizabeth emptied four bottles.
The husbands were more thirsty,
except John MacGregor, who drank the same quantity as his better half.
Lloyd Jones drank twice as much as his wife,
William Smith three times as much as his wife,
and Patrick Dolan four times as much as his wife demanded.
The puzzle is to find the surnames of the ladies.
Which man was married to which woman?


Solution
Mary is the wife of William Smith
Anne is the wife of Patrick Dolan
Jane is the wife of John MacGregor
Elizabeth is the wife of Lloyd Jones.


Proof
Let us set up the following system of linear simultaneous equations in matrix form:

$\begin {pmatrix}
1 &  1 &  1 &  1 \\
1 &  2 &  3 &  4 \\

\end {pmatrix} \begin {pmatrix} a \\ b \\ c \\ d \end {pmatrix} = \begin {pmatrix} 10 \\ 22 \end {pmatrix}$
where:

$\set {a, b, c, d} = \set {1, 2, 3, 4}$
Conversion to echelon form proceeds as follows:














\(\ds \)

\(\)







\(\ds \paren {\begin {array} {cccc{{|}}c}
1 &  1 &  1 &  1 &  10 \\
1 &  2 &  3 &  4 &  22 \\ \end {array} }\)





















\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccc{{|}}c}
1 &  1 &  1 &  1 &  10 \\
0 &  1 &  2 &  3 &  12 \\ \end {array} }\)






$r_2 \to r_2 - r_1$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccc{{|}}c}
1 &  0 & -1 & -2 &  -2 \\
0 &  1 &  2 &  3 &  12 \\ \end {array} }\)






$r_1 \to r_1 - r_2$



The first of these can be rewritten in the form:

$a = c + 2 d - 2$
from which it is immediate that $a$ and $c$ are of the same parity.
Hence $b$ and $d$ are also of the same parity as each other.
This reduces the possible permutations of $\tuple {a, b, c, d}$ that need to be investigated.
Let $a = 1$, and so $c = 3$:
Then:














\(\ds c + 2 d - 2\)

\(=\)







\(\ds 5\)





when $d = 2$














\(\ds c + 2 d - 2\)

\(=\)







\(\ds 9\)





when $d = 4$



So $a \ne 1$.

Let $a = 2$, and so $c = 4$:
Then:














\(\ds c + 2 d - 2\)

\(=\)







\(\ds 4\)





when $d = 1$














\(\ds c + 2 d - 2\)

\(=\)







\(\ds 8\)





when $d = 3$



So $a \ne 2$.

Let $a = 3$, and so $c = 1$:
Then:














\(\ds c + 2 d - 2\)

\(=\)







\(\ds 3\)





when $d = 2$














\(\ds c + 2 d - 2\)

\(=\)







\(\ds 7\)





when $d = 4$



So $a = 3$, $c = 1$, $d = 2$ is a possible solution, giving $b = 4$.
We check whether $a + 2 b + 3 c + 4 d = 22$, and find:

$a + 2 b + 3 c + 4 d = 3 + 2 \times 4 + 3 \times 1 + 4 \times 2 = 22$
showing that this is indeed a valid solution.

Let $a = 4$, and so $c = 2$:
Then:














\(\ds c + 2 d - 2\)

\(=\)







\(\ds 2\)





when $d = 1$














\(\ds c + 2 d - 2\)

\(=\)







\(\ds 4\)





when $d = 3$



So $a = 4$, $c = 2$, $d = 3$ is a possible solution, giving $b = 1$.
We check whether $a + 2 b + 3 c + 4 d = 22$, but find:

$a + 2 b + 3 c + 4 d = 4 + 2 \times 1 + 3 \times 2 + 4 \times 3 = 24$
showing that this is not a valid solution after all.

So we have eliminated all possible solutions except:

$\tuple {a, b, c, d} = \tuple {3, 4, 1, 2}$

So:

Jane drank the same quantity as her husband John MacGregor, that is, $3$ bottles
Lloyd Jones drank twice as much as the $4$ bottles drunk by his wife Elizabeth
William Smith drank three times as much as his wife Mary, who drank just $1$ bottle
Patrick Dolan drank four times as much as his wife Anne's $2$ bottles.
$\blacksquare$





