# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Asymmetric_Relation



Theorem
The following definitions of the concept of Asymmetric Relation are equivalent:

Definition 1
$\RR$ is asymmetric if and only if:

$\tuple {x, y} \in \RR \implies \tuple {y, x} \notin \RR$

That is:

$x \mathop \RR y \implies \neg \paren {y \mathop \RR x}$
Definition 2
$\RR$ is asymmetric if and only if it and its inverse are disjoint:

$\RR \cap \RR^{-1} = \O$


Proof
Definition 1 implies Definition 2
Let $\RR$ be a relation which fulfills the condition:

$\left({x, y}\right) \in \RR \implies \left({y, x}\right) \notin \RR$

Then:














\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \RR\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {y, x}\)

\(\notin\)







\(\ds \RR\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds \tuple {x, y}\)

\(\notin\)







\(\ds \RR^{-1}\)





Definition of Inverse Relation








\(\ds \leadsto \ \ \)





\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \map \complement {\RR^{-1} }\)





Definition of Set Complement








\(\ds \leadsto \ \ \)





\(\ds \RR\)

\(\subseteq\)







\(\ds \map \complement {\RR^{-1} }\)





Definition of Subset








\(\ds \leadsto \ \ \)





\(\ds \RR \cap \RR^{-1}\)

\(=\)







\(\ds \O\)





Empty Intersection iff Subset of Complement




Hence $\RR$ is asymmetric by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $\RR$ be a relation which fulfils the condition:

$\RR \cap \RR^{-1} = \O$

Then:














\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \RR\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {x, y}\)

\(\notin\)







\(\ds \RR^{-1}\)





as $\RR \cap \RR^{-1} = \O$



Hence $\RR$ is asymmetric by definition 1.
$\blacksquare$





