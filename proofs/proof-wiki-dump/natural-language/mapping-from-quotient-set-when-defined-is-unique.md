# 

Source: https://proofwiki.org/wiki/Mapping_from_Quotient_Set_when_Defined_is_Unique



Theorem
Let $S$ and $T$ be sets.
Let $\RR$ be an equivalence relation on $S$.
Let $f: S \to T$ be a mapping from $S$ to $T$.

Let $S / \RR$ be the quotient set of $S$ induced by $\RR$.
Let $q_\RR: S \to S / \RR$ be the quotient mapping induced by $\RR$.
Let the mapping $\phi: S / \RR \to T$ defined as:

$\phi \circ q_\RR = f$
be well-defined.

Then $\phi$ is unique.


Proof
From Condition for Mapping from Quotient Set to be Well-Defined, $\phi$ is well-defined if and only if:

$\forall x, y \in S: \tuple {x, y} \in \RR \implies \map f x = \map f y$
From Quotient Mapping is Surjection, $q_\RR$ is a surjection.

Suppose $\psi: S / \RR \to T$ is another well-defined mapping defined as:

$\psi \circ q_\RR = f$

Then we have:














\(\ds \phi \circ q_\RR\)

\(=\)







\(\ds \psi \circ q_\RR\)














\(\ds \leadsto \ \ \)





\(\ds \phi\)

\(=\)







\(\ds \psi\)





Surjection iff Right Cancellable



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
Condition for Mapping from Quotient Set to be Injection
Condition for Mapping from Quotient Set to be Surjection


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations: Theorem $6.5$




