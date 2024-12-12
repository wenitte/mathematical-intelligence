# 

Source: https://proofwiki.org/wiki/Constant_Mapping_to_Identity_is_Homomorphism/Groups

Theorem
Let $\struct {G_1, \circ_1}$ and $\struct {G_2, \circ_2}$ be groups with identities $e_1$ and $e_2$ respectively.
Let $\phi_e: \struct {G_1, \circ_1} \to \struct {G_2, \circ_2}$ be the constant mapping defined as:

$\forall x \in G_1: \map {\phi_e} x = e_2$

Then $\phi_e$ is a group homomorphism whose image is $\set {e_2}$ and whose kernel is $G_1$.


Proof
Let $x, y \in G_1$.
Then:














\(\ds \map {\phi_e} {x \circ_1 y}\)

\(=\)







\(\ds e_2\)





as $x \circ_1 y \in G_1$














\(\ds \)

\(=\)







\(\ds \map {\phi_e} x \circ_2 \map {\phi_e} y\)





as $\map {\phi_e} x = e_2$ and $\map {\phi_e} y = e_2$




So $\phi_e$ is a group homomorphism.
The results about image and kernel follow directly by definition.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $7$: Homomorphisms: Exercise $1$




