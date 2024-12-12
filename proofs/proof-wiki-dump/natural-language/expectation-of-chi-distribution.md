# 

Source: https://proofwiki.org/wiki/Expectation_of_Chi_Distribution

Theorem
Let $n$ be a strictly positive integer. 
Let $X \sim \chi_n$ where $\chi_n$ is the chi distribution with $n$ degrees of freedom. 

Then the expectation of $X$ is given by: 

$\expect X = \sqrt 2 \dfrac {\map \Gamma {\paren {n + 1} / 2} } {\map \Gamma {n / 2} }$
where $\Gamma$ is the gamma function.


Proof
From the definition of the chi distribution, $X$ has probability density function:

$\map {f_X} x = \dfrac 1 {2^{\paren {n / 2} - 1} \map \Gamma {n / 2} } x^{n - 1} e^{- x^2 / 2}$
From the definition of the expected value of a continuous random variable:

$\ds \expect X = \int_0^\infty x \map {f_X} x \rd x$
So:














\(\ds \expect X\)

\(=\)







\(\ds \frac 1 {2^{\paren {n / 2} - 1} \map \Gamma {n / 2} } \int_0^\infty x^n e^{- x^2 / 2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2^{\paren {n / 2} - 1 + \paren {1 / 2} } \map \Gamma {n / 2} } \int_0^\infty \frac 1 {\sqrt t} \paren {\sqrt {2 t} }^n e^{- t} \rd t\)





substituting $x = \sqrt {2 t}$














\(\ds \)

\(=\)







\(\ds \frac {2^{\paren {n / 2} } } {2^{\paren {n / 2} - \paren {1 / 2} } \map \Gamma {n / 2} } \int_0^\infty t^{\paren {n - 1} / 2} e^{- t} \rd t\)




















\(\ds \)

\(=\)







\(\ds \sqrt 2 \dfrac {\map \Gamma {\paren {n + 1} / 2} } {\map \Gamma {n / 2} }\)





Definition of Gamma Function



$\blacksquare$





