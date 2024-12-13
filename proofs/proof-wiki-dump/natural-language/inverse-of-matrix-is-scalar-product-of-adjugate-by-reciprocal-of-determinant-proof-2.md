# 

Source: https://proofwiki.org/wiki/Inverse_of_Matrix_is_Scalar_Product_of_Adjugate_by_Reciprocal_of_Determinant/Proof_2

Theorem
Let $\mathbf A = \sqbrk a_n$ be a nonsingular square matrix of order $n$.
Let $\map \det {\mathbf A}$ be the determinant of $\mathbf A$.
Let $\adj {\mathbf A}$ be the adjugate of $\mathbf A$.

Then:

$\mathbf A^{-1} = \dfrac 1 {\map \det {\mathbf A} } \cdot \adj {\mathbf A}$
where $\mathbf A^{-1}$ denotes the inverse of $\mathbf A$


Proof
Let:

$\mathbf A = \begin {bmatrix} a_{11} & \cdots & a_{1n} \\ \vdots & \ddots & \vdots \\ a_{n1} & \cdots & a_{nn} \end {bmatrix}$
$\mathbf A^{-1} = \begin {bmatrix} b_{11} & \cdots & b_{1n} \\ \vdots & \ddots & \vdots \\ b_{n1} & \cdots & b_{nn} \end {bmatrix}$
Let $\tuple {\mathbf e_1, \mathbf e_2, \cdots, \mathbf e_n}$ be the standard ordered basis of $\R^n$.
Let $T: \R^n \to \R^n, \mathbf x \mapsto \map T {\mathbf x}$ be a linear transformation.

From Linear Transformation as Matrix Product, let:














\(\ds \map T {\mathbf x}\)

\(=\)







\(\ds \mathbf A^{-1}\mathbf x\)














\(\ds \leadsto \ \ \)





\(\ds \mathbf A^{-1}\)

\(=\)







\(\ds \begin {bmatrix} \map T {\mathbf e_1} & \map T {\mathbf e_2} & \cdots & \map T {\mathbf e_n} \end {bmatrix}\)









Let $p, q \in \set {1, \dots, n}$.
Let $\mathbf I_n$ be the unit matrix of order $n$.














\(\ds \map T {\mathbf e_q}\)

\(=\)







\(\ds \mathbf A^{-1} \mathbf e_q\)














\(\ds \leadsto \ \ \)





\(\ds \begin {bmatrix} b_{1q} \\ \vdots \\ b_{nq} \end {bmatrix}\)

\(=\)







\(\ds \mathbf A^{-1} \mathbf e_q\)














\(\ds \leadsto \ \ \)





\(\ds \mathbf A \begin {bmatrix} b_{1q} \\ \vdots \\ b_{nq} \end {bmatrix}\)

\(=\)







\(\ds \mathbf A \mathbf A^{-1} \mathbf e_q\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \mathbf I_n \mathbf e_q\)





Definition of Inverse Matrix








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \mathbf e_q\)





Unit Matrix is Identity for Matrix Multiplication



Let $\mathbf {A_p}$ be the matrix obtained by replacing the $p$th column of $\mathbf A$ with $\mathbf e_q$.
Let $C_{q p}$ be the cofactor of $a_{q p}$ in $\map \det {\mathbf A_p}$.














\(\ds b_{pq}\)

\(=\)







\(\ds \frac {\map \det {\mathbf A_p} } {\map \det {\mathbf A} }\)





Cramer's Rule








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \frac {\begin {vmatrix} a_{1 1} & \cdots & a_{1, p - 1} & 0 & a_{1, p + 1} & \cdots & a_{1 n} \\ \vdots & \ddots & \vdots & \vdots & \vdots & \ddots & \vdots \\ a_{q - 1, 1} & \cdots & a_{q - 1, p - 1} & 0 & a_{q - 1, p + 1} & \cdots & a_{q - 1, n} \\ a_{q 1} & \cdots & a_{q, p - 1} & 1 & a_{q, p + 1} & \cdots & a_{q n} \\ a_{q + 1, 1} & \cdots & a_{q + 1, p - 1} & 0 & a_{q + 1, p + 1} & \cdots & a_{q + 1, n} \\ \vdots & \ddots & \vdots & \vdots & \vdots & \ddots & \vdots \\ a_{n 1} & \cdots & a_{n, p - 1} & 0 & a_{n, p + 1} & \cdots & a_{n n} \end {vmatrix} } {\map \det {\mathbf A} }\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \frac {\ds \sum_{k \mathop = 1}^n a_{k p} C_{k p } } {\map \det {\mathbf A} }\)





Expansion Theorem for Determinants








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \frac {0 \cdot C_{1 p} + 0 \cdot C_{2 p} + \cdots + 1 \cdot C_{q p} + \cdots + 0 \cdot C_{n p} } {\map \det {\mathbf A} }\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \frac {C_{q p} } {\map \det {\mathbf A} }\)










Hence:














\(\ds \mathbf A^{-1}\)

\(=\)







\(\ds \begin {bmatrix} \dfrac {C_{1 1} } {\map \det {\mathbf A} } & \cdots & \dfrac {C_{n 1} } {\map \det {\mathbf A} } \\ \vdots & \ddots & \vdots \\ \dfrac {C_{1 n} } {\map \det {\mathbf A} } & \cdots & \dfrac {C_{n n} } {\map \det {\mathbf A} } \end {bmatrix}\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac 1 {\det {\mathbf A} } \begin {bmatrix} C_{1 1} & \cdots & C_{n 1} \\ \vdots & \ddots & \vdots \\ C_{1 n} & \cdots & C_{n n} \end {bmatrix}\)





Definition of  Matrix Scalar Product








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac 1 {\map \det {\mathbf A} } \cdot \adj {\mathbf A}\)





Definition of  Adjugate Matrix



$\blacksquare$





