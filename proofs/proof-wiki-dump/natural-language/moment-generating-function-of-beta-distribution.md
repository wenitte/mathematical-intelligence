# 

Source: https://proofwiki.org/wiki/Moment_Generating_Function_of_Beta_Distribution

Theorem
Let $X \sim \BetaDist \alpha \beta$ denote the Beta distribution fior some $\alpha, \beta > 0$.
Then the moment generating function $M_X$ of $X$ is given by: 

$\ds \map {M_X} t = 1 + \sum_{k \mathop = 1}^\infty \paren {\prod_{r \mathop = 0}^{k - 1} \frac {\alpha + r} {\alpha + \beta + r} } \frac {t^k} {k!}$


Proof
From the definition of the Beta distribution, $X$ has probability density function:

$\map {f_X} x = \dfrac {x^{\alpha - 1} \paren {1 - x}^{\beta - 1} } {\map \Beta {\alpha, \beta} }$
From the definition of a moment generating function:

$\ds \map {M_X} t = \expect {e^{t X} } = \int_0^1 e^{t x} \map {f_X} x \rd x$
So:














\(\ds \map {M_X} t\)

\(=\)







\(\ds \frac 1 {\map \Beta {\alpha, \beta} } \int_0^1 e^{t x} x^{\alpha - 1} \paren {1 - x}^{\beta - 1} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\map \Beta {\alpha, \beta} } \int_0^1 \paren {\sum_{k \mathop = 0}^\infty \frac {\paren {t x}^k} {k!} } x^{\alpha - 1} \paren {1 - x}^{\beta - 1} \rd x\)





Power Series Expansion for Exponential Function














\(\ds \)

\(=\)







\(\ds \frac 1 {\map \Beta {\alpha, \beta} } \sum_{k \mathop = 0}^\infty \frac {t^k} {k!} \int_0^1 x^{\alpha + k - 1} \paren {1 - x}^{\beta - 1} \rd x\)





Power Series is Termwise Integrable within Radius of Convergence














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac{t^k} {k!} \paren {\frac {\map \Beta {\alpha + k, \beta} } {\map \Beta {\alpha, \beta} } }\)





Definition of Beta Function














\(\ds \)

\(=\)







\(\ds \frac {\map \Beta {\alpha, \beta} } {\map \Beta {\alpha, \beta} } \frac {t^0} {0!} + \sum_{k \mathop = 1}^\infty \frac{t^k} {k!} \paren {\frac {\map \Beta {\alpha + k, \beta} } {\map \Beta {\alpha, \beta} } }\)




















\(\ds \)

\(=\)







\(\ds 1 + \sum_{k \mathop = 1}^\infty \paren {\frac {\map \Gamma {\alpha + k} \map \Gamma \beta} {\map \Gamma {\alpha + \beta + k} } \cdot \frac {\map \Gamma {\alpha + \beta} } {\map \Gamma \alpha \map \Gamma \beta} } \frac{t^k} {k!}\)





Definition 3 of Beta Function














\(\ds \)

\(=\)







\(\ds 1 + \sum_{k \mathop = 1}^\infty \paren {\frac {\map \Gamma {\alpha + k} } {\map \Gamma \alpha} \cdot \frac {\map \Gamma {\alpha + \beta} } {\map \Gamma {\alpha + \beta + k} } } \frac{t^k} {k!}\)




















\(\ds \)

\(=\)







\(\ds 1 + \sum_{k \mathop = 1}^\infty \paren {\frac {\map \Gamma \alpha \prod_{r \mathop = 0}^k \paren {\alpha + r} } {\map \Gamma \alpha} \cdot \frac {\map \Gamma {\alpha + \beta} } {\map \Gamma {\alpha + \beta} \prod_{r \mathop = 0}^k \paren {\alpha + \beta + r} } } \frac{t^k} {k!}\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds 1 + \sum_{k \mathop = 1}^\infty \paren {\prod_{r \mathop = 0}^{k - 1} \frac {\alpha + r} {\alpha + \beta + r} } \frac{t^k} {k!}\)





Product of Products



$\blacksquare$





