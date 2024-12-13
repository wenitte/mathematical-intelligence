# 

Source: https://proofwiki.org/wiki/Matrix_Product_(Conventional)/Examples/Change_of_Axes

Example of (Conventional) Matrix Product
Consider the Cartesian coordinate system:

$C := \tuple {x, y, z}$
Let $\mathbf A$ denote the square matrix:

$\mathbf A = \begin {pmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end {pmatrix}$
Then $\mathbf A$ has the effect of exchanging the $x$ and $y$ axes of $C$.


Proof
Let $\mathbf x := \tuple {x_1, y_1, z_1}$ be a point in $C$.

We have:














\(\ds \mathbf A \mathbf x\)

\(=\)







\(\ds \begin {pmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end {pmatrix} \begin {pmatrix} x_1 \\ y_1 \\ z_1 \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 0 \times x_1 + 1 \times y_1 + 0 \times z_1 \\ 1 \times x_1 + 0 \times y_1 + 0 \times z_1 \\ 0 \times x_1 + 0 \times y_1 + 1 \times z_1 \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} y_1 \\ x_1 \\ z_1 \end {pmatrix}\)









$\blacksquare$


Sources
2008: David Joyner: Adventures in Group Theory (2nd ed.) ... (previous) ... (next): Chapter $2$: 'And you do addition?': $\S 2.2$: Functions on vectors: $\S 2.2.2$: $3 \times 3$ matrices: Ponderable $2.2.1$




