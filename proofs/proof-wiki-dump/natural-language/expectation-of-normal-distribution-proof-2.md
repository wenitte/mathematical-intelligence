# 

Source: https://proofwiki.org/wiki/Expectation_of_Normal_Distribution/Proof_2

Theorem
Let $X \sim N \paren {\mu, \sigma^2}$ for some $\mu \in \R, \sigma \in \R_{> 0}$, where $N$ is the normal distribution.
Then: 

$\expect X = \mu$


Proof
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





