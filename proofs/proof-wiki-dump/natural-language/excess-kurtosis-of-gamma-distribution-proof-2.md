# 

Source: https://proofwiki.org/wiki/Excess_Kurtosis_of_Gamma_Distribution/Proof_2

Theorem
Let $X \sim \map \Gamma {\alpha, \beta}$ for some $\alpha, \beta > 0$, where $\Gamma$ is the Gamma distribution.
Then the excess kurtosis $\gamma_2$ of $X$ is given by: 

$\gamma_2 = \dfrac 6 \alpha$


Proof
From the definition of excess kurtosis, we have: 

$\gamma_2 = \expect {\paren {\dfrac {X - \mu} \sigma}^4} - 3$
where: 

$\mu = \expect X$ is the expectation of $X$
$\sigma = \sqrt {\var X}$ is the standard deviation of $X$.

By Expectation of Gamma Distribution, we have: 

$\mu = \dfrac \alpha \beta$
By Variance of Gamma Distribution, we have: 

$\sigma^2 = \dfrac \alpha {\beta^2}$

From Expectation of Power of Gamma Distribution‎, we have:

$\expect {X^n} = \dfrac {\alpha^{\overline n} } {\beta^n}$
where $\alpha^{\overline n}$ denotes the $n$th rising factorial of $\alpha$.

Hence:














\(\ds \gamma_2\)

\(=\)







\(\ds \dfrac {\expect {X^4} - 4 \mu \expect {X^3} + 6 \mu^2 \expect {X^2} - 3 \mu^4} {\sigma^4} - 3\)





Kurtosis in terms of Non-Central Moments














\(\ds \)

\(=\)







\(\ds \dfrac {\dfrac {\alpha^{\overline 4} } {\beta^4} - 4 \paren {\dfrac \alpha \beta} \dfrac {\alpha^{\overline 3} } {\beta^3} + 6 \paren {\dfrac \alpha \beta}^2 \dfrac {\alpha^{\overline 2} } {\beta^2} - 3 \paren {\dfrac \alpha \beta}^4} {\dfrac {\alpha^2} {\beta^4} } - 3\)





Expectation of Gamma Distribution‎, Variance of Gamma Distribution, Expectation of Power of Gamma Distribution‎














\(\ds \)

\(=\)







\(\ds \paren {\dfrac {\alpha \paren {\alpha + 1} \paren {\alpha + 2} \paren {\alpha + 3} } {\beta^4} - 4 \paren {\dfrac \alpha \beta} \dfrac {\alpha \paren {\alpha + 1} \paren {\alpha + 2} } {\beta^3} + 6 \paren {\dfrac \alpha \beta}^2 \dfrac {\alpha \paren {\alpha + 1} } {\beta^2} - 3 \paren {\dfrac \alpha \beta}^4} \dfrac {\beta^4} {\alpha^2} - 3\)





Definition of Rising Factorial














\(\ds \)

\(=\)







\(\ds \dfrac {\alpha \paren {\alpha + 1} \paren {\alpha + 2} \paren {\alpha + 3} - 4 \alpha^2 \paren {\alpha + 1} \paren {\alpha + 2} + 6 \alpha^3 \paren {\alpha + 1} - 3 \alpha^4} {\alpha^2} - 3\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {\alpha^4 + 6 \alpha^3 + 11 \alpha^2 + 6 \alpha} - 4 \paren {\alpha^4 + 3 \alpha^3 + 2 \alpha^2} + 6 \paren {\alpha^4 + \alpha^3 } - 3 \alpha^4} {\alpha^2} - 3\)





multiplying out














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {1 - 4 + 6 - 3} \alpha^4 + \paren {6 - 12 + 6} \alpha^3 + \paren {11 - 8} \alpha^2 + 6 \alpha} {\alpha^2} - 3\)





gathering terms














\(\ds \)

\(=\)







\(\ds \dfrac {6 \alpha + 3 \alpha^2} {\alpha^2} - 3\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 6 \alpha\)





simplifying



$\blacksquare$





