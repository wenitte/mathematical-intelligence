# 

Source: https://proofwiki.org/wiki/Inverse_of_Combinatorial_Matrix

Theorem
Let $C_n$ be the combinatorial matrix of order $n$ given by:

$C_n = \begin{bmatrix}
x + y & y & \cdots & y \\
y & x + y & \cdots & y \\
\vdots & \vdots & \ddots & \vdots \\
y & y & \cdots & x + y
\end{bmatrix}$

Then its inverse $C_n^{-1} = \sqbrk b_n$ can be specified as:

$b_{i j} = \dfrac {-y + \delta_{i j} \paren {x + n y} } {x \paren {x + n y} }$
where $\delta_{i j}$ is the Kronecker delta.


Proof
From the definition of the combinatorial matrix:

$C_n = x \mathbf I_n + y \mathbf J_n$
where:

$\mathbf I_n$ is the unit matrix of order $n$
$\mathbf J_n$ is the square ones matrix of order $n$.

From Square of Ones Matrix we have $\mathbf J_n^2 = n \mathbf J_n$.
Hence:














\(\ds \paren {x \mathbf I_n + y \mathbf J_n} \paren {x \mathbf I_n - y \mathbf J_n}\)

\(=\)







\(\ds x^2 \mathbf I_n - n y^2 \mathbf J_n\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x \mathbf I_n + y \mathbf J_n} \paren {x \mathbf I_n - y \mathbf J_n} + n y^2 \mathbf J_n\)

\(=\)







\(\ds x^2 \mathbf I_n\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x \mathbf I_n + y \mathbf J_n} \paren {x \mathbf I_n - y \mathbf J_n} + n y \mathbf I_n y \mathbf J_n\)

\(=\)







\(\ds x^2 \mathbf I_n\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x \mathbf I_n + y \mathbf J_n} \paren {x \mathbf I_n - y \mathbf J_n} + x n y \mathbf I_n + n y \mathbf I_n y \mathbf J_n\)

\(=\)







\(\ds x^2 \mathbf I_n + x n y \mathbf I_n\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x \mathbf I_n + y \mathbf J_n} \paren {x \mathbf I_n - y \mathbf J_n} + n y \mathbf I_n \paren {x \mathbf I_n + y \mathbf J_n}\)

\(=\)







\(\ds x^2 \mathbf I_n + x n y \mathbf I_n\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x \mathbf I_n + y \mathbf J_n} \paren {\paren {x + n y} \mathbf I_n - y \mathbf J_n}\)

\(=\)







\(\ds x \paren {x + n y} \mathbf I_n\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x \mathbf I_n + y \mathbf J_n} \paren {\frac {\paren {x + n y} } {x \paren {x + n y} } \mathbf I_n - \frac y {x \paren {x + n y} } \mathbf J_n}\)

\(=\)







\(\ds \mathbf I_n\)










So we have found a specification for the matrix which, when multiplied by $C_n$, yields $\mathbf I_n$.
By using the identities $\mathbf I_n = \sqbrk {\delta_{i j} }_n$ and $\mathbf J_n = \sqbrk 1_n$ we obtain the stated result:

$b_{i j} = \dfrac {-y + \delta_{i j} \paren {x + n y} } {x \paren {x + n y} }$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercise $39$




