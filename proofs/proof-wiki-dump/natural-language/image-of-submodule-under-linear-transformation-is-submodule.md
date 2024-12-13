# 

Source: https://proofwiki.org/wiki/Image_of_Submodule_under_Linear_Transformation_is_Submodule

Theorem
Let $\struct {R, +_R, \times_R}$ be a ring.
Let $\struct {G, +_G, \circ_G}_R$ and $\struct {H, +_H, \circ_H}_R$ be $R$-modules.
Let $\phi: G \to H$ be a linear transformation.

Let $M$ be a submodule of $G$.
Then $\phi \sqbrk M$ is a submodule of $H$.


Proof
Let $N = \phi \sqbrk M$ be the image set of $M$ under $\phi$.

By definition, a linear transformation $\phi: G \to H$ is, in particular, a (group) homomorphism from the group $\struct {G, +_G}$ to the group $\struct {H, +_H}$.
We have by hypothesis that $M$ is a submodule of $G$.
So from Elements of Submodule form Subgroup, $M$ forms a subgroup of $G$.
From Group Homomorphism Preserves Subgroups, $N$ is therefore a subgroup of $H$.
$\Box$

It remains to be shown that $N$ is closed for scalar product:

$\forall \lambda \in R, x \in N: \lambda \circ_H x \in N$

As $M$ is a submodule of $G$, $M$ itself is closed for scalar product:

$\forall \lambda \in R, y \in N: \lambda \circ_G y \in M$

We have:










\(\ds \forall n \in N: \exists y \in M: \, \)



\(\ds x\)

\(=\)







\(\ds \map \phi y\)





Definition of $\phi$








\(\ds \leadsto \ \ \)

\(\ds \forall \lambda \in R: \, \)



\(\ds \lambda \circ_H x\)

\(=\)







\(\ds \lambda \circ_H \map \phi y\)




















\(\ds \)

\(=\)







\(\ds \map \phi {\lambda \circ_G y}\)





Definition of Morphism Property applied to $\phi$








\(\ds \leadsto \ \ \)





\(\ds \lambda \circ_H x\)

\(\in\)







\(\ds \phi \sqbrk M\)





as $\lambda \circ_G y \in M$








\(\ds \leadsto \ \ \)





\(\ds \lambda \circ_H x\)

\(\in\)







\(\ds N\)





Definition of $N$



$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations: Theorem $28.2$




