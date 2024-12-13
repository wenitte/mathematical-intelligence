# 

Source: https://proofwiki.org/wiki/Intersection_of_Subrings_is_Largest_Subring_Contained_in_all_Subrings

Theorem
Let $\struct {R, +, \circ}$ be a ring.
Let $\mathbb L$ be a non-empty set of subrings of $R$.

Then the intersection $\ds \bigcap \mathbb L$ of the members of $\mathbb L$ is the largest subring of $R$ contained in each member of $\mathbb L$.


Proof
Let $\ds L = \bigcap \mathbb L$.
From Intersection of Subrings is Subring, $L$ is indeed a subring of $R$.

By Intersection of Subgroups is Subgroup, $\struct {L, +}$ is the largest subgroup of $\struct {R, +}$ contained in each member of $\mathbb L$.
By Intersection of Subsemigroups, $\struct {L, \circ}$ is the largest subsemigroup of $\struct {R, \circ}$ contained in each member of $\mathbb L$.

Let $S$ be a subring of $R$ such that:

$\forall K \in \mathbb L: S \subseteq K$
By Intersection is Largest Subset, $S \subseteq L$.
Thus $L$ is the largest subring of $R$ contained in each member of $\mathbb L$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $22$. New Rings from Old: Theorem $22.4$




