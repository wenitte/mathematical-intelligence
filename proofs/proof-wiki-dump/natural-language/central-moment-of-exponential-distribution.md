# 

Source: https://proofwiki.org/wiki/Central_Moment_of_Exponential_Distribution

Theorem
Let $X$ be a continuous random variable of the exponential distribution with parameter $\beta$ for some $\beta \in \R_{> 0}$
Let $n$ be a strictly positive integer. 

Then the $n$th central moment $\mu_n$ of $X$ is given by: 

$\ds \mu_n = n! \beta^n \sum_{k \mathop = 0}^n \frac {\paren {-1}^k} {k!}$


Proof
From definition of central moment we have:

$\mu_n = \expect {\paren {x - \mu}^n}$
By Expectation of Exponential Distribution we have:

$\mu = \beta$
So: 














\(\ds \mu_2\)

\(=\)







\(\ds \expect {\sum_{k \mathop = 0}^n \binom n k X^{n - k} \paren {-\beta}^k}\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \binom n k \paren {-\beta}^k \expect {X^{n - k} }\)





Expectation is Linear














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \beta^k \binom n k \paren {-1}^k \paren {\paren {n - k}! \beta^{n - k} }\)





Raw Moment of Exponential Distribution














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \beta^n \paren {\frac {n!} {k! \paren {n - k}!} } \paren {-1}^k \paren {n - k}!\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds n! \beta^n \sum_{k \mathop = 0}^n \frac {\paren {-1}^k} {k!}\)









$\blacksquare$





