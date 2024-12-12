# 

Source: https://proofwiki.org/wiki/Directed_in_Join_Semilattice_with_Finite_Suprema



Theorem
Let $\struct {S, \preceq}$ be a join semilattice.
Let $H$ be a non-empty lower section of $S$.
Then $H$ is directed if and only if

for every non-empty finite subset $A$ of $H$, $\sup A \in H$


Proof
Sufficient Condition
Let us assume that

$H$ is directed.
Let $A$ be a non-empty finite subset of $H$.
By Directed iff Finite Subsets have Upper Bounds:

$\exists h \in H: \forall a \in A: a \preceq h$
By definition

$z$ is upper bound of $A$
By Existence of Non-Empty Finite Suprema in Join Semilattice:

$\sup A$ exists in $\struct {S, \preceq}$
By definition of supremum:

$\sup A \preceq h$
Thus by definition of lower section:

$\sup A \in H$
$\Box$


Necessary Condition
Let us assume that

for every non-empty finite subset $A$ of $H$, $\sup A \in H$
Let $x, y \in H$.

$A := \set {x, y}$ is a non-empty finite subset of $H$
By assumption:

$\sup \set {x, y} \in H$
By definition of supremum:

$\sup A$ is upper bound for $\set {x, y}$
Thus

$x \preceq \sup A \land y \preceq \sup A$
Thus by definition

$H$ is directed.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_0:42




