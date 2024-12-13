# 

Source: https://proofwiki.org/wiki/Intersection_is_Largest_Subset



Theorem
Let $T_1$ and $T_2$ be sets.
Then $T_1 \cap T_2$ is the largest set contained in both $T_1$ and $T_2$.

That is:

$S \subseteq T_1 \land S \subseteq T_2 \iff S \subseteq T_1 \cap T_2$


Set of Sets
Intersection is Largest Subset/Set of Sets

General Result
Let $T$ be a set.
Let $\powerset T$ be the power set of $T$.
Let $\mathbb T$ be a subset of $\powerset T$.

Then:

$\paren {\forall X \in \mathbb T: S \subseteq X} \iff S \subseteq \bigcap \mathbb T$


Family of Sets
In the context of a family of sets, the result can be presented as follows:

Let $\family {S_i}_{i \mathop \in I}$ be a family of sets indexed by $I$.

Then for all sets $X$:

$\ds \paren {\forall i \in I: X \subseteq S_i} \iff X \subseteq \bigcap_{i \mathop \in I} S_i$
where $\ds \bigcap_{i \mathop \in I} S_i$ is the intersection of $\family {S_i}$.


Proof
Sufficient Condition
From Set is Subset of Intersection of Supersets we have that:

$S \subseteq T_1 \land S \subseteq T_2 \implies S \subseteq T_1 \cap T_2$
$\Box$


Necessary Condition
Let:

$S \subseteq T_1 \cap T_2$
From Intersection is Subset we have $T_1 \cap T_2 \subseteq T_1$ and $T_1 \cap T_2\subseteq T_2$.
From Subset Relation is Transitive, it follows directly that $S \subseteq T_1$ and $S \subseteq T_2$.
So $S \subseteq T_1 \cap T_2 \implies S \subseteq T_1 \land S \subseteq T_2$.
$\Box$

From the above, we have:

$S \subseteq T_1 \land S \subseteq T_2 \implies S \subseteq T_1 \cap T_2$
$S \subseteq T_1 \cap T_2 \implies S \subseteq T_1 \land S \subseteq T_2$

Thus $S \subseteq T_1 \land S \subseteq T_2 \iff S \subseteq T_1 \cap T_2$ from the definition of equivalence.
$\blacksquare$


Also see
Union is Smallest Superset


Sources
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 1$: Fundamental Concepts: Exercise $1.2 \ \text{(c)}$




