# 

Source: https://proofwiki.org/wiki/Raw_Moment_of_Weibull_Distribution

Theorem
Let $X$ be a continuous random variable with the Weibull distribution with $\alpha, \beta \in \R_{> 0}$.
Let $n$ be a strictly positive integer. 

Then the $n$th raw moment $\expect {X^n}$ of $X$ is given by: 

$\expect {X^n} = \beta^n \map \Gamma {1 + \dfrac n \alpha}$
where $\Gamma$ is the Gamma function.


Proof
From the definition of the Weibull distribution, $X$ has probability density function:

$\map {f_X} x = \alpha \beta^{-\alpha} x^{\alpha - 1} e^{-\paren {\frac x \beta}^\alpha}$
where $\Img X = \R_{\ge 0}$.

From the definition of the expected value of a continuous random variable: 

$\ds \expect {X^n} = \int_0^\infty x^n \map {f_X} x \rd x$
Therefore:














\(\ds \expect {X^n}\)

\(=\)







\(\ds \int_0^\infty x^n \alpha \beta^{-\alpha} x^{\alpha - 1} e^{-\paren {\frac x \beta}^\alpha} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty x^n \dfrac \alpha \beta \paren {\dfrac x \beta}^{\alpha - 1} e^{-\paren {\frac x \beta}^\alpha} \rd x\)





Rewriting



Let: 

$u = \paren {\dfrac x \beta}^\alpha$
Then by Chain Rule for Derivatives, we have:

$\dfrac {\d u} {\d x} = \alpha \paren {\dfrac x \beta}^{\alpha - 1} \dfrac 1 \beta$
and also:

$\paren {\beta u^{\frac 1 \alpha} }^n = x^n$
We can see that:

$u \to 0$ as $x \to 0$
and

$u \to \infty$ as $x \to \infty$
Plugging these results back into our integral above, we have:














\(\ds \expect {X^n}\)

\(=\)







\(\ds \int_0^\infty \beta^n u^{\frac n \alpha} e^{-u} \rd u\)




















\(\ds \)

\(=\)







\(\ds \beta^n \int_0^\infty u^{\frac n \alpha + 1 - 1} e^{-u} \rd u\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds \beta^n \map \Gamma {1 + \frac n \alpha}\)





Definition of Gamma Function



$\blacksquare$





