# 

Source: https://proofwiki.org/wiki/Median_of_Normal_Distribution

Theorem
Let $X \sim \Gaussian \mu {\sigma^2}$ for some $\mu \in \R, \sigma \in \R_{> 0}$, where $N$ is the normal distribution.
Then the median of $X$ is equal to $\mu$.


Proof
From the definition of the normal distribution, $X$ has probability density function:

$\map {f_X} x = \dfrac 1 {\sigma \sqrt {2 \pi} } \map \exp {-\dfrac {\paren {x - \mu}^2} {2 \sigma^2} }$
Note that $f_X$ is non-zero, sufficient to ensure a unique median.
By the definition of a median, to prove that $\mu$ is the median of $X$ we must verify: 

$\ds \map \Pr {X < \mu} = \int_{-\infty}^\mu \map {f_X} x \rd x = \frac 1 2$
We have:














\(\ds \int_{-\infty}^\mu \map {f_X} x \rd x\)

\(=\)







\(\ds \frac 1 {\sigma \sqrt {2 \pi} } \int_{-\infty}^\mu \map \exp {-\frac {\paren {x - \mu}^2} {2 \sigma^2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\sqrt 2 \sigma} {\sigma \sqrt {2 \pi} } \int_{-\infty}^{\frac {\mu - \mu} {\sqrt 2 \sigma} } \map \exp {-t^2} \rd t\)





substituting $t = \dfrac {x - \mu} {\sqrt 2 \sigma}$














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt \pi} \int_{-\infty}^0 \map \exp {-t^2} \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 \sqrt \pi} \int_{-\infty}^\infty \map \exp {-t^2} \rd t\)





Definite Integral of Even Function














\(\ds \)

\(=\)







\(\ds \frac {\sqrt \pi} {2 \sqrt \pi}\)





Gaussian Integral














\(\ds \)

\(=\)







\(\ds \frac 1 2\)









$\blacksquare$





