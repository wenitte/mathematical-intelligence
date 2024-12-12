# 

Source: https://proofwiki.org/wiki/Directed_in_Join_Semilattice



Theorem
Let $\struct {S, \preceq}$ be a join semilattice.
Let $H$ be a non-empty lower section of $S$.
Then $H$ is directed if and only if

$\forall x, y \in H: x \vee y \in H$


Proof
Sufficient Condition
Let us assume that

$H$ is directed.
Let $x, y \in H$.
By definition of directed:

$\exists z \in H: x \preceq z \land y \preceq z$
By definition

$z$ is upper bound of $\set {x, y}$
By definitions of supremum and join:

$x \vee y = \sup \set {x, y} \preceq z$
Thus by definition of lower section:

$x \vee y \in H$
$\Box$


Necessary Condition
Let us assume that

$\forall x, y \in H: x \vee y \in H$
Let $x, y \in H$.
By assumption:

$x \vee y \in H$
By definition of supremum:

$x \vee y$ is upper bound of $\set {x, y}$
Thus

$x \preceq x \vee y \land y \preceq x \vee y$
Thus by definition

$H$ is directed.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_0:40




