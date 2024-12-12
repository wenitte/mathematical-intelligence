# 

Source: https://proofwiki.org/wiki/Compact_Closure_is_Intersection_of_Lower_Closure_and_Compact_Subset

Theorem
Let $L = \struct {S, \vee, \preceq}$ be a bounded below join semilattice.
Let $x \in S$.

Then $x^{\mathrm {compact} } = x^\preceq \cap \map K L$
where

$x^{\mathrm {compact} }$ denotes the compact closure of $x$,
$x^\preceq$ denotes the lower closure of $x$,
$\map K L$ denotes the compact subset of $L$.


Proof
$y \in x^{\mathrm {compact} }$
if and only if

$y \preceq x$ and $y$ is compact by definition of compact closure
if and only if

$y \in x^\preceq$ and $y$ is compact by definition of lower closure of element
if and only if

$y \in x^\preceq$ and $y \in \map K L$ by definition of compact subset
if and only if

$y \in x^\preceq \cap \map K L$ by definition of intersection
Hence the result, by definition of set equality.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_8:5




