# 

Source: https://proofwiki.org/wiki/Expectation_of_Poisson_Distribution/Proof_1

Theorem
Let $X$ be a discrete random variable with the Poisson distribution with parameter $\lambda$.

Then the expectation of $X$ is given by:

$\expect X = \lambda$


Proof
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





