# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Saturation_Under_Group_Action



Definition
Let $G$ be a group acting on a set $X$.
Let $S\subset X$ be a subset.

The following definitions of its saturation are equivalent:

Definition 1
The saturation of $S$ is its saturation by the equivalence relation induced by the action.

Definition 2
The saturation of $S$ is the union of its images under the group action:

$\overline S = \ds \bigcup_{g \mathop \in G} g S$


Proof
Let $x\in X$.
We have:














\(\ds x\)

\(\in\)







\(\ds \bigcup_{g \mathop \in G} g S\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \exists g \in G: \, \)



\(\ds x\)

\(\in\)







\(\ds g S\)





Definition of Set Union








\(\ds \leadstoandfrom \ \ \)

\(\ds \exists g \in G : \exists s \in S: \, \)



\(\ds x\)

\(=\)







\(\ds g s\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \exists s \in S : \exists g \in G: \, \)



\(\ds x\)

\(=\)







\(\ds g s\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \exists s \in S: \, \)



\(\ds s\)

\(\RR_G\)







\(\ds x\)





Definition of Equivalence Relation Induced by Group Action








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds \overline S\)





Definition of Saturation Under Equivalence Relation



$\blacksquare$





