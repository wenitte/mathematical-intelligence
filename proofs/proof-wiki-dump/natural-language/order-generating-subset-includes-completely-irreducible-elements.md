# 

Source: https://proofwiki.org/wiki/Order_Generating_Subset_Includes_Completely_Irreducible_Elements

Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $X \subseteq S$ be an order generating subset of $S$.
Let $x \in S$ be a completely irreducible element of $S$.

Then $x \in X$.


Proof
By definition of order generating:

$x^\succeq \cap X$ admits an infimum and $x = \map \inf {x^\succeq \cap X}$
By Completely Irreducible and Subset Admits Infimum Equals Element implies Element Belongs to Subset:

$x \in x^\succeq \cap X$
Thus by definition of intersection:

$x \in X$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL16:25




