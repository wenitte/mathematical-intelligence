# 

Source: https://proofwiki.org/wiki/Adjugate_Matrix/Examples/Arbitrary_Matrix_3

Example of Adjugate Matrix
Let $\mathbf A$ be the square matrix:

$\mathbf A = \begin {pmatrix} 1 & 2 & 0 \\ 0 & -1 & 2 \\ -1 & 2 & 0 \end {pmatrix}$

Then the adjugate matrix of $\mathbf A$ is:

$\adj {\mathbf A} = \begin {pmatrix} -4 & 0 & 4 \\ -2 & 0 & -2 \\ -1 & -4 & -1 \end {pmatrix}$


Proof
For a square matrix $\mathbf A = a_{i j}$ of order $3$, the adjugate matrix of $\mathbf A$ is:

$\adj {\mathbf A} = \begin {pmatrix} A_{11} & A_{21} & A_{31} \\ A_{12} & A_{22} & A_{32} \\ A_{13} & A_{23} & A_{33} \end {pmatrix}$

For each $a_{i j}$ in $\mathbf A$, we calculate the cofactors $A_{i j}$:














\(\ds A_{1 1}\)

\(=\)







\(\ds \paren {-1}^{1 + 1} \begin {vmatrix} -1 & 2 \\ 2 & 0 \end {vmatrix}\)




















\(\ds \)

\(=\)







\(\ds 1 \times \paren {\paren {-1} \times 0 - 2 \times 2}\)





Determinant of Order 2














\(\ds \)

\(=\)







\(\ds -4\)
























\(\ds A_{1 2}\)

\(=\)







\(\ds \paren {-1}^{1 + 2} \begin {vmatrix} 0 & 2 \\ -1 & 0 \end {vmatrix}\)




















\(\ds \)

\(=\)







\(\ds -1 \times \paren {2 \times 0 - \paren {-1} \times 2}\)





Determinant of Order 2














\(\ds \)

\(=\)







\(\ds -2\)
























\(\ds A_{1 3}\)

\(=\)







\(\ds \paren {-1}^{1 + 3} \begin {vmatrix} 0 & -1 \\ -1 & 2 \end {vmatrix}\)




















\(\ds \)

\(=\)







\(\ds 1 \times \paren {0 \times 2 - \paren {-1} \times \paren {-1} }\)





Determinant of Order 2














\(\ds \)

\(=\)







\(\ds -1\)
























\(\ds A_{2 1}\)

\(=\)







\(\ds \paren {-1}^{2 + 1} \begin {vmatrix} 2 & 0 \\ 2 & 0 \end {vmatrix}\)




















\(\ds \)

\(=\)







\(\ds -1 \times \paren {2 \times 0 - 2 \times 0}\)





Determinant of Order 2














\(\ds \)

\(=\)







\(\ds 0\)
























\(\ds A_{2 2}\)

\(=\)







\(\ds \paren {-1}^{2 + 2} \begin {vmatrix} 1 & 0 \\ -1 & 0 \end {vmatrix}\)




















\(\ds \)

\(=\)







\(\ds 1 \times \paren {1 \times 0 - 0 \times \paren {-1} }\)





Determinant of Order 2














\(\ds \)

\(=\)







\(\ds 0\)
























\(\ds A_{2 3}\)

\(=\)







\(\ds \paren {-1}^{2 + 3} \begin {vmatrix} 1 & 2 \\ -1 & 2 \end {vmatrix}\)




















\(\ds \)

\(=\)







\(\ds -1 \times \paren {1 \times 2 - \paren {-1} \times 2}\)





Determinant of Order 2














\(\ds \)

\(=\)







\(\ds -4\)
























\(\ds A_{3 1}\)

\(=\)







\(\ds \paren {-1}^{3 + 1} \begin {vmatrix} 2 & 0 \\ -1 & 2 \end {vmatrix}\)




















\(\ds \)

\(=\)







\(\ds 1 \times \paren {2 \times 2 - \paren {-1} \times 0}\)





Determinant of Order 2














\(\ds \)

\(=\)







\(\ds 4\)
























\(\ds A_{3 2}\)

\(=\)







\(\ds \paren {-1}^{3 + 2} \begin {vmatrix} 1 & 0 \\ 0 & 2 \end {vmatrix}\)




















\(\ds \)

\(=\)







\(\ds -1 \times \paren {1 \times 2 - 0 \times 0}\)





Determinant of Order 2














\(\ds \)

\(=\)







\(\ds -2\)
























\(\ds A_{3 3}\)

\(=\)







\(\ds \paren {-1}^{3 + 3} \begin {vmatrix} 1 & 2 \\ 0 & -1 \end {vmatrix}\)




















\(\ds \)

\(=\)







\(\ds 1 \times \paren {1 \times \paren {-1} - 0 \times 2}\)





Determinant of Order 2














\(\ds \)

\(=\)







\(\ds -1\)










Hence:

$\adj {\mathbf A} = \begin {pmatrix} -4 & 0 & 4 \\ -2 & 0 & -2 \\ -1 & -4 & -1 \end {pmatrix}$
$\Box$

We check this result, using Product of Matrix with Adjugate equals Determinant by Unit Matrix.

First we note that $\map \det {\mathbf A} = -8$, by Expansion Theorem for Determinants, for example expanding using column $1$.















\(\ds \adj {\mathbf A} \mathbf A\)

\(=\)







\(\ds \begin {pmatrix} 1 & 2 & 0 \\ 0 & -1 & 2 \\ -1 & 2 & 0 \\ \end {pmatrix} \begin {pmatrix} -4 & 0 & 4 \\ -2 & 0 & -2 \\ -1 & -4 & -1 \\ \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} -8 & 0 & 0 \\ 0 & -8 & 0 \\ 0 & 0 & -8 \\ \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \map \det {\mathbf A} \begin {pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \\ \end {pmatrix}\)









and all is well.
$\blacksquare$


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: Exercises: $1.13 \ \text {(c)}$




