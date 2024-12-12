# 

Source: https://proofwiki.org/wiki/Differential_Entropy_of_Normal_Distribution

Theorem
Let $X \sim \Gaussian \mu {\sigma^2}$ for some $\mu \in \R, \sigma \in \R_{> 0}$, where $N$ is the normal distribution.
Then the differential entropy $\map h X$ of $X$ is given by: 

$\map h X = \map \ln {\sigma \sqrt {2 \pi} } + \dfrac 1 2$


Proof
From the definition of the normal distribution, $X$ has probability density function:

$\map {f_X} x = \dfrac 1 {\sigma \sqrt {2 \pi} } \, \map \exp {-\dfrac {\paren {x - \mu}^2} {2 \sigma^2} }$
From the definition of differential entropy: 

$\ds \map h X = -\int_{-\infty}^\infty \map {f_X} x \ln \map {f_X} x \rd x$
So:














\(\ds \map h X\)

\(=\)







\(\ds - \frac 1 {\sigma \sqrt{2 \pi} } \int_{-\infty}^\infty \map \exp {-\frac {\paren {x - \mu}^2} {2 \sigma^2} } \map \ln {\frac 1 {\sigma \sqrt {2 \pi} } \map \exp {-\frac {\paren {x - \mu}^2} {2 \sigma^2} } } \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\sigma \sqrt {2 \pi} } \int_{-\infty}^\infty \map \exp {-\frac {\paren {x - \mu}^2} {2 \sigma^2} } \map \ln {\sigma \sqrt {2 \pi} \, \map \exp {\frac {\paren {x - \mu}^2} {2 \sigma^2} } } \rd x\)





Logarithm of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac {\sqrt 2 \sigma} { \sigma \sqrt {2 \pi} } \int_{-\infty}^\infty \map \exp {-t^2} \map \ln {\sigma \sqrt {2 \pi} \, \map \exp {t^2} } \rd t\)





substituting $t = \dfrac {x - \mu} {\sqrt 2 \sigma}$














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt \pi} \int_{-\infty}^\infty \paren {\map \ln {\sigma \sqrt {2 \pi} } + \map \ln {\map \exp {t^2} } } \, \map \exp {-t^2} \rd t\)





Sum of Logarithms














\(\ds \)

\(=\)







\(\ds \frac {\map \ln {\sigma \sqrt {2 \pi} } } {\sqrt \pi} \int_{-\infty}^\infty \map \exp {-t^2} \rd t + \frac 1 {\sqrt \pi} \int_{-\infty}^\infty t^2 \map \exp {-t^2} \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac {\sqrt \pi \, \map \ln {\sigma \sqrt {2 \pi} } } {\sqrt \pi} + \frac 1 {\sqrt \pi} \paren {\intlimits {-\frac t 2 \, \map \exp {-t^2} } {-\infty} \infty + \frac 1 2 \int_{-\infty}^\infty \map \exp {-t^2} \rd t}\)





Gaussian Integral, Integration by Parts, Fundamental Theorem of Calculus














\(\ds \)

\(=\)







\(\ds \map \ln {\sigma \sqrt {2 \pi} } + \frac 1 {2 \sqrt \pi} \int_{-\infty}^\infty \map \exp {-t^2} \rd t\)





Exponential Tends to Zero and Infinity














\(\ds \)

\(=\)







\(\ds \map \ln {\sigma \sqrt {2 \pi} } + \frac {\sqrt \pi} {2 \sqrt \pi}\)





Gaussian Integral














\(\ds \)

\(=\)







\(\ds \map \ln {\sigma \sqrt {2 \pi} } + \frac 1 2\)









$\blacksquare$





