# 

Source: https://proofwiki.org/wiki/Condition_for_Mapping_from_Quotient_Set_to_be_Injection



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

$\phi$ is an injection
That is,

$\forall x, y \in S: \tuple {x, y} \in \RR \iff \map f x = \map f y$


Proof

This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: the below is indigestibleYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Necessary Condition
Let:

$\forall x, y \in S: \tuple {x, y} \in \RR \iff \map f x = \map f y$

It is to be shown that $\phi$ is injective.
That is:

$\forall \eqclass x \RR, \eqclass y \RR \in S / \RR: \map \phi {\eqclass x \RR} = \map \phi {\eqclass y \RR} \implies \eqclass x \RR = \eqclass y \RR$

By definition, $\phi$ is a mapping from $S$ to $S / \RR$.

Thus:

$\forall x \in S: \exists \map f x \in S / \RR: \map \phi {\eqclass x \RR} = \map f x$
and also:

$\forall y \in S: \exists \map f y \in S / \RR: \map \phi {\eqclass y \RR} = \map f y$

Combining the results:

$\forall x, y \in S, \forall \eqclass x \RR, \eqclass y \RR \in S / \RR: \exists \map f x = \map f y \in S / \RR: \map \phi {\eqclass x \RR} = \map f x = \map f y = \map \phi {\eqclass y \RR} \iff \tuple {x, y} \in \RR$

Then:

$\forall x, y \in S, \forall \eqclass x \RR, \eqclass y \RR \in S / \RR: \map \phi {\eqclass x \RR} = \map \phi {\eqclass y \RR} \implies \tuple {x, y} \in \RR$

By the definition of an equivalence class:

$\forall \eqclass x \RR, \eqclass y \RR \in S / \RR: \map \phi {\eqclass x \RR}, \map \phi {\eqclass y \RR} \implies \eqclass x \RR = \eqclass y \RR$
as required.
$\Box$


Sufficient Condition
Let $\phi$ be injective.
It is to be shown that:

$\forall x, y \in S: \tuple {x, y} \in \RR \iff \map f x = \map f y$

From Condition for Mapping from Quotient Set to be Well-Defined, $\phi$ is well-defined if and only if:

$\forall x, y \in S: \tuple {x, y} \in \RR \implies \map f x = \map f y$

Thus, it remains to be shown that:

$\forall x, y \in S: \map f x = \map f y \implies \tuple {x, y} \in \RR$

By definition, $\phi$ is injective if and only if:

$\forall \eqclass x \RR, \eqclass y \RR \in S / \RR: \map \phi {\eqclass x \RR} = \map \phi {\eqclass y \RR} \implies \eqclass x \RR = \eqclass y \RR$

By the definition of an equivalence class:

$\forall x, y \in S, \forall \eqclass x \RR, \eqclass y \RR \in S / \RR: \map \phi {\eqclass x \RR} = \map \phi {\eqclass y \RR} \implies \tuple {x, y} \in \RR$

By the definition of a quotient map:

$\forall x, y \in S: \map \phi {\map {q_\RR} x} = \map \phi {\map {q_\RR} y} \implies \tuple {x, y} \in \RR$

By the definition of a composition of mappings:

$\forall x, y \in S: \map {\paren {\phi \circ q_\RR} } x = \map {\paren {\phi \circ q_\RR} } y \implies \tuple {x, y} \in \RR$

Hence, by the well-definedness of $\phi \circ q_\RR = f$:

$\forall x, y \in S: \map f x = \map f y \implies \tuple {x, y} \in \RR$

as required.
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
Condition for Mapping from Quotient Set to be Surjection


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations: Theorem $6.5$




