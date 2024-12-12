# 

Source: https://proofwiki.org/wiki/Excess_Kurtosis_of_Geometric_Distribution/Formulation_1

Theorem
Let $X$ be a discrete random variable with the geometric distribution with parameter $p$ for some $0 < p < 1$.

$\map X \Omega = \set {0, 1, 2, \ldots} = \N$
$\map \Pr {X = k} = \paren {1 - p} p^k$

Then the excess kurtosis $\gamma_2$ of $X$ is given by: 

$\gamma_2 = 6 + \dfrac {\paren {1 - p}^2} p$


Proof
From the definition of excess kurtosis, we have: 

$\gamma_2 = \expect {\paren {\dfrac {X - \mu} \sigma}^4} - 3$
where: 

$\mu$ is the expectation of $X$.
$\sigma$ is the standard deviation of $X$.
By Expectation of Geometric Distribution: Formulation 1, we have: 

$\mu = \dfrac p {1 - p}$
By Variance of Geometric Distribution: Formulation 1, we have: 

$\sigma = \dfrac {\sqrt p } {1 - p}$
So: 














\(\ds \gamma_2\)

\(=\)







\(\ds \dfrac {\expect {X^4} - 4 \mu \expect {X^3} + 6 \mu^2 \expect {X^2} - 3 \mu^4} {\sigma^4} - 3\)





Kurtosis in terms of Non-Central Moments














\(\ds \)

\(=\)







\(\ds \frac {\expect {X^4} - 4 \paren {\dfrac p {1 - p} } \dfrac {p \paren {1 + 4 p + p^2} } {\paren {1 - p}^3 } + 6 \paren {\dfrac p {1 - p} }^2 \dfrac {p \paren {1 + p} } {\paren {1 - p}^2 } - 3 \paren {\dfrac p {1 - p} }^4 } {\paren {\dfrac {\sqrt p } {1 - p} }^4 }  - 3\)





Skewness of Geometric Distribution: Formulation 1




To calculate $\gamma_2$, we must calculate $\expect {X^4}$.
We find this using the moment generating function of $X$, $M_X$. 
From Moment in terms of Moment Generating Function:

$\expect {X^4} = \map { {M_X}^{\paren 4} } 0$
From Moment Generating Function of Geometric Distribution: Fourth Moment: 

$\map { {M_X}^{\paren 4} } t = p \paren {1 - p } e^t \paren {\dfrac {1 + 11p e^t + 11 p^2 e^{2t} + p^3 e^{3t} } {\paren {1 - p e^t}^5 } }$
Setting $t = 0$ and from Exponential of Zero, we have:

$\expect {X^4} = p \paren {\dfrac {1 + 11p + 11 p^2 + p^3 } {\paren {1 - p}^4 } }$

So:














\(\ds \gamma_2\)

\(=\)







\(\ds \frac {\expect {X^4} - 4 \paren {\dfrac p {1 - p} } \dfrac {p \paren {1 + 4 p + p^2} } {\paren {1 - p}^3 } + 6 \paren {\dfrac p {1 - p} }^2 \dfrac {p \paren {1 + p} } {\paren {1 - p}^2 } - 3 \paren {\dfrac p {1 - p} }^4 } {\paren {\dfrac {\sqrt p } {1 - p} }^4 }  - 3\)




















\(\ds \)

\(=\)







\(\ds \frac {p \paren {\dfrac {1 + 11p + 11 p^2 + p^3 } {\paren {1 - p}^4 } } - 4 \paren {\dfrac p {1 - p} } \dfrac {p \paren {1 + 4 p + p^2} } {\paren {1 - p}^3 } + 6 \paren {\dfrac p {1 - p} }^2 \dfrac {p \paren {1 + p} } {\paren {1 - p}^2 } - 3 \paren {\dfrac p {1 - p} }^4 } {\paren {\dfrac {\sqrt p } {1 - p} }^4 }  - 3\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {1 + 11p + 11 p^2 + p^3} - 4 \paren {p \paren {1 + 4 p + p^2} } + 6 \paren {p^2 \paren {1 + p} } - 3 p^3 } {p } - 3\)





$\dfrac p {\paren {1 - p}^4}$ cancels














\(\ds \)

\(=\)







\(\ds \frac {\paren {1 - 4 + 6 - 3} p^3 + \paren {11 - 16 + 6} p^2 + \paren {11 - 4} p + 1} {p } - 3\)




















\(\ds \)

\(=\)







\(\ds \frac {p^2 + 7 p + 1} {p } - \frac {3p} p\)




















\(\ds \)

\(=\)







\(\ds \frac {6 p + 1 - 2 p + p^2 } {p }\)




















\(\ds \)

\(=\)







\(\ds 6 + \dfrac {\paren {1 - p}^2} p\)









$\blacksquare$





