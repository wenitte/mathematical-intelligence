# 

Source: https://proofwiki.org/wiki/Preceding_is_Approximating_Relation

Theorem
Let $\struct {S, \preceq}$ be an ordered set.

Then $\preceq$ is an approximating relation on $S$.


Proof
Let $x \in S$.
Define $\RR := \mathord\preceq$.
By definitions of lower closure of element and $\RR$-segment:

$x^\preceq = x^\RR$
where:

$x^\preceq$ denotes the lower closure of $x$
$x^\RR$ denotes the $\RR$-segment of $x$

Thus by Supremum of Lower Closure of Element:

$x = \map \sup {x^\preceq} = \map \sup {x^\RR}$
Hence $\preceq$ is an approximating relation on $S$.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_4:41




