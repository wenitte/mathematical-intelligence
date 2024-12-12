# 

Source: https://proofwiki.org/wiki/Change_of_Basis_Matrix_is_Nonsingular

Theorem
Let $R$ be a ring with unity.
Let $M$ be a free $R$-module of finite dimension $n > 0$.
Let $\AA$ and $\BB$ be ordered bases of $M$.
Let $\mathbf P$ be the change of basis matrix from $\AA$ to $\BB$.

Then $\mathbf P$ is nonsingular, and its inverse $\mathbf P^{-1}$ is the change of basis matrix from $\BB$ to $\AA$.


Proof
From Product of Change of Basis Matrices and Change of Basis Matrix Between Equal Bases:

$\sqbrk {I_M; \AA, \BB} \sqbrk {I_M; \BB, \AA} = \sqbrk {I_M; \AA, \AA} = I_n$
$\sqbrk {I_M; \BB, \AA} \sqbrk {I_M; \AA, \BB} = \sqbrk {I_M; \BB, \BB} = I_n$
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 29$. Matrices




