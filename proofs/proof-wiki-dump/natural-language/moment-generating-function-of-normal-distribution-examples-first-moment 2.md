# 

Source: https://proofwiki.org/wiki/Moment_Generating_Function_of_Normal_Distribution/Examples/First_Moment

Examples of Use of Moment Generating Function of Normal Distribution
Let $X \sim N \paren {\mu, \sigma^2}$ for some $\mu \in \R, \sigma \in \R_{> 0}$, where $N$ is the normal distribution.

The first moment generating function of $X$ is given by: 

$\map { {M_X}'} t = \paren {\mu + \sigma^2 t} \map \exp {\mu t + \dfrac 1 2 \sigma^2 t^2}$


Proof
We have: 














\(\ds \map { {M_X}'} t\)

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



$\blacksquare$





