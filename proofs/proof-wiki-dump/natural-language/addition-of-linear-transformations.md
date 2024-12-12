# 

Source: https://proofwiki.org/wiki/Addition_of_Linear_Transformations

Theorem
Let $\struct {G, +_G}$ and $\struct {H, +_H}$ be abelian groups.
Let $\struct {R, +_R, \times_R}$ be a ring.
Let $\struct {G, +_G, \circ_G}$ and $\struct {H, +_H, \circ_H}$ be $R$-modules.
Let $\map {\LL_R} {G, H}$ be the set of all linear transformations from $G$ to $H$.

Let $\oplus_H$ be defined as pointwise addition on $\map {\LL_R} {G, H}$:

$\forall \phi, \psi \in \map {\LL_R} {G, H}: \forall x \in G: \map {\paren {\phi \oplus_H \psi} } x := \map \phi x +_H \map \psi x$

Then $\phi \oplus_H \psi: G \to H$ is a linear transformation.


Proof
From the definition of a module, the group $\struct {H, +_H}$ is abelian.
Hence $\struct {H, +_H}$ is a fortiori a commutative semigroup.
Therefore we can apply Homomorphism on Induced Structure to Commutative Semigroup to show that $\phi +_H \psi: G \to H$ is a homomorphism.
Let $\lambda \in R, x \in G$.
Then:














\(\ds \map {\paren {\phi +_H \psi} } {\lambda \circ_G x}\)

\(=\)







\(\ds \map \phi {\lambda \circ_G x} +_H \map \psi {\lambda \circ_G x}\)




















\(\ds \)

\(=\)







\(\ds \lambda \circ_H \map \phi x +_H \lambda \circ_H \map \psi x\)




















\(\ds \)

\(=\)







\(\ds \lambda \circ_H \paren {\map \phi x +_H \map \psi x}\)




















\(\ds \)

\(=\)







\(\ds \lambda \circ_H \map {\paren {\phi +_H \psi} } x\)









$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations




