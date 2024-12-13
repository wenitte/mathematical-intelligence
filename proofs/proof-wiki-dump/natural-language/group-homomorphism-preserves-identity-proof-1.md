# 

Source: https://proofwiki.org/wiki/Group_Homomorphism_Preserves_Identity/Proof_1

Theorem
Let $\struct {G, \circ}$ and $\struct {H, *}$ be groups.
Let $\phi: \struct {G, \circ} \to \struct {H, *}$ be a group homomorphism.
Let:

$e_G$ be the identity of $G$
$e_H$ be the identity of $H$.

Then:

$\map \phi {e_G} = e_H$


Proof













\(\ds \map \phi {e_G}\)

\(=\)







\(\ds \map \phi {e_G \circ e_G}\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds \map \phi {e_G} * \map \phi {e_G}\)





Definition of Morphism Property




That is:














\(\ds \map \phi {e_G} * e_H\)

\(=\)







\(\ds \map \phi {e_G} * \map \phi {e_G}\)





Definition of Identity Element








\(\ds \leadsto \ \ \)





\(\ds e_H\)

\(=\)







\(\ds \map \phi {e_G}\)





Cancellation Laws



$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Morphisms
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 47.1$ Homomorphisms and their elementary properties
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.2$: Groups; the axioms




