# 

Source: https://proofwiki.org/wiki/Image_of_Intersection_under_One-to-Many_Relation/General_Result



Theorem
Let $S$ and $T$ be sets.
Let $\RR \subseteq S \times T$ be a relation.
Let $\powerset S$ be the power set of $S$.

Then:

$\ds \forall \mathbb S \subseteq \powerset S: \RR \sqbrk {\bigcap \mathbb S} = \bigcap_{X \mathop \in \mathbb S} \RR \sqbrk X$
if and only if $\RR$ is one-to-many.


Proof
Sufficient Condition
Suppose:

$\ds \RR \sqbrk {\bigcap \mathbb S} = \bigcap_{X \mathop \in \mathbb S} \RR \sqbrk X$
where $\mathbb S$ is any subset of $\powerset S$.
Then by definition of $\mathbb S$:

$\forall S_1, S_2 \in \mathbb S: \RR \sqbrk {S_1 \cap S_2} = \RR \sqbrk {S_1} \cap \RR \sqbrk {S_2}$
and the sufficient condition applies for Image of Intersection under One-to-Many Relation.
So $\RR$ is one-to-many.
$\Box$


Necessary Condition
Suppose $\RR$ is one-to-many.

From Image of Intersection under Relation: General Result, we already have:

$\ds \RR \sqbrk {\bigcap \mathbb S} \subseteq \bigcap_{X \mathop \in \mathbb S} \RR \sqbrk X$
so we just need to show:

$\ds \forall \mathbb S \subseteq \powerset S: \bigcap_{X \mathop \in \mathbb S} \RR \sqbrk X \subseteq \RR \sqbrk {\bigcap \mathbb S}$

Let:

$\ds t \in \bigcap_{X \mathop \in \mathbb S} \RR \sqbrk X$
Then:














\(\ds t\)

\(\in\)







\(\ds \bigcap_{X \mathop \in \mathbb S} \RR \sqbrk X\)














\(\ds \leadsto \ \ \)

\(\ds \forall X \in \mathbb S: \, \)



\(\ds t\)

\(\in\)







\(\ds \RR \sqbrk X\)





Definition of Set Intersection








\(\ds \leadsto \ \ \)

\(\ds \forall X \in \mathbb S: \exists x \in X: \, \)



\(\ds \tuple {x, t}\)

\(\in\)







\(\ds \RR\)





Definition of Relation








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \bigcap \mathbb S\)





Definition of One-to-Many Relation








\(\ds \leadsto \ \ \)





\(\ds \RR \sqbrk x\)

\(\in\)







\(\ds \RR \sqbrk {\bigcap \mathbb S}\)





Image of Element is Subset








\(\ds \leadsto \ \ \)





\(\ds \bigcap_{X \mathop \in \mathbb S} \RR \sqbrk X\)

\(\subseteq\)







\(\ds \RR \sqbrk {\bigcap \mathbb S}\)





Definition of Subset




So if $\RR$ is one-to-many, it follows that:

$\ds \forall \mathbb S \subseteq \powerset S: \RR \sqbrk {\bigcap \mathbb S} = \bigcap_{X \mathop \in \mathbb S} \RR \sqbrk X$
$\Box$

Putting the results together:
$\RR$ is one-to-many if and only if:

$\ds \RR \sqbrk {\bigcap \mathbb S} = \bigcap_{X \mathop \in \mathbb S} \RR \sqbrk X$
where $\mathbb S$ is any subset of $\powerset S$.
$\blacksquare$





