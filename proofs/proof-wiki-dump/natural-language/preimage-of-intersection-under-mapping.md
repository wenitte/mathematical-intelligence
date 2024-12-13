# 

Source: https://proofwiki.org/wiki/Preimage_of_Intersection_under_Mapping



Theorem
Let $f: S \to T$ be a mapping.
Let $T_1$ and $T_2$ be subsets of $T$.

Then:

$f^{-1} \sqbrk {T_1 \cap T_2} = f^{-1} \sqbrk {T_1} \cap f^{-1} \sqbrk {T_2}$

This can be expressed in the language and notation of inverse image mappings as:

$\forall T_1, T_2 \in \powerset T: \map {f^\gets} {T_1 \cap T_2} = \map {f^\gets} {T_1} \cap \map {f^\gets} {T_2}$


General Result
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping.
Let $\powerset T$ be the power set of $T$.
Let $\mathbb T \subseteq \powerset T$.

Then:

$\ds f^{-1} \sqbrk {\bigcap \mathbb T} = \bigcap_{X \mathop \in \mathbb T} f^{-1} \sqbrk X$


Family of Sets
Let $S$ and $T$ be sets.
Let $\family {T_i}_{i \mathop \in I}$ be a family of subsets of $T$.
Let $f: S \to T$ be a mapping.

Then:

$\ds f^{-1} \sqbrk {\bigcap_{i \mathop \in I} T_i} = \bigcap_{i \mathop \in I} f^{-1} \sqbrk {T_i}$
where:

$\ds \bigcap_{i \mathop \in I} T_i$ denotes the intersection of $\family {T_i}_{i \mathop \in I}$.
$f^{-1} \sqbrk {T_i}$ denotes the preimage of $T_i$ under $f$.


Proof
As $f$, being a mapping, is also a many-to-one relation, it follows from Inverse of Many-to-One Relation is One-to-Many that its inverse $f^{-1}$ is a one-to-many relation.

Thus Image of Intersection under One-to-Many Relation applies:

$\RR \sqbrk {T_1 \cap T_2} = \RR \sqbrk {T_1} \cap \RR \sqbrk {T_2}$
where here $\RR = f^{-1}$.
$\blacksquare$


Also see
Image of Intersection under Mapping
Preimage of Intersection under Relation


Image of Union under Mapping
Preimage of Union under Mapping


Sources
1955: John L. Kelley: General Topology ... (previous) ... (next): Chapter $0$: Functions: Theorem $7 \ \text{(c)}$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Exercise $12.13 \ \text{(b)}$
1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis ... (previous) ... (next): $\S 1.3$: Functions and mappings. Images and preimages: Theorem $2$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Mappings: $\S 12 \alpha$
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.12$: Set Inclusions for Image and Inverse Image Sets: Theorem $12.4$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Theorem $5.1: \ \text{(jjj)}$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 2$: Functions: Exercise $2.2 \ \text{(c)}$
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 2$: Problem $4 \ \text{(ii)}$




