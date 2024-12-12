# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Almost-Everywhere_Equality_Relation_on_Lebesgue_Space



Theorem
The following definitions of the concept of Almost-Everywhere Equality Relation on Lebesgue Space are equivalent:

Definition 1
We define the $\mu$-almost-everywhere equality relation $\sim_\mu$ on $\map {\mathcal L^p} {X, \Sigma, \mu}$ by: 

$f \sim_\mu g$ if and only if $\norm {f - g}_p = 0$
where $\norm \cdot_p$ is the $p$-seminorm.


Definition 2
We define the $\mu$-almost-everywhere equality relation $\sim$ on $\map {\mathcal L^p} {X, \Sigma, \mu}$ by: 

$f \sim_\mu g$ if and only if $\map f x = \map g x$ for $\mu$-almost all $x \in X$.
That is: 

$\map \mu {\set {x \in X : \map f x \ne \map g x} } = 0$


Proof
Let $f, g \in \map {\LL^p} {X, \Sigma, \mu}$. 
By P-Seminorm of Function Zero iff A.E. Zero, we have: 

$\norm {f - g}_p = 0$ if and only if $f - g = 0$ $\mu$-almost everywhere.
From Pointwise Addition preserves A.E. Equality, we have: 

$\norm {f - g}_p = 0$ if and only if $f = g$ $\mu$-almost everywhere.
That is: 

$\norm {f - g}_p = 0$ if and only if $\map \mu {\set {x \in X : \map f x \ne \map g x} } = 0$.
$\blacksquare$





