# 

Source: https://proofwiki.org/wiki/Floor_of_m%2Bn-1_over_n



Theorem
Let $m, n \in \Z$ such that $n > 0$.
Then:

$\floor {\dfrac {m + n - 1} n} = \ceiling {\dfrac m n}$
The identity does not necessarily apply for $n < 0$.


Example
Let $n \in \Z$.
Then:

$\floor {\dfrac {n + 2 - \floor {n / 25} } 3} = \floor {\dfrac {8 n + 24} {25} }$


Proof
First let $n > 0$ as stated.
Suppose $n \divides m$. 
Then $m = k n$ for some $k \in \Z$.
It follows that:

$\floor {\dfrac {m + n - 1} n} = \floor {k + 1 - \dfrac 1 n} = k$
and:

$\ceiling {\dfrac m n} = k$

Now suppose $n \nmid m$.
Since $n > 0$, we have $m = k n + r$ for some $k \in\Z$ and $r \in \N$, $0 < r < n$.
Therefore:

$\floor {\dfrac {m + n - 1} n} = \floor {k + 1 + \dfrac {r - 1} n} = k + 1$
and:

$\ceiling {\dfrac m n} = k + 1$
$\Box$

Setting $m = 1, n = -2$ we have:














\(\ds \floor {\dfrac {m + n - 1} n}\)

\(=\)







\(\ds \floor {\dfrac {1 + \paren {-2} - 1} {\paren {-2} } }\)




















\(\ds \)

\(=\)







\(\ds \ceiling 1\)




















\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \)

\(\ne\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds \ceiling {\dfrac 1 {\paren {-2} } }\)




















\(\ds \)

\(=\)







\(\ds \ceiling {\dfrac m n}\)









Thus, as stated, it is confirmed that the identity does not hold for $n < 0$.
It is noted that when $n = 0$ the expressions on either side are not defined.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $48 \ \text{(a)}$




