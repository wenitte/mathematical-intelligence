# 

Source: https://proofwiki.org/wiki/Identity_Mapping_is_Left_Identity



Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping.

Then:

$I_T \circ f = f$
where $I_T$ is the identity mapping on $T$, and $\circ$ signifies composition of mappings.


Proof 1
Equality of Domains
The domains of $f$ and $I_T \circ f$ are equal from Domain of Composite Relation:

$\Dom {I_T \circ f} = \Dom f$
$\Box$


Equality of Codomains
The codomains of $f$ and $f \circ I_S$ are also easily shown to be equal.
From Codomain of Composite Relation, the codomains of $I_T \circ f$ and $I_T$ are both equal to $T$.
But from the definition of the identity mapping, the codomain of $I_T$ is $\Dom {I_T} = T$
$\Box$


Equality of Relations
The composite of $f$ and $I_T$ is defined as:

$I_T \circ f = \set {\tuple {x, z} \in S \times T: \exists y \in T: \tuple {x, y} \in f \land \tuple {y, z} \in I_T}$
But by definition of the identity mapping on $T$, we have that:

$\tuple {y, z} \in I_T \implies y = z$
Hence:

$I_T \circ f = \set {\tuple {x, y} \in S \times T: \exists y \in T: \tuple {x, y} \in f \land \tuple {y, y} \in I_T}$

But as $\forall y \in T: \tuple {y, y} \in I_T$, this means:

$I_T \circ f = \set {\tuple {x, y} \in S \times T: \tuple {x, y} \in f}$
That is:

$I_T \circ f = f$
$\Box$

Hence the result, by Equality of Mappings.
$\blacksquare$


Proof 2
By definition, a mapping is also a relation.
Also by definition, the identity mapping is the same as the diagonal relation.
Thus Diagonal Relation is Left Identity can be applied directly.
$\blacksquare$


Also see
Identity Mapping is Right Identity
Diagonal Relation is Left Identity
Diagonal Relation is Right Identity


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 2$: Product sets, mappings
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 5$: Composites and Inverses of Functions
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Composition of Functions
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Mappings: $\S 16$
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.14$: Composition of Functions: Theorem $14.8$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.3$: Mappings
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $2$: Maps and relations on sets: Definition $2.11$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): Appendix $\text{A}.5$: Identity, One-one, and Onto Functions
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 1.2$




