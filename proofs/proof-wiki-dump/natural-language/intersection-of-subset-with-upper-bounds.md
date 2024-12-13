# 

Source: https://proofwiki.org/wiki/Intersection_of_Subset_with_Upper_Bounds



Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $T \subseteq S$.
Let $T^*$ be the set of all upper bounds of $T$ in $S$.

Then $T^* \cap T \ne \O$ if and only if:

$T$ has a greatest element $M$
and

$T^* \cap T$ is a singleton such that $T^* \cap T = \set M$


Proof
Suppose $T^* \cap T = \O$, where $\O$ denotes the empty set.
That means $T$ contains none of its upper bounds, if indeed it has any.
From Greatest Element is Upper Bound, if $T$ had a greatest element, it would be an upper bound contained in $T$.
It follows that $T$ can have no greatest element.

Otherwise $T^* \cap T \ne \O$.
That means $T$ contains at least one of its upper bounds.
Suppose $\exists a, b \in T^* \cap T$.
From Intersection is Subset it follows that $a, b \in T$.
Then:

$\forall y \in T: y \preceq a$
$\forall y \in T: y \preceq b$
Thus both $a$ and $b$ fulfill the criteria for being a greatest element of $T$.
From Greatest Element is Unique it follows that $a = b$ and so $T^* \cap T$ is a singleton containing the greatest element of $T$.
$\blacksquare$


Also see
Intersection of Subset with Lower Bounds


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 14$: Order




