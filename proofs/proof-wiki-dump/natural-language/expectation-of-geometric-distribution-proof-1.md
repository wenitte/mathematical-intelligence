# 

Source: https://proofwiki.org/wiki/Expectation_of_Geometric_Distribution/Proof_1



Theorem
Let $X$ be a discrete random variable with the geometric distribution with parameter $p$ for some $0 < p < 1$.


Formulation 1
$\map X \Omega = \set {0, 1, 2, \ldots} = \N$
$\map \Pr {X = k} = \paren {1 - p} p^k$

Then the expectation of $X$ is given by:

$\expect X = \dfrac p {1 - p}$


Formulation 2
$\map X \Omega = \set {0, 1, 2, \ldots} = \N$
$\map \Pr {X = k} = p \paren {1 - p}^k$

Then the expectation of $X$ is given by:

$\map E X = \dfrac {1-p} p$


Proof
From the definition of expectation:

$\ds \expect X = \sum_{x \mathop \in \Omega_X} x \map \Pr {X = x}$
By definition of geometric distribution:

$\ds \expect X = \sum_{k \mathop \in \Omega_X} k p^k \paren {1 - p}$
Let $q = 1 - p$:














\(\ds \expect X\)

\(=\)







\(\ds q \sum_{k \mathop \ge 0} k p^k\)





as $\Omega_X = \N$














\(\ds \)

\(=\)







\(\ds q \sum_{k \mathop \ge 1} k p^k\)





as the $k = 0$ term is zero














\(\ds \)

\(=\)







\(\ds q p \sum_{k \mathop \ge 1} k p^{k - 1}\)




















\(\ds \)

\(=\)







\(\ds q p \frac 1 {\paren {1 - p}^2}\)





Derivative of Geometric Sequence














\(\ds \)

\(=\)







\(\ds \frac p {1 - p}\)





as $q = 1 - p$



$\blacksquare$





