# 

Source: https://proofwiki.org/wiki/Expectation_of_Exponential_Distribution/Proof_2

Theorem
Let $X$ be a continuous random variable of the exponential distribution with parameter $\beta$ for some $\beta \in \R_{> 0}$

Then the expectation of $X$ is given by:

$\expect X = \beta$


Proof
From Moment Generating Function of Exponential Distribution, the moment generating function $M_X$ of $X$, is given by:

$\map {M_X} t = \dfrac 1 {1 - \beta t}$
By Moment in terms of Moment Generating Function:

$\expect X = \map {M_X'} 0$
We have: 














\(\ds \map {M_X'} t\)

\(=\)







\(\ds \map {\frac \d {\d t} } {\frac 1 {1 - \beta t} }\)




















\(\ds \)

\(=\)







\(\ds \frac {-\beta} {-1} \frac 1 {\paren {1 - \beta t}^2}\)





Chain Rule for Derivatives, Derivative of Power














\(\ds \)

\(=\)







\(\ds \frac \beta {\paren {1 - \beta t}^2}\)









Setting $t = 0$ gives:














\(\ds \expect X\)

\(=\)







\(\ds \frac \beta {\paren {1 - 0 \beta}^2}\)




















\(\ds \)

\(=\)







\(\ds \beta\)









$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): moment generating function
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): moment generating function




