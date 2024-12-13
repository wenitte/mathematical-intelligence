# 

Source: https://proofwiki.org/wiki/Restriction_is_Subset_of_Relation

Theorem
Let $\RR \subseteq S \times T$ be a relation.
Let $X \subseteq S$.

Then the restriction of $\RR$ to $X$ is a subset of $\RR$.


Proof
From the definition of restriction:

$\forall x \in X: \map {\RR \restriction_X} x = \map \RR x$
Thus:

$\forall x \in X: \exists t \in T: \tuple {x, t} \in \RR \restriction_X$

But $\tuple {x, t}$ is also (by definition) in $\RR$.

It follows that:

$\RR \restriction_X \subseteq \RR$
$\blacksquare$





