# 

Source: https://proofwiki.org/wiki/Dihedral_Group_D4_is_not_Internal_Group_Product/Proof_1

Theorem
The dihedral group $D_4$ is not an internal group product of any $2$ of its proper subgroups.


Proof
Aiming for a contradiction, suppose $D_4$ is the internal group product of $2$ proper subgroups $H$ and $K$ of $D_4$.
Without loss of generality, let $\order H = 2$ and $\order K = 4$.
$H$ needs to be normal in $D_4$ for the conditions of the internal group product to be satisfied.
So the non-identity element of $H$ needs to be conjugated to itself by every element of $G$.
This means $H$ is a subset of the center of $G$.
From Center of Dihedral Group $D_4$:

$H = \set {e, a^2}$
But every non-trivial normal subgroup of $D_4$ contains $a^2$.
This makes it impossible for $H \cap K = \set e$.
Thus $D_4$ cannot be an internal group product.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $13$: Direct products: Exercise $1$




