# 

Source: https://proofwiki.org/wiki/Expectation_of_Bernoulli_Distribution/Proof_3

Theorem
Let $X$ be a discrete random variable with a Bernoulli distribution with parameter $p$.

Then the expectation of $X$ is given by:

$\expect X = p$


Proof
From the Probability Generating Function of Bernoulli Distribution, we have:

$\map {\Pi_X} s = q + p s$
where $q = 1 - p$.

From Expectation of Discrete Random Variable from PGF, we have:

$\expect X = \map { {\Pi_X}'} 1$

From Derivatives of PGF of Bernoulli Distribution:

$\map { {\Pi_X}'} s = p$
Hence the result.
$\blacksquare$





