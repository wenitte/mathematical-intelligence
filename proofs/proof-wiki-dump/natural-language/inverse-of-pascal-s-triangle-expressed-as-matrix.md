# 

Source: https://proofwiki.org/wiki/Inverse_of_Pascal%27s_Triangle_expressed_as_Matrix

Theorem
Consider Pascal's triangle expressed as a (square) matrix $\mathbf M$, with the top left element holding $\dbinom 0 0$.

$\begin{pmatrix}
1 &  0 &  0 &   0 &   0 &   0 &   0 &   0 &   0 & \cdots \\
1 &  1 &  0 &   0 &   0 &   0 &   0 &   0 &   0 & \cdots \\
1 &  2 &  1 &   0 &   0 &   0 &   0 &   0 &   0 & \cdots \\
1 &  3 &  3 &   1 &   0 &   0 &   0 &   0 &   0 & \cdots \\
1 &  4 &  6 &   4 &   1 &   0 &   0 &   0 &   0 & \cdots \\
1 &  5 & 10 &  10 &   5 &   1 &   0 &   0 &   0 & \cdots \\
1 &  6 & 15 &  20 &  15 &   6 &   1 &   0 &   0 & \cdots \\
1 &  7 & 21 &  35 &  35 &  21 &   7 &   1 &   0 & \cdots \\
1 &  8 & 28 &  56 &  70 &  56 &  28 &   8 &   1 & \cdots \\
\vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \ddots \\
\end{pmatrix}$

The inverse $\mathbf M^{-1}$ of $\mathbf M$ is the same as $\mathbf M$ but with alternate elements negated, starting with the elements below the main diagonal:

$\begin{pmatrix}
1 &  0 &   0 &   0 &   0 &   0 &  0 &  0 & 0 & \cdots \\

-1 &  1 &   0 &   0 &   0 &   0 &  0 &  0 & 0 & \cdots \\

1 & -2 &   1 &   0 &   0 &   0 &  0 &  0 & 0 & \cdots \\

-1 &  3 &  -3 &   1 &   0 &   0 &  0 &  0 & 0 & \cdots \\

1 & -4 &   6 &  -4 &   1 &   0 &  0 &  0 & 0 & \cdots \\

-1 &  5 & -10 &  10 &  -5 &   1 &  0 &  0 & 0 & \cdots \\

1 & -6 &  15 & -20 &  15 &  -6 &  1 &  0 & 0 & \cdots \\

-1 &  7 & -21 &  35 & -35 &  21 & -7 &  1 & 0 & \cdots \\

1 & -8 &  28 & -56 &  70 & -56 & 28 & -8 & 1 & \cdots \\

\vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \ddots \\
\end{pmatrix}$


Proof
We have from Sum over $k$ of $\dbinom r k$ by $\dbinom {s + k} n$ by $\left({-1}\right)^{r - k}$: Corollary:

$\ds \sum_k \binom r k \binom k n \paren {-1}^{r - k} = \delta_{n r}$
where $\delta_{n r}$ is the Kronecker delta.

By definition of matrix multiplication, this is the element $a_{r n}$ of the matrix formed by multiplying the two matrices above.
As can be seen, this results in the identity matrix .
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $54$




