# 

Source: https://proofwiki.org/wiki/Differential_Entropy_of_Exponential_Distribution

Theorem
Let $X$ be a continuous random variable of the exponential distribution with parameter $\beta$ for some $\beta \in \R_{> 0}$. 
Then the differential entropy of $X$, $\map h X$, is given by: 

$\map h X = 1 + \map \ln \beta$


Proof
From the definition of the exponential distribution, $X$ has probability density function:

$\map {f_X} x = \dfrac 1 \beta e^{-\frac x \beta}$
From the definition of differential entropy: 

$\ds \map h X = -\int_0^\infty \map {f_X} x \map \ln {\map {f_X} x} \rd x$
So:














\(\ds \map h X\)

\(=\)







\(\ds -\frac 1 \beta \int_0^\infty e^{-\frac x \beta} \map \ln {\frac 1 \beta e^{-\frac x \beta} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \beta \int_0^\infty e^{-\frac x \beta} \map \ln {\beta e^{\frac x \beta} } \rd x\)





Reciprocal of Logarithm














\(\ds \)

\(=\)







\(\ds \frac {\map \ln \beta} \beta \int_0^\infty e^{-\frac x \beta} \rd x + \frac 1 {\beta^2} \int_0^\infty x e^{-\frac x \beta} \rd x\)





Logarithm of Product, Definition of Natural Logarithm














\(\ds \)

\(=\)







\(\ds \frac {\map \ln \beta} \beta \intlimits {-\beta e^{-\frac x \beta} } 0 \infty + \frac 1 {\beta^2} \paren {\intlimits {-\beta x e^{-\frac x \beta} } 0 \infty + \beta \int_0^\infty e^{-\frac x \beta} \rd x}\)





Primitive of Exponential Function, Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {\beta \map \ln \beta} \beta + \frac 1 \beta \int_0^\infty e^{-\frac x \beta} \rd x\)





Exponential Tends to Zero and Infinity, Limit at Infinity of Polynomial over Real Exponential














\(\ds \)

\(=\)







\(\ds \map \ln \beta + \frac 1 \beta \intlimits {-\beta e^{-\frac x \beta} } 0 \infty\)





Primitive of Exponential Function














\(\ds \)

\(=\)







\(\ds \map \ln \beta + \frac \beta \beta\)





Exponential Tends to Zero and Infinity, Exponential of Zero














\(\ds \)

\(=\)







\(\ds 1 + \map \ln \beta\)









$\blacksquare$





