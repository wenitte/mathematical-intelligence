# 

Source: https://proofwiki.org/wiki/Saturation_Under_Equivalence_Relation_in_Terms_of_Graph

Theorem
Let $\RR \subset S \times S$ be an equivalence relation on a set $S$.
Let $\pr_1, \pr_2 : S \times S \to S$ denote the projections.
Let $T\subset S$ be a subset.
Let $\overline T$ denote its saturation.

Then the following hold:

$\overline T = \map {\pr_1} {\RR \cap \map {\pr_2^{-1} } T}$
$\overline T = \map {\pr_2} {\RR \cap \map {\pr_1^{-1} } T}$


Proof
Let $s \in S$.
We have:














\(\ds \)

\(\)







\(\ds s \in \map {\pr_1} {\RR \cap \map {\pr_2^{-1} } T}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds \exists t \in S: \tuple {s, t} \in \RR \cap \map {\pr_2^{-1} } T\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds \exists t \in S : \tuple {s, t} \in \RR \cap (S \times T)\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds \exists t \in T : \tuple {s, t} \in \RR\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds s \in \overline T\)





Definition of Saturation Under Equivalence Relation



A similar reasoning proves the second identity.
$\blacksquare$





