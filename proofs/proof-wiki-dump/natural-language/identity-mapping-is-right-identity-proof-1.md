# 

Source: https://proofwiki.org/wiki/Identity_Mapping_is_Right_Identity/Proof_1



Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping.

Then:

$f \circ I_S = f$
where $I_S$ is the identity mapping on $S$, and $\circ$ signifies composition of mappings.


Proof
Equality of Codomains
The codomains of $f$ and $f \circ I_S$ are both equal to $T$ from Codomain of Composite Relation.
$\Box$


Equality of Domains
From Domain of Composite Relation:

$\Dom {f \circ I_S} = \Dom {I_S}$
But from the definition of the identity mapping:

$\Dom {I_S} = \Img {I_S} = S$
$\Box$


Equality of Mappings
The composite of $I_S$ and $f$ is defined as:

$f \circ I_S = \set {\tuple {x, z} \in S \times T: \exists y \in S: \tuple {x, y} \in I_S \land \tuple {y, z} \in f}$
But by definition of the identity mapping on $S$, we have that:

$\tuple {x, y} \in I_S \implies x = y$
Hence:

$f \circ I_S = \set {\tuple {y, z} \in S \times T: \exists y \in S: \tuple {y, y}\ \in I_S \land \tuple {y, z} \in f}$

But as $\forall y \in S: \tuple {y, y} \in I_S$, this means:

$f \circ I_S = \set {\tuple {y, z} \in S \times T: \tuple {y, z} \in f}$
That is:

$f \circ I_S = f$
$\Box$

Hence the result, by Equality of Mappings.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 3.5$. Identity mappings: Example $52$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Problem $\text{BB}$: Categorical Matters
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 24.3 \ \text{(i)}$: Composition of Mappings




