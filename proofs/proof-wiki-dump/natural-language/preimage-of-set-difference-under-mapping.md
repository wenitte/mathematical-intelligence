# 

Source: https://proofwiki.org/wiki/Preimage_of_Set_Difference_under_Mapping



Theorem
Let $f: S \to T$ be a mapping.
Let $T_1$ and $T_2$ be subsets of $T$.

Then:

$f^{-1} \sqbrk {T_1 \setminus T_2} = f^{-1} \sqbrk {T_1} \setminus f^{-1} \sqbrk {T_2}$
where:

$\setminus$ denotes set difference
$f^{-1} \sqbrk {T_1}$ denotes preimage.


Corollary 1
Let $f: S \to T$ be a mapping.
Let $T_1 \subseteq T_2 \subseteq T$.

Then:

$\relcomp {f^{-1} \sqbrk {T_2} } {f^{-1} \sqbrk {T_1} } = f^{-1} \sqbrk {\relcomp {T_2} {T_1} }$
where:

$\complement$ (in this context) denotes relative complement
$f^{-1} \sqbrk {T_1}$ denotes preimage.


Corollary 2
Let $f: S \to T$ be a mapping.
Let $T_1$ be a subset of $T$.

Then:

$\relcomp S {f^{-1} \sqbrk {T_1} } = f^{-1} \sqbrk {\relcomp T {T_1} }$
where:

$\complement_S$ (in this context) denotes relative complement
$f^{-1} \sqbrk {T_1}$ denotes preimage.


Proof
From Inverse of Mapping is One-to-Many Relation, we have that $f^{-1}: T \to S$ is one-to-many.

Thus we can apply One-to-Many Image of Set Difference:

$\RR \sqbrk {T_1 \setminus T_2} = \RR \sqbrk {T_1} \setminus \RR \sqbrk {T_2}$
where in this context $\RR = f^{-1}$.
$\blacksquare$


Sources
1955: John L. Kelley: General Topology ... (previous) ... (next): Chapter $0$: Functions: Theorem $7 \ \text{(a)}$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Mappings: $\S 12 \alpha$
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.12$: Set Inclusions for Image and Inverse Image Sets: Exercise $4 \ \text{(b)}$
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.6$: Functions: Exercise $1.6.3 \ \text{(iii)}$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 2$: Functions: Exercise $2.2 \ \text{(d)}$
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 2$




