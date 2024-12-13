# 

Source: https://proofwiki.org/wiki/Moment_Generating_Function_of_Normal_Distribution/Examples/Second_Moment

Examples of Use of Moment Generating Function of Normal Distribution
Let $X \sim N \paren {\mu, \sigma^2}$ for some $\mu \in \R, \sigma \in \R_{> 0}$, where $N$ is the normal distribution.

The second moment generating function of $X$ is given by: 

$\map { {M_X}' '} t = \paren {\sigma^2 + \paren {\mu + \sigma^2 t}^2 } \map \exp {\mu t + \dfrac 1 2 \sigma^2 t^2}$


Proof
We have: 














\(\ds \map { {M_X}' '} t\)

\(=\)







\(\ds \map {\frac \d {\d t} } {\paren {\mu + \sigma^2 t} \map \exp {\mu t + \dfrac 1 2 \sigma^2 t^2} }\)





Moment Generating Function of Normal Distribution: First Moment














\(\ds \)

\(=\)







\(\ds \sigma^2 \map \exp {\mu t + \dfrac 1 2 \sigma^2 t^2} + \paren {\mu + \sigma^2 t}^2 \map \exp {\mu t + \dfrac 1 2 \sigma^2 t^2}\)





Chain Rule for Derivatives, Derivative of Power, Derivative of Exponential Function, Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \paren {\sigma^2 + \paren {\mu + \sigma^2 t}^2 } \map \exp {\mu t + \dfrac 1 2 \sigma^2 t^2}\)





simplifying



$\blacksquare$





