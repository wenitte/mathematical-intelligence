# 

Source: https://proofwiki.org/wiki/Internal_Group_Direct_Product/Examples/D4

Example of Internal Group Direct Product
Consider the dihedral group $D_4$, which is the symmetry group of the square.

Suppose $D_4$ is the internal group direct product of two subgroups.
Then those two subgroups are $\set e$ and $D_4$ itself, where $e$ is the identity element of $D_4$.


Proof
Let $H$ and $K$ be subgroups of $D_4$ such that $D_4$ is the internal group direct product of $H$ and $K$.
Then from the Internal Direct Product Theorem $H$ and $K$ must be:

normal subgroups
whose intersection is $\set e$
whose subset product is $D_4$.
Let $D_4$ be expressed in its group presentation:

$D_4 = \gen {a, b: a^4 = b^2 = e, a b = b a^{-1} }$

Pairs of subgroups of $D_4$ whose intersection is $\set e$ and whose subset product is $D_4$ are:

$(1): \quad \set e$ and $D_4$
$(2): \quad \set {e, b}$ and $\set {e, a, a^4, a^3}$
$(3): \quad \set {e, b a}$ and $\set {e, a^2, b, b a^2}$
$(3): \quad \set {e, b a^2}$ and $\set {e, a^2, b, b a^3}$
$(5): \quad \set {e, b a^3}$ and $\set {e, a^2, b, b a^2}$

From Normal Subgroups of Dihedral Group, none of $\set {e, b}$, $\set {e, b a}$, $\set {e, b a^2}$ or $\set {e, b a^3}$ are normal.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.7$




