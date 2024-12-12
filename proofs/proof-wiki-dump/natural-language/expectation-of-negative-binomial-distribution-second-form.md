# 

Source: https://proofwiki.org/wiki/Expectation_of_Negative_Binomial_Distribution/Second_Form

Theorem
Let $X$ be a discrete random variable with the negative binomial distribution (second form) with parameters $n$ and $p$.

Then the expectation of $X$ is given by:

$\expect X = \dfrac n p$


Proof
From Probability Generating Function of Negative Binomial Distribution (Second Form), we have:

$\map {\Pi_X} s = \paren {\dfrac {p s} {1 - q s} }^n$
where $q = 1 - p$.

From Expectation of Discrete Random Variable from PGF, we have:

$\expect X  = \map {\Pi'_X} 1$

We have:














\(\ds \map {\Pi'_X} s\)

\(=\)







\(\ds \map {\frac \d {\d s} } {\frac {p s} {1 - q s} }^n\)




















\(\ds \)

\(=\)







\(\ds n p \paren {\frac {\paren {p s}^{n - 1} } {\paren {1 - q s}^{n + 1} } }\)





First Derivative of PGF of Negative Binomial Distribution/Second Form




Plugging in $s = 1$:














\(\ds \map {\Pi'_X} 1\)

\(=\)







\(\ds n p \paren {\frac {p^{n - 1} } {\paren {1 - q}^{n + 1} } }\)




















\(\ds \)

\(=\)







\(\ds n p \paren {\frac {p^{n - 1} } {p^{n + 1} } }\)





as $p = 1 - q$








\(\ds \leadsto \ \ \)





\(\ds \expect X\)

\(=\)







\(\ds \frac n p\)





simplifying



$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 4.3$: Moments: Exercise $6$




