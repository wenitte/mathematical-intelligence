# 

Source: https://proofwiki.org/wiki/Finite_Direct_Product_of_Unitary_Modules_is_Unitary_Module/Proof_2

Theorem
Let $\struct {R, +_R, \times_R}$ be a ring.
Let $\struct {G_1, +_1, \circ_1}_R, \struct {G_2, +_2, \circ_2}_R, \ldots, \struct {G_n, +_n, \circ_n}_R$ be unitary $R$-modules.
Let:

$\ds G = \prod_{k \mathop = 1}^n G_k$
be their direct product.
Then $G$ is a unitary module.


Proof
From Finite Direct Product of Modules is Module we have that $G$ is a module.
It remains to be shown that:

$\forall x \in G: 1_R \circ x = x$

Let $x = \tuple {x_1, x_2, \ldots, x_n} \in G$.
Then:














\(\ds 1_R \circ x\)

\(=\)







\(\ds 1_R \circ \tuple {x_1, x_2, \ldots, x_n}\)




















\(\ds \)

\(=\)







\(\ds \tuple {1_R \circ x_1, 1_R \circ x_2, \ldots, 1_R \circ x_n}\)




















\(\ds \)

\(=\)







\(\ds \tuple {x_1, x_2, \ldots, x_n}\)




















\(\ds \)

\(=\)







\(\ds x\)









Hence the result.
$\blacksquare$





