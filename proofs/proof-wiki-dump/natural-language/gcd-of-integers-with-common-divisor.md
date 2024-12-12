# 

Source: https://proofwiki.org/wiki/GCD_of_Integers_with_Common_Divisor



Theorem
Let $a, b \in \Z$ be integers such that not both $a = 0$ and $b = 0$.
Let $k \in \Z_{>0}$ be a strictly positive integer.

Then:

$\gcd \set {k a, k b} = k \gcd \set {a, b}$
where $\gcd$ denotes the greatest common divisor.


Corollary
Let $a, b \in \Z$ be integers such that not both $a = 0$ and $b = 0$.
Let $k \in \Z_{\ne 0}$ be a non-zero integer.

Then:

$\gcd \set {k a, k b} = \size k \gcd \set {a, b}$
where $\gcd$ denotes the greatest common divisor.


Proof 1
Consider the demonstration of the operation of the Euclidean Algorithm applied to $a$ and $b$.
Let each equation be multiplied by $k$.
We have:














\(\ds a k\)

\(=\)







\(\ds q_1 \paren {b k} + r_1 k\)





where $0 < r_1 k < b_k$














\(\ds b k\)

\(=\)







\(\ds q_2 \paren {r_1 k} + r_2 k\)





where $0 < r_2 k < r_1 k$














\(\ds r_1 k\)

\(=\)







\(\ds q_3 \paren {r_2 k} + r_3 k\)





where $0 < r_3 k < r_2 k$














\(\ds \cdots\)

\(\)







\(\ds \)




















\(\ds r_{n - 2} k\)

\(=\)







\(\ds q_n \paren {r_{n - 1} k} + r_n k\)





where $0 < r_n k < r_{n - 1} k$














\(\ds r_{n - 1} k\)

\(=\)







\(\ds q_{n + 1} \paren {r_n k} + 0\)









This is the operation of the Euclidean Algorithm applied to $k a$ and $k b$.
Hence the greatest common divisor is the last non-zero remainder $r_n k$.
That is:

$\gcd \set {k a, k b} = k \gcd \set {a, b}$
$\blacksquare$


Proof 2









\(\ds \exists x, y \in \Z: \, \)



\(\ds \gcd \set {a k, b k}\)

\(=\)







\(\ds \paren {a k} x + \paren {b k} y\)





Bézout's Identity: $\gcd \set {a k, b k}$ is the smallest such integer combination














\(\ds \)

\(=\)







\(\ds k \paren {a x + b y}\)




















\(\ds \)

\(=\)







\(\ds k \gcd \set {a, b}\)





Bézout's Identity



$\blacksquare$


Examples
Example: $12$ and $30$













\(\ds \gcd \set {12, 30}\)

\(=\)







\(\ds 3 \gcd \set {4, 10}\)




















\(\ds \)

\(=\)







\(\ds 3 \times 2 \gcd \set {2, 5}\)




















\(\ds \)

\(=\)







\(\ds 6 \times 1\)




















\(\ds \)

\(=\)







\(\ds 6\)













