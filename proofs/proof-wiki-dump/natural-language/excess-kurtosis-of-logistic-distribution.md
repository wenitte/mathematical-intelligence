# 

Source: https://proofwiki.org/wiki/Excess_Kurtosis_of_Logistic_Distribution

Theorem
Let $X$ be a continuous random variable which satisfies the logistic distribution:

$X \sim \map {\operatorname {Logistic} } {\mu, s}$
Then the excess kurtosis $\gamma_2$ of $X$ is equal to $\dfrac 6 5$.


Proof
From Kurtosis in terms of Non-Central Moments, we have: 

$\gamma_2 = \dfrac {\expect {X^4} - 4 \mu \expect {X^3} + 6 \mu^2 \expect {X^2} - 3 \mu^4} {\sigma^4} - 3$
where: 

$\mu$ is the expectation of $X$.
$\sigma$ is the standard deviation of $X$.
By Expectation of Logistic Distribution we have: 

$\mu = \mu$
By Variance of Logistic Distribution we have: 

$\sigma = \dfrac {s \pi} {\sqrt 3}$
From Moment in terms of Moment Generating Function:

$\expect {X^n} = \map { {M_X}^{\paren n} } 0$
where $M_X$ is the moment generating function of $X$.

From Derivatives of Moment Generating Function of Logistic Distribution: 

$\ds \map { {M_X}^{\paren 4} } 0 = \mu^4 \int_{\to 0}^{\to 1} \rd u - 4 \mu^3 s \int_{\to 0}^{\to 1} \map \ln {\dfrac {1 - u} u} \rd u + 6 \mu^2 s^2 \int_{\to 0}^{\to 1} \map {\ln^2} {\dfrac {1 - u} u} \rd u - 4 \mu s^3 \int_{\to 0}^{\to 1} \map {\ln^3} {\dfrac {1 - u} u} \rd u + s^4 \int_{\to 0}^{\to 1} \map {\ln^4} {\dfrac {1 - u} u} \rd u $

Therefore:














\(\ds \expect {X^4}\)

\(=\)







\(\ds \mu^4 - 4 \mu^3 s \paren {0} + 6 \mu^2 s^2 \paren {\dfrac {\pi^2} 3} - 4 \mu s^3 \paren {0} + s^4 \paren {\dfrac {7 \pi^4} {15} }\)





Variance of Logistic Distribution/Lemma 4, Expectation of Logistic Distribution/Lemma 3 and Definite Integral from 0 to 1 of Even Powers of Logarithm of 1 - x over x














\(\ds \)

\(=\)







\(\ds \mu^4 + 2 \mu^2 s^2 \pi^2 + \dfrac {7 s^4 \pi^4} {15}\)









Hence:














\(\ds \gamma_2\)

\(=\)







\(\ds \frac {\paren {\mu^4 + 2 \mu^2 s^2 \pi^2 + \dfrac {7 s^4 \pi^4} {15} } - 4 \mu \paren {\mu^3 + \mu s^2 \pi^2}  + 6 \mu^2 \paren {\mu^2 + \dfrac {s^2 \pi^2} 3} - 3 \mu^4} {\paren { {\dfrac {s \pi} {\sqrt 3} } }^4} - 3\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {1 - 4 + 6 - 3} \mu^4 + \paren {2 - 4 + 2} \mu^2 s^2 \pi^2 + \dfrac {7 s^4 \pi^4} {15} } {\dfrac {s^4 \pi^4} 9} - 3\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\dfrac {21 s^4 \pi^4} 5} {s^4 \pi^4} - 3\)




















\(\ds \)

\(=\)







\(\ds \dfrac 6 5\)





simplifying



$\blacksquare$





