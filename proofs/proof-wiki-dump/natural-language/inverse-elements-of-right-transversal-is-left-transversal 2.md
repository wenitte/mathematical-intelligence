# 

Source: https://proofwiki.org/wiki/Inverse_Elements_of_Right_Transversal_is_Left_Transversal

Theorem
Let $G$ be a group.
Let $H$ be a subgroup of $G$.
Let $S \subseteq G$ be a right transversal for $H$ in $G$.

Let $T$ be the set defined as:

$T := \set {x^{-1}: x \in S}$
where $x^{-1}$ is the inverse of $x$ in $G$.

Then $T$ is a left transversal for $H$ in $G$.


Proof
Let $g \in G$.
We show that $g H$ contains exactly $1$ element of $T$.

Since $S$ is a right transversal:

$\exists ! x \in S: x \in H g^{-1}$
By Right Cosets are Equal iff Element in Other Right Coset:

$H x = H g^{-1}$
By Right Cosets are Equal iff Left Cosets by Inverse are Equal:

$x^{-1} H = g H$
We have from definition $x^{-1} \in T$.
The result follows from uniqueness of $x$.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $6$: Cosets: Exercise $4$




