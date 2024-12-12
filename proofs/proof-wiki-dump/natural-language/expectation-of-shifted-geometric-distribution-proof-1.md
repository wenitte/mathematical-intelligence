# 

Source: https://proofwiki.org/wiki/Expectation_of_Shifted_Geometric_Distribution/Proof_1

Theorem
Let $X$ be a discrete random variable with the shifted geometric distribution with parameter $p$.

Then the expectation of $X$ is given by:

$\expect X = \dfrac 1 p$


Proof
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


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 2.4$: Expectation: Example $24$




