# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/66_-_Another_37_Division/Solution



Modern Puzzles by Henry Ernest Dudeney: $66$
Another $37$ Division
If the $9$ digits are written at haphazard in any order, for example $412539768$,
what are the chances that the number that happens to be produced will be divisible by $37$ without remainder?


Solution
The chances are $1$ in $40$ that the number will be divisible by $37$.


Proof
Suppose $n = \sqbrk {abcdefghi}$ is a haphazard arrangement of the $9$ digits divisible by $37$.
Since the sum of digits of $n$ is $45$, which is divisible by $9$:

$9 \divides n$ by Divisibility by $9$.
By Divisibility by $37$:

$37 \divides n \iff 37 \divides \paren {\sqbrk {abc} + \sqbrk {def} + \sqbrk {ghi} }$
Thus $\sqbrk {abc} + \sqbrk {def} + \sqbrk {ghi}$ would be divisible by $9$ and $37$, and hence divisible by their product, $333$.
Note that:














\(\ds \)

\(\)







\(\ds 774\)




















\(\ds \)

\(=\)







\(\ds 147 + 258 + 369\)




















\(\ds \)

\(\le\)







\(\ds \sqbrk {abc} + \sqbrk {def} + \sqbrk {ghi}\)




















\(\ds \)

\(\le\)







\(\ds 963 + 852 + 741\)




















\(\ds \)

\(=\)







\(\ds 2556\)









Thus $\sqbrk {abc} + \sqbrk {def} + \sqbrk {ghi}$ is one of:

$999, 1332, 1665, 1998, 2331$

In any case of $\sqbrk {abc} + \sqbrk {def} + \sqbrk {ghi} = \sqbrk {wxyz}$, we have:














\(\ds c + f + i\)

\(=\)







\(\ds 10 c_1 + z\)





where $c_1$ is the carry from the units














\(\ds b + e + h\)

\(=\)







\(\ds 10 c_2 + y - c_1\)





where $c_1$ is the carry from the tens














\(\ds a + d + g\)

\(=\)







\(\ds 10 w + x - c_2\)














\(\ds \leadsto \ \ \)





\(\ds 45\)

\(=\)







\(\ds 9 \paren {c_1 + c_2} + 10 w + x + y + z\)





after adding up all the equations above



For each of the cases above, we determine the possible values of $c_1, c_2$ and find the sets of digits $\set {a, d, g}, \set {b, e, h}, \set {c, f, i}$ that satisfies the relations above.
Also the sum of any three distinct digits cannot exceed $7 + 8 + 9 = 24$ or be less than $1 + 2 + 3 = 6$.


Case $1$: $999$
In this case, we have:

$45 = 9 \paren {c_1 + c_2} + 0 + 9 + 9 + 9$
which leads to:

$c_1 + c_2 = 2$.
Neither $c_1$ nor $c_2$ could be equal to $2$ since the sum of three distinct digits cannot reach $27$.
Hence:

$c_1 = c_2 = 1$
$a + d + g = 8$
$b + e + h = 18$
$c + f + i = 19$

For $\set {a, d, g} = \set {1, 2, 5}$, the possibilities for $\set {b, e, h}$ are:

$\set {3, 6, 9}$
$\set {3, 7, 8}$
$\set {4, 6, 8}$
For $\set {a, d, g} = \set {1, 3, 4}$, the possibilities for $\set {b, e, h}$ are:

$\set {2, 7, 9}$
$\set {5, 6, 7}$
so there are $5$ total possibilities.
$\Box$

Case $2$: $1332$
In this case, we have:

$45 = 9 \paren {c_1 + c_2} + 10 + 3 + 3 + 2$
which leads to:

$c_1 + c_2 = 3$.
Neither $c_1$ nor $c_2$ could be equal to $3$ since the sum of three distinct digits cannot exceed $30$.
Hence:

$\set {c_1, c_2} = \set {1, 2}$
so either:

$a + d + g = 12$
$b + e + h = 22$
$c + f + i = 11$
or:

$a + d + g = 22$
$b + e + h = 11$
$c + f + i = 12$
the difference between these two cases is simply an exchange of place values, so we only need to consider the second case.

For $\set {a, d, g} = \set {5, 8, 9}$, the possibilities for $\set {b, e, h}$ are:

$\set {1, 3, 7}$
$\set {1, 4, 6}$
$\set {2, 3, 6}$
For $\set {a, d, g} = \set {6, 7, 9}$, the possibilities for $\set {b, e, h}$ are:

$\set {1, 2, 8}$
$\set {2, 4, 5}$
so there are $5 \times 2 = 10$ total possibilities.
$\Box$

Case $3$: $1665$
In this case, we have:

$45 = 9 \paren {c_1 + c_2} + 10 + 6 + 6 + 5$
which leads to:

$c_1 + c_2 = 2$.
Since $5$ and $25$ cannot be a sum of distinct digits, we must have $c_1 = 1$.
Thus $c_2 = 1$ as well.
Hence:

$a + d + g = b + e + h = c + f + i = 15$
The possible sets of three distinct digits that sums to $15$ are:

$\set {1, 5, 9}$
$\set {1, 6, 8}$
$\set {2, 4, 9}$
$\set {2, 5, 8}$
$\set {2, 6, 7}$
$\set {3, 4, 8}$
$\set {3, 5, 7}$
$\set {4, 5, 6}$
There is only two groups of digits that satisfies $a + d + g = b + e + h = c + f + i = 15$:

$\set {\set {a, d, g}, \set {b, e, h}, \set {c, f, i} } = \set {\set {1, 5, 9}, \set {2, 6, 7}, \set {3, 4, 8} }$
$\set {\set {a, d, g}, \set {b, e, h}, \set {c, f, i} } = \set {\set {1, 6, 8}, \set {2, 4, 9}, \set {3, 5, 7} }$
The three sets of digits can freely swap between themselves.
So there are $2 \times 3! = 12$ total possibilities.
$\Box$

Case $4$: $1998$
In this case, we have:

$45 = 9 \paren {c_1 + c_2} + 10 + 9 + 9 + 8$
which leads to:

$c_1 + c_2 = 1$.
Hence:

$\set {c_1, c_2} = \set {0, 1}$
so either:

$a + d + g = 18$
$b + e + h = 8$
$c + f + i = 19$
or:

$a + d + g = 8$
$b + e + h = 19$
$c + f + i = 18$
By our analysis in Case $1$, there are $5 \times 2 = 10$ total possibilities.
$\Box$

Case $5$: $2331$
In this case, we have:

$45 = 9 \paren {c_1 + c_2} + 20 + 3 + 3 + 1$
which leads to:

$c_1 + c_2 = 2$.
Neither $c_1$ nor $c_2$ could be equal to $0$ since the sum of three distinct digits cannot be less than $4$.
Hence:

$c_1 = c_2 = 1$
$a + d + g = 11$
$b + e + h = 12$
$c + f + i = 22$
By our analysis in Case $1$, there are $5$ total possibilities.
$\Box$

We see that in all the above cases, there are $42$ total possibilities.
All the digits within those sets can be freely exchanged.
Therefore the number of possibities of $n$ is:

$42 \times 3! \times 3! \times 3! = 9072$
And thus the probability that a haphazard arrangement of the $9$ digits would be divisible by $37$ is:

$\dfrac {9072} {9!} = \dfrac 1 {40}$
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $66$. -- Another $37$ Division
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: Digital Puzzles: $117$. Another $37$ Division




