# 

Source: https://proofwiki.org/wiki/Diagonal_Relation_is_Right_Identity



Theorem
Let $\RR \subseteq S \times T$ be a relation on $S \times T$.

Then:

$\RR \circ \Delta_S = \RR$
where $\Delta_S$ is the diagonal relation on $S$, and $\circ$ signifies composition of relations.


Proof
We use the definition of relation equality, as follows:


Equality of Codomains
The codomains of $\RR$ and $\RR \circ \Delta_S$ are both equal to $T$ from Codomain of Composite Relation.


Equality of Domains
The domains of $\RR$ and $\RR \circ \Delta_S$ are also easily shown to be equal.
From Domain of Composite Relation:

$\Dom {\RR \circ \Delta_S} = \Dom {\Delta_S}$
But from the definition of the diagonal relation:

$\Dom {\Delta_S} = \Img {\Delta_S} = S$


Equality of Relations
The composite of $\Delta_S$ and $\RR$ is defined as:

$\RR \circ \Delta_S = \set {\tuple {x, z} \in S \times T: \exists y \in S: \tuple {x, y} \in \Delta_S \land \tuple {y, z} \in \RR}$
But by definition of the diagonal relation on $S$, we have that:

$\tuple {x, y} \in \Delta_S \implies x = y$
Hence:

$\RR \circ \Delta_S = \set {\tuple {y, z} \in S \times T: \exists y \in S: \tuple {y, y} \in \Delta_S \land \tuple {y, z} \in \RR}$

But as $\forall y \in S: \tuple {y, y} \in \Delta_S$, this means:

$\RR \circ \Delta_S = \set {\tuple {y, z} \in S \times T: \tuple {y, z} \in \RR}$
That is:

$\RR \circ \Delta_S = \RR$
Hence the result.
$\blacksquare$


Also see
Diagonal Relation is Left Identity
Identity Mapping is Right Identity
Identity Mapping is Left Identity


Sources
1955: John L. Kelley: General Topology ... (previous) ... (next): Chapter $0$: Relations
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 10$: Inverses and Composites
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 5$: Composites and Inverses of Functions: Exercise $5.8 \ \text{(d)}$




