# 

Source: https://proofwiki.org/wiki/Preimage_of_Intersection_under_Relation



Theorem
Let $S$ and $T$ be sets.
Let $\RR \subseteq S \times T$ be a relation.
Let $C$ and $D$ be subsets of $T$.

Then:

$\RR^{-1} \sqbrk {C \cap D} \subseteq \RR^{-1} \sqbrk C \cap \RR^{-1} \sqbrk D$


General Result
Let $S$ and $T$ be sets.
Let $\RR \subseteq S \times T$ be a relation.
Let $\map \PP T$ be the power set of $T$.
Let $\mathbb T \subseteq \map \PP T$.

Then:

$\ds \RR^{-1} \sqbrk{\bigcap \mathbb T} \subseteq \bigcap_{X \mathop \in \mathbb T} \RR^{-1} \sqbrk X$


Family of Sets
Let $S$ and $T$ be sets.
Let $\family {T_i}_{i \mathop \in I}$ be a family of subsets of $T$.
Let $\RR \subseteq S \times T$ be a relation.

Then:

$\ds \RR^{-1} \sqbrk {\bigcap_{i \mathop \in I} T_i} \subseteq \bigcap_{i \mathop \in I} \RR^{-1} \sqbrk {T_i}$
where $\ds \bigcap_{i \mathop \in I} T_i$ denotes the intersection of $\family {T_i}_{i \mathop \in I}$.


Also see
Image of Intersection under Relation
Image of Union under Relation
Preimage of Union under Relation


Proof
This follows from Image of Intersection under Relation, and the fact that $\RR^{-1}$ is itself a relation, and therefore obeys the same rules.
$\blacksquare$





