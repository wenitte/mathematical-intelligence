# 

Source: https://proofwiki.org/wiki/Matrix_Multiplication_is_not_Commutative/Order_2_Square_Matrices

Theorem
Let $R$ be a ring with unity whose zero is $0_R$ and whose unity is $1_R$.
Let $\map {\MM_R} 2$ denote the $2 \times 2$ matrix space over $R$.
The operation of (conventional) matrix multiplication is not commutative over $\map {\MM_R} 2$.


Proof
As $R$ is a ring with unity, we have that:














\(\ds 0_R\)

\(\ne\)







\(\ds 1_R\)




















\(\ds 0_R \times 0_R\)

\(=\)







\(\ds 0_R\)




















\(\ds 0_R \times 1_R\)

\(=\)







\(\ds 0_R = 1_R \times 0_R\)




















\(\ds 1_R \times 1_R\)

\(=\)







\(\ds 1_R\)










Now let:














\(\ds \mathbf A\)

\(=\)







\(\ds \begin {pmatrix} 0_R & 1_R \\ 0_R & 0_R \end {pmatrix}\)




















\(\ds \mathbf B\)

\(=\)







\(\ds \begin {pmatrix} 0_R & 0_R \\ 1_R & 0_R \end {pmatrix}\)










By definition, both $\mathbf A$ and $\mathbf B$ are elements of $\map {\MM_R} 2$.
It will be demonstrated that $\mathbf A$ and $\mathbf B$ do not commute.

We have:














\(\ds \mathbf A \mathbf B\)

\(=\)







\(\ds \begin {pmatrix} 0_R & 1_R \\ 0_R & 0_R \end {pmatrix} \begin {pmatrix} 0_R & 0_R \\ 1_R & 0_R \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 0_R \times 0_R + 1_R \times 1_R & 0_R \times 0_R + 1_R \times 0_R \\ 0_R \times 0_R + 0_R \times 1_R & 0_R \times 0_R + 0_R \times 0_R \end{pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 1_R & 0_R \\ 0_R & 0_R \end{pmatrix}\)










and:














\(\ds \mathbf B \mathbf A\)

\(=\)







\(\ds \begin {pmatrix} 0_R & 0_R \\ 1_R & 0_R \end {pmatrix} \begin {pmatrix} 0_R & 1_R \\ 0_R & 0_R \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 0_R \times 0_R + 0_R \times 0_R & 0_R \times 1_R + 0_R \times 0_R \\ 1_R \times 0_R + 0_R \times 0_R & 1_R \times 1_R + 0_R \times 0_R \end{pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 0_R & 0_R \\ 0_R & 1_R \end{pmatrix}\)










and it is seen that:

$\mathbf A \mathbf B \ne \mathbf B \mathbf A$

Thus, whatever the nature of the ring with unity $R$, it is never the case that matrix multiplication is commutative over $\map {\MM_R} 2$.
$\blacksquare$


Sources
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): commute
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): commute




