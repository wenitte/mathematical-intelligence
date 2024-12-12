# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Symmetric_Relation



Theorem
The following definitions of the concept of Symmetric Relation are equivalent:

Definition 1
$\RR$ is symmetric if and only if:

$\tuple {x, y} \in \RR \implies \tuple {y, x} \in \RR$
Definition 2
$\RR$ is symmetric if and only if it equals its inverse:

$\RR^{-1} = \RR$
Definition 3
$\RR$ is symmetric if and only if it is a subset of its inverse:

$\RR \subseteq \RR^{-1}$


Proof
Definition 1 implies Definition 3
Let $\RR$ be a relation which fulfils the condition:

$\tuple {x, y} \in \RR \implies \tuple {y, x} \in \RR$

Then:














\(\ds \)

\(\)







\(\ds \tuple {x, y} \in \RR\)




















\(\ds \)

\(\leadsto\)







\(\ds \tuple {y, x} \in \RR\)





by hypothesis














\(\ds \)

\(\leadsto\)







\(\ds \tuple {x, y} \in \RR^{-1}\)





Definition of Inverse Relation














\(\ds \)

\(\leadsto\)







\(\ds \RR \subseteq \RR^{-1}\)





Definition of Subset




Hence $\RR$ is symmetric by definition 3.
$\Box$


Definition 3 implies Definition 2
Let $\RR$ be a relation which fulfils the condition:

$\RR \subseteq \RR^{-1}$
Then by Inverse Relation Equal iff Subset:

$\RR = \RR^{-1}$
Hence $\RR$ is symmetric by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $\RR$ be a relation which fulfils the condition:

$\RR^{-1} = \RR$

Then:














\(\ds \)

\(\)







\(\ds \tuple {x, y} \in \RR\)




















\(\ds \)

\(\leadsto\)







\(\ds \tuple {x, y} \in \RR^{-1}\)





as $\RR^{-1} = \RR$














\(\ds \)

\(\leadsto\)







\(\ds \tuple {y, x} \in \RR\)





Definition of Inverse Relation



Hence $\RR$ is symmetric by definition 1.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 10$: Equivalence Relations: Exercise $10.6 \ \text{(b)}$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Relations: Theorem $3$
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.19$: Some Important Properties of Relations: Exercise $5$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 3$: Relations: Exercise $3.14 \ \text{(a)}$




