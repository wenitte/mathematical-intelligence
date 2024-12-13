# 

Source: https://proofwiki.org/wiki/Preimage_of_Submodule_under_Linear_Transformation_is_Submodule

Theorem
Let $\struct {R, +_R, \times_R}$ be a ring.
Let $\struct {G, +_G, \circ_G}_R$ and $\struct {H, +_H, \circ_H}_R$ be $R$-modules.
Let $\phi: G \to H$ be a linear transformation.

Let $N$ be a submodule of $H$.
Then $\phi^{-1} \sqbrk N$ is a submodule of $G$.


Proof
Let $M = \phi^{-1} \sqbrk N$ be the preimage of $N$ under $\phi$.
Aiming for a contradiction, suppose $M$ is not a submodule of $G$.
This means that $M$ does not fulfil all the module axioms.

First suppose that:

$(1): \quad \struct {M, +_G}$ is not a subgroup of $G$.
Then $M$ is not a group.
Then by the One-Step Subgroup Test:

$\exists x, y \in M: x +_G \paren {-y} \notin M$
Then:










\(\ds \exists x, y \in M: \, \)



\(\ds x +_G \paren {-y}\)

\(\notin\)







\(\ds M\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi {x +_G \paren {-y} }\)

\(\notin\)







\(\ds N\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi x +_H \map \phi {-y}\)

\(\notin\)







\(\ds N\)









But by definition of $\phi$, both $\map \phi x \in N$ and $\map \phi {-y} \in N$.
Hence $\struct {N, +_G}$ is not closed.
By Group Axiom $\text G 0$: Closure as applied to $N$, it follows that $N$ is not a group.
Hence $N$ is not a subgroup of $H$.
From this contradiction it follows that $(1)$ is false.
Thus $\struct {M, +_G}$ is a subgroup of $G$.
$\Box$

We have by hypothesis that $M$ is not a submodule of $G$.
We have shown that $\struct {M, +_G}$ is a subgroup of $G$.
Hence it must be the case that $M$ is not closed for scalar product:




\(\text {(2)}: \quad\)





\(\ds \exists \lambda \in R, x \in M: \, \)



\(\ds \lambda \circ_G x\)

\(\notin\)







\(\ds M\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi {\lambda \circ_G x}\)

\(\notin\)







\(\ds N\)














\(\ds \leadsto \ \ \)





\(\ds \lambda \circ_H {\map \phi x}\)

\(\notin\)







\(\ds N\)









But by definition of $\phi$, both $\map \phi x \in N$.
Hence $N$ is not closed for scalar product.
From this contradiction it follows that $(2)$ is false.
Thus $\struct {M, +_G}$ is closed for scalar product.
$\Box$

We have shown that $M$ is a subgroup of $G$ which is closed for scalar product.
That is, $M$ is a submodule of $G$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations: Theorem $28.2$




