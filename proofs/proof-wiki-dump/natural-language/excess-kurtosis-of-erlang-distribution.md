# 

Source: https://proofwiki.org/wiki/Excess_Kurtosis_of_Erlang_Distribution

Theorem
Let $k$ be a strictly positive integer. 
Let $\lambda$ be a strictly positive real number. 
Let $X$ be a continuous random variable with an Erlang distribution with parameters $k$ and $\lambda$.
Then the excess kurtosis $\gamma_2$ of $X$ is given by:

$\gamma_2 = \dfrac 6 k$


Proof
From the definition of excess kurtosis, we have: 

$\gamma_2 = \expect {\paren {\dfrac {X - \mu} \sigma}^4} - 3$
where: 

$\mu$ is the expectation of $X$.
$\sigma$ is the standard deviation of $X$.
By Expectation of Erlang Distribution we have: 

$\mu = \dfrac k \lambda$
By Variance of Erlang Distribution we have: 

$\sigma = \dfrac {\sqrt k} \lambda$

So: 














\(\ds \gamma_2\)

\(=\)







\(\ds \dfrac {\expect {X^4} - 4 \mu \expect {X^3} + 6 \mu^2 \expect {X^2} - 3 \mu^4} {\sigma^4} - 3\)





Kurtosis in terms of Non-Central Moments














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {\dfrac {k^4 + 6 k^3 + 11 k^2 + 6 k} {\lambda^4} }- 4 \dfrac k \lambda \paren {\dfrac {k^3 + 3 k^2 + 2 k} {\lambda^3} } + 6 \dfrac {k^2} {\lambda^2} \paren {\dfrac {k^2 +  k} {\lambda^2} } - 3 \dfrac {k^4} {\lambda^4} } {\dfrac {k^2} {\lambda^4} } - 3\)





Raw Moment of Erlang Distribution














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {1 -4 + 6 - 3} k^4 + \paren {6 -12 + 6} k^3 + \paren {11 - 8} k^2 + 6 k} {k^2} - 3\)




















\(\ds \)

\(=\)







\(\ds \dfrac {3 k^2 + 6 k} {k^2} - 3\)




















\(\ds \)

\(=\)







\(\ds \dfrac 6 k\)









$\blacksquare$





