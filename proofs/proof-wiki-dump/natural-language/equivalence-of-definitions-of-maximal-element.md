# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Maximal_Element



Theorem
Let $\struct {S, \RR}$ be a relational structure.
Let $T \subseteq S$ be a subset of $S$.

The following definitions of the concept of Maximal Element are equivalent:

Definition 1
An element $x \in T$ is a maximal element (under $\RR$) of $T$ if and only if:

$x \mathrel \RR y \implies x = y$
Definition 2
An element $x \in T$ is a maximal element (under $\RR$) of $T$ if and only if:

$\neg \exists y \in T: x \mathrel {\RR^\ne} y$
where $x \mathrel {\RR^\ne} y$ denotes that $x \mathrel \RR y$ but $x \ne y$.


Proof
Definition 1 implies Definition 2
Let $x$ be an maximal element by definition 1.
That is:

$(1): \quad \forall y \in T: x \mathrel \RR y \implies x = y$
Aiming for a contradiction, suppose that:

$\exists y \in T: x \mathrel {\RR^\ne} y$
Then by definition:

$x \mathrel \RR y \land x \ne y$
which contradicts $(1)$.
Thus by Proof by Contradiction:

$\nexists y \in T: x \mathrel {\RR^\ne} y$
That is $x$ is a maximal element by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $x$ be a maximal element by definition 2.
That is:

$(2): \quad \nexists y \in T: x \mathrel {\RR^\ne} y$
Aiming for a contradiction, suppose that:

$\exists y \in T: x \mathrel \RR y: x \ne y$
That is:

$\exists y \in T: x \mathrel {\RR^\ne} y$
which contradicts $(2)$.
Thus:

$\forall y \in T: x \mathrel \RR y \implies x = y$
Thus $x$ is a maximal element by definition 1.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 14$: Order




