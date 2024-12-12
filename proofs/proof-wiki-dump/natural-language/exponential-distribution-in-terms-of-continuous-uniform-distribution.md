# 

Source: https://proofwiki.org/wiki/Exponential_Distribution_in_terms_of_Continuous_Uniform_Distribution

Theorem
Let $X \sim \mathrm U \hointl 0 1$ where $\mathrm U \hointl 0 1$ is the continuous uniform distribution on $\hointl 0 1$.
Let $\beta$ be a positive real number.

Then: 

$-\beta \ln X \sim \Exponential \lambda$
where $\Exponential \cdot$ is the exponential distribution.


Proof
Let $Y \sim \Exponential \lambda$.
We aim to show that:

$\map \Pr {Y < -\beta \ln x} = \map \Pr {X > x}$
for all $x \in \hointl 0 1$.
We have:














\(\ds \map \Pr {Y < -\beta \ln x}\)

\(=\)







\(\ds \frac 1 \beta \int_0^{-\beta \ln x} \map \exp {-\frac u \beta} \rd u\)





Definition of Exponential Distribution














\(\ds \)

\(=\)







\(\ds \intlimits {-\map \exp {-\frac u \beta} } 0 {-\beta \ln x}\)





Primitive of $\exp a x$














\(\ds \)

\(=\)







\(\ds -\map \exp {-\frac {-\beta \ln x} {\beta} } + \map \exp 0\)




















\(\ds \)

\(=\)







\(\ds 1 - x\)





Definition of Natural Logarithm, Exponential of Zero














\(\ds \)

\(=\)







\(\ds \frac 1 {1 - 0} \int_x^1 \rd u\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds \map \Pr {X > x}\)





Definition of Continuous Uniform Distribution



$\blacksquare$





