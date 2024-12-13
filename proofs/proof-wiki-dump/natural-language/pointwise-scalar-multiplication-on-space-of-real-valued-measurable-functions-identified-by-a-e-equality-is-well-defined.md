# 

Source: https://proofwiki.org/wiki/Pointwise_Scalar_Multiplication_on_Space_of_Real-Valued_Measurable_Functions_Identified_by_A.E._Equality_is_Well-Defined

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $\map {\mathcal M} {X, \Sigma, \R}$ be the set of real-valued $\Sigma$-measurable functions on $X$. 
Let $\sim$ be the $\mu$-almost-everywhere equality relation on $\map {\mathcal M} {X, \Sigma, \R}$.
Let $\map {\mathcal M} {X, \Sigma, \R}/\sim$ be the space of real-valued $\Sigma$-measurable functions identified by $\sim$.

Then pointwise scalar multiplication on $\map {\mathcal M} {X, \Sigma, \R}/\sim$ is well-defined.


Proof
Let $\lambda \in \R$.
Let $E \in \map {\mathcal M} {X, \Sigma, \R}/\sim$.
First, we show that if $E = \eqclass f \sim$, then $\eqclass {\lambda f} \sim$ is well-understood.
This follows from Pointwise Scalar Multiple of Measurable Function is Measurable.
We need to show that $\lambda \cdot E$ is independent of the choice of representative for $E$.
Suppose that: 

$\eqclass f \sim = \eqclass g \sim = E$
From Equivalence Class Equivalent Statements, we have:

$f \sim g$
So, from Pointwise Scalar Multiplication preserves A.E. Equality, we have: 

$\lambda \cdot f \sim \lambda \cdot g$
That is, from Equivalence Class Equivalent Statements:

$\eqclass {\lambda \cdot f} \sim = \eqclass {\lambda \cdot g} \sim$
which is what we aimed to show.
$\blacksquare$





