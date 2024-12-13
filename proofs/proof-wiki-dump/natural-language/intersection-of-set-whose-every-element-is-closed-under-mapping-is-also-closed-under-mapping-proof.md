# 

Source: https://proofwiki.org/wiki/Intersection_of_Set_whose_Every_Element_is_Closed_under_Mapping_is_also_Closed_under_Mapping/Proof

Theorem
Let $S$ be a set of sets.
Let $g$ be a mapping such that:

for every $x \in S$, $x$ is closed under $g$.

Then the intersection $\bigcap S$ of $S$ is also closed under $g$.


Proof
The domain of $g$ is not made clear, but the assumption is that:

$\forall x \in S: \forall y \in x: y \in \Dom g$
First we note that by definition of intersection of $S$:

$\bigcap S := \set {y: \forall x \in S: y \in x}$

Then:














\(\ds y\)

\(\in\)







\(\ds \bigcap S\)














\(\ds \leadsto \ \ \)

\(\ds \forall x \in S: \, \)



\(\ds y\)

\(\in\)







\(\ds x\)





Definition of Intersection of Set of Sets








\(\ds \leadsto \ \ \)

\(\ds \forall x \in S: \, \)



\(\ds \map g y\)

\(\in\)







\(\ds x\)





as $x$ is closed under $g$








\(\ds \leadsto \ \ \)





\(\ds \map g y\)

\(\in\)







\(\ds \bigcap S\)





Definition of Intersection of Set of Sets



Hence the result by definition of closed under $g$.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 2$ Superinduction and double superinduction: Exercise $2.1$




