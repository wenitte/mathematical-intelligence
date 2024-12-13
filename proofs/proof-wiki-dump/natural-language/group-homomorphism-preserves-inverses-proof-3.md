# 

Source: https://proofwiki.org/wiki/Group_Homomorphism_Preserves_Inverses/Proof_3

Theorem
Let $\struct {G, \circ}$ and $\struct {H, *}$ be groups.
Let $\phi: \struct {G, \circ} \to\struct {H, *}$ be a group homomorphism.
Let:

$e_G$ be the identity of $G$
$e_H$ be the identity of $H$

Then:

$\forall x \in G: \map \phi {x^{-1} } = \paren {\map \phi x}^{-1}$


Proof
From Group Homomorphism of Product with Inverse, we have:

$\forall x, y \in G: \map \phi {x \circ y^{-1} } = \map \phi x * \paren {\map \phi y}^{-1}$
Putting $x = e_G$ and $y = x$ we have:














\(\ds \map \phi {x^{-1} }\)

\(=\)







\(\ds \map \phi {e_G \circ x^{-1} }\)




















\(\ds \)

\(=\)







\(\ds \map \phi {e_G} * \paren {\map \phi x}^{-1}\)




















\(\ds \)

\(=\)







\(\ds e_H * \paren {\map \phi x}^{-1}\)





Group Homomorphism Preserves Identity














\(\ds \)

\(=\)







\(\ds \paren {\map \phi x}^{-1}\)









$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $8$: The Homomorphism Theorem: Corollary $8.7 \ \text{(ii)}$




