# 

Source: https://proofwiki.org/wiki/Expectation_of_Snedecor%27s_F-Distribution

Theorem
Let $n, m$ be strictly positive integers. 
Let $X \sim F_{n, m}$ where $F_{n, m}$ is Snedecor's $F$-distribution with $\tuple {n, m}$ degrees of freedom.

Then the expectation of $X$ is given by:

$\expect X = \dfrac m {m - 2}$
for $m > 2$, and does not exist otherwise.


Proof
Let $Y$ and $Z$ be independent random variables.
Let $Y \sim \chi^2_n$ where $\chi^2_n$ is the chi-squared distribution with $n$ degrees of freedom. 
Let $Z \sim \chi^2_m$ where $\chi^2_m$ is the chi-squared distribution with $m$ degrees of freedom.
Then, from Quotient of Independent Random Variables with $\chi^2$ Distribution Divided by Degrees of Freedom has Snedecor's $F$-Distribution:

$\dfrac {Y / n} {Z / m} \sim F_{n, m}$
So we aim to compute:

$\expect {\dfrac {Y / n} {Z / m} }$
Let $f_Y$ and $f_Z$ be the probability density functions of $Y$ and $Z$ respectively.
Let $f_{Y, Z}$ be the joint probability density function of $Y$ and $Z$. 
From Condition for Independence from Joint Probability Density Function, we have for each $y, z \in \R_{\ge 0}$: 

$\map {f_{Y, Z} } {y, z} = \map {f_Y} y \map {f_Z} z$
We therefore have: 














\(\ds \expect {\dfrac {Y / n} {Z / m} }\)

\(=\)







\(\ds \int_0^\infty \int_0^\infty \frac {y / n} {z / m} \map {f_{Y, Z} } {y, z} \rd y \rd z\)




















\(\ds \)

\(=\)







\(\ds \frac m n \int_0^\infty \int_0^\infty \frac y z \map {f_Y} y \map {f_Z} z \rd y \rd z\)




















\(\ds \)

\(=\)







\(\ds \frac m n \paren {\int_0^\infty \frac {\map {f_Z} z} z \rd z} \paren {\int_0^\infty y \map {f_Y} y \rd y}\)





rewriting














\(\ds \)

\(=\)







\(\ds \frac m n \paren {\frac 1 {2^{m / 2} \map \Gamma {\frac m 2} } \int_0^\infty z^{m / 2 - 2} e^{-z / 2} \rd z} \paren {\frac 1 {2^{n / 2} \map \Gamma {\frac n 2} } \int_0^\infty y^{n / 2} e^{-y / 2} \rd y}\)





Definition of Chi-Squared Distribution



Note that the integral converges: 

$\ds \int_0^\infty z^{m / 2 - 2} e^{-z / 2} \rd z$
if and only if: 

$\dfrac m 2 - 2 > -1$
That is: 

$m > 2$
With that, we have: 














\(\ds \frac 1 {2^{m / 2} \map \Gamma {\frac m 2} } \int_0^\infty z^{m / 2 - 2} e^{-z / 2} \rd z\)

\(=\)







\(\ds \frac 1 {2^{m / 2 - 1} \map \Gamma {\frac m 2} } \int_0^\infty \paren {2 u}^{m / 2 - 2} e^{-u} \rd u\)





substituting $z = 2 u$














\(\ds \)

\(=\)







\(\ds \frac {2^{m / 2 - 2} } {2^{m / 2 - 1} \map \Gamma {\frac m 2} } \int_0^\infty u^{m / 2 - 2} e^{-u} \rd u\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \frac {\map \Gamma {\frac m 2 - 1} } {\map \Gamma {\frac m 2} }\)





Definition of Gamma Function














\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma {\frac m 2 - 1} } {\paren {\frac m 2 - 1} \map \Gamma {\frac m 2 - 1} }\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \frac 1 {m - 2}\)









The integral: 

$\ds \int_0^\infty y^{n / 2} e^{-y / 2} \rd y$
converges if and only if $n > -2$. 
This is ensured by the fact that $n \in \N$. 
With that, we have: 














\(\ds \frac 1 {2^{n / 2} \map \Gamma {\frac n 2} } \int_0^\infty y^{n / 2} e^{-y / 2} \rd y\)

\(=\)







\(\ds \frac 2 {2^{n / 2} \map \Gamma {\frac n 2} } \int_0^\infty \paren {2 v}^{n / 2} e^{-v} \rd v\)





substituting $y = 2 v$














\(\ds \)

\(=\)







\(\ds \frac {2^{n / 2} } {2^{n / 2 - 1} \map \Gamma {\frac n 2} } \int_0^\infty v^{n / 2} e^{-v} \rd v\)




















\(\ds \)

\(=\)







\(\ds 2 \times \frac {\map \Gamma {\frac n 2 + 1} } {\map \Gamma {\frac n 2} }\)




















\(\ds \)

\(=\)







\(\ds 2 \times \frac {\frac n 2 \map \Gamma {\frac n 2} } {\map \Gamma {\frac n 2} }\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds n\)









So: 














\(\ds \expect {\dfrac {Y / n} {Z / m} }\)

\(=\)







\(\ds \frac {n m} {n \paren {m - 2} }\)




















\(\ds \)

\(=\)







\(\ds \frac m {m - 2}\)









$\blacksquare$





