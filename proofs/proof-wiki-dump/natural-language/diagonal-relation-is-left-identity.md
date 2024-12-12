# 

Source: https://proofwiki.org/wiki/Diagonal_Relation_is_Left_Identity



Theorem
Let $\RR \subseteq S \times T$ be a relation on $S \times T$.

Then:

$\Delta_T \circ \RR = \RR$
where $\Delta_T$ is the diagonal relation on $T$, and $\circ$ signifies composition of relations.


Proof
We use the definition of relation equality, as follows:


Equality of Domains
The domains of $\RR$ and $\Delta_T \circ \RR$ are equal from Domain of Composite Relation:

$\Dom {\Delta_T \circ \RR} = \Dom \RR$


Equality of Codomains
From Codomain of Composite Relation, the codomains of $\Delta_T \circ \RR$ and $\Delta_T$ are both equal to $T$.
But from the definition of the diagonal relation, the codomain of $\Delta_T$ is $\Dom {\Delta_T} = T$.


Equality of Relations
The composite of $\RR$ and $\Delta_T$ is defined as:

$\Delta_T \circ \RR = \set {\tuple {x, z} \in S \times T: \exists y \in T: \tuple {x, y} \in \RR \land \tuple {y, z} \in \Delta_T}$
But by definition of the diagonal relation on $T$, we have that:

$\tuple {y, z} \in \Delta_T \implies y = z$
Hence:

$\Delta_T \circ \RR = \set {\tuple {x, y} \in S \times T: \exists y \in T: \tuple {x, y} \in \RR \land \tuple {y, y} \in \Delta_T}$

But as $\forall y \in T: \tuple {y, y} \in \Delta_T$, this means:

$\Delta_T \circ \RR = \set {\tuple {x, y} \in S \times T: \tuple {x, y} \in \RR}$
That is:

$\Delta_T \circ \RR = \RR$
Hence the result.
$\blacksquare$


Also see
Diagonal Relation is Right Identity
Identity Mapping is Left Identity
Identity Mapping is Right Identity


Sources
1955: John L. Kelley: General Topology ... (previous) ... (next): Chapter $0$: Relations
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 10$: Inverses and Composites
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 5$: Composites and Inverses of Functions: Exercise $5.8 \ \text{(d)}$




