# 

Source: https://proofwiki.org/wiki/Homomorphic_Image_of_Vector_Space

Theorem
Let $\struct {K, +_K, \times_K}$ be a division ring.
Let $\struct {V, +_V, \circ_V}_K$ be a $K$-vector space.
Let $\struct {W, +_W, \circ_W}_K$ be a $K$-algebraic structure.
Let $\phi: V \to W$ be a homomorphism, that is, a linear transformation.

Then the homomorphic image of $\phi$ is a $K$-vector space.


Proof
Let us write $\phi \sqbrk V$ for the homomorphic image of $\phi$.
From Homomorphic Image of R-Module is R-Module, $\phi \sqbrk V$ is a $K$-module.
It thus suffices to show that $\phi \sqbrk V$ is unitary, since then it will be a $K$-vector space.

To this end, let $1_K$ be the unity of $K$.
Then for any $\map \phi {\mathbf v} \in \phi \sqbrk V$, compute:














\(\ds 1_K \circ_W \map \phi {\mathbf v}\)

\(=\)







\(\ds \map \phi {1_K \circ_V \mathbf v}\)





$\phi$ is a linear transformation














\(\ds \)

\(=\)







\(\ds \map \phi {\mathbf v}\)





$V$ is a $K$-vector space




Hence $\phi \sqbrk V$ is unitary, and so a $K$-vector space.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations




