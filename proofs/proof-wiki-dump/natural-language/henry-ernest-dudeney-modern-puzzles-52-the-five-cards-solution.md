# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/52_-_The_Five_Cards/Solution



Modern Puzzles by Henry Ernest Dudeney: $52$
The Five Cards
I have $5$ cards bearing the figures $1$, $3$, $5$, $7$ and $9$.
How can I arrange them in a row so that the number formed by the $1$st pair multipied by the number formed with the last pair,
with the central number subtracted,
will produce a number composed of repetitions of one figure?


Solution
$\boxed 3 \boxed 9 \ \boxed 1 \ \boxed 5 \boxed 7$
or:

$\boxed 5 \boxed 7 \ \boxed 1 \ \boxed 3 \boxed 9$


Proof
Let $d_1$ and $d_2$ be the two $2$-f numbers at either end.
Let $s$ be the single-digit subtrahend.
Let $n$ be the repdigit that results from $d_1 \times d_2 - s$.

Suppose $n$ is odd.
Then $n + s = d_1 \times d_2$ is even.
But because $d_1$ and $d_2$ are both odd, this is impossible.
So $n$ is even.

Notice that:

$15 \times 37 \le d_1 d_2 \le 93 \times 75$
that is:

$555 \le d_1 d_2 \le 6975$
Hence we must have that $n$ is one of:

$666, 888, 2222, 4444, 6666$
This leaves a small enough domain to perform an exhaustive search.

We factorize all $30$ possibilities of $n + s$, and filter the results using these criteria:

$(1)$ Those with a prime factor greater than $100$ cannot be expressed as $d_1 \times d_2$.
$(2)$ Any semiprime must be removed if their prime factorization involves even digits.
$(3)$ Numbers divisible by $89$ should also be removed as no multiple of $89$ is expressible as $d_1$ or $d_2$.
We have:














\(\ds 667\)

\(=\)







\(\ds 23 \times 29\)





fails $(2)$














\(\ds 669\)

\(=\)







\(\ds 3 \times 223\)





fails $(1)$














\(\ds 671\)

\(=\)







\(\ds 11 \times 61\)





fails $(2)$














\(\ds 669\)

\(\text {is}\)







\(\ds \text {prime}\)





fails $(1)$














\(\ds 675\)

\(=\)







\(\ds 3^3 \times 5^2\)




















\(\ds 889\)

\(=\)







\(\ds 7 \times 127\)





fails $(1)$














\(\ds 891\)

\(=\)







\(\ds 3^4 \times 11\)




















\(\ds 893\)

\(=\)







\(\ds 19 \times 47\)





fails $(2)$














\(\ds 895\)

\(=\)







\(\ds 5 \times 179\)





fails $(1)$














\(\ds 897\)

\(=\)







\(\ds 3 \times 13 \times 23\)




















\(\ds 2223\)

\(=\)







\(\ds 3^2 \times 13 \times 19\)




















\(\ds 2225\)

\(=\)







\(\ds 5^2 \times 89\)





fails $(3)$














\(\ds 2227\)

\(=\)







\(\ds 17 \times 131\)





fails $(1)$














\(\ds 2229\)

\(=\)







\(\ds 3 \times 743\)





fails $(1)$














\(\ds 2231\)

\(=\)







\(\ds 23 \times 97\)





fails $(2)$














\(\ds 4445\)

\(=\)







\(\ds 5 \times 7 \times 127\)





fails $(1)$














\(\ds 4447\)

\(\text {is}\)







\(\ds \text {prime}\)





fails $(1)$














\(\ds 4449\)

\(=\)







\(\ds 3 \times 1483\)





fails $(1)$














\(\ds 4451\)

\(\text {is}\)







\(\ds \text {prime}\)





fails $(1)$














\(\ds 4453\)

\(=\)







\(\ds 61 \times 73\)





fails $(2)$














\(\ds 6667\)

\(=\)







\(\ds 59 \times 113\)





fails $(1)$














\(\ds 6669\)

\(=\)







\(\ds 3^3 \times 13 \times 19\)




















\(\ds 6671\)

\(=\)







\(\ds 7 \times 953\)





fails $(1)$














\(\ds 6673\)

\(\text {is}\)







\(\ds \text {prime}\)





fails $(1)$














\(\ds 6675\)

\(=\)







\(\ds 3 \times 5^2 \times 89\)





fails $(3)$




This leaves:

$675, 891, 897, 2223, 6669$

For $675$, it is divisible by $25$.
Since there is only one $5$ available, only one of $d_1, d_2$ can be divisible by $5$, and thus $25$.
The only multiple of $25$ not involving even digits, $75$, would result in:

$675 = 75 \times 9$
so $675$ has no such expression.

For $891$, it is divisible by $11$.
All $2$-digit multiples of $11$ have repeated digits.
Therefore $891$ has no such expression.

For $897$, both $23$ and $23 \times 3 = 69$ have even digits.
Therefore $897$ has no such expression.

For $2223$, since:

$13 \times 19 > 3^2 \times 19 > 3^2 \times 13 > 100$
we are forced to use:

$\set {d_1, d_2} = \set {3 \times 13, 3 \times 19} = \set {39, 57}$
from which we derive our solutions:

$\boxed 3 \boxed 9 \ \boxed 1 \ \boxed 5 \boxed 7$
or:

$\boxed 5 \boxed 7 \ \boxed 1 \ \boxed 3 \boxed 9$

For $6669$, $13$ and $19$ cannot be multiplied together as their product is larger than $100$.
By Pigeonhole Principle, one of $13$ or $19$ must receive at least $3^2$ during multiplication.
But as shown before:

$3^2 \times 19 > 3^2 \times 13 > 100$
so this is not possible.
Therefore $6667$ has no such expression.

We have exhausted all possibilities, so there are no more solutions.
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $52$. -- The Five Cards
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $103$. The Five Cards




