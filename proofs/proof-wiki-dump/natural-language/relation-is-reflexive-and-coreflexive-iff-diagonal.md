# 

Source: https://proofwiki.org/wiki/Relation_is_Reflexive_and_Coreflexive_iff_Diagonal



Theorem
Let $S$ be a set.
Let $\RR \subseteq S \times S$ be a relation on $S$.
Then $\RR$ is reflexive and coreflexive if and only if:

$\RR = \Delta_S$
where $\Delta_S$ is the diagonal relation.


Proof
Necessary Condition
Let $\RR \subseteq S \times S$ be reflexive and coreflexive.
Then:














\(\ds \RR\)

\(\supseteq\)







\(\ds \Delta_S\)





Definition 2 of Reflexive Relation














\(\ds \RR\)

\(\subseteq\)







\(\ds \Delta_S\)





Definition 2 of Coreflexive Relation








\(\ds \leadsto \ \ \)





\(\ds \RR\)

\(=\)







\(\ds \Delta_S\)





Definition 2 of Set Equality



$\Box$


Necessary Condition
Let $\RR = \Delta_S$
By definition of set equality:

$\Delta_S \subseteq \RR$
and

$\RR \subseteq \Delta_S$
From $\Delta_S \subseteq \RR$ it follows by definition that $\RR$ is reflexive.
From $\RR \subseteq \Delta_S$ it follows by definition that $\RR$ is coreflexive.
$\blacksquare$





