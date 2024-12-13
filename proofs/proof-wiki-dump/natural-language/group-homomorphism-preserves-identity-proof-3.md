# 

Source: https://proofwiki.org/wiki/Group_Homomorphism_Preserves_Identity/Proof_3

Theorem
Let $\struct {G, \circ}$ and $\struct {H, *}$ be groups.
Let $\phi: \struct {G, \circ} \to \struct {H, *}$ be a group homomorphism.
Let:

$e_G$ be the identity of $G$
$e_H$ be the identity of $H$.

Then:

$\map \phi {e_G} = e_H$


Proof
From Group Homomorphism of Product with Inverse, we have:

$\forall x, y \in G: \map \phi {x \circ y^{-1} } = \map \phi x * \paren {\map \phi y}^{-1}$
Putting $x = y$ we have:














\(\ds \map \phi {e_G}\)

\(=\)







\(\ds \map \phi {x \circ x^{-1} }\)




















\(\ds \)

\(=\)







\(\ds \map \phi x * \paren {\map \phi x}^{-1}\)




















\(\ds \)

\(=\)







\(\ds e_H\)









$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $8$: The Homomorphism Theorem: Corollary $8.7 \ \text{(i)}$




