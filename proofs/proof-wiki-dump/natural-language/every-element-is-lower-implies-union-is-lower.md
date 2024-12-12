# 

Source: https://proofwiki.org/wiki/Every_Element_is_Lower_implies_Union_is_Lower

Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $A$ be a set of subsets of $S$.
Let

$\forall X \in A: X$ is a lower section.

Then $\bigcup A$ is a lower section.


Proof
Let $x \in \bigcup A, y \in S$ such that:

$y \preceq x$
By definition of union:

$\exists X \in A: x \in X$
By assumption:

$X$ is a lower section.
By definition of lower section:

$y \in X$
Thus by definition of union:

$y \in \bigcup A$
$\blacksquare$


Sources
Mizar article WAYBEL_0:26




