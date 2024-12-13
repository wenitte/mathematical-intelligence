# 

Source: https://proofwiki.org/wiki/Identity_Mapping_is_Right_Identity



Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping.

Then:

$f \circ I_S = f$
where $I_S$ is the identity mapping on $S$, and $\circ$ signifies composition of mappings.


Proof 1
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


Proof 2
By definition, a mapping is also a relation.
Also by definition, the identity mapping is the same as the diagonal relation.
Thus Diagonal Relation is Right Identity can be applied directly.
$\blacksquare$


Also see
Identity Mapping is Left Identity
Diagonal Relation is Right Identity
Diagonal Relation is Left Identity


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 2$: Product sets, mappings
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 5$: Composites and Inverses of Functions
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Composition of Functions
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Mappings: $\S 16$
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.14$: Composition of Functions: Theorem $14.7$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.3$: Mappings
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $2$: Maps and relations on sets: Definition $2.11$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): Appendix $\text{A}.5$: Identity, One-one, and Onto Functions
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 1.2$




