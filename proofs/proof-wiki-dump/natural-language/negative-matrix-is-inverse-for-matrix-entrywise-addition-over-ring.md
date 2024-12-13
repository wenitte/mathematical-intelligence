# 

Source: https://proofwiki.org/wiki/Negative_Matrix_is_Inverse_for_Matrix_Entrywise_Addition_over_Ring

Theorem
Let $\struct {R, +, \circ}$ be a ring whose zero is $0_R$.
Let $\map {\MM_R} {m, n}$ be a $m \times n$ matrix space over $\struct {R, +, \circ}$.
Let $\mathbf A$ be an element of $\map {\MM_R} {m, n}$.
Let $-\mathbf A$ be the negative of $\mathbf A$.

Then $-\mathbf A$ is the inverse for the operation $+$, where $+$ is matrix entrywise addition.


Proof
Let $\mathbf A = \sqbrk a_{m n} \in \map {\MM_R} {m, n}$.
Then:














\(\ds \mathbf A + \paren {-\mathbf A}\)

\(=\)







\(\ds \sqbrk a_{m n} + \paren {-\sqbrk a_{m n} }\)





Definition of $\mathbf A$














\(\ds \)

\(=\)







\(\ds \sqbrk a_{m n} + \sqbrk {-a}_{m n}\)





Definition of Negative Matrix over Ring














\(\ds \)

\(=\)







\(\ds \sqbrk {a + \paren {-a} }_{m n}\)





Definition of Matrix Entrywise Addition over Ring














\(\ds \)

\(=\)







\(\ds \sqbrk {0_R}_{m n}\)





Definition of Ring Negative








\(\ds \leadsto \ \ \)





\(\ds \mathbf A + \paren {-\mathbf A}\)

\(=\)







\(\ds \mathbf 0_R\)





Definition of Zero Matrix over Ring



The result follows from Zero Matrix is Identity for Matrix Entrywise Addition over Ring.
$\blacksquare$


Also see
Negative Matrix is Inverse for Hadamard Product




