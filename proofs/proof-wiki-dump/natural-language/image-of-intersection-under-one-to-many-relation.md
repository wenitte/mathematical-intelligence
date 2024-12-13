# 

Source: https://proofwiki.org/wiki/Image_of_Intersection_under_One-to-Many_Relation

  This article was Featured Proof between 3rd July 2012 and 12th July 2012.




Theorem
Let $S$ and $T$ be sets.
Let $\RR \subseteq S \times T$ be a relation.

Then:

$\forall S_1, S_2 \subseteq S: \RR \sqbrk {S_1 \cap S_2} = \RR \sqbrk {S_1} \cap \RR \sqbrk {S_2}$
if and only if $\RR$ is one-to-many.


General Result
Let $S$ and $T$ be sets.
Let $\RR \subseteq S \times T$ be a relation.
Let $\powerset S$ be the power set of $S$.

Then:

$\ds \forall \mathbb S \subseteq \powerset S: \RR \sqbrk {\bigcap \mathbb S} = \bigcap_{X \mathop \in \mathbb S} \RR \sqbrk X$
if and only if $\RR$ is one-to-many.


Family of Sets
Let $S$ and $T$ be sets.
Let $\RR \subseteq S \times T$ be a relation.

Then $\RR$ is a one-to-many relation if and only if:

$\ds \RR \sqbrk {\bigcap_{i \mathop \in I} S_i} = \bigcap_{i \mathop \in I} \RR \sqbrk {S_i}$
where $\family {S_i}_{i \mathop \in I}$ is any family of subsets of $S$.


Proof
Sufficient Condition
Suppose that:

$\forall S_1, S_2 \subseteq S: \RR \sqbrk {S_1 \cap S_2} = \RR \sqbrk {S_1} \cap \RR \sqbrk {S_2}$
If $S$ is singleton, the result follows immediately as $\RR$ would have to be one-to-many.
So, assume $S$ is not singleton.

Suppose $\RR$ is specifically not one-to-many.
So:

$\exists x, y \in S: \exists z \in T: \tuple {x, z} \in T, \tuple {y, z} \in T, x \ne y$
and of course $\set x \subseteq S, \set y \subseteq S$.

So:

$z \in \RR \sqbrk {\set x}$
$z \in \RR \sqbrk {\set y}$
and so by definition of intersection:

$z \in \RR \sqbrk {\set x} \cap \RR \sqbrk {\set y}$
But:

$\set x \cap \set y = \O$

Thus from Image of Empty Set is Empty Set:

$\RR \sqbrk {\set x \cap \set y} = \O$
and so:

$\RR \sqbrk {\set x \cap \set y} \ne \RR \sqbrk {\set x} \cap \RR \sqbrk {\set y}$
$\Box$


Necessary Condition
Let $\RR$ be one-to-many.

From Image of Intersection under Relation, we already have:

$\RR \sqbrk {S_1 \cap S_2} \subseteq \RR \sqbrk {S_1} \cap \RR \sqbrk {S_2}$

So we just need to show:

$\RR \sqbrk {S_1} \cap \RR \sqbrk {S_2} \subseteq \RR \sqbrk {S_1 \cap S_2}$

Let $t \in \RR \sqbrk {S_1} \cap \RR \sqbrk {S_2}$.
Then:














\(\ds t\)

\(\in\)







\(\ds \RR \sqbrk {S_1} \cap \RR \sqbrk {S_2}\)














\(\ds \leadsto \ \ \)





\(\ds t\)

\(\in\)







\(\ds \RR \sqbrk {S_1}\)





Definition of Set Intersection












\(\, \ds \land \, \)

\(\ds t\)

\(\in\)







\(\ds \RR \sqbrk {S_2}\)














\(\ds \leadsto \ \ \)

\(\ds \exists s_1 \in S_1: \, \)



\(\ds \tuple {s_1, t}\)

\(\in\)







\(\ds \RR\)





Definition of Relation










\(\ds \exists s_2 \in S_2: \, \)

\(\, \ds \land \, \)

\(\ds \tuple {s_2, t}\)

\(\in\)







\(\ds \RR\)














\(\ds \leadsto \ \ \)





\(\ds s_1\)

\(=\)







\(\ds s_2\)





Definition of One-to-Many Relation








\(\ds \leadsto \ \ \)





\(\ds s_1 = s_2\)

\(\in\)







\(\ds S_1\)


















\(\, \ds \land \, \)

\(\ds s_1 = s_2\)

\(\in\)







\(\ds S_2\)














\(\ds \leadsto \ \ \)





\(\ds s_1 = s_2\)

\(\in\)







\(\ds S_1 \cap S_2\)





Definition of Set Intersection








\(\ds \leadsto \ \ \)





\(\ds \map \RR {s_1} = \map \RR {s_2}\)

\(\in\)







\(\ds \RR \sqbrk {S_1 \cap S_2}\)





Image of Element is Subset








\(\ds \leadsto \ \ \)





\(\ds \RR \sqbrk {S_1} \cap \RR \sqbrk {S_2}\)

\(\subseteq\)







\(\ds \RR \sqbrk {S_1 \cap S_2}\)





Definition of Subset




So if $\RR$ is one-to-many, it follows that:

$\RR \sqbrk {S_1 \cap S_2} = \RR \sqbrk {S_1} \cap \RR \sqbrk {S_2}$
$\Box$

Putting the results together, we see that:

$\RR \sqbrk {S_1 \cap S_2} = \RR \sqbrk {S_1} \cap \RR \sqbrk {S_2}$ if and only if $\RR$ is one-to-many.
$\blacksquare$





