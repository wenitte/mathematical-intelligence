# 

Source: https://proofwiki.org/wiki/Expectation_of_Poisson_Distribution/Proof_3

Theorem
Let $X$ be a discrete random variable with the Poisson distribution with parameter $\lambda$.

Then the expectation of $X$ is given by:

$\expect X = \lambda$


Proof
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





