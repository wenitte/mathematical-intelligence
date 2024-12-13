# 

Source: https://proofwiki.org/wiki/Lp_Norm_is_Norm



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space and let $p \in \hointr 1 \infty$.
Let $\map {L^p} {X, \Sigma, \mu}$ be the $L^p$ vector space on $\struct {X, \Sigma, \mu}$.
Let $\norm \cdot_p$ be the $L^p$ norm.

Then $\norm \cdot_p$ is a norm on $\map {L^p} {X, \Sigma, \mu}$.


Proof
Let $\map {\mathcal L^p} {X, \Sigma, \mu}$ be the Lebesgue $p$-space. 
Let $\sim$ be the $\mu$-almost everywhere equality relation on $\map {\mathcal L^p} {X, \Sigma, \mu}$.
Let $\eqclass f \sim \in \map {L^p} {X, \Sigma, \mu}$. 
Then, we have by the definition of the $L^p$ norm we have: 

$\norm {\eqclass f \sim}_p = \norm f_p$
From P-Seminorm is Seminorm, we have: 

$\norm f_p \ge 0$
so:

$\norm {\eqclass f \sim}_p \ge 0$
So $\norm \cdot_p$ is a map from $\map {L^p} {X, \Sigma, \mu}$ to the non-negative real numbers.
It remains to verify the norm axioms.


Norm Axiom $\text N 1$: Positive Definiteness
From P-Seminorm of Function Zero iff A.E. Zero, we have: 

$\norm f_p = 0$ for $f \in \map {\mathcal L^p} {X, \Sigma, \mu}$ if and only if $f = 0$ $\mu$-almost everywhere.
That is: 

$\norm f_p = 0$ if and only if $f \sim 0$
That is, from Equivalence Class Equivalent Statements:

$\norm f_p = 0$ if and only if $\eqclass f \sim = \eqclass 0 \sim = 0_{\map {L^p} {X, \Sigma, \mu} }$.
Then, for $\eqclass f \sim \in \map {L^p} {X, \Sigma, \mu}$, we have: 

$\norm {\eqclass f \sim}_p = 0$ if and only if $\norm f_p = 0$
from the definition of the $L^p$ norm.
This is in turn equivalent to $\eqclass f \sim = 0_{\map {L^p} {X, \Sigma, \mu} }$
So we have positive definiteness.
$\Box$


Norm Axiom $\text N 2$: Positive Homogeneity
Let $\eqclass f \sim \in \map {L^p} {X, \Sigma, \mu}$ and $\lambda \in \R$. 
Then: 














\(\ds \size \lambda \norm {\eqclass f \sim}_p\)

\(=\)







\(\ds \size \lambda \norm f_p\)





Definition of $L^p$ Norm














\(\ds \)

\(=\)







\(\ds \norm {\lambda f}_p\)





$p$-seminorm is seminorm














\(\ds \)

\(=\)







\(\ds \norm {\eqclass {\lambda f} \sim}_p\)





Definition of $L^p$ Norm














\(\ds \)

\(=\)







\(\ds \norm {\lambda \cdot \eqclass f \sim}_p\)





Definition of Pointwise Scalar Multiplication on Space of Real-Valued Measurable Functions Identified by A.E. Equality



So we have positive homogeneity.
$\Box$


Norm Axiom $\text N 3$: Triangle Inequality
Let $\eqclass f \sim, \eqclass g \sim \in \map {L^p} {X, \Sigma, \mu}$. 
Then: 














\(\ds \norm {\eqclass f \sim + \eqclass g \sim}_p\)

\(=\)







\(\ds \norm {\eqclass {f + g} \sim}_p\)





Definition of Pointwise Scalar Addition on Space of Real-Valued Measurable Functions Identified by A.E. Equality














\(\ds \)

\(=\)







\(\ds \norm {f + g}_p\)





Definition of $L^p$ Norm














\(\ds \)

\(\le\)







\(\ds \norm f_p + \norm g_p\)





Minkowski's Inequality on Lebesgue Space














\(\ds \)

\(=\)







\(\ds \norm {\eqclass f \sim}_p + \norm {\eqclass g \sim}_p\)





Definition of $L^p$ norm



so the triangle inequality holds.
$\blacksquare$





