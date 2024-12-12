# 

Source: https://proofwiki.org/wiki/Expectation_of_Normal_Distribution/Proof_1

Theorem
Let $X \sim N \paren {\mu, \sigma^2}$ for some $\mu \in \R, \sigma \in \R_{> 0}$, where $N$ is the normal distribution.
Then: 

$\expect X = \mu$


Proof
From the definition of the normal distribution, $X$ has probability density function:

$\map {f_X} x = \dfrac 1 {\sigma \sqrt{2 \pi} } \map \exp {-\dfrac {\paren {x - \mu}^2} {2 \sigma^2} }$
From the definition of the expected value of a continuous random variable: 

$\ds \expect X = \int_{-\infty}^\infty x \map {f_X} x \rd x$
So:














\(\ds \expect X\)

\(=\)







\(\ds \frac 1 {\sigma \sqrt {2 \pi} } \int_{-\infty}^\infty x \map \exp {-\frac {\paren {x - \mu}^2} {2 \sigma^2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\sqrt 2 \sigma} {\sigma \sqrt {2 \pi} } \int_{-\infty}^\infty \paren {\sqrt 2 \sigma t + \mu} \map \exp {-t^2} \rd t\)





substituting $t = \dfrac {x - \mu} {\sqrt 2 \sigma}$














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt \pi} \paren {\sqrt 2 \sigma \int_{-\infty}^\infty t \map \exp {-t^2} \rd t + \mu \int_{-\infty}^\infty \map \exp {-t^2} \rd t}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt \pi} \paren {\sqrt 2 \sigma \intlimits {-\frac 1 2 \map \exp {-t^2} } {-\infty} \infty + \mu \sqrt \pi}\)





Fundamental Theorem of Calculus, Gaussian Integral














\(\ds \)

\(=\)







\(\ds \frac {\mu \sqrt \pi} {\sqrt \pi}\)





Exponential Tends to Zero and Infinity














\(\ds \)

\(=\)







\(\ds \mu\)









$\blacksquare$





