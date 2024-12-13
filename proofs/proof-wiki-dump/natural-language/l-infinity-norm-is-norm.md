# 

Source: https://proofwiki.org/wiki/L-Infinity_Norm_is_Norm



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $\map {L^\infty} {X, \Sigma, \mu}$ be the $L^\infty$ vector space on $\struct {X, \Sigma, \mu}$.
Let $\norm \cdot_\infty$ be the $L^\infty$ norm.

Then $\norm \cdot_\infty$ is a norm on $\map {L^\infty} {X, \Sigma, \mu}$.


Proof

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Let $\map {\LL^\infty} {X, \Sigma, \mu}$ be the Lebesgue $\infty$-space. 
Let $\sim$ be the $\mu$-almost everywhere equality relation on $\map {\LL^\infty} {X, \Sigma, \mu}$.
Let $\eqclass f \sim \in \map {L^\infty} {X, \Sigma, \mu}$. 
Then, we have by the definition of the $L^\infty$ norm we have: 

$\norm {\eqclass f \sim}_\infty = \norm f_\infty$
From P-Seminorm is Seminorm, (in the case $p = \infty$) we have: 

$\norm f_\infty \ge 0$
so:

$\norm {\eqclass f \sim}_\infty \ge 0$
So $\norm \cdot_\infty$ is a map from $\map {L^\infty} {X, \Sigma, \mu}$ to the non-negative real numbers.
It remains to verify the norm axioms.


Norm Axiom $\text N 1$: Positive Definiteness
From P-Seminorm of Function Zero iff A.E. Zero, we have: 

$\norm f_\infty = 0$ for $f \in \map {\mathcal L^\infty} {X, \Sigma, \mu}$ if and only if $f = 0$ $\mu$-almost everywhere.
That is: 

$\norm f_\infty = 0$ if and only if $f \sim 0$
That is, from Equivalence Class Equivalent Statements:

$\norm f_\infty = 0$ if and only if $\eqclass f \sim = \eqclass 0 \sim = 0_{\map {L^p} {X, \Sigma, \mu} }$.
Then, for $\eqclass f \sim \in \map {L^\infty} {X, \Sigma, \mu}$, we have: 

$\norm {\eqclass f \sim}_\infty = 0$ if and only if $\norm f_\infty = 0$
from the definition of the $L^\infty$ norm.
This is in turn equivalent to $\eqclass f \sim = 0_{\map {L^\infty} {X, \Sigma, \mu} }$
So we have positive definiteness.
$\Box$


Norm Axiom $\text N 2$: Positive Homogeneity
Let $\eqclass f \sim \in \map {L^\infty} {X, \Sigma, \mu}$ and $\lambda \in \R$. 
Then: 














\(\ds \size \lambda \norm {\eqclass f \sim}_\infty\)

\(=\)







\(\ds \size \lambda \norm f_\infty\)





Definition of $L^\infty$ Norm














\(\ds \)

\(=\)







\(\ds \norm {\lambda f}_\infty\)





P-Seminorm is Seminorm














\(\ds \)

\(=\)







\(\ds \norm {\eqclass {\lambda f} \sim}_\infty\)





Definition of $L^\infty$ Norm














\(\ds \)

\(=\)







\(\ds \norm {\lambda \cdot \eqclass f \sim}_\infty\)





Definition of Pointwise Scalar Multiplication on Space of Real-Valued Measurable Functions Identified by A.E. Equality



So we have positive homogeneity.
$\Box$


Norm Axiom $\text N 3$: Triangle Inequality
Let $\eqclass f \sim, \eqclass g \sim \in \map {L^\infty} {X, \Sigma, \mu}$. 
Then: 














\(\ds \norm {\eqclass f \sim + \eqclass g \sim}_\infty\)

\(=\)







\(\ds \norm {\eqclass {f + g} \sim}_\infty\)





Definition of Pointwise Addition on Space of Real-Valued Measurable Functions Identified by A.E. Equality














\(\ds \)

\(=\)







\(\ds \norm {f + g}_\infty\)





Definition of $L^\infty$ Norm














\(\ds \)

\(\le\)







\(\ds \norm f_\infty + \norm g_\infty\)





Minkowski's Inequality on Lebesgue Space














\(\ds \)

\(=\)







\(\ds \norm {\eqclass f \sim}_\infty + \norm {\eqclass g \sim}_\infty\)





Definition of $L^\infty$ norm



so the triangle inequality holds.
$\blacksquare$





