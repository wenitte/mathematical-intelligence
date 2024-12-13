# 

Source: https://proofwiki.org/wiki/Raw_Moment_of_Chi-Squared_Distribution

Theorem
Let $n$ and $m$ be strictly positive integers. 
Let $X \sim \chi^2_n$ where $\chi^2_n$ is the chi-squared distribution with $n$ degrees of freedom. 
Then the $m$th raw moment $\expect {X^m}$ of $X$ is given by: 

$\ds \expect {X^m} = \prod_{k \mathop = 0}^{m - 1} \paren {n + 2 k}$


Proof
From the definition of the chi-squared distribution, $X$ has probability density function:

$\ds \map {f_X} x = \dfrac 1 {2^{n / 2} \map \Gamma {n / 2} } x^{\paren {n / 2} - 1} e^{- x / 2}$
From the definition of the expected value of a continuous random variable: 

$\ds \expect {X^m} = \int_0^\infty x^m \map {f_X} x \rd x$
So: 














\(\ds \expect {X^m}\)

\(=\)







\(\ds \frac 1 {2^{n / 2} \map \Gamma {n / 2} } \int_0^\infty x^{\paren {n / 2} + m - 1} e^{-x / 2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 2 {2^{n / 2} \map \Gamma {n / 2} } \int_0^\infty \paren {2 u}^{\paren {n / 2} + m - 1} e^{-u} \rd u\)





substituting $x = 2 u$














\(\ds \)

\(=\)







\(\ds \frac {2^{\paren {n / 2} + m - 1 + 1} } {2^{n / 2} \map \Gamma {n / 2} } \int_0^\infty u^{\paren {n / 2} + m - 1} e^{-u} \rd u\)




















\(\ds \)

\(=\)







\(\ds \frac {2^m} {\map \Gamma {n / 2} } \map \Gamma {\paren {n / 2} + m}\)





Definition of Gamma Function














\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma {n / 2} } {\map \Gamma {n / 2} } 2^m \prod_{k \mathop = 0}^{m - 1} \paren {\frac n 2 + k}\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \prod_{k \mathop = 0}^{m - 1} \paren {n + 2 k}\)









$\blacksquare$





