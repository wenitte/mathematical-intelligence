# 

Source: https://proofwiki.org/wiki/Probability_Generating_Function_of_Poisson_Distribution

Theorem
Let $X$ be a discrete random variable with the Poisson distribution with parameter $\lambda$.

Then the p.g.f. of $X$ is:

$\map {\Pi_X} s = e^{-\lambda \paren {1 - s} }$


Proof
From the definition of p.g.f:

$\ds \map {\Pi_X} s = \sum_{x \mathop \ge 0} \map {p_X} x s^x$
From the definition of the Poisson distribution:

$\ds \forall k \in \N, k \ge 0: \map {p_X} k = \frac {e^{-\lambda} \lambda^k} {k!}$
So:














\(\ds \map {\Pi_X} s\)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \frac {e^{-\lambda} \lambda^k} {k!} s^k\)




















\(\ds \)

\(=\)







\(\ds e^{-\lambda} \sum_{k \mathop \ge 0} \frac {\paren {\lambda s}^k} {k!}\)




















\(\ds \)

\(=\)







\(\ds e^{-\lambda} e^{\lambda s}\)





Taylor Series Expansion for Exponential Function














\(\ds \)

\(=\)







\(\ds e^{-\lambda + \lambda s}\)









Hence the result.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 4.2$: Integer-valued random variables: $(12)$




