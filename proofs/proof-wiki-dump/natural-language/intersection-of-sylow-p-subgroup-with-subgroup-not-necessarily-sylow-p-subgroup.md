# 

Source: https://proofwiki.org/wiki/Intersection_of_Sylow_p-Subgroup_with_Subgroup_not_necessarily_Sylow_p-Subgroup

Theorem
Let $G$ be a group.
Let $P$ be a Sylow $p$-subgroup of $G$.
Let $H$ be a subgroup of $G$.

Then $P \cap H$ is not necessarily a Sylow $p$-subgroup of $H$.


Proof
We note that from Intersection of Subgroups is Subgroup that $P \cap H$ is a subgroup of $G$ and also of $H$.

Let $G$ be the dihedral group $D_3$, given by its group presentation:

$D_3 = \gen {a, b: a^3 = b^2 = e, a b = b a^{-1} }$

By definition of Sylow $p$-subgroup, $\gen a$ is a Sylow $3$-subgroup of $G$.
However, $\gen b$ is also a subgroup of $G$, of order $2$.
But:

$\gen b \cap \gen a = e$
and $e$ is not a Sylow $3$-subgroup of $G$.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $11$: The Sylow Theorems: Exercise $3$




