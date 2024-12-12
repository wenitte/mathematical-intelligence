# 

Source: https://proofwiki.org/wiki/Expectation_of_Poisson_Distribution/Proof_2

Theorem
Let $X$ be a discrete random variable with the Poisson distribution with parameter $\lambda$.

Then the expectation of $X$ is given by:

$\expect X = \lambda$


Proof
From Probability Generating Function of Poisson Distribution:

$\map {\Pi_X} s = e^{-\lambda \paren {1 - s} }$

From Expectation of Discrete Random Variable from PGF:

$\expect X = \map {\Pi'_X} 1$

We have:














\(\ds \map {\Pi'_X} s\)

\(=\)







\(\ds \frac \d {\d s} e^{-\lambda \paren {1 - s} }\)




















\(\ds \)

\(=\)







\(\ds \lambda e^{- \lambda \paren {1 - s} }\)





Derivatives of PGF of Poisson Distribution




Plugging in $s = 1$:

$\map {\Pi'_X} 1 = \lambda e^{- \lambda \paren {1 - 1} } = \lambda e^0$

Hence the result from Exponential of Zero:

$e^0 = 1$
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 4.3$: Moments: Exercise $5$




