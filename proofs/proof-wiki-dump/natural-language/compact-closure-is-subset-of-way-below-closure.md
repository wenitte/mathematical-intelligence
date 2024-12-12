# 

Source: https://proofwiki.org/wiki/Compact_Closure_is_Subset_of_Way_Below_Closure

Theorem
Let $L = \struct {S, \preceq}$ be an ordered set.
Let $x \in S$.

Then $x^{\mathrm {compact} } \subseteq x^\ll$
where

$x^{\mathrm {compact} }$ denotes the compact closure of $x$,
$x^\ll$ denotes the way below closure of $x$.


Proof
Let $y \in x^{\mathrm {compact} }$.
By definition of compact closure:

$y \preceq x$ and $y$ is compact.
By definition of compact:

$y \ll y$
where $\ll$ denotes the way below relation.
By Preceding and Way Below implies Way Below and definition of reflexivity:

$y \ll x$
Thus by definition of way below closure:

$y \in x^\ll$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_8:6




