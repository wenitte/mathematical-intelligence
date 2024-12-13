# 

Source: https://proofwiki.org/wiki/Intersection_of_Relation_with_Inverse_is_Symmetric_Relation

  This article was Featured Proof between 23 December 2013 and 15 May 2014.
Theorem
Let $\RR$ be a relation on a set $S$.
Then $\RR \cap \RR^{-1}$, the intersection of $\RR$ with its inverse, is symmetric.


Proof
Let $\tuple {x, y} \in \RR \cap \RR^{-1}$

By definition of intersection:

$\tuple {x, y} \in \RR$
$\tuple {x, y} \in \RR^{-1}$

By definition of inverse relation:

$\tuple {x, y} \in \RR \implies \tuple {y, x} \in \RR^{-1}$
$\tuple {x, y} \in \RR^{-1} \implies \tuple {y, x} \in \paren {\RR^{-1} }^{-1}$

By Inverse of Inverse Relation the second statement may be rewritten:

$\tuple {x, y} \in \RR \implies \tuple {y, x} \in \RR^{-1}$
$\tuple {x, y} \in \RR^{-1} \implies \tuple {y, x} \in \RR$

Then by definition of intersection:

$\tuple {y, x} \in \RR \cap \RR^{-1}$

Hence $\RR \cap \RR^{-1}$ is symmetric.
$\blacksquare$


Sources
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.19$: Some Important Properties of Relations: Exercise $6$




