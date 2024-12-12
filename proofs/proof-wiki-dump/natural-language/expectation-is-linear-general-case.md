# 

Source: https://proofwiki.org/wiki/Expectation_is_Linear/General_Case

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ and $Y$ be integrable random variables on $\struct {\Omega, \Sigma, \Pr}$.
Let $\expect X$ denote the expectation of $X$.

Then:

$\forall \alpha, \beta \in \R: \expect {\alpha X + \beta Y} = \alpha \, \expect X + \beta \, \expect Y$


Proof
From Integral of Integrable Function is Homogeneous, we have: 

$\alpha X$ and $\beta Y$ are $\Pr$-integrable.
From Integral of Integrable Function is Additive, we have: 

$\alpha X + \beta Y$ is $\Pr$-integrable.
From Linear Combination of Real-Valued Random Variables is Real-Valued Random Variable, we have: 

$\alpha X + \beta Y$ is a real-valued random variable.
Then: 














\(\ds \expect {\alpha X + \beta Y}\)

\(=\)







\(\ds \int \paren {\alpha X + \beta Y} \rd \Pr\)





Definition of Expectation














\(\ds \)

\(=\)







\(\ds \int \paren {\alpha X} \rd \Pr + \int \paren {\beta Y} \rd \Pr\)





Integral of Integrable Function is Additive














\(\ds \)

\(=\)







\(\ds \alpha \int X \rd \Pr + \beta \int Y \rd \Pr\)





Integral of Integrable Function is Homogeneous














\(\ds \)

\(=\)







\(\ds \alpha \expect X + \beta \expect Y\)





Definition of Expectation



$\blacksquare$





