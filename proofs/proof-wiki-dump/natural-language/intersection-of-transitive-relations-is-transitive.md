# 

Source: https://proofwiki.org/wiki/Intersection_of_Transitive_Relations_is_Transitive

Theorem
The intersection of two transitive relations is also a transitive relation.


General Result
Let $\family {\RR_i: i \mathop \in I}$ be an $I$-indexed set of transitive relations on a set $S$.

Then their intersection $\ds \bigcap_{i \mathop \in I} \RR_i$ is also a transitive relation on $S$.


Proof
Let $\RR_1$ and $\RR_2$ be transitive relations (on what sets is immaterial for this argument).
Let $\tuple {s_1, s_2} \in \RR_1 \cap \RR_2$ and $\tuple {s_2, s_3} \in \RR_1 \cap \RR_2$.

Then by definition of intersection:

$\tuple {s_1, s_2} \in \RR_1$ and $\tuple {s_1, s_2} \in \RR_2$
$\tuple {s_2, s_3} \in \RR_1$ and $\tuple {s_2, s_3} \in \RR_2$

Then as $\RR_1$ and $\RR_2$ are both transitive:

$\tuple {s_1, s_3} \in \RR_1$ and $\tuple {s_1, s_3} \in \RR_2$
and by definition of intersection:

$\tuple {s_1, s_3} \in \RR_1 \cap \RR_2$
hence $\RR_1 \cap \RR_2$ is transitive.
$\blacksquare$





