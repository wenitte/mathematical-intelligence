# 

Source: https://proofwiki.org/wiki/Equivalence_of_Formulations_of_Axiom_of_Choice/Formulation_1_iff_Formulation_4



Theorem
The following formulation of the Axiom of Choice:

Formulation 1
For every set of non-empty sets, it is possible to provide a mechanism for choosing one element of each element of the set.

$\ds \forall s: \paren {\O \notin s \implies \exists \paren {f: s \to \bigcup s}: \forall t \in s: \map f t \in t}$
That is, one can always create a choice function for selecting one element from each element of the set.

implies the following formulation of the Axiom of Choice:

Formulation 4
Let $A$ be a non-empty set.
Then there exists a mapping $f: \powerset A \to A$ such that:

for every non-empty proper subset $x$ of $A$: $\map f x \in x$
where $\powerset A$ denotes the power set of $A$.


Proof
We note from Set equals Union of Power Set that:

$x = \ds \map \bigcup {\powerset x}$
Setting $\powerset A =: s$, we see that from Formulation $1$:

$\ds \paren {\O \notin \powerset A \implies \exists \paren {f: \powerset A \to \bigcup \powerset A}: \forall x \in \powerset A: \map f x \in x}$

That is:

for every non-empty proper subset of $A$
there exists a mapping $f: \powerset A \to A$ such that:

for every non-empty proper subset $x$ of $A$: $\map f x \in x$.
That is Formulation $4$ of the Axiom of Choice
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 1$ Introduction to well ordering: Exercise $1.6$




