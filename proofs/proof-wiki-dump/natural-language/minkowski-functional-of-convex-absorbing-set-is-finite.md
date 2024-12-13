# 

Source: https://proofwiki.org/wiki/Minkowski_Functional_of_Convex_Absorbing_Set_is_Finite

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ be a vector space over $\GF$.
Let $A \subseteq X$ be a convex absorbing set. 
Let $\mu_A$ be the Minkowski functional of $A$. 

Then for each $x \in X$, $\map {\mu_A} x$ is a finite extended real number.
That is:

$\forall x \in X: \map {\mu_A} x < \infty$


Proof
Let $x \in X$. 
From Characterization of Convex Absorbing Set in Vector Space:

$\exists t \in \R_{>0}: x \in t A$
where $t A$ denotes the dilation of $A$ by $t$.
Then: 

$x \in t^{-1} C$
so that:

$t \in \set {t > 0 : t^{-1} x \in A}$
Then, we have:

$\map {\mu_A} x \le t < \infty$
$\blacksquare$





