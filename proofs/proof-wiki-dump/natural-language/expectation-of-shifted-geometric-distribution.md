# 

Source: https://proofwiki.org/wiki/Expectation_of_Shifted_Geometric_Distribution



Theorem
Let $X$ be a discrete random variable with the shifted geometric distribution with parameter $p$.

Then the expectation of $X$ is given by:

$\expect X = \dfrac 1 p$


Proof 1
From the definition of expectation:

$\expect X = \ds \sum_{x \mathop \in \Omega_X} x \map \Pr {X = x}$
By definition of shifted geometric distribution:

$\expect X = \ds \sum_{k \mathop \in \Omega_X} k p \paren {1 - p}^{k - 1}$

Let $q = 1 - p$:














\(\ds \expect X\)

\(=\)







\(\ds p \sum_{k \mathop \ge 0} k q^{k - 1}\)





as $\Omega_X = \N$














\(\ds \)

\(=\)







\(\ds p \sum_{k \mathop \ge 1} k q^{k - 1}\)





The term in $k = 0$ vanishes














\(\ds \)

\(=\)







\(\ds p \frac 1 {\paren {1 - q}^2}\)





Derivative of Geometric Sequence














\(\ds \)

\(=\)







\(\ds \frac p {p^2}\)





as $q = 1 - p$














\(\ds \)

\(=\)







\(\ds \frac 1 p\)









$\blacksquare$


Proof 2
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


Sources
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): geometric distribution
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $13$: Probability distributions
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $15$: Probability distributions




