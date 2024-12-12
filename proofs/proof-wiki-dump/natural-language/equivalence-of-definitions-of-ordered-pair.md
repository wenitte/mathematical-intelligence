# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Ordered_Pair



Theorem
The following definitions of the concept of Ordered Pair are equivalent:

Informal Definition
An ordered pair is a two-element set together with an ordering.
In other words, one of the elements is distinguished above the other - it comes first.
Such a structure is written:

$\tuple {a, b}$
and it means:

first $a$, then $b$.
Kuratowski Formalization
The concept of an ordered pair can be formalized by the definition:

$\tuple {a, b} := \set {\set a, \set {a, b} }$
This formalization justifies the existence of ordered pairs in Zermelo-Fraenkel set theory.


Proof
Equality of Ordered Pairs
From Equality of Ordered Pairs, we have that:

$\set {\set a, \set {a, b} } = \set {\set c, \set {c, d} } \iff a = c, b = d$
hence showing that the Kuratowski formalization fulfils the requirement for equality.


Existence of Cartesian Product
By Binary Cartesian Product in Kuratowski Formalization contained in Power Set of Power Set of Union:

$A \times B \subseteq \powerset {\powerset {A \cup B} }$
By Axiom of Specification, there is a set $C$ where:

$C = \set {x \in \powerset {\powerset {A \cup B} } : x \in A \times B}$
Thus, the cartesian product exists.
By Cartesian Product is Unique, the cartesian product is unique.
$\blacksquare$


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): Exercise $1.2: \ 12$
1972: A.G. Howson: A Handbook of Terms used in Algebra and Analysis ... (previous) ... (next): $\S 2$: Sets and functions: Graphs and functions




