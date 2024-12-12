# 

Source: https://proofwiki.org/wiki/Excess_Kurtosis_of_Bernoulli_Distribution

Theorem
Let $X$ be a discrete random variable with a Bernoulli distribution with parameter $p$.
Then the excess kurtosis $\gamma_2$ of $X$ is given by: 

$\gamma_2 = \dfrac {1 - 6 p q} {p q}$
where $q = 1 - p$.


Proof
From the definition of excess kurtosis, we have: 

$\gamma_2 = \expect {\paren {\dfrac {X - \mu} \sigma}^4} - 3$
where: 

$\mu$ is the expectation of $X$.
$\sigma$ is the standard deviation of $X$.
By Expectation of Bernoulli Distribution, we have: 

$\mu = p$
By Variance of Bernoulli Distribution, we have: 

$\sigma = \sqrt {p q}$
So: 














\(\ds \gamma_2\)

\(=\)







\(\ds \dfrac {\expect {X^4} - 4 \mu \expect {X^3} + 6 \mu^2 \expect {X^2} - 3 \mu^4} {\sigma^4} - 3\)





Kurtosis in terms of Non-Central Moments














\(\ds \)

\(=\)







\(\ds \frac {p - 4p^2 + 6p^3 - 3 p^4} {\paren {p q}^2} - 3\)





Raw Moment of Bernoulli Distribution














\(\ds \)

\(=\)







\(\ds \frac {p \paren {1 - 4p + 6p^2 - 3p^3} } {\paren {p q}^2} - 3\)




















\(\ds \)

\(=\)







\(\ds \frac {p \paren {1 - p} \paren {3p^2 - 3p + 1} } {\paren {p q}^2} - 3\)




















\(\ds \)

\(=\)







\(\ds \frac {p q \paren {1 - 3 p \paren {1 - p} } - 3 \paren {p q}^2} {\paren {p q}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {1 - 3 p q - 3 p q} {p q}\)




















\(\ds \)

\(=\)







\(\ds \frac {1 - 6 p q} {p q}\)









$\blacksquare$





