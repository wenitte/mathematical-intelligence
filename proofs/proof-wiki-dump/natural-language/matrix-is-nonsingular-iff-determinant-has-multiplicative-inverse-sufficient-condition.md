# 

Source: https://proofwiki.org/wiki/Matrix_is_Nonsingular_iff_Determinant_has_Multiplicative_Inverse/Sufficient_Condition

Theorem
Let $R$ be a commutative ring with unity.
Let $\mathbf A \in R^{n \times n}$ be a square matrix of order $n$.

Let  the determinant of $\mathbf A$ be invertible in $R$.

Then $\mathbf A$ is a nonsingular matrix.


Proof
Let $\map \det {\mathbf A}$ be invertible in $R$.
From Matrix Product with Adjugate Matrix:














\(\ds \mathbf A \cdot \adj {\mathbf A}\)

\(=\)







\(\ds \map \det {\mathbf A} \cdot \mathbf I_n\)




















\(\ds \adj {\mathbf A} \cdot \mathbf A\)

\(=\)







\(\ds \map \det {\mathbf A} \cdot \mathbf I_n\)









Thus:














\(\ds \mathbf A \cdot \paren {\map \det {\mathbf A}^{-1} \cdot \adj {\mathbf A} }\)

\(=\)







\(\ds \mathbf I_n\)




















\(\ds \paren {\map \det {\mathbf A}^{-1} \cdot \adj {\mathbf A} } \cdot \mathbf A\)

\(=\)







\(\ds \mathbf I_n\)










Thus $\mathbf A$ is nonsingular, and:

$\mathbf A^{-1} = \map \det {\mathbf A}^{-1} \cdot \adj {\mathbf A}$
$\blacksquare$


Also see
Determinant of Inverse Matrix




