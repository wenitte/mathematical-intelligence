# 

Source: https://proofwiki.org/wiki/Composition_of_Linear_Transformations_is_Isomorphic_to_Matrix_Product



Theorem
Let $R$ be a ring with unity.
Let $F$, $G$ and $H$ be free $R$-modules of finite dimension $p, n, m > 0$ respectively.
Let $\sequence {a_p}$, $\sequence {b_n}$ and $\sequence {c_m}$ be ordered bases 
Let $\map {\LL_R} {G, H}$ denote the set of all linear transformations from $G$ to $H$.
Let $\map {\MM_R} {m, n}$ be the $m \times n$ matrix space over $R$.
Let $\sqbrk {u; \sequence {c_m}, \sequence {b_n} }$ be the matrix of $u$ relative to $\sequence {b_n}$ and $\sequence {c_m}$.

Let $M: \map {\LL_R} {G, H} \to \map {\MM_R} {m, n}$ be defined as:

$\forall u \in \map {\LL_R} {G, H}: \map M u = \sqbrk {u; \sequence {c_m}, \sequence {b_n} }$

Then:

$\forall u \in \map {\LL_R} {F, G}, v \in \map {\LL_R} {G, H}: \sqbrk {v \circ u; \sequence {c_m}, \sequence {a_p} } = \sqbrk {v; \sequence {c_m}, \sequence {b_n} } \sqbrk {u; \sequence {b_n}, \sequence {a_p} }$


Proof
Follows directly from Relative Matrix of Composition of Linear Transformations.
$\blacksquare$


Motivation
What Set of Linear Transformations is Isomorphic to Matrix Space tells us is two things:

That the relative matrix of a linear transformation can be considered to be the same thing as the transformation itself
To determine the relative matrix for the composite of two linear transformations, what you do is multiply the relative matrices of those linear transformations.
Thus one has a means of direct arithmetical manipulation of linear transformations, thereby transforming geometry into algebra.
In fact, matrix multiplication was purposely defined (some would say designed) so as to produce exactly this result.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 29$. Matrices: Theorem $29.1$




