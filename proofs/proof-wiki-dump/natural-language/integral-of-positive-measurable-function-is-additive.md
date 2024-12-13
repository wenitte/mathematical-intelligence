# 

Source: https://proofwiki.org/wiki/Integral_of_Positive_Measurable_Function_is_Additive



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f : X \to \overline \R$ and $g : X \to \overline \R$ be positive $\Sigma$-measurable functions.

Then:

$\ds \int \paren {f + g} \rd \mu = \int f \rd \mu + \int g \rd \mu$
where:

$f + g$ is the pointwise sum of $f$ and $g$
the integral sign denotes $\mu$-integration

This can be summarized by saying that $\ds \int \cdot \rd \mu$ is additive.


Corollary
Let $A \in \Sigma$. 

Then: 

$\ds \int_A \paren {f + g} \rd \mu = \int_A f \rd \mu + \int_A g \rd \mu$
where:

$f + g$ is the pointwise sum of $f$ and $g$
the integral sign denotes $\mu$-integration over $A$.

This can be summarized by saying that $\ds \int_A \cdot \rd \mu$ is additive.


Proof
From Measurable Function is Pointwise Limit of Simple Functions, there exists an increasing sequence $\sequence {f_n}_{n \mathop \in \N}$ of positive simple functions such that: 

$\ds \map f x = \lim_{n \mathop \to \infty} \map {f_n} x$
for each $x \in X$. 
Similarly, there exists an increasing sequence $\sequence {g_n}_{n \mathop \in \N}$ of positive simple functions such that: 

$\ds \map g x = \lim_{n \mathop \to \infty} \map {g_n} x$
for each $x \in X$. 
From the Sum Rule for Real Sequences, we have: 

$\ds \map f x + \map g x = \lim_{n \mathop \to \infty} \paren {\map {f_n} x + \map {g_n} x}$
for each $x \in X$.
We then have: 














\(\ds \int \paren {f + g} \rd \mu\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int \paren {f_n + g_n} \rd \mu\)





Integral of Positive Measurable Function as Limit of Integrals of Positive Simple Functions














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\int f_n \rd \mu + \int g_n \rd \mu}\)





Integral of Positive Simple Function is Additive














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int f_n \rd \mu + \lim_{n \mathop \to \infty} \int g_n \rd \mu\)





Sum Rule for Real Sequences














\(\ds \)

\(=\)







\(\ds \int f \rd \mu + \int g \rd \mu\)





Integral of Positive Measurable Function as Limit of Integrals of Positive Simple Functions



$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $9.8 \ \text{(iii)}$, $\S 9$: Problem $2$




