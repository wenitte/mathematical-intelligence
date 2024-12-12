# 

Source: https://proofwiki.org/wiki/Every_Element_is_Directed_and_Every_Two_Elements_are_Included_in_Third_Element_implies_Union_is_Directed

Theorem
Let $P = \struct {S, \preceq}$ be an ordered set.
Let $A$ be a set of subsets of $S$.
Let

$\forall X \in A: X$ is directed.
Let

$\forall X, Y \in A: \exists Z \in A: X \cup Y \subseteq Z$

Then $\bigcup A$ is directed.


Proof
Let $x, y \in \bigcup A$.
By definition of union:

$\exists X \in A: x \in X$
and

$\exists Y \in A: y \in Y$
By assumption:

$\exists Z \in A: X \cup Y \subseteq Z$
By definition of union:

$x, y \in X \cup Y$
By definition of subset:

$x, y \in Z$
By assumption:

$Z$ is directed.
By definition of directed subset:

$\exists z \in Z: x \preceq z \land y \preceq z$
Thus by definition of union:

$z \in \bigcup A$
Thus

$x \preceq z \land y \preceq z$
Hence $\bigcup A$ is directed.
$\blacksquare$


Sources
Mizar article WAYBEL_0:46




