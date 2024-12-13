# 

Source: https://proofwiki.org/wiki/Integral_of_Positive_Measurable_Function_is_Positive_Homogeneous



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f : X \to \overline \R$ be a positive $\Sigma$-measurable function.
Let $\lambda \in \overline \R$ be an extended real number with $\lambda \ge 0$. 

Then:

$\ds \int \lambda f \rd \mu = \lambda \int f \rd \mu$
where:

$\lambda f$ is the pointwise $\lambda$-multiple of $f$
The integral sign denotes $\mu$-integration

This can be summarized by saying that $\ds \int \cdot \rd \mu$ is positive homogeneous.


Corollary
Let $A \in \Sigma$. 

Then: 

$\ds \int_A \lambda f \rd \mu = \lambda \int_A f \rd \mu$
where:

$\lambda f$ is the pointwise $\lambda$-multiple of $f$
the integral sign denotes $\mu$-integration over $A$.
This can be summarized by saying that $\ds \int_A \cdot \rd \mu$ is positive homogeneous.


Proof
Suppose that $\lambda < \infty$. 
From Measurable Function is Pointwise Limit of Simple Functions, there exists an increasing sequence $\sequence {f_n}_{n \mathop \in \N}$ of positive simple functions such that: 

$\ds \map f x = \lim_{n \mathop \to \infty} \map {f_n} x$
From the Multiple Rule for Real Sequences, we have: 

$\ds \lambda \map f x = \lim_{n \mathop \to \infty} \paren {\lambda \map {f_n} x}$
for each $x \in X$. 
We then have: 














\(\ds \int \lambda f \rd \mu\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int \lambda f_n \rd \mu\)





Integral of Positive Measurable Function as Limit of Integrals of Positive Simple Functions














\(\ds \)

\(=\)







\(\ds \lambda \lim_{n \mathop \to \infty} \int f_n \rd \mu\)





Integral of Positive Simple Function is Positive Homogeneous














\(\ds \)

\(=\)







\(\ds \lambda \int f \rd \mu\)





Integral of Positive Measurable Function as Limit of Integrals of Positive Simple Functions



so we get the demand in the case $\lambda < \infty$.

Now suppose that $\lambda = \infty$. 
We can write: 

$\ds \lambda f = \lim_{k \mathop \to \infty} k f$
Since $f \ge 0$, the sequence $\sequence {k f}_{k \mathop \in \N}$ is increasing, we have: 

$\ds \int \lambda f \rd \mu = \lim_{k \mathop \to \infty} \int k f \rd \mu$
from the monotone convergence theorem.
From our earlier work, we have: 

$\ds \int k f \rd \mu = k \int f \rd \mu$
so that: 














\(\ds \int \lambda f \rd \mu\)

\(=\)







\(\ds \lim_{k \to \infty} k \int f \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \paren {\lim_{k \to \infty} k} \int f \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \lambda \int f \rd \mu\)









giving the demand in the case $\lambda = \infty$.
$\blacksquare$


Also see
Integral of Positive Simple Function is Positive Homogeneous, a similar result for positive simple functions.


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $9.8 \ \text{(ii)}$, $\S 9$: Problem $2$




