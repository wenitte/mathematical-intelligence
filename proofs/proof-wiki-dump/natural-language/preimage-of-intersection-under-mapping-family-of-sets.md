# 

Source: https://proofwiki.org/wiki/Preimage_of_Intersection_under_Mapping/Family_of_Sets



Theorem
Let $S$ and $T$ be sets.
Let $\family {T_i}_{i \mathop \in I}$ be a family of subsets of $T$.
Let $f: S \to T$ be a mapping.

Then:

$\ds f^{-1} \sqbrk {\bigcap_{i \mathop \in I} T_i} = \bigcap_{i \mathop \in I} f^{-1} \sqbrk {T_i}$
where:

$\ds \bigcap_{i \mathop \in I} T_i$ denotes the intersection of $\family {T_i}_{i \mathop \in I}$.
$f^{-1} \sqbrk {T_i}$ denotes the preimage of $T_i$ under $f$.


Proof 1
As $f$ is a mapping, it is by definition also a many-to-one relation.
It follows from Inverse of Many-to-One Relation is One-to-Many that its inverse $f^{-1}$ is a one-to-many relation.

Thus Image of Intersection under One-to-Many Relation: Family of Sets can be applied for $\RR = f^{-1}$:

$\ds \RR \sqbrk {\bigcap_{i \mathop \in I} T_i} = \bigcap_{i \mathop \in I} \RR \sqbrk {T_i}$
where $\RR \sqbrk {T_i}$ denotes the image of $T_i$ under $\RR$.
$\blacksquare$


Proof 2













\(\ds x\)

\(\in\)







\(\ds f^{-1} \sqbrk {\bigcap_{i \mathop \in I} T_i}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \map f x\)

\(\in\)







\(\ds \bigcap_{i \mathop \in I} T_i\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \forall i \in I: \, \)



\(\ds \map f x\)

\(\in\)







\(\ds T_i\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \forall i \in I: \, \)



\(\ds x\)

\(\in\)







\(\ds f^{-1} \sqbrk {T_i}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds \bigcap_{i \mathop \in I} f^{-1} \sqbrk {T_i}\)









$\blacksquare$


Sources
1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis ... (previous) ... (next): $\S 1.3$: Functions and mappings. Images and preimages: Remark $2$
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.12$: Set Inclusions for Image and Inverse Image Sets: Theorem $12.6 \ \text{(c)}$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations: Exercise $1$
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 6$: Functions: Exercise $4 \ \text{(b})$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): Notation and Terminology
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.6$: Functions: Exercise $1.6.3 \ \text{(ii)}$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): Appendix $\text{A}.3$: Functions: Problem $\text{A}.3.1$
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 2$




