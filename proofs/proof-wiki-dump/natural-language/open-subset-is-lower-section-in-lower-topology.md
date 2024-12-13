# 

Source: https://proofwiki.org/wiki/Open_Subset_is_Lower_Section_in_Lower_Topology

Theorem
Let $T = \struct {S, \preceq, \tau}$ be a transitive relational structure with lower topology.
Let $A \subseteq S$ such that

$A$ is open.

Then $A$ is a lower section of $S$.


Proof
Define $B = \set {\relcomp S {x^\succeq}: x \in S}$
By definition of lower topology:

$B$ is sub-basis of $T$.
By definitions of sub-basis and basis:

$\ds \BB = \set {\bigcap \FF: \FF \subseteq B, \FF \text{ is finite} }$ is a basis.
By definition of basis:

$\ds \tau \subseteq \set {\bigcup X: X \subseteq \BB}$
Let $x \in A$, $y \in S$ such that:

$y \preceq x$
By definition of open set:

$A \in \tau$
By definition of subset:

$\exists Y \subseteq \BB: A = \bigcup Y$
By definition of union:

$\exists Z \in Y: x \in Z$
By definition of subset:

$\exists X \subseteq B: Z = \bigcap X \land X$ is finite.
We will prove that:

$\forall Q \in X: y \in Q$
Let $Q \in X$.
By definition of subset:

$Q \in B$
By definition of $B$:

$\exists z \in S: Q = \relcomp S {z^\succeq}$
By definition of intersection:

$x \in Q$
By Upper Closure is Upper Section:

$z^\succeq$ is an upper section.
By Complement of Upper Section is Lower Section:

$Q$ is a lower section.
Thus by definition of lower section:

$y \in Q$
$\Box$

By definition of intersection:

$y \in Z$
Thus by definition of union:

$y \in A$
$\blacksquare$


Sources
Mizar article WAYBEL19:5




