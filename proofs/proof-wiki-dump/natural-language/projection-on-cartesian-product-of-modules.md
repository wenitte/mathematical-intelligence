# 

Source: https://proofwiki.org/wiki/Projection_on_Cartesian_Product_of_Modules

Theorem
Let $\struct {R, +_R, \times_R}$ be a ring.
Let $\struct {G, +, \circ}_R$ be the cartesian product of a sequence $\sequence {\struct {G_n, +_n, \circ_n}_R}$ of $R$-modules.

Then for each $j \in \closedint 1 n$, the projection $\pr_j$ on the $j$th co-ordinate is an epimorphism from $\struct {G, +, \circ}_R$ onto $\struct {G_j, +_j, \circ_j}_R$.


Proof
To demonstrate that $\pr_j$ is an epimorphism, we need to show that:

$(1): \quad \pr_j$ is a surjection
$(2): \quad \forall x, y \in G: \map {\pr_j} {x + y} = \map {\pr_j} x +_j \map {\pr_j} y$
$(3): \quad \forall x \in G: \forall \lambda \in R: \map {\pr_j} {\lambda \circ x} = \lambda \circ_j \map {\pr_j} x$

Criteria $(1)$ and $(2)$ are a direct application of Projection is Epimorphism.

Let $x = \tuple {x_1, x_2, \ldots, x_j, \ldots, x_n}$

Then we have:










\(\ds \forall x \in G: \forall \lambda \in R: \, \)



\(\ds \map {\pr_j} {\lambda \circ x}\)

\(=\)







\(\ds \map {\pr_j} {\lambda \circ \tuple {x_1, x_2, \ldots, x_j, \ldots, x_n} }\)




















\(\ds \)

\(=\)







\(\ds \map {\pr_j} {\tuple {\lambda \circ_1 x_1, \lambda \circ_2 x_2, \ldots, \lambda \circ_j x_j, \ldots, \lambda \circ_n x_n} }\)





Definition of Cartesian Product














\(\ds \)

\(=\)







\(\ds \lambda \circ_j x_j\)





Definition of Projection (Mapping Theory)














\(\ds \)

\(=\)







\(\ds \lambda \circ_j \map {\pr_j} x\)





Definition of Projection (Mapping Theory)



$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations: Example $28.7$




