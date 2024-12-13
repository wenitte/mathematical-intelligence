# 

Source: https://proofwiki.org/wiki/Numbers_in_Row_of_Pascal%27s_Triangle_all_Odd_iff_Row_number_2%5En_-_1

Theorem
Let $n \in \Z_{\ge 0}$ be a positive integer.
Then the non-zero elements of the $n$th row of Pascal's triangle are all odd if and only if:

$n = 2^m - 1$
for some $m \in \Z_{\ge 0}$.


$\begin{array}{r|rrrrrrrrrr}
n & \binom n 0 & \binom n 1 & \binom n 2 & \binom n 3 & \binom n 4 & \binom n 5 & \binom n 6 & \binom n 7 & \binom n 8 & \binom n 9 & \binom n {10} & \binom n {11} & \binom n {12} \\
\hline
0  & 1 &  0 &  0 &   0 &   0 &   0 &   0 &   0 &   0 &  0  &  0 &  0 & 0 \\
1  & 1 &  1 &  0 &   0 &   0 &   0 &   0 &   0 &   0 &  0  &  0 &  0 & 0 \\
2  & 1 &  2 &  1 &   0 &   0 &   0 &   0 &   0 &   0 &  0  &  0 &  0 & 0 \\
3  & 1 &  3 &  3 &   1 &   0 &   0 &   0 &   0 &   0 &  0  &  0 &  0 & 0 \\
4  & 1 &  4 &  6 &   4 &   1 &   0 &   0 &   0 &   0 &  0  &  0 &  0 & 0 \\
5  & 1 &  5 & 10 &  10 &   5 &   1 &   0 &   0 &   0 &  0  &  0 &  0 & 0 \\
6  & 1 &  6 & 15 &  20 &  15 &   6 &   1 &   0 &   0 &  0  &  0 &  0 & 0 \\
7  & 1 &  7 & 21 &  35 &  35 &  21 &   7 &   1 &   0 &  0  &  0 &  0 & 0 \\
8  & 1 &  8 & 28 &  56 &  70 &  56 &  28 &   8 &   1 &  0  &  0 &  0 & 0 \\
9  & 1 &  9 & 36 &  84 & 126 & 126 &  84 &  36 &   9 &  1  &  0 &  0 & 0 \\
10 & 1 & 10 & 45 & 120 & 210 & 252 & 210 & 120 &  45 &  10 &  1 &  0 & 0 \\
11 & 1 & 11 & 55 & 165 & 330 & 462 & 462 & 330 & 165 &  55 & 11 &  1 & 0 \\
12 & 1 & 12 & 66 & 220 & 495 & 792 & 924 & 792 & 495 & 220 & 66 & 12 & 1 \\
\end{array}$

As can be seen, the entries in rows $0, 1, 3, 7$ are all odd.


Proof
The statement:

$\dbinom n k$ is odd
is equivalent to:

$\dbinom n k \equiv 1 \pmod p$

The corollary to Lucas' Theorem gives:

$\ds \dbinom n k \equiv \prod_{j \mathop = 0}^r \dbinom {a_j} {b_j} \pmod p$
where:

$n, k \in \Z_{\ge 0}$ and $p$ is prime
the representations of $n$ and $k$ to the base $p$ are given by:
$n = a_r p^r + \cdots + a_1 p + a_0$
$k = b_r p^r + \cdots + b_1 p + b_0$

When $p = 2$, the digits $a_j, b_j$ are either $0$ or $1$.
In order for $\dbinom n k \equiv 1 \pmod p$, it is necessary and sufficient that $\dbinom {a_j} {b_j} \equiv 1 \pmod p$ for all $j \in \set {0, 1, 2, \ldots, r}$.
In order for this to happen, either:

$\dbinom {a_j} {b_j} = \dbinom 0 0$
or:

$\dbinom {a_j} {b_j} = \dbinom 1 0$
or:

$\dbinom {a_j} {b_j} = \dbinom 1 1$

Suppose $a_i = 0$ for some $i \in \set {0, 1, 2, \ldots, r}$.
Then if $b_i = 1$:

$\dbinom {a_j} {b_j} = \dbinom 0 1 = 0$
and so:

$\dbinom n k \equiv 0 \pmod p$
for whichever $k$ (and there will be at least one) has digit $b_i = 1$.

So the only way it can be assured that all $\dbinom {a_j} {b_j} \equiv 1 \pmod p$ for all $k \in \set {0, 1, 2, \ldots, n}$ is for $a_j = 0$ for all $j \in \set {0, 1, 2, \ldots, r}$.
That is, for $n = 2^m - 1$ for some $m \in \Z_{\ge 0}$.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $12$




