# 

Source: https://proofwiki.org/wiki/Inverse_of_Matrix_is_Scalar_Product_of_Adjugate_by_Reciprocal_of_Determinant/Proof_1

Theorem
Let $\mathbf A = \sqbrk a_n$ be a nonsingular square matrix of order $n$.
Let $\map \det {\mathbf A}$ be the determinant of $\mathbf A$.
Let $\adj {\mathbf A}$ be the adjugate of $\mathbf A$.

Then:

$\mathbf A^{-1} = \dfrac 1 {\map \det {\mathbf A} } \cdot \adj {\mathbf A}$
where $\mathbf A^{-1}$ denotes the inverse of $\mathbf A$


Proof
Let $\mathbf I_n$ denote the unit matrix of order $n$.














\(\ds \map \det {\mathbf A} \cdot \mathbf I_n\)

\(=\)







\(\ds \mathbf A \cdot \adj {\mathbf A}\)





Matrix Product with Adjugate Matrix














\(\ds \map \det {\mathbf A} \cdot \mathbf A^{-1} \cdot \mathbf I_n\)

\(=\)







\(\ds \mathbf A^{-1} \cdot \mathbf A \cdot \adj {\mathbf A}\)




















\(\ds \map \det {\mathbf A} \cdot \mathbf A^{-1} \cdot \mathbf I_n\)

\(=\)







\(\ds \mathbf I_n \cdot \adj {\mathbf A}\)





Definition of Inverse Matrix














\(\ds \map \det {\mathbf A} \cdot \mathbf A^{-1}\)

\(=\)







\(\ds \adj {\mathbf A}\)





Unit Matrix is Identity for Matrix Multiplication














\(\ds \mathbf A^{-1}\)

\(=\)







\(\ds \dfrac 1 {\map \det {\mathbf A} } \cdot \adj {\mathbf A}\)









$\blacksquare$





