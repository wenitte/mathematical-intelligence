# 

Source: https://proofwiki.org/wiki/Preimage_of_Union_under_Relation



Theorem
Let $S$ and $T$ be sets.
Let $\RR \subseteq S \times T$ be a relation.
Let $T_1$ and $T_2$ be subsets of $T$.

Then:

$\RR^{-1} \sqbrk {T_1 \cup T_2} = \RR^{-1} \sqbrk {T_1} \cup \RR^{-1} \sqbrk {T_2}$


General Result
Let $S$ and $T$ be sets.
Let $\RR \subseteq S \times T$ be a relation.
Let $\powerset T$ be the power set of $T$.
Let $\mathbb T \subseteq \powerset T$.

Then:

$\ds \RR^{-1} \sqbrk {\bigcup \mathbb T} = \bigcup_{X \mathop \in \mathbb T} \RR^{-1} \sqbrk X$
where $\RR^{-1} \sqbrk X$ denotes the preimage of $X$ under $\RR$.


Family of Sets
Let $S$ and $T$ be sets.
Let $\family {T_i}_{i \mathop \in I}$ be a family of subsets of $T$.
Let $\RR \subseteq S \times T$ be a relation.

Then:

$\ds \RR^{-1} \sqbrk {\bigcup_{i \mathop \in I} T_i} = \bigcup_{i \mathop \in I} \RR^{-1} \sqbrk {T_i}$
where:

$\ds \bigcup_{i \mathop \in I} T_i$ denotes the union of $\family {T_i}_{i \mathop \in I}$
$\RR^{-1} \left[{T_i}\right]$ denotes the preimage of $T_i$ under $\RR$.


Proof
We have that $\RR^{-1}$ is a relation.
The result follows from Image of Union under Relation.
$\blacksquare$


Also see
Preimage of Intersection under Relation
Image of Intersection under Relation
Image of Union under Relation




