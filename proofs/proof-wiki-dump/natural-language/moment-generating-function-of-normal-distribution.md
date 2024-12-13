# 

Source: https://proofwiki.org/wiki/Moment_Generating_Function_of_Normal_Distribution



Theorem
Let $X \sim \Gaussian \mu {\sigma^2}$ for some $\mu \in \R, \sigma \in \R_{> 0}$, where $N$ is the normal distribution.
Then the moment generating function $M_X$ of $X$ is given by: 

$\map {M_X} t = \map \exp {\mu t + \dfrac 1 2 \sigma^2 t^2}$


Proof
From the definition of the normal distribution, $X$ has probability density function:

$\map {f_X} x = \dfrac 1 {\sigma \sqrt{2 \pi} } \map \exp {-\dfrac {\paren {x - \mu}^2} {2 \sigma^2} }$
From the definition of a moment generating function:

$\ds \map {M_X} t = \expect { e^{t X} } = \int_{-\infty}^\infty e^{t x} \map {f_X} x \rd x$
So: 














\(\ds \map {M_X} t\)

\(=\)







\(\ds \frac 1 {\sigma \sqrt{2 \pi} } \int_{-\infty}^\infty \map \exp {t x - \frac {\paren {x - \mu}^2} {2 \sigma^2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\sqrt 2 \sigma} {\sigma \sqrt {2 \pi} } \int_{-\infty}^\infty \map \exp {\paren {\sqrt 2 \sigma u + \mu} t - u^2} \rd u\)





substituting $u = \dfrac {x - \mu} {\sqrt 2 \sigma}$














\(\ds \)

\(=\)







\(\ds \frac {\exp \mu t} {\sqrt \pi} \int_{-\infty}^\infty \map \exp {-\paren {u^2 - \sqrt 2 \sigma u t} } \rd u\)




















\(\ds \)

\(=\)







\(\ds \frac {\exp \mu t} {\sqrt \pi} \int_{-\infty}^\infty \map \exp {-\paren {u - \frac {\sqrt 2} 2 \sigma t}^2 + \frac 1 2 \sigma^2 t^2} \rd u\)




















\(\ds \)

\(=\)







\(\ds \frac {\map \exp {\mu t + \frac 1 2 \sigma^2 t^2} } {\sqrt \pi} \int_{-\infty}^\infty \map \exp {-v^2} \rd v\)





substituting $v = u - \dfrac {\sqrt 2} 2 \sigma t$














\(\ds \)

\(=\)







\(\ds \frac {\sqrt \pi \map \exp {\mu t + \frac 1 2 \sigma^2 t^2} } {\sqrt \pi}\)





Gaussian Integral














\(\ds \)

\(=\)







\(\ds \map \exp {\mu t + \dfrac 1 2 \sigma^2 t^2}\)









$\blacksquare$


Examples
First Moment
The first moment generating function of $X$ is given by: 

$\map { {M_X}'} t = \paren {\mu + \sigma^2 t} \map \exp {\mu t + \dfrac 1 2 \sigma^2 t^2}$


Second Moment
The second moment generating function of $X$ is given by: 

$\map { {M_X}' '} t = \paren {\sigma^2 + \paren {\mu + \sigma^2 t}^2 } \map \exp {\mu t + \dfrac 1 2 \sigma^2 t^2}$


Third Moment
The third moment generating function of $X$ is given by: 

$\map { {M_X}' ' '} t = \paren {3 \sigma^2 \paren {\mu + \sigma^2 t} + \paren {\mu + \sigma^2 t}^3} \map \exp {\mu t + \dfrac 1 2 \sigma^2 t^2}$


Fourth Moment
The fourth moment generating function of $X$ is given by: 

$\map { {M_X}^{\paren 4} } t = \paren {3 \sigma^4 + 6 \sigma^2 \paren {\mu + \sigma^2 t}^2 + \paren {\mu + \sigma^2 t}^4} \map \exp {\mu t + \dfrac 1 2 \sigma^2 t^2}$


Sources
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $13$: Probability distributions
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $15$: Probability distributions




