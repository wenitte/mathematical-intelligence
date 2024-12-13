# 

Source: https://proofwiki.org/wiki/Inverse_of_Vandermonde_Matrix/Proof_1

Theorem
Let $V_n$ be the Vandermonde matrix of order $n$ given by:

$V_n = \begin {bmatrix}
  x_1 & x_2 & \cdots & x_n \\
  x_1^2 & x_2^2 & \cdots & x_n^2 \\
\vdots & \vdots & \ddots & \vdots \\
  x_1^n & x_2^n & \cdots & x_n^n
\end{bmatrix}$

Then its inverse $V_n^{-1} = \sqbrk b_n$ can be specified as:

$b_{i j} = \begin {cases}
\paren {-1}^{j - 1} \paren {\dfrac {\ds \sum_{\substack {1 \mathop \le m_1 \mathop < \ldots \mathop < m_{n - j} \mathop \le n \\ m_1, \ldots, m_{n - j} \mathop \ne i} } x_{m_1} \cdots x_{m_{n - j} } } {x_i \ds \prod_{\substack {1 \mathop \le m \mathop \le n \\ m \mathop \ne i} } \paren {x_m - x_i} } } & : 1 \le  j < n \\
\qquad \qquad \qquad \dfrac 1 {x_i \ds \prod_{\substack {1 \mathop \le m \mathop \le n \\ m \mathop \ne i} } \paren {x_i - x_m} } & : j = n
\end{cases}$


Proof
First consider the classical form of the Vandermonde matrix:

$W_n = \begin{bmatrix}
  1 & x_1 & x_1^2 & \cdots & x_1^{n - 1} \\
  1 & x_2 & x_2^2 & \cdots & x_2^{n - 1} \\
\vdots & \vdots & \ddots & \vdots \\
  1 & x_n & x_n^2 & \cdots & x_n^{n - 1} \\
\end{bmatrix}$
By Value of Vandermonde Determinant, the determinant of $W_n$ is:

$\ds \map \det {W_n} = \prod_{1 \mathop \le i \mathop < j \mathop \le n} \paren {x_i - x_j} \ne 0$
Since this is non-zero, by Matrix is Nonsingular iff Determinant has Multiplicative Inverse, the inverse matrix, denoted $B = \sqbrk {b_{i j} }$, is guaranteed to exist.
Using the definition of the matrix product and the inverse:

$\ds \sum_{k \mathop = 1}^n b_{k j} x_i^{k - 1} = \delta_{i j}$
That is, if $\map {P_j} x$ is the polynomial:

$\ds \map {P_j} x := \sum_{k \mathop = 1}^n b_{k j}x^{k - 1}$
then:

$\map {P_j} {x_1} = 0, \ldots, \map {P_j} {x_{j - 1} } = 0, \map {P_j} {x_j} = 1, \map {P_j} {x_{j + 1} } = 0, \ldots, \map {P_j} {x_n} = 0$

By the Lagrange Interpolation Formula, the $j$th row of $B$ is composed of the coefficients of the $j$th Lagrange basis polynomial:

$\ds \map {P_j} x = \sum_{k \mathop = 1}^n b_{k j} x^{k - 1} = \prod_{\substack {1 \mathop \le m \mathop \le n \\ m \mathop \ne j} } \frac {x - x_m} {x_j - x_m}$

Identifying the $k$th order coefficient in these two polynomials yields:

$b_{k j} = \begin{cases}
\paren {-1}^{n - k} \paren {\dfrac {\ds \sum_{\substack {1 \mathop \le m_1 \mathop < \ldots \mathop < m_{n - k} \mathop \le n \\ m_1, \ldots, m_{n - k} \mathop \ne j} } x_{m_1} \cdots x_{m_{n - k} } } {\ds \prod_{\substack {1 \mathop \le m \mathop \le n \\ m \mathop \ne j} } \paren {x_j - x_m} } } & : 1 \le k < n \\
\qquad \qquad \qquad \dfrac 1 {\ds \prod_{\substack {1 \mathop \le m \mathop \le n \\ m \mathop \ne j} } \paren {x_j - x_m}} & : k = n
\end{cases}$
which gives:

$b_{k j} = \begin {cases}
\paren {-1}^{k - 1} \paren {\dfrac {\ds \sum_{\substack {1 \mathop \le m_1 \mathop < \ldots \mathop < m_{n - k} \mathop \le n \\ m_1, \ldots, m_{n - k} \mathop \ne j} } x_{m_1} \cdots x_{m_{n - k} } } {\displaystyle \prod_{\substack {1 \mathop \le m \mathop \le n \\ m \mathop \ne j} } \paren {x_m - x_j} } } & : 1 \le k < n \\
\qquad \qquad \qquad \dfrac 1 {\ds \prod_{\substack {1 \mathop \le m \mathop \le n \\ m \mathop \ne j} } \paren {x_j - x_m} } & : k = n
\end {cases}$

For the general case, we observe that by multiplication:

$V_n = 
\begin {pmatrix}
\begin {bmatrix}
  x_1 & 0 & \cdots & 0 \\
  0 & x_2 & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
  0 & 0 & \cdots & x_n
\end {bmatrix}
\cdot W_n
\end {pmatrix}^\intercal$
So by Inverse of Matrix Product and Inverse of Diagonal Matrix:

$V_n^{-1} = 
\begin {bmatrix}
  x_1^{-1} & 0 & \cdots & 0 \\
  0 & x_2^{-1} & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
  0 & 0 & \cdots & x_n^{-1}
\end {bmatrix} \cdot \paren {W_n^{-1} }^\intercal$

Let $c_{k j}$ denote the $\tuple {k, j}$th coefficient of $V_n^{-1}$.
Since the first matrix in the product expression for $V_n^{-1}$ above is diagonal:

$c_{kj} = \dfrac 1 {x_k} b_{j k}$
which establishes the result.
$\blacksquare$


Sources




