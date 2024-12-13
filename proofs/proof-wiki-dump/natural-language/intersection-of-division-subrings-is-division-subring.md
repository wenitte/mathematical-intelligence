# 

Source: https://proofwiki.org/wiki/Intersection_of_Division_Subrings_is_Division_Subring

Theorem
Let $\struct {D, +, \circ}$ be a division ring.
Let $\mathbb K$ be a non-empty set of division subrings of $D$.

Then the intersection $\ds \bigcap \mathbb K$ of the members of $\mathbb K$ is itself a division subring of $D$.


Proof
Let $\ds L = \bigcap \mathbb K$.
Let $0$ be the zero of $\struct {D, +, \circ}$.

By Intersection of Subgroups is Subgroup: General Result, $\struct {L, +}$ is a subgroup of $\struct {D, +}$.
By the One-Step Subgroup Test:

$\forall x, y \in L: x + \paren {-y} \in L$

By Non-Zero Elements of Division Ring form Group:

$\struct {D \setminus \set 0, \circ}$ is a group
$\struct {K \setminus \set 0, \circ}$ is a group for each $K \in \mathbb K$
By Set Difference over Subset, $\struct {K \setminus \set 0, \circ}$ is a subgroup of $\struct {D \setminus \set 0, \circ}$ for each $K \in \mathbb K$.
By Set Difference is Right Distributive over Set Intersection:

$\ds L \setminus \set 0 = \bigcap_{K \mathop \in \mathbb K} \paren {K \setminus \set 0}$
By Intersection of Subgroups is Subgroup: General Result, $\struct {L \setminus \set 0, \circ}$ is a subgroup of $\struct {D \setminus \set 0, \circ}$.
By the Two-Step Subgroup Test and Ring Product with Zero:










\(\ds \forall x, y \in L: \, \)



\(\ds x \circ y\)

\(\in\)







\(\ds L\)
















\(\ds \forall x \in L \setminus \set 0: \, \)



\(\ds x^{-1}\)

\(\in\)







\(\ds L \setminus \set 0\)









By the Division Subring Test it follows that $\struct {L, +, \circ}$ is a division subring of $\struct {D, +, \circ}$.
$\blacksquare$





