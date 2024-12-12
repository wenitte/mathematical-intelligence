# 

Source: https://proofwiki.org/wiki/Adjugate_Matrix/Examples/Arbitrary_Matrix_4

Example of Adjugate Matrix
Let $\mathbf A$ be the square matrix:

$\mathbf A = \begin {pmatrix} -1 & 2 & 0 \\ 0 & 1 & 3 \\ 2 & -3 & 3 \end {pmatrix}$

Then the adjugate matrix of $\mathbf A$ is:

$\adj {\mathbf A} = \begin {pmatrix} 12 & 6 & -2 \\ -6 & -3 & 1 \\ 6 & 3 & -1 \end {pmatrix}$


Proof
For a square matrix $\mathbf A = a_{i j}$ of order $3$, the adjugate matrix of $\mathbf A$ is:

$\adj {\mathbf A} = \begin {pmatrix} A_{1 1} & A_{2 1} & A_{3 1} \\ A_{1 2} & A_{2 2} & A_{3 2} \\ A_{1 3} & A_{2 3} & A_{3 3} \end {pmatrix}$

For each $a_{i j}$ in $\mathbf A$, we calculate the cofactors $A_{i j}$:














\(\ds A_{1 1}\)

\(=\)







\(\ds \paren {-1}^{1 + 1} \begin {vmatrix} 1 & 3 \\ -3 & 3 \end {vmatrix}\)




















\(\ds \)

\(=\)







\(\ds 1 \times \paren {1 \times 3 - \paren {-3} \times 3}\)





Determinant of Order 2














\(\ds \)

\(=\)







\(\ds 12\)
























\(\ds A_{1 2}\)

\(=\)







\(\ds \paren {-1}^{1 + 2} \begin {vmatrix} 0 & 3 \\ 2 & 3 \end {vmatrix}\)




















\(\ds \)

\(=\)







\(\ds -1 \times \paren {0 \times 3 - 3 \times 2}\)





Determinant of Order 2














\(\ds \)

\(=\)







\(\ds 6\)
























\(\ds A_{1 3}\)

\(=\)







\(\ds \paren {-1}^{1 + 3} \begin {vmatrix} 0 & 1 \\ 2 & -3 \end {vmatrix}\)




















\(\ds \)

\(=\)







\(\ds 1 \times \paren {0 \times \paren {-3} - 2 \times 1}\)





Determinant of Order 2














\(\ds \)

\(=\)







\(\ds -2\)
























\(\ds A_{2 1}\)

\(=\)







\(\ds \paren {-1}^{2 + 1} \begin {vmatrix} 2 & 0 \\ -3 & 3 \end {vmatrix}\)




















\(\ds \)

\(=\)







\(\ds -1 \times \paren {2 \times 3 - \paren {-3} \times 0}\)





Determinant of Order 2














\(\ds \)

\(=\)







\(\ds -6\)
























\(\ds A_{2 2}\)

\(=\)







\(\ds \paren {-1}^{2 + 2} \begin {vmatrix} -1 & 0 \\ 2 & 3 \end {vmatrix}\)




















\(\ds \)

\(=\)







\(\ds 1 \times \paren {\paren {-1} \times 3 - 2 \times 1}\)





Determinant of Order 2














\(\ds \)

\(=\)







\(\ds -3\)
























\(\ds A_{2 3}\)

\(=\)







\(\ds \paren {-1}^{2 + 3} \begin {vmatrix} -1 & 2 \\ 2 & -3 \end {vmatrix}\)




















\(\ds \)

\(=\)







\(\ds -1 \times \paren {\paren {-1} \times \paren {-3} - 2 \times 2}\)





Determinant of Order 2














\(\ds \)

\(=\)







\(\ds 1\)
























\(\ds A_{3 1}\)

\(=\)







\(\ds \paren {-1}^{3 + 1} \begin {vmatrix} 2 & 0 \\ 1 & 3 \end {vmatrix}\)




















\(\ds \)

\(=\)







\(\ds 1 \times \paren {2 \times 3 - 1 \times 0}\)





Determinant of Order 2














\(\ds \)

\(=\)







\(\ds 6\)
























\(\ds A_{3 2}\)

\(=\)







\(\ds \paren {-1}^{3 + 2} \begin {vmatrix} -1 & 0 \\ 0 & 3 \end {vmatrix}\)




















\(\ds \)

\(=\)







\(\ds -1 \times \paren {\paren {-1} \times 3 - 0 \times 0}\)





Determinant of Order 2














\(\ds \)

\(=\)







\(\ds 3\)
























\(\ds A_{3 3}\)

\(=\)







\(\ds \paren {-1}^{3 + 3} \begin {vmatrix} -1 & 2 \\ 0 & 1 \end {vmatrix}\)




















\(\ds \)

\(=\)







\(\ds 1 \times \paren {\paren {-1} \times 1 - 0 \times 2}\)





Determinant of Order 2














\(\ds \)

\(=\)







\(\ds -1\)










Hence:

$\adj {\mathbf A} = \begin {pmatrix} 12 & 6 & -2 \\ -6 & -3 & 1 \\ 6 & 3 & -1 \end {pmatrix}$
$\blacksquare$


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: Exercises: $1.14 \ \text {(a)}$




