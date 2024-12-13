# 

Source: https://proofwiki.org/wiki/Group_Isomorphism_Preserves_Inverses/Proof_2

Theorem
Let $\phi: \struct {G, \circ} \to \struct {H, *}$ be a group isomorphism.
Let:

$e_G$ be the identity of $\struct {G, \circ}$
$e_H$ be the identity of $\struct {H, *}$.

Then:

$\forall g \in G: \map \phi {g^{-1} } = \paren {\map \phi g}^{-1}$


Proof
Let $g \in G$.














\(\ds \map \phi g * \map \phi {g^{-1} }\)

\(=\)







\(\ds \map \phi {g \circ g^{-1} }\)





Definition of Group Isomorphism














\(\ds \)

\(=\)







\(\ds \map \phi {e_G}\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds e_H\)





Group Isomorphism Preserves Identity



It follows from Inverse in Group is Unique that $\map \phi {g^{-1} }$ is the unique inverse element of $\map \phi g$ in $\struct {H, *}$.
That is:

$\forall g \in G: \map \phi {g^{-1} } = \paren {\map \phi g}^{-1}$
$\blacksquare$


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.5$: Theorem $4$




