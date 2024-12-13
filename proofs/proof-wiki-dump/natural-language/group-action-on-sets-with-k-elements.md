# 

Source: https://proofwiki.org/wiki/Group_Action_on_Sets_with_k_Elements

Theorem
Let $\struct {G, \circ}$ be a finite group whose identity is $e$.
Let $\Bbb S = \set {S \subseteq G: \card S = k}$, that is, the set of all of subsets of $G$ which have exactly $k$ elements.
Let $G$ act on $\Bbb S$ by the rule:

$\forall S \in \Bbb S: g * S = g S = \set {x \in G: x = g s: s \in S}$

This is a group action, and:

$\forall S \in \Bbb S: \order {\Stab S} \divides \card S$
where $\Stab S$ denotes the stabilizer of $S$ by $G$.


Proof
First it is necessary to prove that this is a group action.
The action is the same as the one defined in Group Action on Coset Space, but this time we are limiting ourselves to the subsets of $G$ which have the same number of elements.
From the result in Group Action on Coset Space, we only have to prove that:

$\card {g S} = \card S$
This follows directly from Order of Subset Product with Singleton.

It remains to be shown that:

$\order {\Stab S} \divides \card S$
By definition of stabilizer:

$\Stab S = \set {g \in G: g S = S}$
It follows that:

$\forall s \in S: g s \in S$
Then:

$\Stab S s \subseteq S$
Thus:

$\card {\Stab S s} \le \card S$
We have from Stabilizer is Subgroup that the stabilizer contains the identity:

$e \in \Stab S \le G$
It therefore follows that:

$s \in S \implies s \in \Stab S s$

Thus:

$\ds S = \bigcup_{t \mathop \in S} \Stab S t$

By Congruence Class Modulo Subgroup is Coset and Right Coset Space forms Partition, distinct right cosets are disjoint.
Thus $S$ consists of a union of disjoint right cosets of $\Stab S$.
Thus $\ds \bigcup_{t \mathop \in S} \Stab S t$ is a partition of $S$.
Therefore:

$\forall s \in S: \card {\Stab S s} \divides \card S$
As we have:

$\forall s \in S: \card {\Stab S s} = \order {\Stab S}$
the result follows:

$\card {\Stab S} \divides \card S$
$\blacksquare$


Also see
Sylow Theorems




