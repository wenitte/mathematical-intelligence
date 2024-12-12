# 

Source: https://proofwiki.org/wiki/Expectation_of_Gamma_Distribution



Theorem
Let $X \sim \map \Gamma {\alpha, \beta}$ for some $\alpha, \beta > 0$, where $\Gamma$ is the Gamma distribution.
The expectation of $X$ is given by:

$\expect X = \dfrac \alpha \beta$


Proof 1
From the definition of the Gamma distribution, $X$ has probability density function:

$\map {f_X} x = \dfrac {\beta^\alpha x^{\alpha - 1} e^{-\beta x} } {\map \Gamma \alpha}$
From the definition of the expected value of a continuous random variable: 

$\ds \expect X = \int_0^\infty x \map {f_X} x \rd x$
So:














\(\ds \expect X\)

\(=\)







\(\ds \frac {\beta^\alpha} {\map \Gamma \alpha} \int_0^\infty x^\alpha e^{-\beta x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\beta^\alpha} {\map \Gamma \alpha} \int_0^\infty \left({\frac t \beta}\right)^\alpha e^{-t} \frac {\rd t} \beta\)





substituting $t = \beta x$














\(\ds \)

\(=\)







\(\ds \frac {\beta^\alpha} {\beta^{\alpha + 1} \map \Gamma \alpha} \int_0^\infty t^\alpha e^{-t} \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma {\alpha + 1} } {\beta \map \Gamma \alpha}\)





Definition of Gamma Function














\(\ds \)

\(=\)







\(\ds \frac {\alpha \map \Gamma \alpha} {\beta \map \Gamma \alpha}\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \frac \alpha \beta\)









$\blacksquare$


Proof 2
By Moment Generating Function of Gamma Distribution, the moment generating function of $X$ is given by: 

$\map {M_X} t = \paren {1 - \dfrac t \beta}^{-\alpha}$
for $t < \beta$. 
From Moment in terms of Moment Generating Function: 

$\expect X = \map { {M_X}'} 0$
From Moment Generating Function of Gamma Distribution: First Moment: 

$\map { {M_X}'} t = \dfrac {\beta^\alpha \alpha} {\paren {\beta - t}^{\alpha + 1} }$
Hence setting $t = 0$:














\(\ds \map { {M_X}'} 0\)

\(=\)







\(\ds \frac {\beta^\alpha \alpha} {\paren {\beta - 0}^{\alpha + 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\beta^\alpha \alpha} {\beta^{\alpha + 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac \alpha \beta\)









$\blacksquare$


Sources
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $13$: Probability distributions
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $15$: Probability distributions




