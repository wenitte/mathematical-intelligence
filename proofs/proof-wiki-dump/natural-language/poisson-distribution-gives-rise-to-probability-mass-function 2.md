# 

Source: https://proofwiki.org/wiki/Poisson_Distribution_Gives_Rise_to_Probability_Mass_Function

Theorem
Let $X$ be a discrete random variable on a probability space $\struct {\Omega, \Sigma, \Pr}$.

Let $X$ have the poisson distribution with parameter $\lambda$ (where $\lambda > 0$).

Then $X$ gives rise to a probability mass function.


Proof
By definition:

$\Img X = \N$
$\map \Pr {X = k} = \dfrac 1 {k!} \lambda^k e^{-\lambda}$
Then:














\(\ds \map \Pr \Omega\)

\(=\)







\(\ds \sum_{k \mathop \in \N} \frac 1 {k!} \lambda^k e^{-\lambda}\)




















\(\ds \)

\(=\)







\(\ds e^{-\lambda} \sum_{k \mathop \in \N} \frac 1 {k!} \lambda^k\)




















\(\ds \)

\(=\)







\(\ds e^{-\lambda} e^{\lambda}\)





Taylor Series Expansion for Exponential Function














\(\ds \)

\(=\)







\(\ds 1\)










So $X$ satisfies $\map \Pr \Omega = 1$, and hence the result.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 2.2$: Examples




