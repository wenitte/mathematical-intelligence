# 

Source: https://proofwiki.org/wiki/Raw_Moment_of_Exponential_Distribution

Theorem
Let $X$ be a continuous random variable of the exponential distribution with parameter $\beta$ for some $\beta \in \R_{>0}$.
Let $n$ be a strictly positive integer. 

Then the $n$th raw moment of $X$ is given by: 

$\expect {X^n} = n! \beta^n$


Proof
From Moment Generating Function of Exponential Distribution, the moment generating function of $X$ is given by:

$\map {M_X} t = \dfrac 1 {1 - \beta t}$
By Moment in terms of Moment Generating Function:

$\expect {X^n} = \map {M^{\paren n}_X} 0$
We have: 














\(\ds \map {M^{\paren n}_X} t\)

\(=\)







\(\ds \frac {\d^n} {\d t^n} \paren {\frac 1 {1 - \beta t} }\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 \beta \frac {\d^n} {\d t^n} \paren {\frac 1 {t - \frac 1 \beta} }\)




















\(\ds \)

\(=\)







\(\ds -\frac {\paren {-1}^n n!} {\beta \paren {t - \frac 1 \beta}^{n + 1} }\)





Nth Derivative of Reciprocal of Mth Power: Corollary, Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^{n + 1} n!} {\frac \beta {\beta^{n + 1} } \paren {\beta t - 1}^{n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^{n + 1} n! \beta^n} {\paren {\beta t - 1}^{n + 1} }\)









Setting $t = 0$ gives:














\(\ds \expect {X^n}\)

\(=\)







\(\ds \frac {\paren {-1}^{n + 1} n! \beta^n} {\paren {-1}^{n + 1} }\)




















\(\ds \)

\(=\)







\(\ds n! \beta^n\)









$\blacksquare$





