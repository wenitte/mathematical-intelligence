# 

Source: https://proofwiki.org/wiki/Expectation_of_Random_Variable_as_Integral_with_respect_to_Probability_Distribution

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ be an integrable real-valued random variable on $\struct {\Omega, \Sigma, \Pr}$. 
Let $P_X$ be the probability distribution of $X$.

Then: 

$\ds \expect X = \int_\R x \map {\rd P_X} x$
where $\expect X$ is the expected value of $X$. 


Proof
From the definition of expectation: 

$\ds \expect X = \int_\Omega X \rd \Pr$
We can write: 

$\ds \int_\Omega X \rd \Pr = \int_\Omega I_\R \circ X \rd \Pr$
where $I_\R$ is the identity map for $\R$. 
From the definition of probability distribution, we have: 

$P_X = X_* \Pr$
where $X_* \Pr$ is the pushforward of $\Pr$ on $\tuple {\R, \map \BB \R}$, where $\map \BB \R$ denotes the Borel $\sigma$-algebra on $\R$.
So, from Integral with respect to Pushforward Measure: Corollary, we have: 

$I_\R$ is $P_X$-integrable
and:

$\ds \int_\Omega I_\R \circ X \rd \Pr = \int_\R I_\R \rd P_X$
That is: 

$\ds \int_\Omega X \rd \Pr = \int_\R x \map {\rd P_X} x$
$\blacksquare$


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $10$: Probability: $10.1$: Basics




