# 

Source: https://proofwiki.org/wiki/Preimage_of_Union_under_Mapping/Family_of_Sets/Proof_2

Theorem
Let $S$ and $T$ be sets.
Let $\family {T_i}_{i \mathop \in I}$ be a family of subsets of $T$.
Let $f: S \to T$ be a mapping.

Then:

$\ds f^{-1} \sqbrk {\bigcup_{i \mathop \in I} T_i} = \bigcup_{i \mathop \in I} f^{-1} \sqbrk {T_i}$
where:

$\ds \bigcup_{i \mathop \in I} T_i$ denotes the union of $\family {T_i}_{i \mathop \in I}$
$f^{-1} \sqbrk {T_i}$ denotes the preimage of $T_i$ under $f$.


Proof
We have that $f$ is a mapping, and so also a relation.
Thus its inverse $f^{-1}$ is also a relation.
Hence we can apply Image of Union under Relation: Family of Sets:

$\ds \RR \sqbrk {\bigcup_{i \mathop \in I} T_i} = \bigcup_{i \mathop \in I} \RR \sqbrk {T_i}$
where $\RR \sqbrk {T_i}$ denotes the image of $T_i$ under $\RR$.
$\blacksquare$





