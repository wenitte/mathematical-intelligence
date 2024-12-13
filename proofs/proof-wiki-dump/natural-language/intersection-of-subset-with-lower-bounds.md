# 

Source: https://proofwiki.org/wiki/Intersection_of_Subset_with_Lower_Bounds



Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $T \subseteq S$.
Let $T_*$ be the set of all lower bounds of $T$ in $S$.

Then $T_* \cap T \ne \O$ if and only if:

$T$ has a smallest element $m$
and

$T_* \cap T$ is a singleton such that $T_* \cap T = \set m$


Proof
Suppose $T_* \cap T = \O$, where $\O$ denotes the empty set.
That means $T$ contains none of its lower bounds, if indeed it has any.
From Smallest Element is Lower Bound, if $T$ had a smallest element, it would be a lower bound contained in $T$.
It follows that $T$ can have no smallest element.

Otherwise $T_* \cap T \ne \O$.
That means $T$ contains at least one of its lower bounds.
Suppose $\exists a, b \in T_* \cap T$.
From Intersection is Subset it follows that $a, b \in T$.
Then:

$\forall y \in T: a \preceq y$
$\forall y \in T: b \preceq y$
Thus both $a$ and $b$ fulfil the criteria for being a smallest element of $T$.
From Smallest Element is Unique it follows that $a = b$ and so $T_* \cap T$ is a singleton containing the smallest element of $T$.
$\blacksquare$


Also see
Intersection of Subset with Upper Bounds


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 14$: Order




