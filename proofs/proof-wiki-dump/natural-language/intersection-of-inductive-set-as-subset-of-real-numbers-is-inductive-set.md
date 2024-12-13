# 

Source: https://proofwiki.org/wiki/Intersection_of_Inductive_Set_as_Subset_of_Real_Numbers_is_Inductive_Set

Theorem
Let $\AA$ be a set of inductive sets defined as subsets of real numbers.
Then their intersection is an inductive set.


Proof
By definition of inductive set:

$\forall S \in \AA: 1 \in S$
Thus by definition of set intersection:

$\ds 1 \in \bigcap_{S \mathop \in \AA} S$

Also by definition of inductive set:

$\forall S \in \AA: x \in S \implies x + 1 \in S$
So:














\(\ds x\)

\(\in\)







\(\ds \bigcap_{S \mathop \in \AA} S\)














\(\ds \leadsto \ \ \)

\(\ds \forall S \in \AA: \, \)



\(\ds x\)

\(\in\)







\(\ds S\)





Definition of Intersection of Set of Sets








\(\ds \leadsto \ \ \)

\(\ds \forall S \in \AA: \, \)



\(\ds x + 1\)

\(\in\)







\(\ds S\)





Definition of Inductive Set as Subset of Real Numbers








\(\ds \leadsto \ \ \)





\(\ds x + 1\)

\(\in\)







\(\ds \bigcap_{S \mathop \in \AA} S\)





Definition of Intersection of Set of Sets



Hence the result, by definition of inductive set.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 4$: The Integers and the Real Numbers: Exercise $3 \ \text{(a)}$




