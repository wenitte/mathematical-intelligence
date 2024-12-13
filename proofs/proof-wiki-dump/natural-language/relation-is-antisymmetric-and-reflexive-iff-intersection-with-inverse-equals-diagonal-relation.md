# 

Source: https://proofwiki.org/wiki/Relation_is_Antisymmetric_and_Reflexive_iff_Intersection_with_Inverse_equals_Diagonal_Relation



Theorem
Let $\RR \subseteq S \times S$ be a relation on a set $S$.

Then $\RR$ is both antisymmetric and reflexive if and only if:

$\RR \cap \RR^{-1} = \Delta_S$
where $\Delta_S$ denotes the diagonal relation.


Proof
Necessary Condition
Let $\RR$ be both antisymmetric and reflexive.
Then:














\(\ds \RR \cap \RR^{-1}\)

\(\subseteq\)







\(\ds \Delta_S\)





Relation is Antisymmetric iff Intersection with Inverse is Coreflexive














\(\ds \RR\)

\(\supseteq\)







\(\ds \Delta_S\)





Definition 2 of Reflexive Relation








\(\ds \leadsto \ \ \)





\(\ds \RR^{-1}\)

\(\supseteq\)







\(\ds \Delta_S\)





Inverse of Reflexive Relation is Reflexive








\(\ds \leadsto \ \ \)





\(\ds \RR \cap \RR^{-1}\)

\(\supseteq\)







\(\ds \Delta_S\)





Intersection is Largest Subset








\(\ds \leadsto \ \ \)





\(\ds \RR \cap \RR^{-1}\)

\(=\)







\(\ds \Delta_S\)





Definition 2 of Set Equality



$\Box$


Sufficient Condition
Let $\RR$ be such that:

$\RR \cap \RR^{-1} = \Delta_S$
Then by definition of set equality:

$\RR \cap \RR^{-1} \subseteq \Delta_S$
and so by Relation is Antisymmetric iff Intersection with Inverse is Coreflexive, $\RR$ is antisymmetric.

Also by definition of set equality:

$\Delta_S \subseteq \RR \cap \RR^{-1}$
By Intersection is Subset:

$\RR \cap \RR^{-1} \subseteq \RR$
By Subset Relation is Transitive:

$\Delta_S \subseteq \RR$
So, by definition, $\RR$ is reflexive.
$\blacksquare$}





