# 

Source: https://proofwiki.org/wiki/Preimage_of_Intersection_under_Mapping/General_Result

Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping.
Let $\powerset T$ be the power set of $T$.
Let $\mathbb T \subseteq \powerset T$.

Then:

$\ds f^{-1} \sqbrk {\bigcap \mathbb T} = \bigcap_{X \mathop \in \mathbb T} f^{-1} \sqbrk X$


Proof
$f$ is a mapping.
Therefore it is by definition a many-to-one relation.
It follows from Inverse of Many-to-One Relation is One-to-Many that its inverse $f^{-1}$ is a one-to-many relation.

Thus Image of Intersection under One-to-Many Relation: General Result applies:

$\ds \RR \sqbrk {\bigcap \mathbb T} = \bigcap_{X \mathop \in \mathbb T} \RR \sqbrk X$
where here $\RR = f^{-1}$.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $1$: Pairs, Relations, and Functions: Exercise $6 \ \text {(b)}$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 2$: Functions: Exercise $2.3$




