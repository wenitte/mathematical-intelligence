# 

Source: https://proofwiki.org/wiki/Kurtosis_in_terms_of_Non-Central_Moments

Theorem
Let $X$ be a random variable with expectation $\mu$ and standard deviation $\sigma$.
Then the kurtosis $\alpha_4$ of $X$ is given by: 

$\ds \alpha_4 = \dfrac {\expect {X^4} - 4 \mu \expect {X^3} + 6 \mu^2 \expect {X^2} - 3 \mu^4} {\sigma^4}$


Proof













\(\ds \alpha_4\)

\(=\)







\(\ds \expect {\paren {\dfrac {X - \mu} \sigma}^4}\)





Definition of Kurtosis














\(\ds \)

\(=\)







\(\ds \dfrac {\expect {X^4 - 4 X^3 \mu + 6 X^2 \mu^2 - 4 X \mu^3 + \mu^4} } {\sigma^4}\)





Fourth Power of Difference














\(\ds \)

\(=\)







\(\ds \dfrac {\expect {X^4} - 4 \mu \expect {X^3} + 6 \mu^2 \expect {X^2} - 4 \mu^3 \expect X + \mu^4} {\sigma^4}\)





Expectation is Linear














\(\ds \)

\(=\)







\(\ds \dfrac {\expect {X^4} - 4 \mu \expect {X^3} + 6 \mu^2 \expect {X^2} - 3 \mu^4} {\sigma^4}\)





$\mu = \expect X$



$\blacksquare$





