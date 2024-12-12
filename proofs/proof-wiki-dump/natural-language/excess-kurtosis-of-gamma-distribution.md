# 

Source: https://proofwiki.org/wiki/Excess_Kurtosis_of_Gamma_Distribution

Theorem
Let $X \sim \map \Gamma {\alpha, \beta}$ for some $\alpha, \beta > 0$, where $\Gamma$ is the Gamma distribution.
Then the excess kurtosis $\gamma_2$ of $X$ is given by: 

$\gamma_2 = \dfrac 6 \alpha$


Proof 1
From the definition of excess kurtosis, we have: 

$\gamma_2 = \expect {\paren {\dfrac {X - \mu} \sigma}^4} - 3$
where: 

$\mu$ is the expectation of $X$.
$\sigma$ is the standard deviation of $X$.
By Expectation of Gamma Distribution, we have: 

$\mu = \dfrac \alpha \beta$
By Variance of Gamma Distribution, we have: 

$\sigma = \dfrac {\sqrt \alpha} \beta$
So: 














\(\ds \gamma_2\)

\(=\)







\(\ds \dfrac {\expect {X^4} - 4 \mu \expect {X^3} + 6 \mu^2 \expect {X^2} - 3 \mu^4} {\sigma^4} - 3\)





Kurtosis in terms of Non-Central Moments














\(\ds \)

\(=\)







\(\ds \frac {\expect {X^4} - 4 \paren {\dfrac \alpha \beta} \paren {\dfrac {\alpha \paren {\alpha + 1} \paren {\alpha + 2} } {\beta^3} } + 6 \paren {\dfrac \alpha \beta}^2 \paren {\dfrac {\alpha \paren {\alpha + 1} } {\beta^2} } - 3 \paren {\dfrac \alpha \beta}^4} {\paren {\dfrac {\alpha^2} {\beta^4} } } - 3\)





Skewness of Gamma Distribution, Variance of Gamma Distribution




To calculate $\gamma_2$, we must calculate $\expect {X^4}$.
We find this using the moment generating function of $X$, $M_X$. 
By Moment Generating Function of Gamma Distribution, this is given by: 

$\map {M_X} t = \paren {1 - \dfrac t \beta}^{-\alpha} = \beta^\alpha \paren {\beta - t}^{-\alpha}$
From Moment in terms of Moment Generating Function:

$\expect {X^4} = \map {M_X'} 0$
So:














\(\ds \map {M_X'} t\)

\(=\)







\(\ds \beta^\alpha \paren {-\alpha } \paren {\beta - t}^{-\alpha - 1} \paren {-1}\)





Chain Rule for Derivatives, Derivative of Power














\(\ds \)

\(=\)







\(\ds \beta^\alpha \alpha  \paren {\beta - t}^{-\alpha - 1}\)




















\(\ds \map {M_X} t\)

\(=\)







\(\ds \beta^\alpha \alpha \paren {-\alpha - 1}  \paren {\beta - t}^{-\alpha - 2} \paren {-1}\)





Chain Rule for Derivatives, Derivative of Power














\(\ds \)

\(=\)







\(\ds \beta^\alpha \alpha \paren {\alpha + 1}  \paren {\beta - t}^{-\alpha - 2}\)




















\(\ds \map {M_X} t\)

\(=\)







\(\ds \paren {-\alpha - 2} \beta^\alpha \alpha \paren {\alpha + 1}  \paren {\beta - t}^{-\alpha - 3} \paren {-1}\)





Chain Rule for Derivatives, Derivative of Power














\(\ds \)

\(=\)







\(\ds \beta^\alpha \alpha \paren {\alpha + 1} \paren {\alpha + 2}  \paren {\beta - t}^{-\alpha - 3}\)




















\(\ds \map {M_X'} t\)

\(=\)







\(\ds \paren {-\alpha - 3} \alpha \paren {\alpha + 1} \paren {\alpha + 2} \beta^\alpha  \paren {\beta - t}^{-\alpha - 4} \paren {-1}\)





Chain Rule for Derivatives, Derivative of Power














\(\ds \)

\(=\)







\(\ds \alpha \paren {\alpha + 1} \paren {\alpha + 2} \paren {\alpha + 3} \beta^\alpha  \paren {\beta - t}^{-\alpha - 4}\)









Setting $t = 0$:














\(\ds \expect {X^4}\)

\(=\)







\(\ds \alpha \paren {\alpha + 1} \paren {\alpha + 2} \paren {\alpha + 3} \beta^\alpha  \paren {\beta - 0}^{-\alpha - 4}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\alpha \paren {\alpha + 1} \paren {\alpha + 2} \paren {\alpha + 3} } {\beta^4}\)









Plugging this result back into our equation above:














\(\ds \gamma_2\)

\(=\)







\(\ds \frac {\expect {X^4} - 4 \paren {\dfrac \alpha \beta} \paren {\dfrac {\alpha \paren {\alpha + 1} \paren {\alpha + 2} } {\beta^3} } + 6 \paren {\dfrac \alpha \beta}^2 \paren {\dfrac {\alpha \paren {\alpha + 1} } {\beta^2} } - 3 \paren {\dfrac \alpha \beta}^4} {\paren {\dfrac {\alpha^2} {\beta^4} } } - 3\)




















\(\ds \)

\(=\)







\(\ds \frac {\dfrac {\alpha \paren {\alpha + 1} \paren {\alpha + 2} \paren {\alpha + 3} } {\beta^4} - 4 \paren {\dfrac \alpha \beta} \paren {\dfrac {\alpha \paren {\alpha + 1} \paren {\alpha + 2} } {\beta^3} } + 6 \paren {\dfrac \alpha \beta}^2 \paren {\dfrac {\alpha \paren {\alpha + 1} } {\beta^2} } - 3 \paren {\dfrac \alpha \beta}^4} {\paren {\dfrac {\alpha^2} {\beta^4} } } - 3\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {\alpha^4 + 6 \alpha^3 + 11 \alpha^2 + 6 \alpha} - 4 \paren {\alpha^4 + 3 \alpha^3 + 2 \alpha^2}  + 6 \paren {\alpha^4 + \alpha^3 } - 3 \alpha^4} {\paren {\alpha^2 } } - 3\)





$\beta^4$ cancels














\(\ds \)

\(=\)







\(\ds \frac {\paren {1 - 4 + 6 - 3} \alpha^4 + \paren {6 - 12 + 6} \alpha^3 + \paren {11 - 8} \alpha^2 + 6 \alpha } {\paren {\alpha^2 } } - 3\)




















\(\ds \)

\(=\)







\(\ds \dfrac 6 \alpha\)









$\blacksquare$


Proof 2
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





