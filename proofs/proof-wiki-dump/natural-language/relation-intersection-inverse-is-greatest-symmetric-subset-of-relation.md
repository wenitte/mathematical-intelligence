# 

Source: https://proofwiki.org/wiki/Relation_Intersection_Inverse_is_Greatest_Symmetric_Subset_of_Relation

Theorem
Let $\RR$ be a relation on a set $S$.
Let $\powerset \RR$ be the power set of $\RR$.
By definition, $\powerset \RR$ is the set of all relations on $S$ that are subsets of $\RR$.
Then the greatest element of $\powerset \RR$ that is symmetric is:

$\RR \cap \RR^{-1}$


Proof
By Intersection of Relation with Inverse is Symmetric Relation:

$\RR \cap \RR^{-1}$ is a symmetric relation.

Suppose for some $\SS \in \powerset \RR$ that $S$ is symmetric and not equal to $\RR \cap \RR^{-1}$.
We will show that it is a proper subset of $\RR \cap \RR^{-1}$.
Suppose $\tuple {x, y} \in \SS$.
Then as $\SS \subseteq \RR$:

$\tuple {x, y} \in \RR$
As $\SS$ is symmetric:

$\tuple {x, y} \in \SS$
So as $\SS \subseteq \RR$:

$\tuple {x, y} \in \RR$
By definition of inverse relation:

$\tuple {x, y} \in \RR^{-1}$
By definition of intersection:

$\tuple {x, y} \in \RR \cap \RR^{-1}$
Thus:

$\tuple {x, y} \in \SS \implies \tuple {x, y} \in \RR \cap \RR^{-1}$
By definition of subset:

$\SS \subseteq \RR \cap \RR^{-1}$
Finally, as we assumed $\SS \ne \RR \cap \RR^{-1}$:

$\SS \subset \RR \cap \RR^{-1}$
Hence the result.
$\blacksquare$





