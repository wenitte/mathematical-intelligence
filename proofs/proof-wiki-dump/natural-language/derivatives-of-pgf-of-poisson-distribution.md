# 

Source: https://proofwiki.org/wiki/Derivatives_of_PGF_of_Poisson_Distribution

Theorem
Let $X$ be a discrete random variable with the Poisson distribution with parameter $\lambda$.
Then the derivatives of the PGF of $X$ with respect to $s$ are:

$\dfrac {d^k} {\d s^k} \, \map {\Pi_X} s = \lambda^k e^{- \lambda \paren {1 - s} }$


Proof
The Probability Generating Function of Poisson Distribution is:














\(\ds \map {\Pi_X} s\)

\(=\)







\(\ds e^{-\lambda \paren {1 - s} }\)




















\(\ds \)

\(=\)







\(\ds e^{-\lambda + \lambda s}\)




















\(\ds \)

\(=\)







\(\ds e^{-\lambda} e^{\lambda s}\)





Exponential of Sum




We have that for a given Poisson distribution, $\lambda$ is constant.

From Higher Derivatives of Exponential Function, we have that:

$\dfrac {\d^k} {\d s^k} \paren {e^{\lambda s} } = \lambda^k e^{\lambda s}$
Thus we have:














\(\ds \frac {\d^k} {\d s^k} \map {\Pi_X} s\)

\(=\)







\(\ds \frac {\d^k} {\d s^k} e^{-\lambda} \paren {e^{\lambda s} }\)




















\(\ds \)

\(=\)







\(\ds e^{-\lambda} \frac {\d^k} {\d s^k} \paren {e^{\lambda s} }\)





Derivative of Constant Multiple














\(\ds \)

\(=\)







\(\ds e^{-\lambda} \lambda^k e^{\lambda s}\)





Higher Derivatives of Exponential Function




Hence the result.
$\blacksquare$





