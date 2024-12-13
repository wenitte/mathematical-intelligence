# 

Source: https://proofwiki.org/wiki/Inverse_of_Nonsingular_2_x_2_Real_Square_Matrix

Theorem
Let $\mathbf A$ be an nonsingular $2 \times 2$ real square matrix defined as:

$\mathbf A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$

Then its inverse matrix $\mathbf A^{-1}$ is:

$\mathbf A^{-1} = \dfrac 1 {\map \det {\mathbf A} } \begin {pmatrix} d & -b \\ -c & a \end {pmatrix} = \dfrac 1 {a d - b c} \begin {pmatrix} d & -b \\ -c & a \end {pmatrix}$


Proof
We construct $\begin {pmatrix} \mathbf A & \mathbf I \end {pmatrix}$:

$\begin {pmatrix} \mathbf A & \mathbf I \end {pmatrix} = \paren {\begin {array} {cc|cc} a & b & 1 & 0 \\ c & d & 0 & 1 \\ \end {array} }$

In the following, $\sequence {e_n}_{n \mathop \ge 1}$ denotes the sequence of elementary row operations that are to be applied to $\begin {pmatrix} \mathbf A & \mathbf I \end {pmatrix}$.
The matrix that results from having applied $e_1$ to $e_k$ in order is denoted $\begin {pmatrix} \mathbf A_k & \mathbf B_k \end {pmatrix}$.














\(\ds \begin {pmatrix} \mathbf A & \mathbf I \end {pmatrix}\)

\(=\)







\(\ds \paren {\begin {array} {cc {{|}} cc} a & b & 1 & 0 \\ c & d & 0 & 1 \\ \end {array} }\)














\(\ds \leadsto \ \ \)





\(\ds \begin {pmatrix} \mathbf A_1 & \mathbf B_1 \end {pmatrix}\)

\(=\)







\(\ds \paren {\begin {array} {cc {{|}} cc} 1 & \dfrac b a & \dfrac 1 a & 0 \\ c & d & 0 & 1 \\ \end {array} }\)





$e_1 := r_1 \to \dfrac 1 a r_1$








\(\ds \leadsto \ \ \)





\(\ds \begin {pmatrix} \mathbf A_2 & \mathbf B_2 \end {pmatrix}\)

\(=\)







\(\ds \paren {\begin {array} {cc {{|}} cc} 1 & \dfrac b a & \dfrac 1 a & 0 \\ 0 & \dfrac {a d - b c} a & -\dfrac c a & 1 \\ \end {array} }\)





$e_2 := r_2 \to -c r_1 + r_2$








\(\ds \leadsto \ \ \)





\(\ds \begin {pmatrix} \mathbf A_3 & \mathbf B_3 \end {pmatrix}\)

\(=\)







\(\ds \paren {\begin {array} {cc {{|}} cc} 1 & \dfrac b a & \dfrac 1 a & 0 \\ 0 & 1 & -\dfrac c {a d - b c} & \dfrac a {a d - b c} \\ \end {array} }\)





$e_3 := r_2 \to \dfrac a {a d - b c} r_1$








\(\ds \leadsto \ \ \)





\(\ds \begin {pmatrix} \mathbf A_4 & \mathbf B_4 \end {pmatrix}\)

\(=\)







\(\ds \paren {\begin {array} {cc {{|}} cc} 1 & 0 & \dfrac d {a d - b c} & -\dfrac b {a d - b c} \\ 0 & 1 & -\dfrac c {a d - b c} & \dfrac a {a d - b c} \\ \end {array} }\)





$e_4 := r_1 \to -\dfrac b a r_2 + r_1$



It is seen that $\begin {pmatrix} \mathbf A_4 & \mathbf B_4 \end {pmatrix}$ is the required reduced echelon form:

$\mathbf A_4 = \mathbf I$

Hence by the Matrix Inverse Algorithm:














\(\ds \mathbf A^{-1}\)

\(=\)







\(\ds \mathbf B_4\)




















\(\ds \)

\(=\)







\(\ds \begin{pmatrix} \dfrac d {a d - b c} & -\dfrac b {a d - b c} \\ -\dfrac c {a d - b c} & \dfrac a {a d - b c} \end{pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {a d - b c} \begin {pmatrix} d & -b \\ -c & a \end {pmatrix}\)





Definition of Matrix Scalar Product














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\map \det {\mathbf A} } \begin {pmatrix} d & -b \\ -c & a \end {pmatrix}\)





Determinant of Order 2



Hence the result.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): inverse: 3. (of a matrix) (reciprocal)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): inverse: 3. (of a matrix) (reciprocal)




