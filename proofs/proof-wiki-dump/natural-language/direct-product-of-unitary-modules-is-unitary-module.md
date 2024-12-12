# 

Source: https://proofwiki.org/wiki/Direct_Product_of_Unitary_Modules_is_Unitary_Module

Theorem
Let $R$ be a ring with unity whose unity is $1_R$.
Let $\family {\struct {M_i, +_i, \circ_i} }_{i \mathop \in I}$ be a family of unitary $R$-modules.
Let $\struct {M, +, \circ}$ be their direct product.

Then $\struct {M, +, \circ}$ is a unitary $R$-module.


Proof
From Direct Product of Modules is Module, $M$ is an $R$-module.

It remains to verify that:

$\forall x \in M: 1_R \circ x = x$
By the definition of direct product, $\circ$ is an $R$-action induced on $M$ by $\family {\circ_i}_{i \mathop \in I}$:

$\forall r \in R: r \circ \family {m_i}_{i \mathop \in I} = \family {r \circ_i m_i}_{i \mathop \in I}$.
We have:










\(\ds \exists 1_R \in R, \forall \family {m_i}_{i \mathop \in I} \in M: \, \)



\(\ds 1_R \circ \family {m_i}_{i \mathop \in I}\)

\(=\)







\(\ds \family {1_R \circ_i m_i}_{i \mathop \in I}\)





Definition of $R$-action














\(\ds \)

\(=\)







\(\ds \family {m_i}_{i \mathop \in I}\)





Unitary Module Axiom $\text {UM} 4$: Unity of Scalar Ring



$\blacksquare$





