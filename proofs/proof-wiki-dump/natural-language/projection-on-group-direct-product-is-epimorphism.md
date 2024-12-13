# 

Source: https://proofwiki.org/wiki/Projection_on_Group_Direct_Product_is_Epimorphism



Theorem
Let $\struct {G_1, \circ_1}$ and $\struct {G_2, \circ_2}$ be groups.
Let $\struct {G, \circ}$ be the group direct product of $\struct {G_1, \circ_1}$ and $\struct {G_2, \circ_2}$.

Then:

$\pr_1$ is an epimorphism from $\struct {G, \circ}$ to $\struct {G_1, \circ_1}$
$\pr_2$ is an epimorphism from $\struct {G, \circ}$ to $\struct {G_2, \circ_2}$
where $\pr_1$ and $\pr_2$ are the first and second projection respectively of $\struct {G, \circ}$.


Proof 1
From Projection is Surjection, $\pr_1$ and $\pr_2$ are surjections.
We now need to show they are homomorphisms.
Let $g, h \in \struct {G, \circ}$ where $g = \tuple {g_1, g_2}$ and $h = \tuple {h_1, h_2}$.
Then:














\(\ds \map {\pr_1} {g \circ h}\)

\(=\)







\(\ds \map {\pr_1} {\tuple {g_1, g_2} \circ \tuple {h_1, h_2} }\)




















\(\ds \)

\(=\)







\(\ds \map {\pr_1} {\tuple {g_1 \circ_1 h_1, g_2 \circ_2 h_2} }\)




















\(\ds \)

\(=\)







\(\ds g_1 \circ_1 h_1\)




















\(\ds \)

\(=\)







\(\ds \map {\pr_1} g \circ_1 \map {\pr_1} h\)
























\(\ds \map {\pr_2} {g \circ h}\)

\(=\)







\(\ds \map {\pr_2} {\tuple {g_1, g_2} \circ \tuple {h_1, h_2} }\)




















\(\ds \)

\(=\)







\(\ds \map {\pr_2} {\tuple {g_1 \circ_1 h_1, g_2 \circ_2 h_2} }\)




















\(\ds \)

\(=\)







\(\ds g_2 \circ_2 h_2\)




















\(\ds \)

\(=\)







\(\ds \map {\pr_2} g \circ_2 \map {\pr_2} h\)









and thus the morphism property is demonstrated for both $\pr_1$ and $\pr_2$.
$\blacksquare$


Proof 2
A specific instance of Projection is Epimorphism, where the algebraic structures in question are groups.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Direct Products
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $5$




