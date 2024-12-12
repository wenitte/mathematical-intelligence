# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Minimal_Element



Theorem
Let $\struct {S, \RR}$ be a relational structure.
Let $T \subseteq S$ be a subset of $S$.

The following definitions of the concept of Minimal Element are equivalent:

Definition 1
An element $x \in T$ is a minimal element (under $\RR$) of $T$ if and only if:

$\forall y \in T: y \mathrel \RR x \implies x = y$
Definition 2
An element $x \in T$ is a minimal element (under $\RR$) of $T$ if and only if:

$\neg \exists y \in T: y \mathrel {\RR^\ne} x$
where $y \mathrel {\RR^\ne} x$ denotes that $y \mathrel \RR x$ but $y \ne x$.


Proof
Definition 1 implies Definition 2
Let $x$ be an minimal element by definition 1.
That is:

$(1): \quad \forall y \in T: y \mathrel \RR x \implies x = y$
Aiming for a contradiction, suppose:

$\exists y \in T: y \mathrel {\RR^\ne} x$
Then by definition:

$y \mathrel \RR x \land x \ne y$
which contradicts $(1)$.
Thus by Proof by Contradiction:

$\nexists y \in T: y \mathrel {\RR^\ne} x$
That is $x$ is a minimal element by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $x$ be a minimal element by definition 2.
That is:

$(2): \quad \nexists y \in T: y \mathrel {\RR^\ne} x$
Aiming for a contradiction, suppose:

$\exists y \in T: y \mathrel \RR x: x \ne y$
That is:

$\exists y \in T: y \mathrel {\RR^\ne} x$
which contradicts $(2)$.
Thus:

$\forall y \in T: y \mathrel \RR x \implies x = y$
Thus $x$ is a minimal element by definition 1.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 14$: Order




