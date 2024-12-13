# 

Source: https://proofwiki.org/wiki/Moment_Generating_Function_of_Chi-Squared_Distribution

Theorem
Let $n$ be a strictly positive integer. 
Let $X \sim \chi^2_n$ where $\chi^2_n$ is the chi-squared distribution with $n$ degrees of freedom. 
Then the moment generating function of $X$, $M_X$, is given by: 

$\map {M_X} t = \begin{cases} \paren {1 - 2 t}^{-n / 2} & : t < \dfrac 1 2 \\ \text{does not exist} & : t \ge \dfrac 1 2 \end{cases}$


Proof
From the definition of the chi-squared distribution, $X$ has probability density function:

$\map {f_X} x = \dfrac 1 {2^{n / 2} \map \Gamma {n / 2} } x^{\paren {n / 2} - 1} e^{- x / 2}$
From the definition of a moment generating function:

$\ds \map {M_X} t = \expect {e^{t X} } = \int_0^\infty e^{t x} \map {f_X} x \rd x$
So: 














\(\ds \map {M_X} t\)

\(=\)







\(\ds \frac 1 {2^{n / 2} \map \Gamma {n / 2} } \int_0^\infty x^{\paren {n / 2} - 1} e^{t x - \paren {x / 2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2^{n / 2} \map \Gamma {n / 2} } \int_0^\infty x^{\paren {n / 2} - 1} e^{-\paren {\paren {1 / 2} - t} x } \rd x\)









Note that if $\dfrac 1 2 - t < 0$, then $e^{-\paren {\paren {1 / 2} - t} x} \to \infty$ by Exponential Tends to Zero and Infinity, so the integral diverges in this case and the expectation fails to exist.
If $\dfrac 1 2 - t = 0$, then $e^{-\paren {\paren {1 / 2} - t} x} = 1$ by Exponential of Zero, so the integral is equal to: 

$\ds \int_0^\infty x^{\paren {n / 2} - 1} \rd x$
However, as $n$ is a strictly positive integer, we have $\dfrac n 2 - 1 > -1$. 
So, the integral diverges in this case by Integral to Infinity of Reciprocal of Power of x, and hence the expectation also fails to exist in this case.
For the integral to converge, we must have $\dfrac 1 2 - t > 0$. That is, when $t < \dfrac 1 2$. 
In this case: 














\(\ds \frac 1 {2^{n / 2} \map \Gamma {n / 2} } \int_0^\infty x^{\paren {n / 2} - 1} e^{-\paren {\paren {1 / 2} - t} x } \rd x\)

\(=\)







\(\ds \frac 1 {2^{n / 2} \map \Gamma {n / 2} \paren {\frac 1 2 - t} } \int_0^\infty \paren {\frac u {\frac 1 2 - t} }^{n / 2 - 1} e^{-u} \rd u\)





Integration by Substitution: $u = \paren {\frac 1 2 - t} x$














\(\ds \)

\(=\)







\(\ds \frac 1 {2^{n / 2} \map \Gamma {n / 2} \paren {\frac 1 2 - t}^{n / 2} } \int_0^\infty u^{n / 2 - 1} e^{-u} \rd u\)




















\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma {n / 2} } {\map \Gamma {n / 2} } \paren {1 - 2 t}^{-n / 2}\)





Definition of Gamma Function














\(\ds \)

\(=\)







\(\ds \paren {1 - 2 t}^{-n / 2}\)









$\blacksquare$


Sources
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $13$: Probability distributions
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $15$: Probability distributions




