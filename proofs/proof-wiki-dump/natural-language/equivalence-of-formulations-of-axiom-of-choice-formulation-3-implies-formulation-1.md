# 

Source: https://proofwiki.org/wiki/Equivalence_of_Formulations_of_Axiom_of_Choice/Formulation_3_implies_Formulation_1



Theorem
The following formulation of the Axiom of Choice:

Formulation 3
Let $\SS$ be a set of non-empty pairwise disjoint sets.
Then there exists a set $C$ such that for all $S \in \SS$, $C \cap S$ has exactly one element.
Symbolically:

$\forall s: \paren {\paren {\O \notin s \land \forall t, u \in s: t = u \lor t \cap u = \O} \implies \exists c: \forall t \in s: \exists x: t \cap c = \set x}$

implies the following formulation of the Axiom of Choice:

Formulation 1
For every set of non-empty sets, it is possible to provide a mechanism for choosing one element of each element of the set.

$\ds \forall s: \paren {\O \notin s \implies \exists \paren {f: s \to \bigcup s}: \forall t \in s: \map f t \in t}$
That is, one can always create a choice function for selecting one element from each element of the set.


Proof
Let $\BB$ be a non-empty indexed family of non-empty sets indexed by $\II$.
Consider sets of the following form:

$\CC = \set {\tuple {B_i, x}: i \in \II, B_i \in \BB, x \in B_i}$
That is, it is the set of ordered pairs of which the first coordinate is a set $B_i \in \BB$ and the second coordinate is an element of $B_i$.
This is, by construction, a subset of the cartesian product:

$\CC \subseteq \ds \BB \times \bigcup_{i \mathop \in \II} B_i$
By hypothesis all sets $B$ are non-empty.
Thus there exists at least one $\tuple {B_i, x}$ element in $\CC$ for each $B_i \in \CC$.
By Equality of Ordered Pairs, if $B_j \ne B_k$ in $\BB$, then $\tuple {B_i, x} \ne \tuple {B_j, x}$ for all such pairs in $\CC$.
So any two sets $\set {\tuple {B_j, x}: x \in B_j}$ and $\set {\tuple {B_k, x} :x \in B_k}$ are disjoint, by the inequality of their first coordinates.
Then $\CC$ is an indexed family of disjoint non-empty sets in $\BB \times \bigcup_{i \mathop \in \II} B_i$.
Hence $\CC$ satisfies the hypotheses of the third formulation of the Axiom of Choice.

Let $c$ be a set satisfying:

$\forall r \in \CC: c \cap r = \set t$
All elements of $c$ are ordered pairs:

the first coordinate of which is a set in $B_i \in \BB$
and:

the second coordinate of which is an element $x \in B_i$.
Viewed as a relation, each set in $\BB$ bears $c$ to an element in that set.
Every set in $\BB$ bears $c$ to exactly one element inside that set.
So $c$ is in fact a mapping and satisfies the criteria of a choice function as expounded in formulation $(1)$.
$\blacksquare$


Sources
1975: James R. Munkres: Topology : $\S 9.2$
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 1$ Introduction to well ordering: Exercise $1.5$




