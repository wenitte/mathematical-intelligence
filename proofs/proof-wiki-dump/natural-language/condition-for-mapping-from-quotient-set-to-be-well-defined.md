# 

Source: https://proofwiki.org/wiki/Condition_for_Mapping_from_Quotient_Set_to_be_Well-Defined

  This article is a landmark page.  It was the 2500th proof on $\mathsf{Pr} \infty \mathsf{fWiki}$!




Theorem
Let $S$ and $T$ be sets.
Let $\RR$ be an equivalence relation on $S$.
Let $f: S \to T$ be a mapping from $S$ to $T$.

Let $S / \RR$ be the quotient set of $S$ induced by $\RR$.
Let $q_\RR: S \to S / \RR$ be the quotient mapping induced by $\RR$.

Then:

there exists a mapping $\phi: S / \RR \to T$ such that $\phi \circ q_\RR = f$
if and only if:

$\forall x, y \in S: \tuple {x, y} \in \RR \implies \map f x = \map f y$


$\begin {xy} \xymatrix@L + 2mu@ + 1em {
S \ar[r]^*{f}
  \ar[d]_*{q_\RR}

& T \\
S / \RR \ar@{-->}[ur]_*{\phi} } \end {xy}$


Mapping from Quotient Set when Defined is Unique
Let the mapping $\phi: S / \RR \to T$ defined as:

$\phi \circ q_\RR = f$
be well-defined.

Then $\phi$ is unique.


Condition for Mapping from Quotient Set to be Injection
Let the mapping $\phi: S / \RR \to T$ defined as:

$\phi \circ q_\RR = f$
be well-defined.
Then:

$\phi$ is an injection
That is,

$\forall x, y \in S: \tuple {x, y} \in \RR \iff \map f x = \map f y$


Condition for Mapping from Quotient Set to be Surjection
Let the mapping $\phi: S / \RR \to T$ defined as:

$\phi \circ q_\RR = f$
be well-defined.

Then:

$\phi$ is a surjection
if and only if:

$f$ is a surjection.


Motivation
Suppose we are given a mapping $f: S \to T$.
Suppose we have an equivalence $\RR$ on $S$, and we want to define a mapping on the quotient set:

$\phi: S / \RR \to T$
such that:

$\map \phi {\eqclass \cdots \RR} = \map f \cdots$
That is, we want every element of a given equivalence class to map to the same element of the codomain of $f$.
The only way this can be done is to set $\map \phi {\eqclass x \RR} = \map f x$.

Now, if $x, y \in S$ are in the same equivalence class class with respect to $\RR$, that is, in order for $\map \phi {\eqclass x \RR}$ to make any sort of sense, we need to make sure that $\map \phi {\eqclass x \RR} = \map \phi {\eqclass y \RR}$, or (which comes to the same thing) $\map f x = \map f y$.
So $\map \phi {\eqclass x \RR} = \map f x$ defines a mapping $\phi: S / \RR \to T$ if and only if $\forall \tuple {x, y} \in \RR: \map f x = \map f y$.
If this holds, then the mapping $\phi$ is well-defined.
The terminology is misleading, as $\phi$ cannot be defined at all if the condition is not met.

What this means is: if we want to define a mapping from a quotient set to any other set, then all the individual elements of each equivalence class in the domain must map to the same element in the codomain.
Therefore, when attempting to construct or analyse such a mapping, it is necessary to check for well-definedness.


Proof
From Condition for Composite Mapping on Left, we have:

$\exists \phi: S / \RR \to T$ such that $\phi$ is a mapping and $\phi \circ q_\RR = f$
if and only if:

$\forall x, y \in S: \map {q_\RR} x = \map {q_\RR} y \implies \map f x = \map f y$
But by definition of the quotient mapping induced by $\RR$:

$\map {q_\RR} x = \map {q_\RR} y \iff \tuple {x, y} \in \RR$
Hence the result.
$\blacksquare$


Also see
Definition:Well-Defined Mapping


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Problem $\text{CC}$: Factoring through Quotients
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Equivalence Relations: $\S 19$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations: Theorem $6.5$
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): Appendix $\text{A}$ Preliminaries: $\S 1.$ Linear Algebra




