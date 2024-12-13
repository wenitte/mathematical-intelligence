# 

Source: https://proofwiki.org/wiki/Rank_Plus_Nullity_Theorem

Theorem
Let $G$ be an $n$-dimensional vector space.
Let $H$ be a vector space.
Let $\phi: G \to H$ be a linear transformation.
Let $\map \rho \phi$ and $\map \nu \phi$ be the rank and nullity respectively of $\phi$.

Then the image of $\phi$ is finite-dimensional, and:

$\map \rho \phi + \map \nu \phi = n$

By definition of rank and nullity, it can be seen that this is equivalent to the alternative way of stating this result:

$\map \dim {\Img \phi} + \map \dim {\map \ker \phi} = \map \dim G$


Proof
If $\phi = 0$ then the assertion is clear.

Let $\phi$ be a non-zero linear transformation.
By Dimension of Proper Subspace is Less Than its Superspace and Generator of Vector Space Contains Basis, there is an ordered basis $\sequence {a_n}$ of $G$ such that:

$\exists r \in \N_n: \set {a_k: r + 1 \le k \le n}$ is a basis of $\map \ker \phi$
As a consequence:

$\map \nu \phi = n - r$
and by Unique Linear Transformation Between Vector Spaces:

$\map \rho \phi = r$
The result follows.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations: Theorem $28.5$: Corollary




