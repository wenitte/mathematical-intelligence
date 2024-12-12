# 

Source: https://proofwiki.org/wiki/Excess_Kurtosis_of_Chi-Squared_Distribution

Theorem
Let $n$ be a strictly positive integer. 
Let $X \sim \chi^2_n$ where $\chi^2_n$ is the chi-squared distribution with $n$ degrees of freedom. 
Then the excess kurtosis $\gamma_2$ of $X$ is given by: 

$\gamma_2 = \dfrac {12} n$


Proof
From the definition of excess kurtosis, we have: 

$\gamma_2 = \expect {\paren {\dfrac {X - \mu} \sigma}^4} - 3$
where: 

$\mu$ is the expectation of $X$.
$\sigma$ is the standard deviation of $X$.
By Expectation of Chi-Squared Distribution:

$\mu = n$
By Variance of Chi-Squared Distribution:

$\sigma = \sqrt {2 n}$
As is shown in Skewness of Chi-Squared Distribution, we have: 

$\expect {X^3} = n^3 + 6 n^2 + 8 n$
We also have: 














\(\ds \expect {X^4}\)

\(=\)







\(\ds \prod_{k \mathop = 0}^3 \paren {n + 2 k}\)





Raw Moment of Chi-Squared Distribution














\(\ds \)

\(=\)







\(\ds n \paren {n + 2} \paren {n + 4} \paren {n + 6}\)




















\(\ds \)

\(=\)







\(\ds n \paren {n^2 + 6 n + 8} \paren {n + 6}\)




















\(\ds \)

\(=\)







\(\ds n^4 + 12 n^3 + 44 n^2 + 48 n\)









So:














\(\ds \gamma_2\)

\(=\)







\(\ds \frac {\expect {X^4 - 4 X^3 n + 6 X^2 n^2 - 4 X n^3 + n^4} } {\paren {\sqrt {2 n} }^4} - 3\)





Fourth Power of Sum, Expectation is Linear














\(\ds \)

\(=\)







\(\ds \frac {\expect {X^4} - 4 n \expect {X^3} + 6 n^2 \expect {X^2} - 4 n^3 \expect X + n^4} {4 n^2} - 3\)





Expectation is Linear














\(\ds \)

\(=\)







\(\ds \frac {n^4 + 12 n^3 + 44 n^2 + 48 n - 4 n \paren {n^3 + 6 n^2 + 8 n} + 6 n^2 \paren {n^2 + 2 n} - 4 n^4 + n^4} {4 n^2} - 3\)





Variance as Expectation of Square minus Square of Expectation














\(\ds \)

\(=\)







\(\ds \frac {n^4 + 12 n^3 + 44 n^2 + 48 n - 4n^4 - 24 n^3 - 32 n^2 + 6 n^4 + 12 n^3 - 4 n^4 + n^4 - 12 n^2} {4 n^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {48 n} {4 n^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {12} n\)









$\blacksquare$





