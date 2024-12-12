# 

Source: https://proofwiki.org/wiki/Equivalence_of_Formulations_of_Axiom_of_Choice/Formulation_1_implies_Formulation_3



Theorem
The following formulation of the Axiom of Choice:

Formulation 1
For every set of non-empty sets, it is possible to provide a mechanism for choosing one element of each element of the set.

$\ds \forall s: \paren {\O \notin s \implies \exists \paren {f: s \to \bigcup s}: \forall t \in s: \map f t \in t}$
That is, one can always create a choice function for selecting one element from each element of the set.

implies the following formulation of the Axiom of Choice:

Formulation 3
Let $\SS$ be a set of non-empty pairwise disjoint sets.
Then there exists a set $C$ such that for all $S \in \SS$, $C \cap S$ has exactly one element.
Symbolically:

$\forall s: \paren {\paren {\O \notin s \land \forall t, u \in s: t = u \lor t \cap u = \O} \implies \exists c: \forall t \in s: \exists x: t \cap c = \set x}$


Proof
Let $\SS$ be the set:

$\SS = \set {s: \O \notin s \land \forall t, u \in s: t = u \lor t \cap u = \O}$
Let $c$ be a choice function on $\SS$ and consider the image set $c \sqbrk \SS$:

$c \sqbrk \SS = \set {\map c s: \O \notin s \land \forall t, u \in s: t = u \lor t \cap u = \O}$
By the definition of choice function:

$\map c s \in s$
By construction of $\SS$, for any $s \in \SS$:

$s \cap c \sqbrk \SS = \set {\map c s}$
$\blacksquare$


Sources
1984: Gerald B. Folland: Real Analysis: Modern Techniques and their Applications : (P.5)
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 1$ Introduction to well ordering: Exercise $1.5$




