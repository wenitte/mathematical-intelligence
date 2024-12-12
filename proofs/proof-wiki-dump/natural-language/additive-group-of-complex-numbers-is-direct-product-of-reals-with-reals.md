# 

Source: https://proofwiki.org/wiki/Additive_Group_of_Complex_Numbers_is_Direct_Product_of_Reals_with_Reals



Theorem
Let $\struct {\C, +}$ be the additive group of complex numbers.
Let $\struct {\R, +}$ be the additive group of real numbers.

Then the direct product $\struct {\R, +} \times \struct {\R, +}$ is isomorphic with $\struct {\C, +}$.


Proof
We need to show that $\phi: \tuple {x, y} \mapsto x + y i$ is a group isomorphism.


$\phi$ is a group homomorphism









\(\ds \forall a, b, c, d \in \R: \, \)



\(\ds \map \phi {a, b} + \map \phi {c, d}\)

\(=\)







\(\ds \paren {a + b i} + \paren {c + d i}\)




















\(\ds \)

\(=\)







\(\ds \paren {a + c} + \paren {b + d} i\)





Complex Addition is Commutative














\(\ds \)

\(=\)







\(\ds \map \phi {a + c, b + d}\)









$\Box$


$\phi$ is bijective
We show that $\phi^{-1}: z \mapsto \tuple {\map \Re z, \map \Im z}$ is the inverse of $\phi$.
We have:

$\map \phi {\map {\phi^{-1} } z} = \map \phi {\map \Re z, \map \Im z} = \map \Re z + i \map \Im z = z$
$\map {\phi^{-1} } {\map \phi {a, b} } = \map {\phi^{-1} } {a + b i} = \tuple {a, b}$
hence $\phi^{-1}$ is the inverse of $\phi$.
$\Box$

Hence $\phi$ is a group isomorphism, and thus the direct product $\struct {\R, +} \times \struct {\R, +}$ is isomorphic with $\struct {\C, +}$.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Direct Products




