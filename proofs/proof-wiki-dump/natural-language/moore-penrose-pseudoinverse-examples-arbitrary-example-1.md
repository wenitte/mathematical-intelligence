# 

Source: https://proofwiki.org/wiki/Moore-Penrose_Pseudoinverse/Examples/Arbitrary_Example_1

Example of Moore-Penrose Pseudoinverse
Let $\mathbf A$ be the matrix:

$\mathbf A := \begin {pmatrix} 2/3 & 0 \\ 5/6 & 1/2 \\ 1/3 & 1 \end {pmatrix}$

The Moore-Penrose pseudoinverse of $\mathbf A$ is:

$\mathbf A^+ := \begin {pmatrix} 5/6 & 2/3 & -1/3 \\ -1/2 & 0 & 1 \end {pmatrix}$


Proof













\(\ds \mathbf A^+\)

\(=\)







\(\ds \paren {\mathbf A^\intercal \mathbf A}^{-1} \mathbf A^\intercal\)





Definition 1 of Moore-Penrose Pseudoinverse














\(\ds \)

\(=\)







\(\ds \paren {\begin {pmatrix} 2/3 & 5/6 & 1/3 \\ 0 & 1/2 & 1 \end {pmatrix} \begin {pmatrix} 2/3 & 0 \\ 5/6 & 1/2 \\ 1/3 & 1 \end {pmatrix} }^{-1} \begin {pmatrix} 2/3 & 5/6 & 1/3 \\ 0 & 1/2 & 1 \end {pmatrix}\)





Definition of Transpose of Matrix














\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 2/3 \times 2/3 + 5/6 \times 5/6 + 1/3 \times 1/3 & 2/3 \times 0 + 5/6 \times 1/2 + 1/3 \times 1 \\ 0 \times 2/3 + 1/2 \times 5/6 + 1 \times 1/3 & 0 \times 0 + 1/2 \times 1/2 + 1 \times 1 \end {pmatrix}^{-1} \begin {pmatrix} 2/3 & 5/6 & 1/3 \\ 0 & 1/2 & 1 \end {pmatrix}\)





Definition of Matrix Product (Conventional)














\(\ds \)

\(=\)







\(\ds \begin {pmatrix} \dfrac {16 + 25 + 4} {36} & \dfrac {0 + 5 + 4} {12} \\ \dfrac {0 + 5 + 4} {12} & \dfrac {0 + 1 + 5} 4 \end {pmatrix}^{-1} \begin {pmatrix} 2/3 & 5/6 & 1/3 \\ 0 & 1/2 & 1 \end {pmatrix}\)





arithmetic














\(\ds \)

\(=\)







\(\ds \begin {pmatrix} \dfrac 5 4 & \dfrac 3 4 \\ \dfrac 3 4 & \dfrac 5 4 \end {pmatrix}^{-1} \begin {pmatrix} 2/3 & 5/6 & 1/3 \\ 0 & 1/2 & 1 \end {pmatrix}\)





arithmetic














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\frac 5 4 \times \frac 5 4 - \frac 3 4 \times \frac 3 4} \begin {pmatrix} \dfrac 5 4 & -\dfrac 3 4 \\ -\dfrac 3 4 & \dfrac 5 4 \end {pmatrix} \begin {pmatrix} 2/3 & 5/6 & 1/3 \\ 0 & 1/2 & 1 \end {pmatrix}\)





Inverse of Square Matrix














\(\ds \)

\(=\)







\(\ds \begin {pmatrix} \dfrac 5 4 & -\dfrac 3 4 \\ -\dfrac 3 4 & \dfrac 5 4 \end {pmatrix} \begin {pmatrix} 2/3 & 5/6 & 1/3 \\ 0 & 1/2 & 1 \end {pmatrix}\)





simplification: $\dfrac 1 {\frac 5 4 \times \frac 5 4 - \frac 3 4 \times \frac 3 4} = 1$














\(\ds \)

\(=\)







\(\ds \begin {pmatrix} \dfrac 5 4 \times 2/3 - 3/4 \times 0 & \dfrac 5 4 \times 5/6 - \dfrac 3 4 \times 1/2 & \dfrac 5 4 \times 1/3 - \dfrac 3 4 \times 1 \\ -\dfrac 3 4 \times 2/3 + \dfrac 5 4 \times 0 & -\dfrac 3 4 \times 5/6 + \dfrac 5 4 \times 1/2 & - \dfrac 3 4 \times 1/3 + \dfrac 5 4 \times 1 \end {pmatrix}\)





Definition of Matrix Product (Conventional)














\(\ds \)

\(=\)







\(\ds \begin {pmatrix} \dfrac {10} {12} - 0 & \dfrac {25} {24} - \dfrac 3 8 & \dfrac 5 {12} - \dfrac 3 4 \\ -\dfrac 6 {12} + 0 & -\dfrac {15} {24} + \dfrac 5 8 & -\dfrac 3 {12} + \dfrac 5 4 \end {pmatrix}\)





arithmetic














\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 5/6 & 2/3 & -1/3 \\ -1/2 & 0 & 1 \end {pmatrix}\)





further arithmetic



$\blacksquare$


Sources
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): pseudo-inverse (E.H. Moore, 1920; R. Penrose, 1955)




