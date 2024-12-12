# 

Source: https://proofwiki.org/wiki/Associativity_of_Operation_in_Group_Direct_Product



Theorem
Let $\struct {G \times H, \circ}$ be the group direct product of the two groups $\struct {G, \circ_1}$ and $\struct {H, \circ_2}$.

Then the operation $\circ$ in $\struct {G \times T, \circ}$ is associative.


Proof 1













\(\ds \paren {\tuple {g_1, h_1} \circ \tuple {g_2, h_2} } \circ \tuple {g_3, h_3}\)

\(=\)







\(\ds \tuple {\paren {g_1 \circ_1 g_2} \circ_1 g_3, \paren {h_1 \circ_2 h_2} \circ_2 h_3}\)




















\(\ds \)

\(=\)







\(\ds \tuple {g_1 \circ_1 g_2 \circ_1 g_3, h_1 \circ_2 h_2 \circ_2 h_3}\)




















\(\ds \)

\(=\)







\(\ds \tuple {g_1 \circ_1 \paren {g_2 \circ_1 g_3}, h_1 \circ_2 \paren {h_2 \circ_2 h_3} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {g_1, h_1} \circ \paren {\tuple {g_2, h_2} \circ \tuple {g_3, h_3} }\)









Thus $\circ$ is seen to be associative in $\struct {G \times H, \circ}$.
$\blacksquare$


Proof 2
By definition of group, both $\circ_1$ and $\circ_2$ are associative operations.
The result follows from External Direct Product Associativity, where the algebraic structures in question are groups.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Direct Products




