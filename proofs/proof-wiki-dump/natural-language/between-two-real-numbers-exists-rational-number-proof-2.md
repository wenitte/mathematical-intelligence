# 

Source: https://proofwiki.org/wiki/Between_two_Real_Numbers_exists_Rational_Number/Proof_2

Theorem
Let $a, b \in \R$ be real numbers such that $a < b$.
Then:

$\exists r \in \Q: a < r < b$


Proof
As $a < b$ it follows that $a \ne b$ and so $b - a \ne 0$.
Thus:

$\dfrac 1 {b - a} \in \R$
By the Axiom of Archimedes:

$\exists n \in \N: n > \dfrac 1 {b - a}$
Let $M := \set {x \in \Z: x > a n}$.
By Set of Integers Bounded Below has Smallest Element, there exists $m \in \Z$ such that $m$ is the smallest element of $M$.
That is:

$m > a n$
and, by definition of smallest element:

$m - 1 \le a n$

As $n > \dfrac 1 {b - a}$, it follows from Ordering of Reciprocals that:

$\dfrac 1 n < b - a$
Thus:














\(\ds m - 1\)

\(\le\)







\(\ds a n\)














\(\ds \leadsto \ \ \)





\(\ds m\)

\(\le\)







\(\ds a n + 1\)














\(\ds \leadsto \ \ \)





\(\ds \frac m n\)

\(\le\)







\(\ds a + \frac 1 n\)




















\(\ds \)

\(<\)







\(\ds a + \paren {b - a}\)




















\(\ds \)

\(=\)







\(\ds b\)










Thus we have shown that $a < \dfrac m n < b$.
That is:

$\exists r \in \Q: a < r < b$
such that $r = \dfrac m n$.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 3$: Natural Numbers: Exercise $\S 3.6 \ (4)$




