# 

Source: https://proofwiki.org/wiki/Negative_Matrix_is_Inverse_for_Matrix_Entrywise_Addition



Theorem
Let $\Bbb F$ denote one of the standard number systems.
Let $\map \MM {m, n}$ be a $m \times n$ matrix space over $\Bbb F$.
Let $\mathbf A$ be an element of $\map \MM {m, n}$.
Let $-\mathbf A$ be the negative of $\mathbf A$.

Then $-\mathbf A$ is the inverse for the operation $+$, where $+$ is matrix entrywise addition.


Proof
Let $\mathbf A = \sqbrk a_{m n} \in \map \MM {m, n}$.
Then:














\(\ds \mathbf A + \paren {-\mathbf A}\)

\(=\)







\(\ds \sqbrk a_{m n} + \paren {-\sqbrk a_{m n} }\)





Definition of $\mathbf A$














\(\ds \)

\(=\)







\(\ds \sqbrk a_{m n} + \sqbrk {-a}_{m n}\)





Definition of Negative Matrix














\(\ds \)

\(=\)







\(\ds \sqbrk {a + \paren {-a} }_{m n}\)





Definition of Matrix Entrywise Addition














\(\ds \)

\(=\)







\(\ds \sqbrk 0_{m n}\)














\(\ds \leadsto \ \ \)





\(\ds \mathbf A + \paren {-\mathbf A}\)

\(=\)







\(\ds \mathbf 0\)





Definition of Zero Matrix



The result follows from Zero Matrix is Identity for Matrix Entrywise Addition.
$\blacksquare$


Also see
Negative Matrix is Inverse for Matrix Entrywise Addition over Ring
Negative Matrix is Inverse for Hadamard Product


Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.2$ Addition and multiplication of matrices: $7$




