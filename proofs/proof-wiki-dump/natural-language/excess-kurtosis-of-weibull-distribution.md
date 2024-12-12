# 

Source: https://proofwiki.org/wiki/Excess_Kurtosis_of_Weibull_Distribution

Theorem
Let $X$ be a continuous random variable with the Weibull distribution with $\alpha, \beta \in \R_{> 0}$.
Then the excess kurtosis $\gamma_2$ of $X$ is given by: 

$\gamma_2 = \dfrac {\map \Gamma {1 + \dfrac 4 \alpha} - 4 \map \Gamma {1 + \dfrac 1 \alpha} \map \Gamma {1 + \dfrac 3 \alpha}  + 12 \paren {\map \Gamma {1 + \dfrac 1 \alpha} }^2 \map \Gamma {1 + \dfrac 2 \alpha} - 6 \paren {\map \Gamma {1 + \dfrac 1 \alpha} }^4 - 3 \paren {\map \Gamma {1 + \dfrac 2 \alpha} }^2 } {\paren {\map \Gamma {1 + \dfrac 2 \alpha} - \paren {\map \Gamma {1 + \dfrac 1 \alpha} }^2}^2 }$
where $\Gamma$ is the Gamma function.


Proof
From Kurtosis in terms of Non-Central Moments, we have: 

$\gamma_2 = \dfrac {\expect {X^4} - 4 \mu \expect {X^3} + 6 \mu^2 \expect {X^2} - 3 \mu^4} {\sigma^4} - 3$
where: 

$\mu$ is the expectation of $X$.
$\sigma$ is the standard deviation of $X$.
By Expectation of Weibull Distribution we have: 

$\mu = \beta \, \map \Gamma {1 + \dfrac 1 \alpha}$
By Variance of Weibull Distribution we have: 

$\sigma = \beta \, \paren {\map \Gamma {1 + \dfrac 2 \alpha} - \paren {\map \Gamma {1 + \dfrac 1 \alpha} }^2}^{\frac 1 2}$
From Raw Moment of Weibull Distribution, we have:

$\expect {X^n} = \beta^n \map \Gamma {1 + \dfrac n \alpha}$

Hence:














\(\ds \gamma_2\)

\(=\)







\(\ds \frac {\paren {\beta^4 \map \Gamma {1 + \dfrac 4 \alpha} } - 4 \paren {\beta \, \map \Gamma {1 + \dfrac 1 \alpha} } \paren {\beta^3 \map \Gamma {1 + \dfrac 3 \alpha} }  + 6 \paren {\beta \, \map \Gamma {1 + \dfrac 1 \alpha} }^2 \paren {\beta^2 \map \Gamma {1 + \dfrac 2 \alpha} } - 3 \paren {\beta \, \map \Gamma {1 + \dfrac 1 \alpha} }^4} {\paren {\beta \, \paren {\map \Gamma {1 + \dfrac 2 \alpha} - \paren {\map \Gamma {1 + \dfrac 1 \alpha} }^2}^{\frac 1 2} }^4 } - 3\)




















\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma {1 + \dfrac 4 \alpha} - 4 \map \Gamma {1 + \dfrac 1 \alpha} \map \Gamma {1 + \dfrac 3 \alpha}  + 6 \paren {\map \Gamma {1 + \dfrac 1 \alpha} }^2 \map \Gamma {1 + \dfrac 2 \alpha} - 3 \paren {\map \Gamma {1 + \dfrac 1 \alpha} }^4} {\paren {\map \Gamma {1 + \dfrac 2 \alpha} - \paren {\map \Gamma {1 + \dfrac 1 \alpha} }^2}^2 } - 3\)





canceling $\beta^4$














\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma {1 + \dfrac 4 \alpha} - 4 \map \Gamma {1 + \dfrac 1 \alpha} \map \Gamma {1 + \dfrac 3 \alpha}  + 6 \paren {\map \Gamma {1 + \dfrac 1 \alpha} }^2 \map \Gamma {1 + \dfrac 2 \alpha} - 3 \paren {\map \Gamma {1 + \dfrac 1 \alpha} }^4} {\paren {\map \Gamma {1 + \dfrac 2 \alpha} - \paren {\map \Gamma {1 + \dfrac 1 \alpha} }^2}^2 } - \frac {3 \paren {\map \Gamma {1 + \dfrac 2 \alpha} - \paren {\map \Gamma {1 + \dfrac 1 \alpha} }^2}^2} {\paren {\map \Gamma {1 + \dfrac 2 \alpha} - \paren {\map \Gamma {1 + \dfrac 1 \alpha} }^2}^2 }\)





Multiply by $1$














\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma {1 + \dfrac 4 \alpha} - 4 \map \Gamma {1 + \dfrac 1 \alpha} \map \Gamma {1 + \dfrac 3 \alpha}  + 6 \paren {\map \Gamma {1 + \dfrac 1 \alpha} }^2 \map \Gamma {1 + \dfrac 2 \alpha} - 3 \paren {\map \Gamma {1 + \dfrac 1 \alpha} }^4} {\paren {\map \Gamma {1 + \dfrac 2 \alpha} - \paren {\map \Gamma {1 + \dfrac 1 \alpha} }^2}^2 } - \frac {3 \paren {\paren {\map \Gamma {1 + \dfrac 2 \alpha} }^2 - 2 \paren {\map \Gamma {1 + \dfrac 1 \alpha} }^2 \map \Gamma {1 + \dfrac 2 \alpha} + \paren {\map \Gamma {1 + \dfrac 1 \alpha} }^4} } {\paren {\map \Gamma {1 + \dfrac 2 \alpha} - \paren {\map \Gamma {1 + \dfrac 1 \alpha} }^2}^2 }\)





Square of Sum














\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma {1 + \dfrac 4 \alpha} - 4 \map \Gamma {1 + \dfrac 1 \alpha} \map \Gamma {1 + \dfrac 3 \alpha}  + 12 \paren {\map \Gamma {1 + \dfrac 1 \alpha} }^2 \map \Gamma {1 + \dfrac 2 \alpha} - 6 \paren {\map \Gamma {1 + \dfrac 1 \alpha} }^4 - 3 \paren {\map \Gamma {1 + \dfrac 2 \alpha} }^2 } {\paren {\map \Gamma {1 + \dfrac 2 \alpha} - \paren {\map \Gamma {1 + \dfrac 1 \alpha} }^2}^2 }\)









$\blacksquare$





