# 

Source: https://proofwiki.org/wiki/Expectation_of_Geometric_Distribution/Formulation_1/Proof_3

Theorem
$\map X \Omega = \set {0, 1, 2, \ldots} = \N$
$\map \Pr {X = k} = \paren {1 - p} p^k$

Then the expectation of $X$ is given by:

$\expect X = \dfrac p {1 - p}$


Proof
From the definition of expectation:

$\ds \expect X = \sum_{x \mathop \in \Omega_X} x \map \Pr {X = x}$
Then














\(\ds \expect X\)

\(=\)







\(\ds \sum_{k \mathop \in \N} k p^k \paren {1 - p}\)





Definition of Geometric Distribution














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 1} k p^k \paren {1 - p}\)





as the $k = 0$ term is zero














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 1} k p^k - k p^{k+1}\)





Real Multiplication Distributes over Addition



By the Ratio Test, both $\sum_{k \mathop \ge 1} k p^k$ and $\sum_{k \mathop \ge 1} k p^{k+1}$ converge absolutely.
From Absolutely Convergent Real Series is Convergent, both series converge.














\(\ds \sum_{k \mathop \ge 1} k p^k - k p^{k+1}\)

\(=\)







\(\ds \sum_{k \mathop \ge 1} k p^k - \sum_{k \mathop \ge 1} k p^{k+1}\)





Convergent Series can be Added Term by Term














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 1} k p^k - \sum_{k \mathop \ge 2} \paren {k - 1} p^k\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds p + \sum_{k \mathop \ge 2} k p^k - \sum_{k \mathop \ge 2} \paren {k - 1} p^k\)





Moving out the first term














\(\ds \)

\(=\)







\(\ds p + \sum_{k \mathop \ge 2} k p^k - \paren {k - 1} p^k\)





Recombining the two convergent series














\(\ds \)

\(=\)







\(\ds p + \sum_{k \mathop \ge 2} p^k\)




















\(\ds \)

\(=\)







\(\ds p + \frac {p^2}{1-p}\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds \frac {p \paren {1-p} }{1-p} + \frac {p^2} {1-p}\)




















\(\ds \)

\(=\)







\(\ds \frac p {1-p}\)









$\blacksquare$





