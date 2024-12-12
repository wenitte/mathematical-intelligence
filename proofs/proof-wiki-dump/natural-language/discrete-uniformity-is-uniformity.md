# 

Source: https://proofwiki.org/wiki/Discrete_Uniformity_is_Uniformity

Theorem
Let $S$ be a set.
Let $\UU$ be the discrete uniformity on $S$

Then $\UU$ is indeed a uniformity.


Proof
We examine the uniformity axioms in turn:


$\text U 1$
$\forall u \in \UU: \Delta_S \subseteq u$
This follows by definition of the discrete uniformity:

$\UU := \set {u \subseteq S \times S: \Delta_S \subseteq u}$


$\text U 2$
$\forall u, v \in \UU: u \cap v \in \UU$
We have that $\forall u, v \subseteq S \times S: \Delta_S \subseteq u, \Delta_S \subseteq v$
So $\Delta_S \subseteq u \cap v$ from Intersection is Largest Subset.
So $u \cap v \in \UU$, and $\text U 2$ holds.


$\text U 3$
$u \in \UU, u \subseteq v \subseteq S \times S \implies v \in \UU$
Let $u \subseteq v \subseteq S \times S$.
We have that $\Delta_S \subseteq u$ and so $\Delta_S \subseteq v$ from Subset Relation is Transitive.
So $v \in \UU$ by definition of $\UU$, and $\text U 3$ holds.


$\text U 4$
$\forall u \in \UU: \exists v \in \UU: v \circ v \subseteq u$ where $\circ$ is defined as:
$u \circ v := \set {\tuple {x, z}: \exists y \in S: \tuple {x, y} \in v, \tuple {y, z} \in u}$
We have by definition of $\UU$ that $\Delta_S \in \UU$.
We note from Diagonal Relation is Equivalence that $\Delta_S$ is an equivalence relation and so by definition transitive.
Therefore from Relation contains Composite with Self iff Transitive we have that $\Delta_S \circ \Delta_S \subseteq \Delta_S$.
So:

$\forall u \in \UU: \exists \Delta_S \in \UU: \Delta_S \circ \Delta_S \subseteq \Delta_S \subseteq u$
and so $\text U 4$ holds.


$\text U 5$
$\forall u \in \UU: \exists u^{-1} \in \UU$ where $u^{-1}$ is defined as:
$u^{-1} := \set {\tuple {y, x}: \tuple {x, y} \in u}$
Let $u \in \UU$, so $\Delta_S \subseteq u \subseteq S \times S$.
Thus:

$\forall x \in u: \tuple {x, x} \in u \implies \tuple {x, x} \in u^{-1}$
and so $\Delta_S \subseteq u^{-1}$
Thus $u^{-1} \in \UU$.
$\Box$

All of the uniformity axioms are satisfied, and $\UU$ is demonstrated to be a uniformity.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $1 \text { - } 3$. Discrete Topology: $11$




