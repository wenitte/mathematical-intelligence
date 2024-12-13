# 

Source: https://proofwiki.org/wiki/Mapping_from_Additive_Group_of_Integers_to_Powers_of_Group_Element_is_Homomorphism

Theorem
Let $\struct {G, \circ}$ be a group.
Let $g \in G$.
Let $\struct {\Z, +}$ denote the additive group of integers.

Let $\phi_g: \struct {\Z, +} \to \struct {G, \circ}$ be the mapping defined as:

$\forall k \in \Z: \map {\phi_g} k = g^k$
Then $\phi_g$ is a (group) homomorphism.


Proof
Let $k, l \in \Z$.














\(\ds \map {\phi_g} {k + l}\)

\(=\)







\(\ds a^{k + l}\)




















\(\ds \)

\(=\)







\(\ds a^k a^l\)




















\(\ds \)

\(=\)







\(\ds \map {\phi_g} k \circ \map {\phi_g} l\)










thus proving that $\phi_g$ is a homomorphism as required.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 7.1$. Homomorphisms: Example $129$




