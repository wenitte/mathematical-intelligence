# 

Source: https://proofwiki.org/wiki/Integral_on_L-1_Space_is_Well-Defined

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $\map {L^1} {X, \Sigma, \mu}$ be the $L^1$ space of $\struct {X, \Sigma, \mu}$.
Let $E \in \map {L^1} {X, \Sigma, \mu}$. 

Then the $\mu$-integral of $E$ is well-defined. 


Proof
Let $E = \eqclass f \sim$.
We first establish that:

$\ds \int f \rd \mu$
is a well-understood real number.
We then will show that the $\mu$-integral of $E$ is independent of the choice of representative for $E$.
Since $E \in \map {L^1} {X, \Sigma, \mu}$, we have that $f \in \map {\LL^1} {X, \Sigma, \mu}$. 
Then: 

$\ds \int \size f \rd \mu < \infty$
So, from Characterization of Integrable Functions, we have: 

$\ds \int f \rd \mu$ is well-defined and exists as a finite number.
Suppose now that $\eqclass f \sim = \eqclass g \sim$. 
From Equivalence Class Equivalent Statements:

$f = g$ $\mu$-almost everywhere
from the definition of the $\mu$-almost everywhere relation.
From A.E. Equal Positive Measurable Functions have Equal Integrals: Corollary 1, we have: 

$\ds \int f \rd \mu = \int g \rd \mu$
So:

$\ds \int E \rd \mu$
is independent of the choice of representative for $E$.
$\blacksquare$





