# 

Source: https://proofwiki.org/wiki/Set_equals_Union_of_Power_Set

Theorem
Let $x$ be a set of sets.
Let $\powerset x$ denote the power set of $x$.
Let $\map \bigcup {\powerset x}$ denote the union of $\powerset x$.

Then:

$x = \map \bigcup {\powerset x}$


Proof
From Set is Element of its Power Set:

$x \in \powerset x$
From Element of Class is Subset of Union of Class it follows that:

$x \subseteq \map \bigcup {\powerset x}$
$\Box$

Let $z \in \map \bigcup {\powerset x}$
Then by definition of union|union:

$\exists y \in \powerset x: z \in y$
By definition of $\powerset x$

$\exists y \subseteq x: z \in y$
But by definition of subset, that means:

$z \in x$
Thus, again by definition of subset:

$\map \bigcup {\powerset x} \subseteq x$
$\Box$

We have that:

$x \subseteq \map \bigcup {\powerset x}$
and:

$\map \bigcup {\powerset x} \subseteq x$
Hence by definition of set equality:

$x = \map \bigcup {\powerset x}$
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 6$ The power axiom: Exercise $6.1. \ \text {(b)}$




