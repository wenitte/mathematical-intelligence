# 

Source: https://proofwiki.org/wiki/Expectation_of_Geometric_Distribution/Proof_2



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
From the Probability Generating Function of Geometric Distribution:

$\map {\Pi_X} s = \dfrac q {1 - p s}$
where $q = 1 - p$.

From Expectation of Discrete Random Variable from PGF:

$\expect X = \map {\Pi'_X} 1$

We have:














\(\ds \map {\Pi'_X} s\)

\(=\)







\(\ds \map {\frac \d {\d s} } {\frac q {1 - p s} }\)




















\(\ds \)

\(=\)







\(\ds \frac {q p} {\paren {1 - p s}^2}\)





Derivatives of PGF of Geometric Distribution




Plugging in $s = 1$:














\(\ds \map {\Pi'_X} 1\)

\(=\)







\(\ds \frac {q p} {\paren {1 - p}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac p {1 - p}\)





as $q = 1 - p$



Hence the result.
$\blacksquare$





