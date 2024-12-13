# 

Source: https://proofwiki.org/wiki/Intersection_of_Division_Subrings_is_Largest_Division_Subring_Contained_in_all_Division_Subrings

Theorem
Let $\struct {D, +, \circ}$ be a division ring.
Let $\mathbb K$ be a non-empty set of division subrings of $D$.
Let $\ds \bigcap \mathbb K$ be the intersection of the elements of $\mathbb K$.

Then $\ds \bigcap \mathbb K$ is the largest division subring of $D$ contained in each element of $\mathbb K$.


Proof
Let $\ds L = \bigcap \mathbb K$.
Let $0$ be the zero of $\struct {D, +, \circ}$.
From Intersection of Division Subrings is Division Subring, $\struct {L, +, \circ}$ is a division subring of $\struct {D, +, \circ}$.

By Intersection of Subgroups is Subgroup, $\struct {L, +}$ is the largest subgroup of $\struct {D, +}$ contained in each element of $\mathbb K$.
By Intersection of Subgroups is Subgroup, $\struct {L \setminus \set 0, \circ}$ is the largest subgroup of $\struct {D \setminus \set 0, \circ}$ contained in each element of $\mathbb K$.

Let $S$ be a subring of $D$ such that:

$\forall K \in \mathbb K: S \subseteq K$
By Intersection is Largest Subset, $S \subseteq L$.
Thus $L$ is the largest division subring of $D$ contained in each element of $\mathbb L$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $23$. The Field of Rational Numbers: Theorem $23.1$




