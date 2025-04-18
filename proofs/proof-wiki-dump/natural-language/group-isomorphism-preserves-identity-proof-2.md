# 

Source: https://proofwiki.org/wiki/Group_Isomorphism_Preserves_Identity/Proof_2

Theorem
Let $\phi: \struct {G, \circ} \to \struct {H, *}$ be a group isomorphism.
Let:

$e_G$ be the identity of $\struct {G, \circ}$
$e_H$ be the identity of $\struct {H, *}$.

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





Definition of Group Isomorphism














\(\ds \)

\(=\)







\(\ds \map \phi {e_G} * \map \phi {e_G}\)





Definition of Group Isomorphism



It follows from Identity is only Idempotent Element in Group that $\map \phi {e_G}$ is the identity of $H$.
That is:

$\map \phi {e_G} = e_H$
$\blacksquare$


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.5$: Theorem $4$




