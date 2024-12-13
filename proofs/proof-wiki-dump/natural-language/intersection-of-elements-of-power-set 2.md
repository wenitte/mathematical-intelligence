# 

Source: https://proofwiki.org/wiki/Intersection_of_Elements_of_Power_Set

Theorem
Let $S$ be a set.
Let:

$\ds \mathbb S = \bigcap_{X \mathop \in \powerset S} X$
where $\powerset S$ is the power set of $S$.

Then $\mathbb S = \O$.


Proof
By Intersection is Subset:

$\ds \forall X \in \powerset S: \bigcap_{X \mathop \in \powerset S} X \subseteq X$

From Empty Set is Element of Power Set:

$\O \in \powerset S$
So:

$\ds \bigcap_{X \mathop \in \powerset S} X \subseteq \O$
From Empty Set is Subset of All Sets:

$\ds \O \subseteq \bigcap_{X \mathop \in \powerset S} X$
So by definition of set equality:

$\ds \bigcap_{X \mathop \in \powerset S} X = \O$
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 5$: Complements and Powers




