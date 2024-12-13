# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/64_-_Dividing_by_Eleven/Solution



Modern Puzzles by Henry Ernest Dudeney: $64$
Dividing by Eleven
If the $9$ digits are written at haphazard in any order,
for example $4 \ 1 \ 2 \ 5 \ 3 \ 9 \ 7 \ 6 \ 8$, what are the chances that the number that happens to be produced will be divisible by $11$ without remainder?
The number I have written at random is not, I see, so divisible, but if I had happened to make the $1$ and the $8$ change places it would be.


Solution
$115$ to $11$ against a haphazard arrangement being divisible by $11$.


Proof
Let $\sqbrk {abcdefghi}$ be a haphazard arrangement of the $9$ digits.
We set:

$m = a + c + e + g + i$
$n = b + d + f + h$
From Divisibility by 11, $\sqbrk {abcdefghi}$ is divisible by $11$ if and only if:

$m - n = 11k$
for some integer $k$.
We have:














\(\ds \)

\(\)







\(\ds 25\)




















\(\ds \)

\(=\)







\(\ds \paren {5 + 6 + 7 + 8 + 9} - \paren {1 + 2 + 3 + 4}\)




















\(\ds \)

\(\ge\)







\(\ds m - n\)




















\(\ds \)

\(\ge\)







\(\ds \paren {1 + 2 + 3 + 4 + 5} - \paren {6 + 7 + 8 + 9}\)




















\(\ds \)

\(=\)







\(\ds -15\)









Moreover, since $m + n = 45$ is odd, so is $m - n = \paren {m + n} - 2n$.
Hence we can only have $m - n = \pm 11$, which give the following cases when solved:

Case $1$: $m = 28, n = 17$
Case $2$: $m = 17, n = 28$

For Case $1$, the following $9$ quadruples of distinct digits give $n = 17$:

$1, 2, 5, 9$
$1, 2, 6, 8$
$1, 3, 4, 9$
$1, 3, 5, 8$
$1, 3, 6, 7$
$1, 4, 5, 7$
$2, 3, 4, 8$
$2, 3, 5, 7$
$2, 4, 5, 6$
For Case $2$, the following $2$ quintuples of distinct digits give $m = 17$:

$1, 2, 3, 4, 7$
$1, 2, 3, 5, 6$
Hence there are exactly:

$\paren {9 + 2} \times 4! \times 5! = 31680$
numbers, out of $9! = 362880$ possibilities that our number is divisible by $11$.
This gives a probability of:

$\dfrac {31680} {362880} = \dfrac {11} {126}$
which is exactly $115$ to $11$.
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $64$. -- Dividing by Eleven
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: Digital Puzzles: $115$. Dividing by Eleven




