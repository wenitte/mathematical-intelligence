# 

Source: https://proofwiki.org/wiki/Negative_Linear_Transformation

Theorem
Let $\struct {G, +_G}$ and $\struct {H, +_H}$ be abelian groups.
Let $\struct {R, +_R, \times_R}$ be a ring.
Let $\struct {G, +_G, \circ_G}$ and $\struct {H, +_H, \circ_H}$ be $R$-modules.
Let $\map {\LL_R} {G, H}$ be the set of all linear transformations from $G$ to $H$.

Let $\phi: G \to H$ be a linear transformation.
Let $-\phi$ be the pointwise negative of $\phi$:

$\forall \phi \in \map {\LL_R} {G, H}: \forall x \in G: \map {\paren {-\phi} } x = -\paren {\map \phi x}$

Then $-\phi: G \to H$ is also a linear transformation.


Proof
From the definition of a module, the group $\struct {H, +_H}$ is abelian.
Therefore we can apply Inverse Mapping in Induced Structure of Homomorphism to Abelian Group to show that $-\phi: G \to H$ is a homomorphism.
Let $\lambda \in R, x \in G$.
Then:














\(\ds \map {\paren {-\phi} } {\lambda \circ_G x}\)

\(=\)







\(\ds - \map \phi {\lambda \circ_G x}\)




















\(\ds \)

\(=\)







\(\ds - \lambda \circ_H \map \phi x\)




















\(\ds \)

\(=\)







\(\ds \lambda \circ_H \paren {-\map \phi x}\)




















\(\ds \)

\(=\)







\(\ds \lambda \circ_H \map {\paren {-\phi} } x\)









$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations




