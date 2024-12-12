# 

Source: https://proofwiki.org/wiki/Expectation_of_Poisson_Distribution



Theorem
Let $X$ be a discrete random variable with the Poisson distribution with parameter $\lambda$.

Then the expectation of $X$ is given by:

$\expect X = \lambda$


Proof 1
From the definition of expectation:

$\ds \expect X = \sum_{x \mathop \in \Img X} x \map \Pr {X = x}$
By definition of Poisson distribution:

$\ds \expect X = \sum_{k \mathop \ge 0} k \frac 1 {k!} \lambda^k e^{-\lambda}$
Then:














\(\ds \expect X\)

\(=\)







\(\ds \lambda e^{-\lambda} \sum_{k \mathop \ge 1} \frac 1 {\paren {k - 1}!} \lambda^{k-1}\)





as the $k = 0$ term vanishes














\(\ds \)

\(=\)







\(\ds \lambda e^{-\lambda} \sum_{j \mathop \ge 0} \frac {\lambda^j} {j!}\)





putting $j = k - 1$














\(\ds \)

\(=\)







\(\ds \lambda e^{-\lambda} e^{\lambda}\)





Taylor Series Expansion for Exponential Function














\(\ds \)

\(=\)







\(\ds \lambda\)









$\blacksquare$


Proof 2
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


Proof 3
From Moment Generating Function of Poisson Distribution, the moment generating function of $X$, $M_X$, is given by: 

$\map {M_X} t = e^{\lambda \paren {e^t - 1} }$
By Moment in terms of Moment Generating Function:

$\expect X = \map {M_X'} 0$
We have: 














\(\ds \map {M_X'} t\)

\(=\)







\(\ds \map {\frac \d {\d t} } {e^{\lambda \paren {e^t - 1} } }\)




















\(\ds \)

\(=\)







\(\ds \map {\frac \d {\d t} } {\lambda \paren {e^t - 1} } \frac \d {\map \d {\lambda \paren {e^t - 1} } } \paren {e^{\lambda \paren {e^t - 1} } }\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \lambda e^t e^{\lambda \paren {e^t - 1} }\)





Derivative of Exponential Function



Setting $t = 0$ gives: 














\(\ds \expect X\)

\(=\)







\(\ds \lambda e^0 e^{\lambda \paren {e^0 - 1} }\)




















\(\ds \)

\(=\)







\(\ds \lambda\)





Exponential of Zero



$\blacksquare$


Also see
Expectation and Variance of Poisson Distribution equal its Parameter


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 2.4$: Expectation: Exercise $10$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $13$: Probability distributions
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $15$: Probability distributions




