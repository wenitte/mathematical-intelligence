# 

Source: https://proofwiki.org/wiki/Quotient_Group_of_Direct_Products

Theorem
Let $G$ and $G'$ be groups.
Let:

$H \lhd G$
$H' \lhd G'$
where $\lhd$ denotes the relation of being a normal subgroup.

Then:

$\paren {G \times G'} / \paren {H \times H'}$ is isomorphic to $\paren {G / H} \times \paren {G' / H'}$
where:

$G \times G'$ denotes the group direct product of $H$ and $H'$
$G / H$ denotes the quotient group of $G$ by $H$.


Proof
Let $\phi_1: G \to G / H$ and $\phi_2: G' \to G' / H'$ be the quotient epimorphisms with $H$ and $H'$ as their kernels, respectively.
Now define a homomorphism $\phi: G \times G' \to \paren {G / H} \times \paren {G' / H'}$ by:

$\phi = \phi_1 \times \phi_2$
so:

$\map \phi {x, x'} = \tuple {\map {\phi_1} x, \map {\phi_2} {x'} }$
The kernel of $\phi$ is clearly $H \times H'$, and $\phi$ is surjective.
So by the First Isomorphism Theorem for Groups:

$\paren {G / H} \times \paren {G' / H'} \cong \paren {G \times G'} / \paren {H \times H'}$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.14 \ \text{(a)}$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Conjugacy, Normal Subgroups, and Quotient Groups: $\S 47 \theta$




