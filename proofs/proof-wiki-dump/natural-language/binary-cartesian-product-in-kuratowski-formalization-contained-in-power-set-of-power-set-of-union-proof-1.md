# 

Source: https://proofwiki.org/wiki/Binary_Cartesian_Product_in_Kuratowski_Formalization_contained_in_Power_Set_of_Power_Set_of_Union/Proof_1

Theorem
Let $S$ and $T$ be sets.
Let $S \times T$ be the Cartesian product of $S$ and $T$ realized as a set of ordered pairs in Kuratowski formalization.

Then $S \times T \subseteq \powerset {\powerset {S \cup T} }$.


Proof
Let $x \in S$ and $y \in T$.
We are to show that $\set {\set x, \set {x, y} } \in \powerset {\powerset {S \cup T} }$.















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





