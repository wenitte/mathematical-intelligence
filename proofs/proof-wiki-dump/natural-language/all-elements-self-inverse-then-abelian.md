# 

Source: https://proofwiki.org/wiki/All_Elements_Self-Inverse_then_Abelian

Theorem
Let $\struct {G, \circ}$ be a group.
Suppose that every element of $G$ is self-inverse.

Then $G$ is abelian.


Proof
Every element of $G$ is self-inverse, that is:

$\forall x \in G: x \circ x = e$
In particular, for all $x, y \in G$:

$\paren {x \circ y} \circ \paren {x \circ y} = e$
that is, $x \circ y$ is also self-inverse.

From Self-Inverse Elements Commute iff Product is Self-Inverse, it follows that:

$\forall x, y \in G: y \circ x = x \circ y$
that is: $x$ and $y$ commute for all $x, y \in G$.

Hence $G$ is an abelian group.
$\blacksquare$


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.4$: Exercise $2.2$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Exercise $\text{T}$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Definition of Group Structure: $\S 29 \delta$




