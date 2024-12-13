# 

Source: https://proofwiki.org/wiki/Intersection_of_Upper_Section_with_Directed_Set_is_Directed_Set

Theorem
Let $L = \struct {S, \preceq}$ be an ordered set.
Let $A, B$ be subsets of $S$ such that

$A \cap B \ne \O$
and

$A$ is an upper set,
$B$ is a directed set.

Then $A \cap B$ is a directed set.


Proof
Let $x, y \in A \cap B$.
By definition of intersection:

$x, y \in A$ and $x, y \in B$
By definition of directed subset:

$\exists z \in B: x \preceq z \land y \preceq z$
By definition of upper section:

$z \in A$
Thus by definition of intersection:

$z \in A \cap B$
Thus:

$\exists z \in A \cap B: x \preceq z$ and $y \preceq z$
$\blacksquare$


Sources
Mizar article WAYBEL11:3




