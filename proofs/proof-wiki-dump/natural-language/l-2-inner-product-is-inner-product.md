# 

Source: https://proofwiki.org/wiki/L-2_Inner_Product_is_Inner_Product



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $\map {\mathcal L^2} {X, \Sigma, \mu}$ be the Lebesgue $2$-space of $\struct {X, \Sigma, \mu}$.
Let $\map {L^2} {X, \Sigma, \mu}$ be the $L^2$ space of $\struct {X, \Sigma, \mu}$.
Let $\innerprod \cdot \cdot$ be the $L^2$ inner product.

Then $\innerprod \cdot \cdot$ is an inner product on $\map {L^2} {X, \Sigma, \mu}$.


Proof
Proof of Symmetry
Let $E, F \in \map {L^2} {X, \Sigma, \mu}$.
Let $E = \eqclass f \sim$ and $F = \eqclass g \sim$.
Then: 














\(\ds \innerprod E F\)

\(=\)







\(\ds \int \paren {f \cdot g} \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int \paren {g \cdot f} \rd \mu\)





Real Multiplication is Commutative














\(\ds \)

\(=\)







\(\ds \innerprod F E\)









$\Box$

Proof of Linearity in First Argument
Let $E, F, G \in \map {L^2} {X, \Sigma, \mu}$ and $\alpha \in \R$.
Let $E = \eqclass f \sim$, $F = \eqclass g \sim$ and $G = \eqclass h \sim$. 
Then: 














\(\ds \innerprod {E + \alpha F} G\)

\(=\)







\(\ds \innerprod {\eqclass f \sim + \alpha \eqclass g \sim} {\eqclass h \sim}\)




















\(\ds \)

\(=\)







\(\ds \innerprod {\eqclass f \sim + \eqclass {\alpha g} \sim} {\eqclass h \sim}\)





Definition of Pointwise Scalar Multiplication on Space of Real-Valued Measurable Functions Identified by A.E. Equality














\(\ds \)

\(=\)







\(\ds \innerprod {\eqclass {f + \alpha g} \sim} {\eqclass h \sim}\)





Definition of Pointwise Addition on Space of Real-Valued Measurable Functions Identified by A.E. Equality














\(\ds \)

\(=\)







\(\ds \int \paren {f + \alpha g} \cdot h \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int \paren {f \cdot h} \rd \mu + \int \paren {\alpha g} \cdot h \rd \mu\)





Integral of Integrable Function is Additive














\(\ds \)

\(=\)







\(\ds \int \paren {f \cdot h} \rd \mu + \alpha \int \paren {g \cdot h} \rd \mu\)





Integral of Integrable Function is Homogeneous














\(\ds \)

\(=\)







\(\ds \innerprod E G + \alpha \innerprod F G\)









$\Box$

Proof of Non-Negative Definiteness and Positivity
Let $E \in \map {L^2} {X, \Sigma, \mu}$.
Let $E = \eqclass f \sim$.
Then, we have: 

$\ds \innerprod E E = \int \size f^2 \rd \mu$
By the definition of the $\mu$-integral of a measurable function, we then have $\innerprod E E \ge 0$. 
We have $\innerprod E E = 0$ if and only if:

$\ds \int \size f^2 \rd \mu = 0$
From Measurable Function Zero A.E. iff Absolute Value has Zero Integral, we then have: 

$\size f^2 = 0$ $\mu$-almost everywhere.
From Pointwise Exponentiation preserves A.E. Equality, we have: 

$\size f = 0$ $\mu$-almost everywhere.
So:

$f = 0$ $\mu$-almost everywhere.
So:

$\eqclass f \sim = \eqclass 0 \sim = \mathbf 0_{\map {L^2} {X, \Sigma, \mu} }$
so:

$E = \mathbf 0_{\map {L^2} {X, \Sigma, \mu} }$
as required.
$\blacksquare$





