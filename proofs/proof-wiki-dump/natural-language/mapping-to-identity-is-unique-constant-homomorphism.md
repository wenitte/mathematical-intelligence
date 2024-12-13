# 

Source: https://proofwiki.org/wiki/Mapping_to_Identity_is_Unique_Constant_Homomorphism

Theorem
Let $\struct {G, \circ}$ and $\struct {H, *}$ be groups whose identities are $e_G$ and $e_H$ respectively.

Then there exists a unique constant mapping from $G$ to $H$ which is a homomorphism:

$\phi_{e_H}: G \to H: \forall g \in G: \map {\phi_{e_H} } g = e_H$


Proof
Let $h \in H$ such that $\phi_h: G \to H$ is a (group) homomorphism, where $\phi_h$ is defined as:

$\forall g \in G: \map {\phi_h} g = h$
Then from Group Homomorphism Preserves Identity:

$\map {\phi_h} {e_G} = e_H$
and so $h = e_H$.
Hence the result by definition of constant mapping.

It remains to prove that such a constant mapping is in fact a homomorphism.
Let $x, y \in G$.














\(\ds \map {\phi_{e_H} } {x \circ y}\)

\(=\)







\(\ds e_H\)





Definition of $\phi_{e_H}$














\(\ds \)

\(=\)







\(\ds e_H * e_H\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds \map {\phi_{e_H} } x \circ \map {\phi_{e_H} } y\)





by definition of $\phi_{e_H}$



Thus the morphism property is demonstrated, and $\phi_{e_H}$ is seen to be a homomorphism.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Morphisms




