# 

Source: https://proofwiki.org/wiki/Inversion_Mapping_is_Isomorphism_to_Opposite_Group

Definition
Let $\struct {G, \circ}$ be a group.
Let $\struct {G, *}$ be its opposite group.
That is:

$\forall g, h \in G: g \circ h = h * g$
Let $\iota: G \to G$ be the inversion mapping for $\struct {G, \circ}$.

Then $\iota: \struct {G, \circ} \to \struct {G, *}$ is a group isomorphism.


Proof
By Inversion Mapping is Involution, $\iota$ is an involution.
By Involution is Permutation, $\iota$ is a permutation and hence by definition a bijection.

It remains to show that $\iota$ is a group homomorphism.
Let $g, h \in G$.
Then:














\(\ds \map \iota {g \circ h}\)

\(=\)







\(\ds \paren {g \circ h}^{-1}\)





Definition of Inversion Mapping














\(\ds \)

\(=\)







\(\ds h^{-1} \circ g^{-1}\)





Inverse of Group Product














\(\ds \)

\(=\)







\(\ds g^{-1} * h^{-1}\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds \map \iota g * \map \iota h\)









Hence $\iota$ is a group homomorphism.

By definition it follows that $\iota$ is also a group isomorphism.
$\blacksquare$





