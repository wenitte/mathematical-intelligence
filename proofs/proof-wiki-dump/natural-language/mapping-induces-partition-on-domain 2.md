# 

Source: https://proofwiki.org/wiki/Mapping_Induces_Partition_on_Domain

Theorem
Let $f: S \to T$ be a mapping.
Let $F$ be defined as:

$F = \set {\map {f^{-1} } x: x \in T}$
where $\map {f^{-1} } x$ is the preimage of $x$.

Then $F$ is a partition of $S$.


Proof
Let $\RR_f \subseteq S \times S$ be the relation induced by $f$:

$\tuple {s_1, s_2} \in \RR_f \iff \map f {s_1} = \map f {s_2}$
Then from Relation Induced by Mapping is Equivalence Relation, $\RR_f$ is an equivalence relation.
The result follows from Relation Partitions Set iff Equivalence.
$\blacksquare$





