# 

Source: https://proofwiki.org/wiki/Reflexive_and_Transitive_Relation_is_Idempotent

Theorem
Let $\RR \subseteq S \times S$ be a relation on a set $S$.

Let $\RR$ be both reflexive and  transitive.
Then $\RR$ is idempotent, in the sense that:

$\RR \circ \RR = \RR$
where $\circ$ denotes composition of relations.


Proof
Let $\RR$ be both reflexive and  transitive.
By definition of transitive relation:

$\RR \circ \RR \subseteq \RR$

Let $\tuple {x, y} \in \RR$.
By definition of reflexive relation:

$\tuple {y, y} \in \RR$
By definition of composition of relations:

$\tuple {x, y} \in \RR \circ \RR$
Hence:

$\RR \subseteq \RR \circ \RR$

Thus by definition of set equality:

$\RR \circ \RR = \RR$
$\blacksquare$


Sources
1955: John L. Kelley: General Topology ... (previous) ... (next): Chapter $0$: Relations




