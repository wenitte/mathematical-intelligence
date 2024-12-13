# 

Source: https://proofwiki.org/wiki/Prime_Ideal_is_Prime_Filter_in_Dual_Lattice



Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a lattice.
Let $X$ be a subset of $S$.

Then

$X$ is a prime ideal in $L$
if and only if:

$X$ is a prime filter in $L^{-1}$
where $L^{-1} = \struct {S, \succeq}$ denotes the dual of $L$.


Proof
Sufficient Condition
Let $X$ be a prime ideal in $L$.
Then

$X$ is an ideal in $L$.
By Ideal is Filter in Dual Ordered Set:

$X$ is a filter in $L^{-1}$.
Let $x, y \in S$ such that

$x \vee' y \in X$
where $\vee'$ denotes the join in $L^{-1}$.
By Join is Dual to Meet:

$x \wedge y \in X$
Thus by Characterization of Prime Ideal:

$x \in X$ or $y \in X$
Hence $X$ is a prime filter
$\Box$


Necessary Condition
This follows by mutatis mutandis.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_7:16




