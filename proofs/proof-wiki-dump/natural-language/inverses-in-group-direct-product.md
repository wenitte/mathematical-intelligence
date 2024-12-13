# 

Source: https://proofwiki.org/wiki/Inverses_in_Group_Direct_Product



Theorem
Let $\struct {G \times H, \circ}$ be the group direct product of the two groups $\struct {G, \circ_1}$ and $\struct {H, \circ_2}$.
Let $g^{-1}$ be an inverse of $g \in \struct {G, \circ_1}$.
Let $h^{-1}$ be an inverse of $h \in \struct {H, \circ_2}$.

Then $\tuple {g^{-1}, h^{-1} }$ is the inverse of $\tuple {g, h} \in \struct {G \times H, \circ}$.


Proof 1
Let $e_G$ be the identity for $\struct {G, \circ_1}$
Let $e_H$ be the identity for $\struct {H, \circ_2}$.

Then:














\(\ds \tuple {g, h} \circ \tuple {g^{-1}, h^{-1} }\)

\(=\)







\(\ds \tuple {g \circ_1 g^{-1}, h \circ_2 h^{-1} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {e_G, e_H}\)




















\(\ds \)

\(=\)







\(\ds \tuple {g^{-1} \circ_1 g, h^{-1} \circ_2 h}\)




















\(\ds \)

\(=\)







\(\ds \tuple {g^{-1}, h^{-1} } \circ \tuple {g, h}\)










So the inverse of $\tuple {g, h}$ is $\tuple {g^{-1}, h^{-1} }$.
$\blacksquare$


Proof 2
A specific instance of External Direct Product Inverses, where the algebraic structures in question are groups.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Direct Products




