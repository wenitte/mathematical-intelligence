# 

Source: https://proofwiki.org/wiki/L-2_Inner_Product_is_Well-Defined

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $\map {\LL^2} {X, \Sigma, \mu}$ be the Lebesgue $2$-space of $\struct {X, \Sigma, \mu}$. 
Let $\sim$ be the $\mu$-almost-everywhere equality relation on $\map {\LL^2} {X, \Sigma, \mu}$.
Let $\map {L^2} {X, \Sigma, \mu}$ be the $L^p$ space on $\struct {X, \Sigma, \mu}$.
Let $E, F \in \map {L^2} {X, \Sigma, \mu}$. 

Then the $L^2$ inner product $\innerprod E F$ is well-defined.


Proof
Let $E = \eqclass f \sim$ and $F = \eqclass g \sim$ where $\sim$ is the $\mu$-almost everywhere equality relation.
We aim to show that: 

$\ds \int \paren {f \cdot g} \rd \mu$
exists as a real number and is independent of the choice of representatives $f$ and $g$ of $E$ and $F$.
From the definition of the $L^2$ space, we have $f, g \in \map {\LL^2} {X, \Sigma, \mu}$.
From Hölder's Inequality for Integrals, we have:

$f \cdot g \in \map {\LL^1} {X, \Sigma, \mu}$
So the $\mu$-integral of $f \cdot g$ is well-defined and exists as a real number.
Now suppose that: 

$\eqclass {f_1} \sim = \eqclass {f_2} \sim = E$
and:

$\eqclass {g_1} \sim = \eqclass {g_2} \sim = F$
From Equivalence Class Equivalent Statements, we have: 

$f_1 \sim f_2$
and:

$g_1 \sim g_2$
That is: 

$f_1 = f_2$ $\mu$-almost everywhere
and:

$g_1 = g_2$ $\mu$-almost everywhere.
From Pointwise Multiplication preserves A.E. Equality, we have: 

$f_1 \cdot g_1 = f_2 \cdot g_2$ $\mu$-almost everywhere.
From A.E. Equal Positive Measurable Functions have Equal Integrals, we have: 

$\ds \int \paren {f_1 \cdot g_1} \rd \mu = \int \paren {f_2 \cdot g_2} \rd \mu$
as desired.
$\blacksquare$





