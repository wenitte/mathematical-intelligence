# 

Source: https://proofwiki.org/wiki/Identity_Mapping_is_Left_Identity/Proof_1



Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping.

Then:

$I_T \circ f = f$
where $I_T$ is the identity mapping on $T$, and $\circ$ signifies composition of mappings.


Proof
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


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 3.5$. Identity mappings: Example $52$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Problem $\text{BB}$: Categorical Matters
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 24.3 \ \text{(ii)}$: Composition of Mappings




