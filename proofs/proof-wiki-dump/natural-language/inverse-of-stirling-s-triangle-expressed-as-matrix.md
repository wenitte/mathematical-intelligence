# 

Source: https://proofwiki.org/wiki/Inverse_of_Stirling%27s_Triangle_expressed_as_Matrix

Theorem
Consider Stirling's triangle of the first kind (signed) expressed as a (square) matrix $\mathbf A$, with the top left element holding $\map s {0, 0}$.

$\begin{pmatrix}
1 &     0 &       0 &      0 &      0 &     0 & \cdots \\
0 &     1 &       0 &      0 &      0 &     0 & \cdots \\
0 &    -1 &       1 &      0 &      0 &     0 & \cdots \\
0 &     2 &      -3 &      1 &      0 &     0 & \cdots \\
0 &    -6 &      11 &     -6 &      1 &     0 & \cdots \\
0 &    24 &     -50 &     35 &    -10 &     1 & \cdots \\
\vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots &  \ddots \\
\end{pmatrix}$

Then consider Stirling's triangle of the second kind expressed as a (square) matrix $\mathbf B$, with the top left element holding $\ds {0 \brace 0}$.

$\begin{pmatrix}
1 & 0 &   0 &    0 &    0 &    0 & \cdots \\
0 & 1 &   0 &    0 &    0 &    0 & \cdots \\
0 & 1 &   1 &    0 &    0 &    0 & \cdots \\
0 & 1 &   3 &    1 &    0 &    0 & \cdots \\
0 & 1 &   7 &    6 &    1 &    0 & \cdots \\
0 & 1 &  15 &   25 &   10 &    1 & \cdots \\
\vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \ddots \\
\end{pmatrix}$
Then:

$\mathbf A = \mathbf B^{-1}$
that is:

$\mathbf B = \mathbf A^{-1}$


Proof
First note that from Relation between Signed and Unsigned Stirling Numbers of the First Kind:

$\ds {n \brack m} = \paren {-1}^{n + m} \map s {n, m}$

From First Inversion Formula for Stirling Numbers:

$\ds \sum_k {n \brack k} {k \brace m} \paren {-1}^{n - k} = \delta_{m n}$
From Second Inversion Formula for Stirling Numbers:

$\ds \sum_k {n \brace k} {k \brack m} \paren {-1}^{n - k} = \delta_{m n}$
By definition of matrix multiplication, the element $a_{r n}$ of the matrix formed by multiplying the two matrices above.
As can be seen, this results in the identity matrix .
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $55$




