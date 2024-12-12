# 

Source: https://proofwiki.org/wiki/Expectation_of_Shifted_Geometric_Distribution/Proof_2

Theorem
Let $X$ be a discrete random variable with the shifted geometric distribution with parameter $p$.

Then the expectation of $X$ is given by:

$\expect X = \dfrac 1 p$


Proof
From the Probability Generating Function of Shifted Geometric Distribution, we have:

$\map {\Pi_X} s = \dfrac {p s} {1 - q s}$
where $q = 1 - p$.

From Expectation of Discrete Random Variable from PGF, we have:

$\expect X = \map {\Pi'_X} 1$

We have:














\(\ds \map {\Pi'_X} s\)

\(=\)







\(\ds \map {\frac \d {\d s} } {\frac {p s} {1 - q s} }\)




















\(\ds \)

\(=\)







\(\ds \frac p {\paren {1 - q s}^2}\)





Derivatives of PGF of Shifted Geometric Distribution




Plugging in $s = 1$:














\(\ds \map {\Pi'_X} 1\)

\(=\)







\(\ds \frac p {\paren {1 - q}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac p {p^2}\)





as $q = 1 - p$














\(\ds \)

\(=\)







\(\ds \frac 1 p\)









Hence the result.
$\blacksquare$





