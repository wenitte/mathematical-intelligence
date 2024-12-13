# 

Source: https://proofwiki.org/wiki/Open_Subscheme_is_Scheme

Theorem
Let $\struct {X, \OO_X}$ be a scheme.
Let $U \subset X$ be an open subset.

Then the open subscheme $\struct {U, \OO_X {\restriction U}}$ defined by $U$ is a scheme.


Proof
Let $x \in U$.
By Open Neighborhood contains Affine Open Neighborhood, there is an open subset $V \subset U$ with $x \in V$, such that $\struct {V, \OO_X {\restriction V}}$ is an affine scheme.
By Restriction of Restriction of Functor is Restriction $\OO_X {\restriction U} {\restriction V} = \OO_X {\restriction V}$.
By definition $\struct {U, \OO_X {\restriction U}}$ is a scheme.
$\blacksquare$





