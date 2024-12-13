# 

Source: https://proofwiki.org/wiki/Inverse_of_Composite_Relation

Theorem
Let $\RR_2 \circ \RR_1 \subseteq S_1 \times S_3$ be the composite of the two relations $\RR_1 \subseteq S_1 \times S_2$ and $\RR_2 \subseteq S_2 \times S_3$.

Then:

$\paren {\RR_2 \circ \RR_1}^{-1} = \RR_1^{-1} \circ \RR_2^{-1}$


Proof
Let $\RR_1 \subseteq S_1 \times S_2$ and $\RR_2 \subseteq S_2 \times S_3$ be relations.
We assume that:

$\Dom {\RR_2} = \Cdm {\RR_1}$
where $\Dom \RR$ denotes domain and $\Cdm \RR$ denotes codomain of a relation $\RR$.
This is necessary for $\RR_2 \circ \RR_1$ to exist.

From the definition of an inverse relation, we have:

$\Dom {\RR_2} = \Cdm {\RR_2^{-1} }$
$\Cdm {\RR_1} = \Dom {\RR_1^{-1} }$

So we confirm that $\RR_1^{-1} \circ \RR_2^{-1}$ is defined.















\(\ds \RR_2 \circ \RR_1\)

\(=\)







\(\ds \set {\tuple {x, z}: x \in S_1, z \in S_3: \exists y \in S_2: \tuple {x, y} \in \RR_1 \land \tuple {y, z} \in \RR_2}\)





Definition of Composition of Relations








\(\ds \leadsto \ \ \)





\(\ds \paren {\RR_2 \circ \RR_1}^{-1}\)

\(=\)







\(\ds \set {\tuple {z, x}: \tuple {x, z} \in \RR_2 \circ \RR_1}\)





Definition of Inverse Relation














\(\ds \)

\(=\)







\(\ds \set {\tuple {z, x}: x \in S_1, z \in S_3: \exists y \in S_2: \tuple {x, y} \in \RR_1 \land \tuple {y, z} \in \RR_2}\)





Definition of Composition of Relations














\(\ds \)

\(=\)







\(\ds \set {\tuple {z, x}: z \in S_3, x \in S_1: \exists y \in S_2: \tuple {z, y} \in \RR_2^{-1} \land \tuple {y, x} \in \RR_1^{-1} }\)





Definition of Inverse Relation














\(\ds \)

\(=\)







\(\ds \RR_1^{-1} \circ \RR_2^{-1}\)





Definition of Composition of Relations



$\blacksquare$


Sources
1955: John L. Kelley: General Topology ... (previous) ... (next): Chapter $0$: Relations: Theorem $5 \ \text{(a)}$
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 10$: Inverses and Composites
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 5$: Composites and Inverses of Functions: Exercise $5.8 \ \text{(c)}$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Problem $\text{AA}$: Relations




