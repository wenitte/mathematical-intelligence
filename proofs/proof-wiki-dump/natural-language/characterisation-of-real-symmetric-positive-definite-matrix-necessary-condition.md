# 

Source: https://proofwiki.org/wiki/Characterisation_of_Real_Symmetric_Positive_Definite_Matrix/Necessary_Condition

Theorem
Let $A$ be an $n \times n$ positive definite symmetric matrix over $\RR$.

Then:

there exists a nonsingular matrix $C$ such that $A = C^\intercal C$.


Proof
Let $A$ be positive definite. 
From Real Symmetric Matrix is Orthogonally Diagonalizable:

there exists an orthogonal matrix $P$ and diagonal matrix $D$ such that $A = P^\intercal D P$.
Further:

the diagonal entries of $D$ are the eigenvalues of $A$.
From Real Symmetric Positive Definite Matrix has Positive Eigenvalues:

the diagonal entries of $D$ are positive.
We can therefore construct a real diagonal matrix $S$ by: 

$\paren S_{i j} = \begin{cases} \sqrt {\paren D_{i i} } & i = j \\ 0 & i \ne j \end{cases}$
From Product of Diagonal Matrices is Diagonal, we have: 

$\paren {S^2}_{i j} = \begin{cases} \paren D_{i i} & i = j \\ 0 & i \ne j \end{cases}$
so:

$S^2 = D$
We also have: 














\(\ds \det S\)

\(=\)







\(\ds \prod_{i \mathop = 1}^n \sqrt {\paren D_{i i} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\prod_{i \mathop = 1}^n \paren D_{i i} }\)




















\(\ds \)

\(>\)







\(\ds 0\)





as $\paren D_{i i} > 0$ for each $i$



We therefore have: 














\(\ds \map \det {P^\intercal S P}\)

\(=\)







\(\ds \map \det {P^\intercal} \det S \det P\)





Determinant of Matrix Product














\(\ds \)

\(=\)







\(\ds \paren {\det P}^2 \det S\)





Determinant of Transpose














\(\ds \)

\(=\)







\(\ds \det S\)





Determinant of Orthogonal Matrix is Plus or Minus One














\(\ds \)

\(>\)







\(\ds 0\)









So from Matrix is Nonsingular iff Determinant has Multiplicative Inverse:

$P^\intercal S P$ is nonsingular.
Let $C = P^\intercal S P$. 
Then:














\(\ds C^\intercal C\)

\(=\)







\(\ds \paren {P^\intercal S P}^\intercal P^\intercal S P\)




















\(\ds \)

\(=\)







\(\ds P^\intercal \paren {P^\intercal S}^\intercal P^\intercal S P\)





Transpose of Matrix Product














\(\ds \)

\(=\)







\(\ds P^\intercal S^\intercal P P^\intercal S P\)





Transpose of Matrix Product














\(\ds \)

\(=\)







\(\ds P^\intercal S^\intercal S P\)





as $P$ is orthogonal














\(\ds \)

\(=\)







\(\ds P^\intercal S^2 P\)





Diagonal Matrix is Symmetric














\(\ds \)

\(=\)







\(\ds P^\intercal D P\)




















\(\ds \)

\(=\)







\(\ds A\)









As $C$ is nonsingular, the proof is complete.
$\blacksquare$





