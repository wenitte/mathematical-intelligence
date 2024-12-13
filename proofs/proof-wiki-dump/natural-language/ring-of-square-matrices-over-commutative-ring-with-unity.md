# 

Source: https://proofwiki.org/wiki/Ring_of_Square_Matrices_over_Commutative_Ring_with_Unity



Theorem
Let $R$ be a commutative ring with unity.
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Let $\struct {\map {\MM_R} n, +, \times}$ denote the ring of square matrices of order $n$ over $R$.

Then $\struct {\map {\MM_R} n, +, \times}$ is a ring with unity.
However, for $n \ge 2$, $\struct {\map {\MM_R} n, +, \times}$ is not a commutative ring.


Proof
From Ring of Square Matrices over Ring with Unity we have that $\struct {\map {\MM_R} n, +, \times}$ is a ring with unity.
However, Matrix Multiplication is not Commutative.
Hence $\struct {\map {\MM_R} n, +, \times}$ is not a commutative ring for $n \ge 2$.
For $n = 1$ we have that:










\(\ds \forall \mathbf A, \mathbf B \in \map {\MM_R} 1: \, \)



\(\ds \mathbf A \mathbf B\)

\(=\)







\(\ds a_{11} b_{11}\)





where $\mathbf A = \begin {pmatrix} a_11 \end {pmatrix}$ and $\mathbf B = \begin {pmatrix} b_11 \end {pmatrix}$














\(\ds \)

\(=\)







\(\ds b_{11} a_{11}\)





as $R$ is a commutative ring














\(\ds \)

\(=\)







\(\ds \mathbf {B A}\)









Thus, for $n = 1$, $\struct {\map {\MM_R} n, +, \times}$ is a commutative ring.
$\blacksquare$


Notation
When referring to the operation of matrix multiplication in the context of the ring of square matrices:

$\struct {\map {\MM_R} n, +, \times}$
we must have some symbol to represent it, and $\times$ does as well as any.
However, we do not use $\mathbf A \times \mathbf B$ for matrix multiplication $\mathbf A \mathbf B$, as it is understood to mean the vector cross product, which is something completely different.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 29$. Matrices: Theorem $29.2$




