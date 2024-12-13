# 

Source: https://proofwiki.org/wiki/Matrix_is_Nonsingular_iff_Determinant_has_Multiplicative_Inverse



Theorem
Let $R$ be a commutative ring with unity.
Let $\mathbf A \in R^{n \times n}$ be a square matrix of order $n$.

Then $\mathbf A$ is nonsingular if and only if its determinant is a invertible in $R$.

If $R$ is one of the standard number fields $\Q$, $\R$ or $\C$, this translates into:

$\mathbf A$ is nonsingular if and only if its determinant is non-zero.


Proof
Necessary Condition
Let $\mathbf A$ be nonsingular with $\mathbf B = \mathbf A^{-1}$.
Let $1_R$ denote the unity of $R$.
Let $\mathbf I_n$ denote the unit matrix of order $n$.

Then:














\(\ds 1_R\)

\(=\)







\(\ds \map \det {\mathbf I_n}\)





Determinant of Unit Matrix














\(\ds \)

\(=\)







\(\ds \map \det {\mathbf A \mathbf B}\)





Definition of Inverse Matrix














\(\ds \)

\(=\)







\(\ds \map \det {\mathbf A} \, \map \det {\mathbf B}\)





Determinant of Matrix Product



This shows that:

$\map \det {\mathbf B} = \dfrac 1 {\map \det {\mathbf A} }$
$\Box$


Sufficient Condition
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
Inverse of Matrix is Scalar Product of Adjugate by Reciprocal of Determinant: $\mathbf A^{-1} = \dfrac 1 {\map \det {\mathbf A} } \cdot \adj {\mathbf A}$


Sources
1980: A.J.M. Spencer: Continuum Mechanics ... (previous) ... (next): $2.1$: Matrices
1994: Robert Messer: Linear Algebra: Gateway to Mathematics: $\S 7.4$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): $\text{A}.2$: Linear algebra and determinants: Theorem $\text{A}.9 \ (2)$
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.6$ Determinant and trace




