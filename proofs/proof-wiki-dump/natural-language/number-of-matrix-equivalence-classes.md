# 

Source: https://proofwiki.org/wiki/Number_of_Matrix_Equivalence_Classes

Theorem
Let $K$ be a field.
Let $\map {\MM_K} {m, n}$ be the $m \times n$ matrix space over $K$.
Let $\mathbf A$ be an $m \times n$ matrix of rank $r$ over $K$.

Then:

$\mathbf A \equiv \begin{cases}
\sqbrk {0_K}_{m n} & : r = 0 \\
& \\
\begin{bmatrix}
  \mathbf I_r & \bszero \\
  \bszero & \bszero 
\end{bmatrix} & : 0 < r < \min \set {n, m} \\
& \\
\begin{bmatrix}
  \mathbf I_r & \bszero 
\end{bmatrix} & : r = m < n \\
& \\
\begin{bmatrix}
  \mathbf I_r \\
  \bszero 
\end{bmatrix} & : r = n < m \\
& \\
\mathbf I_r & : r = m = n
\end{cases}$

Thus there are exactly $\min \set {m, n} + 1$ equivalence classes for the relation of equivalence on $\map {\MM_K} {m, n}$, one of which contains only the zero matrix.


Proof
Follows from Equivalent Matrices have Equal Rank.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 29$. Matrices




