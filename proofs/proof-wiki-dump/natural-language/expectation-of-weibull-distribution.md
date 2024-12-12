# 

Source: https://proofwiki.org/wiki/Expectation_of_Weibull_Distribution

Theorem
Let $X$ be a continuous random variable with the Weibull distribution with $\alpha, \beta \in \R_{> 0}$.
The expectation of $X$ is given by:

$\expect X = \beta \, \map \Gamma {1 + \dfrac 1 \alpha}$
where $\Gamma$ is the Gamma function.


Proof
From Raw Moment of Weibull Distribution, we have:
The $n$th raw moment $\expect {X^n}$ of $X$ is given by: 

$\expect {X^n} = \beta^n \map \Gamma {1 + \dfrac n \alpha}$
Therefore, for $n = 1$ we have:

$\expect X = \beta^1 \map \Gamma {1 + \dfrac 1 \alpha}$
Hence the result.
$\blacksquare$





