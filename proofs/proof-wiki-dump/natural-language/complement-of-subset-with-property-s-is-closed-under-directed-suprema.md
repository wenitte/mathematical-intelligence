# 

Source: https://proofwiki.org/wiki/Complement_of_Subset_with_Property_(S)_is_Closed_under_Directed_Suprema

Theorem
Let $L = \struct {S, \preceq}$ be an up-complete ordered set.
Let $X$ be a subset of $S$ with property (S).

Then $\relcomp S X$ is closed under directed suprema.


Proof
Let $D$ be a directed subset of $S$ such that:

$D \subseteq \relcomp S X$
Aiming for a contradiction, suppose

$\sup D \notin \relcomp S X$
By definition of relative complement:

$\sup D \in X$
By definition of property (S):

$\exists y \in D: \forall x \in D: y \preceq x \implies x \in X$
By definition of reflexivity:

$y \in X$
By definitions of intersection and non-empty:

$D \cap X \ne \O$
Thus this by Empty Intersection iff Subset of Complement contradicts:

$D \subseteq \relcomp S X$
$\blacksquare$


Sources
Mizar article WAYBEL11:funcreg 1




