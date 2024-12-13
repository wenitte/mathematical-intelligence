# 

Source: https://proofwiki.org/wiki/Lattice_of_Power_Set_is_Arithmetic

Theorem
Let $X$ be a set.
Let $P = \struct {\powerset X, \cup, \cap, \subseteq}$ be a lattice of power set.

Then $P$ is an arithmetic ordered set.


Proof
Define $C = \struct {\map K P, \preceq}$ as an ordered subset of $P$
where $\map K P$ denotes the compact subset of $P$.
Thus by Lattice of Power Set is Algebraic:

$P$ is algebraic.
It remains to prove that:

$\map K P$ is meet closed.
Let $x, y \in \map K P$.
By definition of compact subset:

$x$ is compact.
By Element is Finite iff Element is Compact in Lattice of Power Set

$x$ is finite.
By Intersection is Subset:

$x \cap y \subseteq x$
By Subset of Finite Set is Finite:

$x \cap y$ is finite.
By Element is Finite iff Element is Compact in Lattice of Power Set

$x \cap y$ is compact.
Thus by definition of compact subset:

$x \cap y \in \map K P$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYNEL15:7




