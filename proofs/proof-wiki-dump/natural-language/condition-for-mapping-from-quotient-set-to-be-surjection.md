# 

Source: https://proofwiki.org/wiki/Condition_for_Mapping_from_Quotient_Set_to_be_Surjection



Theorem
Let $S$ and $T$ be sets.
Let $\RR$ be an equivalence relation on $S$.
Let $f: S \to T$ be a mapping from $S$ to $T$.

Let $S / \RR$ be the quotient set of $S$ induced by $\RR$.
Let $q_\RR: S \to S / \RR$ be the quotient mapping induced by $\RR$.
Let the mapping $\phi: S / \RR \to T$ defined as:

$\phi \circ q_\RR = f$
be well-defined.

Then:

$\phi$ is a surjection
if and only if:

$f$ is a surjection.


Proof
We are given that:

$\phi \circ q_\RR = f$
is well-defined.

Note that from Quotient Mapping is Surjection, $q_\RR$ is a surjection.


Sufficient Condition
Let $\phi$ be a surjection.
Then from Composite of Surjections is Surjection:

$\phi \circ q_\RR$ is a surjection.
$\Box$


Necessary Condition
Let $f = \phi \circ q_\RR$ be a surjection.
Then from Surjection if Composite is Surjection:

$\phi$ is a surjection.
$\Box$

Hence the result.
$\blacksquare$


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


Also see
Definition:Well-Defined Mapping
Condition for Mapping from Quotient Set to be Well-Defined
Mapping from Quotient Set when Defined is Unique
Condition for Mapping from Quotient Set to be Injection


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations: Theorem $6.5$




