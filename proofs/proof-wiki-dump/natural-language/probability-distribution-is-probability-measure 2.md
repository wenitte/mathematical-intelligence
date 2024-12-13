# 

Source: https://proofwiki.org/wiki/Probability_Distribution_is_Probability_Measure

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space. 
Let $\struct {S, \Sigma'}$ be a measurable space.
Let $X$ be a random variable on $\struct {\Omega, \Sigma, \Pr}$ taking values in $\struct {S, \Sigma'}$. 
Let $P_X$ be the probability distribution of $X$.

Then: 

$P_X$ is a probability measure on $\struct {S, \Sigma'}$.


Proof
From the definition of probability distribution, we have: 

$P_X = X_* \Pr$
where $X_* \Pr$ is the pushforward $X_* \Pr$ of $\Pr$, under $X$, on $\Sigma'$.
From Pushforward Measure is Measure, we have: 

$P_X$ is a measure.
We then have: 














\(\ds \map {P_X} S\)

\(=\)







\(\ds \map \Pr {X^{-1} \sqbrk S}\)





Definition of Probability Distribution














\(\ds \)

\(=\)







\(\ds \map \Pr \Omega\)




















\(\ds \)

\(=\)







\(\ds 1\)





Definition of Probability Measure



so:

$P_X$ is a probability measure.
$\blacksquare$





