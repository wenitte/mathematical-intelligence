# 

Source: https://proofwiki.org/wiki/Preimage_of_Union_under_Mapping/Family_of_Sets



Theorem
Let $S$ and $T$ be sets.
Let $\family {T_i}_{i \mathop \in I}$ be a family of subsets of $T$.
Let $f: S \to T$ be a mapping.

Then:

$\ds f^{-1} \sqbrk {\bigcup_{i \mathop \in I} T_i} = \bigcup_{i \mathop \in I} f^{-1} \sqbrk {T_i}$
where:

$\ds \bigcup_{i \mathop \in I} T_i$ denotes the union of $\family {T_i}_{i \mathop \in I}$
$f^{-1} \sqbrk {T_i}$ denotes the preimage of $T_i$ under $f$.


Proof 1
As $f$, being a mapping, is also a relation, we can apply Preimage of Union under Relation: Family of Sets:

$\ds \RR^{-1} \sqbrk {\bigcup_{i \mathop \in I} T_i} = \bigcup_{i \mathop \in I} \RR^{-1} \sqbrk {T_i}$
where $\RR^{-1} \sqbrk {T_i}$ denotes the preimage of $T_i$ under $\RR^{-1}$.
$\blacksquare$


Proof 2
We have that $f$ is a mapping, and so also a relation.
Thus its inverse $f^{-1}$ is also a relation.
Hence we can apply Image of Union under Relation: Family of Sets:

$\ds \RR \sqbrk {\bigcup_{i \mathop \in I} T_i} = \bigcup_{i \mathop \in I} \RR \sqbrk {T_i}$
where $\RR \sqbrk {T_i}$ denotes the image of $T_i$ under $\RR$.
$\blacksquare$


Sources
1955: John L. Kelley: General Topology ... (previous) ... (next): Chapter $0$: Functions: Theorem $7 \ \text{(d)}$
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 10$: Inverses and Composites
1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis ... (previous) ... (next): $\S 1.3$: Functions and mappings. Images and preimages: Remark $2$
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.12$: Set Inclusions for Image and Inverse Image Sets: Theorem $12.6 \ \text{(c)}$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations: Exercise $1$
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 6$: Functions: Exercise $4 \ \text{(a})$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): Notation and Terminology
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.6$: Functions: Exercise $1.6.3 \ \text{(i)}$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): Appendix $\text{A}.3$: Functions: Problem $\text{A}.3.1$
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 2$




