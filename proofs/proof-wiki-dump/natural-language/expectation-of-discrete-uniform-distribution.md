# 

Source: https://proofwiki.org/wiki/Expectation_of_Discrete_Uniform_Distribution

Theorem
Let $X$ be a discrete random variable with the discrete uniform distribution with parameter $n$.

Then the expectation of $X$ is given by:

$\expect X = \dfrac {n + 1} 2$


Proof
From the definition of expectation:

$\ds \expect X = \sum_{x \mathop \in \Omega_X} x \map \Pr {X = x}$
Thus:














\(\ds \expect X\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n k \paren {\frac 1 n}\)





Definition of Discrete Uniform Distribution














\(\ds \)

\(=\)







\(\ds \frac 1 n \sum_{k \mathop = 1}^n k\)




















\(\ds \)

\(=\)







\(\ds \frac 1 n \frac {n \paren {n + 1} } 2\)





from Closed Form for Triangular Numbers














\(\ds \)

\(=\)







\(\ds \frac {n + 1} 2\)









$\blacksquare$





