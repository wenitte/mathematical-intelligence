# 

Source: https://proofwiki.org/wiki/Infimum_of_Intersection_of_Upper_Closures_equals_Join_Operands

Theorem
Let $L = \struct {S, \vee, \preceq}$ be a join semilattice.
Let $x, y \in S$.

Then $\map \inf {x^\succeq \cap y^\succeq} = x \vee y$


Proof
By Intersection of Upper Closures is Upper Closure of Join Operands:

$x^\succeq \cap y^\succeq = \paren {x \vee y}^\succeq$
Thus by Infimum of Upper Closure of Element:

$\map \inf {x^\succeq \cap y^\succeq} = x \vee y$
$\blacksquare$

Sources
Mizar article WAYBEL16:1




