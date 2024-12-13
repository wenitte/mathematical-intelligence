# 

Source: https://proofwiki.org/wiki/Preordering_is_not_necessarily_Ordering

Theorem
Let $S$ be a set.
Let $\RR$ be a preordering on $S$.

Then it is not necessarily the case that $\RR$ is also an ordering on $S$.


Proof
Consider the relation $\RR$ on the powerset of the natural numbers:

$\forall a, b \in \powerset \N: a \mathrel \RR b \iff a \setminus b \text { is finite}$
where $\setminus$ denotes set difference.

It is demonstrated in Preordering Example: Finite Set Difference on Natural Numbers that;

$\RR$ is a preordering on $\powerset \N$
but:

$\RR$ is not an ordering on $\powerset \N$.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $38$




