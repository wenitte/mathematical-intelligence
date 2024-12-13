# 

Source: https://proofwiki.org/wiki/Projection_of_Complement_Contains_Complement_of_Projection

Theorem
Let $S$ and $T$ be non-empty sets.
Let $X \subseteq S \times T$ be a subset of the Cartesian product $S \times T$.
Denote with $\pr_1, \pr_2$ and $\complement$ the first and second projections, and the complement operation, respectively.

Then:














\(\ds \map \complement {\map {\pr_1} X}\)

\(\subseteq\)







\(\ds \map {\pr_1} {\map \complement X}\)




















\(\ds \map \complement {\map {\pr_2} X}\)

\(\subseteq\)







\(\ds \map {\pr_2} {\map \complement X}\)











Proof
Let $s \in S$.
Then:














\(\ds s\)

\(\in\)







\(\ds \map \complement {\map {\pr_1} X}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds s\)

\(\notin\)







\(\ds \map {\pr_1} X\)





Definition of Set Complement








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall t \in T: \, \)



\(\ds \tuple {s, t}\)

\(\notin\)







\(\ds X\)





Definition of First Projection








\(\ds \leadsto \ \ \)

\(\ds \exists t \in T: \, \)



\(\ds \tuple {s, t}\)

\(\notin\)







\(\ds X\)





Universal Instantiation, Existential Generalisation








\(\ds \leadstoandfrom \ \ \)

\(\ds \exists t \in T: \, \)



\(\ds \tuple {s, t}\)

\(\in\)







\(\ds \map \complement X\)





Definition of Set Complement








\(\ds \leadstoandfrom \ \ \)





\(\ds s\)

\(\in\)







\(\ds \map {\pr_1} {\map \complement X}\)





Definition of First Projection



In conclusion:

$s \in \map \complement {\map {\pr_1} X} \implies s \in \map {\pr_1} {\map \complement X}$
and by definition of subset, the first relation follows.

Mutatis mutandis the other relation can be established.
$\blacksquare$





