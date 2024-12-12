# 

Source: https://proofwiki.org/wiki/Binary_Cartesian_Product_in_Kuratowski_Formalization_contained_in_Power_Set_of_Power_Set_of_Union/Proof_2

Theorem
Let $S$ and $T$ be sets.
Let $S \times T$ be the Cartesian product of $S$ and $T$ realized as a set of ordered pairs in Kuratowski formalization.

Then $S \times T \subseteq \powerset {\powerset {S \cup T} }$.


Proof
By Law of Excluded Middle there are two choices:

$S \times T = \O$
$S \times T \ne \O$

Suppose $S \times T = \O$.
By Empty Set is Subset of Power Set:

$S \times T \subseteq \powerset {\powerset {S \cup T} }$

Suppose $S \times T \ne \O$.
By Cartesian Product is Empty iff Factor is Empty, there exist $x$ and $y$ such that:

$x \in S$
$y \in T$

Let us express the ordered pair $\tuple {x, y}$ using the Kuratowski formalization:

$\tuple {x, y} \equiv \set { \set x, \set {x, y} }$

We now show that:

$\set {\set x, \set {x, y} } \in \powerset {\powerset {S \cup T} }$
Indeed:














\(\ds x\)

\(\in\)







\(\ds S \cup T\)





Definition of Set Union








\(\ds \leadsto \ \ \)





\(\ds \set x\)

\(\in\)







\(\ds \powerset{S \cup T}\)





Definition of Power Set














\(\ds y\)

\(\in\)







\(\ds S \cup T\)





Definition of Set Union








\(\ds \leadsto \ \ \)





\(\ds \set {x, y}\)

\(\in\)







\(\ds \powerset {S \cup T}\)





Definition of Power Set








\(\ds \leadsto \ \ \)





\(\ds \set {\set x, \set {x, y} }\)

\(\in\)







\(\ds \powerset {\powerset {S \cup T} }\)





Definition of Power Set



$\blacksquare$





