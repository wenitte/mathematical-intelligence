# 

Source: https://proofwiki.org/wiki/Image_of_Intersection_under_One-to-Many_Relation/Family_of_Sets



Theorem
Let $S$ and $T$ be sets.
Let $\RR \subseteq S \times T$ be a relation.

Then $\RR$ is a one-to-many relation if and only if:

$\ds \RR \sqbrk {\bigcap_{i \mathop \in I} S_i} = \bigcap_{i \mathop \in I} \RR \sqbrk {S_i}$
where $\family {S_i}_{i \mathop \in I}$ is any family of subsets of $S$.


Proof
Sufficient Condition
Suppose:

$\ds \RR \sqbrk {\bigcap_{i \mathop \in I} S_i} = \bigcap_{i \mathop \in I} \RR \sqbrk {S_i}$
where $\family {S_i}_{i \mathop \in I}$ is any family of subsets of $S$.
Then by definition of $\family {S_i}_{i \mathop \in I}$:

$\forall i, j \in I: \RR \sqbrk {S_i \cap S_j} = \RR \sqbrk {S_i} \cap \RR \sqbrk {S_j}$
and the sufficient condition applies for Image of Intersection under One-to-Many Relation.
So $\RR$ is one-to-many.
$\Box$


Necessary Condition
Suppose $\RR$ is one-to-many.

From Image of Intersection under Relation: Family of Sets, we already have:

$\ds \RR \sqbrk {\bigcap_{i \mathop \in I} S_i} \subseteq \bigcap_{i \mathop \in I} \RR \sqbrk {S_i}$
so we just need to show:

$\ds \bigcap_{i \mathop \in I} \RR \sqbrk {S_i} \subseteq \RR \sqbrk {\bigcap_{i \mathop \in I} S_i}$

Let:

$\ds t \in \bigcap_{i \mathop \in I} \RR \sqbrk {S_i}$
Then:














\(\ds t\)

\(\in\)







\(\ds \bigcap_{i \mathop \in I} \RR \sqbrk {S_i}\)














\(\ds \leadsto \ \ \)

\(\ds \forall i \in I: \, \)



\(\ds t\)

\(\in\)







\(\ds \RR \sqbrk {S_i}\)





Definition of Set Intersection








\(\ds \leadsto \ \ \)

\(\ds \forall i \in I: \exists x \in S_i: \, \)



\(\ds \tuple {x, t}\)

\(\in\)







\(\ds \RR\)





Definition of Relation








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \RR \sqbrk {\bigcap_{i \mathop \in I} S_i}\)





$\RR$ is one-to-many








\(\ds \leadsto \ \ \)





\(\ds \map \RR x\)

\(\subseteq\)







\(\ds \RR \sqbrk {\bigcap_{i \mathop \in I} S_i}\)





Image of Element is Subset








\(\ds \leadsto \ \ \)





\(\ds \bigcap_{i \mathop \in I} \RR \sqbrk {S_i}\)

\(\subseteq\)







\(\ds \RR \sqbrk {\bigcap_{i \mathop \in I} S_i}\)





Definition of Subset




So if $\RR$ is one-to-many, it follows that:

$\ds \RR \sqbrk {\bigcap_{i \mathop \in I} S_i} = \bigcap_{i \mathop \in I} \RR \sqbrk {S_i}$
$\Box$

Putting the results together:
$\RR$ is one-to-many if and only if:

$\ds \RR \sqbrk {\bigcap_{i \mathop \in I} S_i} = \bigcap_{i \mathop \in I} \RR \sqbrk {S_i}$
where $\family {S_i}_{i \mathop \in I}$ is any family of subsets of $S$.
$\blacksquare$





