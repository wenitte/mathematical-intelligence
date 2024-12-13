# 

Source: https://proofwiki.org/wiki/Kernel_of_Group_Homomorphism_is_Subgroup



Theorem
The kernel of a group homomorphism is a subgroup of its domain:

$\map \ker \phi \le \Dom \phi$


Proof
Let $\phi: \struct {G, \circ} \to \struct {H, *}$ be a group homomorphism.

From Homomorphism to Group Preserves Identity, $\map \phi {e_G} = e_H$, so $e_G \in \map \ker \phi$.
Therefore $\map \ker \phi \ne \O$.

Let $x, y \in \map \ker \phi$, so that $\map \phi x = \map \phi y = e_H$.
Then:














\(\ds \map \phi {x^{-1} \circ y}\)

\(=\)







\(\ds \map \phi {x^{-1} } * \map \phi y\)





Definition of Morphism Property














\(\ds \)

\(=\)







\(\ds \paren {\map \phi x}^{-1} * \map \phi y\)





Homomorphism with Identity Preserves Inverses














\(\ds \)

\(=\)







\(\ds e_H^{-1} * e_H\)





as $x, y \in \map \ker \phi$














\(\ds \)

\(=\)







\(\ds e_H\)





Definition of Identity Element




So $x^{-1} \circ y \in \map \ker \phi$, and from the One-Step Subgroup Test, $\map \ker \phi \le \Dom \phi$.
$\blacksquare$


Also see
Kernel is Normal Subgroup of Domain


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 7.4$. Kernel and image
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.10$: Theorem $22$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Morphisms
1974: Thomas W. Hungerford: Algebra ... (previous) ... (next): $\S 1.2$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 47.7$ Homomorphisms and their elementary properties




