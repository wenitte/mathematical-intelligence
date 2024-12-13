# 

Source: https://proofwiki.org/wiki/Scalar_Multiplication_Corresponds_to_Multiplication_by_1x1_Matrix

Theorem
Let $\map \MM 1$ denote the matrix space of square matrices of order $1$.
Let $\map \MM {1, n}$ denote the matrix space of order $1 \times n$.
Let $\mathbf A = \begin {pmatrix} a \end {pmatrix} \in \map \MM 1$ and $\mathbf B = \begin {pmatrix} b_1 & b_2 & \cdots & b_n \end{pmatrix} \in \map \MM {1, n}$.

Let $\mathbf C = \mathbf A \mathbf B$ denote the (conventional) matrix product of $\mathbf A$ with $\mathbf B$.
Let $\mathbf D = a \mathbf B$ denote the matrix scalar product of $a$ with $\mathbf B$.

Then $\mathbf C = \mathbf D$.


Proof
By definition of (conventional) matrix product, $\mathbf C$ is of order $1 \times n$.
By definition of matrix scalar product, $\mathbf D$ is also of order $1 \times n$.

Consider arbitrary elements $c_i \in \mathbf C$ and $d_i \in \mathbf D$ for some index $i$ where $1 \le i \le n$.
We have:














\(\ds c_i\)

\(=\)







\(\ds \sum_{j \mathop = 1}^i a_{j j} b_j\)





Definition of Matrix Product (Conventional)














\(\ds \)

\(=\)







\(\ds a b_j\)





Definition of $\mathbf A$



and: 














\(\ds d_i\)

\(=\)







\(\ds a b_j\)





Definition of Matrix Scalar Product














\(\ds \)

\(=\)







\(\ds c_i\)





from above



$\blacksquare$


Sources
1954: A.C. Aitken: Determinants and Matrices (8th ed.) ... (previous) ... (next): Chapter $\text I$: Definitions and Fundamental Operations of Matrices: $4$. Matrices, Row Vectors, Column Vectors, Scalars




