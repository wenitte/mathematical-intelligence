# 

Source: https://proofwiki.org/wiki/Group_Homomorphism_Preserves_Identity



Theorem
Let $\struct {G, \circ}$ and $\struct {H, *}$ be groups.
Let $\phi: \struct {G, \circ} \to \struct {H, *}$ be a group homomorphism.
Let:

$e_G$ be the identity of $G$
$e_H$ be the identity of $H$.

Then:

$\map \phi {e_G} = e_H$


Proof 1













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


Proof 2
A direct application of Homomorphism to Group Preserves Identity.
$\blacksquare$


Proof 3
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
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 60 \alpha$




