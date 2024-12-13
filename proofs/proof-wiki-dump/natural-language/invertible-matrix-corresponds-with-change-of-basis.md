# 

Source: https://proofwiki.org/wiki/Invertible_Matrix_Corresponds_with_Change_of_Basis

Theorem
Let $R$ be a commutative ring with unity.
Let $G$ be an $n$-dimensional unitary $R$-module.
Let $\sequence {a_n}$ be an ordered basis of $G$.
Let $\mathbf P = \sqbrk \alpha_n$ be a square matrix of order $n$ over $R$.
Let $\ds \forall j \in \closedint 1 n: b_j = \sum_{i \mathop = 1}^n \alpha_{i j} a_i$.

Then $\sequence {b_n}$ is an ordered basis of $G$ if and only if $\mathbf P$ is nonsingular.


Proof
From Change of Basis Matrix is Nonsingular, if $\sequence {b_n}$ is an ordered basis of $G$ then $\mathbf P$ is nonsingular.

Now let $\mathbf P$ be nonsingular.
Then by the corollary to Set of Linear Transformations is Isomorphic to Matrix Space, there is an automorphism $u$ of $G$ which satisfies $\mathbf P = \sqbrk {u; \sequence {a_n} }$.
Therefore, as $\forall j \in \closedint 1 n: b_j = \map u {a_j}$, it follows that $\sequence {b_n}$ is also an ordered basis of $G$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 29$. Matrices: Theorem $29.3$




