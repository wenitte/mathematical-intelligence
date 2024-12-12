# 

Source: https://proofwiki.org/wiki/Expectation_of_Normal_Distribution



Theorem
Let $X \sim N \paren {\mu, \sigma^2}$ for some $\mu \in \R, \sigma \in \R_{> 0}$, where $N$ is the normal distribution.
Then: 

$\expect X = \mu$
where $\mu$ denotes the expectation of $X$.


Proof 1
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


Proof 2
By Moment Generating Function of Normal Distribution, the moment generating function of $X$ is given by: 

$\map {M_X} t = \map \exp {\mu t + \dfrac 1 2 \sigma^2 t^2}$
From Moment in terms of Moment Generating Function: 

$\expect X = \map {M'_X} 0$
We have: 














\(\ds \map {M_X'} t\)

\(=\)







\(\ds \frac \d {\d t} \map \exp {\mu t + \dfrac 1 2 \sigma^2 t^2}\)




















\(\ds \)

\(=\)







\(\ds \map {\frac \d {\d t} } {\mu t + \frac 1 2 \sigma^2 t^2} \frac \d {\map \d {\mu t + \dfrac 1 2 \sigma^2 t^2} } \map \exp {\mu t + \dfrac 1 2 \sigma^2 t^2}\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \paren {\mu + \sigma^2 t} \map \exp {\mu t + \dfrac 1 2 \sigma^2 t^2}\)





Derivative of Power, Derivative of Exponential Function



Setting $t = 0$: 














\(\ds \map {M_X'} 0\)

\(=\)







\(\ds \paren {\mu + 0 \sigma^2} \map \exp {0 \mu + 0 \sigma^2}\)




















\(\ds \)

\(=\)







\(\ds \mu \exp 0\)




















\(\ds \)

\(=\)







\(\ds \mu\)





Exponential of Zero



$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): normal distribution
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): normal distribution
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $13$: Probability distributions
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $15$: Probability distributions




