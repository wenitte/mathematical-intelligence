# 

Source: https://proofwiki.org/wiki/Preimage_of_Intersection_under_Mapping/Family_of_Sets/Proof_1

Theorem
Let $S$ and $T$ be sets.
Let $\family {T_i}_{i \mathop \in I}$ be a family of subsets of $T$.
Let $f: S \to T$ be a mapping.

Then:

$\ds f^{-1} \sqbrk {\bigcap_{i \mathop \in I} T_i} = \bigcap_{i \mathop \in I} f^{-1} \sqbrk {T_i}$
where:

$\ds \bigcap_{i \mathop \in I} T_i$ denotes the intersection of $\family {T_i}_{i \mathop \in I}$.
$f^{-1} \sqbrk {T_i}$ denotes the preimage of $T_i$ under $f$.


Proof
As $f$ is a mapping, it is by definition also a many-to-one relation.
It follows from Inverse of Many-to-One Relation is One-to-Many that its inverse $f^{-1}$ is a one-to-many relation.

Thus Image of Intersection under One-to-Many Relation: Family of Sets can be applied for $\RR = f^{-1}$:

$\ds \RR \sqbrk {\bigcap_{i \mathop \in I} T_i} = \bigcap_{i \mathop \in I} \RR \sqbrk {T_i}$
where $\RR \sqbrk {T_i}$ denotes the image of $T_i$ under $\RR$.
$\blacksquare$





