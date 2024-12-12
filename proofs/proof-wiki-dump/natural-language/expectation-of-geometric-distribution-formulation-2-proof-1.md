# 

Source: https://proofwiki.org/wiki/Expectation_of_Geometric_Distribution/Formulation_2/Proof_1

Theorem
$\map X \Omega = \set {0, 1, 2, \ldots} = \N$
$\map \Pr {X = k} = p \paren {1 - p}^k$

Then the expectation of $X$ is given by:

$\map E X = \dfrac {1-p} p$


Proof
From the definition of expectation:

$\ds \expect X = \sum_{x \mathop \in \Omega_X} x \map \Pr {X = x}$
By definition of geometric distribution:

$\ds \expect X = \sum_{k \mathop \in \Omega_X} k p \paren {1 - p}^k$
Let $q = 1 - p$:














\(\ds \expect X\)

\(=\)







\(\ds p \sum_{k \mathop \ge 0} k q^k\)





as $\Omega_X = \N$














\(\ds \)

\(=\)







\(\ds p \sum_{k \mathop \ge 1} k q^k\)





as the $k = 0$ term is zero














\(\ds \)

\(=\)







\(\ds pq \sum_{k \mathop \ge 1} k q^{k - 1}\)




















\(\ds \)

\(=\)







\(\ds p q \frac 1 {\paren {1 - q}^2}\)





Derivative of Geometric Sequence














\(\ds \)

\(=\)







\(\ds \frac {p q} {p^2}\)





as $q = 1 - p$














\(\ds \)

\(=\)







\(\ds \frac {1 - p} p\)









$\blacksquare$





