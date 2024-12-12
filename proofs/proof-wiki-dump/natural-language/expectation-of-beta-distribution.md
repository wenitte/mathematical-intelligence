# 

Source: https://proofwiki.org/wiki/Expectation_of_Beta_Distribution

Theorem
Let $X \sim \BetaDist \alpha \beta$ for some $\alpha, \beta > 0$, where $\operatorname{Beta}$ denotes the beta distribution. 
Then:

$\expect X = \dfrac \alpha {\alpha + \beta}$


Proof 1
From the definition of the beta distribution, $X$ has probability density function:

$\map {f_X} x = \dfrac {x^{\alpha - 1} \paren {1 - x}^{\beta - 1} } {\map \Beta {\alpha, \beta} }$
From the definition of the expected value of a continuous random variable: 

$\ds \expect X = \int_0^1 x \map {f_X} x \rd x$
So:














\(\ds \expect X\)

\(=\)







\(\ds \frac 1 {\map \Beta {\alpha, \beta} } \int_0^1 x^\alpha \paren {1 - x}^{\beta - 1} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\map \Beta {\alpha + 1, \beta} } {\map \Beta {\alpha, \beta} }\)





Definition 1 of Beta Function














\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma {\alpha + 1} \map \Gamma \beta} {\map \Gamma {\alpha + \beta + 1} } \cdot \frac {\map \Gamma {\alpha + \beta} } {\map \Gamma \alpha \map \Gamma \beta}\)





Definition 3 of Beta Function














\(\ds \)

\(=\)







\(\ds \frac \alpha {\alpha + \beta} \cdot \frac {\map \Gamma \alpha \map \Gamma \beta \map \Gamma {\alpha + \beta} } {\map \Gamma \alpha \map \Gamma \beta \map \Gamma {\alpha + \beta} }\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \frac \alpha {\alpha + \beta}\)









$\blacksquare$


Proof 2













\(\ds \expect X\)

\(=\)







\(\ds \prod_{r \mathop = 0}^0 \frac {\alpha + r} {\alpha + \beta + r}\)





Raw Moment of Beta Distribution














\(\ds \)

\(=\)







\(\ds \frac {\alpha + 0} {\alpha + \beta + 0}\)




















\(\ds \)

\(=\)







\(\ds \frac \alpha {\alpha + \beta}\)









$\blacksquare$





