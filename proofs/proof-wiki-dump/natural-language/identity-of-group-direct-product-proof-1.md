# 

Source: https://proofwiki.org/wiki/Identity_of_Group_Direct_Product/Proof_1

Theorem
Let $\struct {G \times H, \circ}$ be the group direct product of the two groups $\struct {G, \circ_1}$ and $\struct {H, \circ_2}$.
Let $e_G$ be the identity for $\struct {G, \circ_1}$.
Let $e_H$ be the identity for $\struct {H, \circ_2}$.

Then $\tuple {e_G, e_H}$ is the identity for $\struct {G \times H, \circ}$.


Proof













\(\ds \tuple {g, h} \circ \tuple {e_G, e_H}\)

\(=\)







\(\ds \tuple {g \circ_1 e_G, h \circ_2 e_H} = \tuple {g, h}\)




















\(\ds \tuple {e_G, e_H} \circ \tuple {g, h}\)

\(=\)







\(\ds \tuple {e_G \circ_1 g, e_H \circ_2 h} = \tuple {g, h}\)










So the identity is $\tuple {e_G, e_H}$.
$\blacksquare$





