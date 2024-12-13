# 

Source: https://proofwiki.org/wiki/Intersection_of_Subsets_is_Subset/Set_of_Sets

Theorem
Let $T$ be a set.
Let $\mathbb S$ be a non-empty set of sets.
Suppose that for each $S \in \mathbb S$:

$S \subseteq T$
Then:

$\bigcap \mathbb S \subseteq T$


Proof
Let $x \in \bigcap \mathbb S$.
Then by the definition of intersection:

$\forall S \in \mathbb S: x \in S$.
Since $\mathbb S$ is non-empty by the premise, it has some element $S$.
Then $x \in S$.
Since $S \in \mathbb S$, the premise shows that $S \subseteq T$.
By the definition of subset, $x \in T$.
Since this holds for each $x \in \bigcap \mathbb S$:

$\bigcap \mathbb S \subseteq T$
$\blacksquare$





