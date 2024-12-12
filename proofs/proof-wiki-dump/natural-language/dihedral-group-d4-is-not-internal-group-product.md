# 

Source: https://proofwiki.org/wiki/Dihedral_Group_D4_is_not_Internal_Group_Product

Theorem
The dihedral group $D_4$ is not an internal group product of any $2$ of its proper subgroups.


Proof 1
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


Proof 2
The proper subgroups of $D_4$ are of order no greater than $4$.
From Group of Order less than 6 is Abelian, all such proper subgroups are abelian.
From External Direct Product of Abelian Groups is Abelian Group, the group direct product of $2$ of these proper subgroups is in turn abelian.
From Internal and External Group Direct Products are Isomorphic, the internal group product of $2$ of these proper subgroups is in turn abelian.
But $D_4$ is not abelian.
Hence it cannot be the internal group product of any $2$ of these proper subgroups.
$\blacksquare$





