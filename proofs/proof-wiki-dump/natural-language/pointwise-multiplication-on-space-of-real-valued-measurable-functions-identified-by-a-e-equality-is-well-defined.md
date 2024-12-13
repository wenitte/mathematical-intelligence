# 

Source: https://proofwiki.org/wiki/Pointwise_Multiplication_on_Space_of_Real-Valued_Measurable_Functions_Identified_by_A.E._Equality_is_Well-Defined

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $\map {\mathcal M} {X, \Sigma, \R}$ be the set of real-valued $\Sigma$-measurable functions on $X$. 
Let $\sim$ be the almost-everywhere equality equivalence relation on $\map {\mathcal M} {X, \Sigma, \R}$.
Let $\map {\mathcal M} {X, \Sigma, \R}/\sim$ be the space of real-valued $\Sigma$-measurable functions identified by $\sim$.

Then pointwise scalar multiplication on $\map {\mathcal M} {X, \Sigma, \R}/\sim$ is well-defined.


Proof
Let $E_1, E_2 \in \map {\mathcal M} {X, \Sigma, \R}/\sim$.
We need to show that $E_1 \cdot E_2$ is independent of the choice of representative for $E_1$ and $E_2$.
Suppose that: 

$\eqclass f \sim = \eqclass F \sim = E_1$
and:

$\eqclass g \sim = \eqclass G \sim = E_2$
From Equivalence Class Equivalent Statements, we have:

$f \sim F$
and:

$g \sim G$
So, from Pointwise Multiplication preserves A.E. Equality, we have: 

$f \cdot g \sim F \cdot G$
That is, from Equivalence Class Equivalent Statements:

$\eqclass {f \cdot g} \sim = \eqclass {F \cdot G} \sim$
which is what we aimed to show.
$\blacksquare$





