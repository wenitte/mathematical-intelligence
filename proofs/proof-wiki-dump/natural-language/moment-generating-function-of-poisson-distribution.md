# 

Source: https://proofwiki.org/wiki/Moment_Generating_Function_of_Poisson_Distribution

Theorem
Let $X$ be a discrete random variable with a Poisson distribution with parameter $\lambda$ for some $\lambda \in \R_{> 0}$.
Then the moment generating function $M_X$ of $X$ is given by: 

$\map {M_X} t = e^{\lambda \paren {e^t - 1} }$


Proof
From the definition of the Poisson distribution, $X$ has probability mass function:

$\map \Pr {X = n} = \dfrac {\lambda^n e^{-\lambda} } {n!}$
From the definition of a moment generating function:

$\ds \map {M_X} t = \expect {e^{t X} } = \sum_{n \mathop = 0}^\infty \map \Pr {X = n} e^{t n}$
So: 














\(\ds \map {M_X} t\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\lambda^n e^{-\lambda} } {n!} e^{t n}\)




















\(\ds \)

\(=\)







\(\ds e^{-\lambda} \sum_{n \mathop = 0}^\infty \frac {\paren {\lambda e^t}^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds e^{-\lambda} e^{\lambda e^t}\)





Power Series Expansion for Exponential Function














\(\ds \)

\(=\)







\(\ds e^{\lambda \paren {e^t - 1} }\)





Exponential of Sum



$\blacksquare$


Sources
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $13$: Probability distributions
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $15$: Probability distributions




