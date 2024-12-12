# 

Source: https://proofwiki.org/wiki/Canonical_Injection_into_Cartesian_Product_of_Modules/Proof_1

Theorem
Let $\struct {R, +_R, \times_R}$ be a ring.
Let $\struct {G, +, \circ}_R$ be the cartesian product of a sequence $\sequence {\struct {G_n, +_n, \circ_n}_R}$ of $R$-modules.

Then for each $j \in \closedint 1 n$, the canonical injection $\inj_j$ from $\struct {G_j, +_j, \circ_j}_R$ into $\struct {G, +, \circ}_R$ is a monomorphism.


Proof
To demonstrate that $\inj_j$ is an epimorphism, we need to show that:

$(1): \quad \inj_j$ is an injection
$(2): \quad \forall x, y \in G_j: \map {\inj_j} {x +_j y} = \map {\inj_j} x + \map {\inj_j} y$
$(3): \quad \forall x_j \in G_j: \forall \lambda \in R: \map {\inj_j} {\lambda \circ_j x_j} = \lambda \circ \map {\inj_j} {x_j}$
Criteria $(1)$ and $(2)$ are a direct application of Canonical Injection is Monomorphism.

Let $x_j \in G_j$ be arbitrary.
Then we have:










\(\ds \forall x \in G_j: \forall \lambda \in R: \, \)



\(\ds \map {\inj_j} {\lambda \circ_j x_j}\)

\(=\)







\(\ds \tuple {e_1, e_2, \ldots, \lambda \circ_j x_j, \ldots, e_n}\)





Definition of Canonical Injection














\(\ds \)

\(=\)







\(\ds \lambda \circ \tuple {e_1, e_2, \ldots, x_j, \ldots, e_n}\)





Definition of Cartesian Product














\(\ds \)

\(=\)







\(\ds \lambda \circ \map {\inj_j} {x_j}\)





Definition of Canonical Injection



$\blacksquare$





