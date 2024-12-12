# 

Source: https://proofwiki.org/wiki/Excess_Kurtosis_of_Exponential_Distribution

Theorem
Let $X$ be a continuous random variable of the exponential distribution with parameter $\beta$ for some $\beta \in \R_{> 0}$.
Then the excess kurtosis $\gamma_2$ of $X$ is equal to $6$.


Proof
From the definition of excess kurtosis, we have: 

$\gamma_2 = \expect {\paren {\dfrac {X - \mu} \sigma}^4} - 3$
where: 

$\mu$ is the expectation of $X$.
$\sigma$ is the standard deviation of $X$.
By Expectation of Exponential Distribution we have: 

$\mu = \beta$
By Variance of Exponential Distribution we have: 

$\sigma = \beta$
So: 














\(\ds \gamma_2\)

\(=\)







\(\ds \dfrac {\expect {X^4} - 4 \mu \expect {X^3} + 6 \mu^2 \expect {X^2} - 3 \mu^4} {\sigma^4} - 3\)





Kurtosis in terms of Non-Central Moments














\(\ds \)

\(=\)







\(\ds \frac {4! \beta^4 - 4 \beta \paren {3! \beta^3} + 6 \beta^2 \paren {2! \beta^2} - 3 \beta^4} {\beta^4} - 3\)





Raw Moment of Exponential Distribution














\(\ds \)

\(=\)







\(\ds \frac {24 \beta^4 - 24 \beta^4 + 12 \beta^4 - 3 \beta^4} {\beta^4} - 3\)




















\(\ds \)

\(=\)







\(\ds \frac {9 \beta^4} {\beta^4} - 3\)




















\(\ds \)

\(=\)







\(\ds 6\)









$\blacksquare$





