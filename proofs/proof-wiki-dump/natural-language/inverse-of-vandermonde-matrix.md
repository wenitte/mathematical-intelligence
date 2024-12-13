# 

Source: https://proofwiki.org/wiki/Inverse_of_Vandermonde_Matrix


This page has been identified as a candidate for refactoring of medium complexity.In particular: There are two types of Vandermonde matrix to treatUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


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


Corollary
Define for variables $\set {y_1,\ldots, y_k}$ elementary symmetric functions:














\(\ds \map {e_m} {\set {y_1, \ldots, y_k} }\)

\(=\)







\(\ds \sum_{1 \mathop \le j_1 \mathop < j_2 \mathop < \mathop \cdots \mathop < j_m \mathop \le k } y_{j_1} y_{j_2} \cdots y_{j_m}\)





for $m = 0, 1, \ldots, k$



Let $\set {x_1, \ldots, x_n}$ be a set of distinct values.
Let $W_n$ and $V_n$ be Vandermonde matrices of order $n$:

$W_n = \begin{bmatrix}
  1         &  x_1      & \cdots & x_1^{n-1} \\
  1         & x_2       & \cdots & x_2^{n-1} \\
\vdots      & \vdots    & \ddots & \vdots    \\
  1         & x_1^{n-1} & \cdots & x_n^{n-1} \\
\end{bmatrix}, \quad
V_n = \begin{bmatrix}
  x_1   & x_2    & \cdots & x_n    \\
  x_1^2 & x_2^2  & \cdots & x_n^2  \\
\vdots  & \vdots & \ddots & \vdots \\
  x_1^n & x_2^n  & \cdots & x_n^n  \\
\end{bmatrix}$
Let their matrix inverses be written as
$W_n^{-1} = \begin{bmatrix} b_{ij} \end{bmatrix}$
$V_n^{-1} = \begin{bmatrix} c_{ij} \end{bmatrix}$.

Then:














\(\ds b_{ij}\)

\(=\)







\(\ds \dfrac {\paren {-1}^{n - i} \map {e_{n - i} } {\set {x_1, \ldots, x_n} \setminus \set {x_j} } } {\prod_{m \mathop = 1, m \mathop \ne j }^n \paren {x_j - x_m} }\)





for $i, j = 1, \ldots, n$














\(\ds c_{ij}\)

\(=\)







\(\ds \dfrac 1 {x_i} \, b_{j i}\)





for $i, j = 1, \ldots, n$





Proof 1
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


Proof 2
Definition 1
$V_n = \begin{bmatrix}
  x_1       & \cdots & x_n \\
  x_1^2     & \cdots & x_n^2 \\
  \vdots    & \ddots & \vdots \\
  x_1^{n}   & \cdots & x_n^{n} \\
\end{bmatrix} \quad$ Definition of Vandermonde Matrix
$V = \begin{bmatrix}
  1         & \cdots & 1 \\
  x_1       & \cdots & x_n \\
  \vdots    & \ddots & \vdots \\
  x_1^{n-1} & \cdots & x_n^{n-1} \\
\end{bmatrix} \quad$ Definition of Vandermonde Matrix
$D = 
\begin{bmatrix}
  x_1    & \cdots & 0 \\
  \vdots & \ddots & \vdots \\
  0      & \cdots & x_n \\
\end{bmatrix},
\quad
P = \begin{bmatrix}
  \map {p_1} {x_1} & \cdots & 0 \\
  \vdots           & \ddots & \vdots \\
  0                & \cdots & \map {p_n} {x_n} \\
  \end{bmatrix} \quad$  Definition:Diagonal Matrix
$E = \begin{bmatrix}
  E_{11} & \cdots & E_{1n} \\
  \vdots & \ddots & \vdots \\
  E_{n1} & \cdots & E_{nn} \\
  \end{bmatrix} \quad$ Matrix of symmetric functions
where for $\mathbf {1 \mathop \le i, j \mathop \le n}$:













\(\ds E_{ij}\)

\(=\)







\(\ds \paren {-1}^{n - j} \map {e_{n - j} } {\set {x_1, \ldots, x_n} \setminus \set {x_i} }\)





Definition of Elementary Symmetric Function $\map {e_m} U$














\(\ds \map {p_j} x\)

\(=\)







\(\ds \prod_{k \mathop = 1, k \mathop \ne j}^n \paren {x - x_k}\)











Lemma 1













\(\ds V_n\)

\(=\)







\(\ds V D\)





Definition of Matrix Product (Conventional)














\(\ds V_n^{-1}\)

\(=\)







\(\ds D^{-1} V^{-1}\)





provided the inverses exist: Inverse of Matrix Product



$\Box$


Lemma 2
$E V = P$
$V^{-1} = P^{-1} E$ provided $\set {x_1, \ldots, x_n}$ is a set of distinct values.
$V_n^{-1} = D^{-1} V^{-1}$ provided $\set {x_1, \ldots, x_n}$ is a set of distinct values, all nonzero.

Proof of Lemma 2
Matrix multiply establishes $E V = P$, provided:

$(1): \quad \sum_{k \mathop = 1}^n E_{i k} x_j^{k - 1} = \begin{cases} 0 & i \ne j \\ \map {p_i} {x_i} & i = j \end{cases}$
Polynomial $\map {p_i} {x}$ is zero for $x \in \set {x_1,\ldots,x_n} \setminus \set {x_i}$.
Then (1) is equivalent to

$(2): \quad \sum_{k \mathop = 1}^n \paren {-1}^{n - k} \map {e_{n - k} } {\set {x_1, \ldots, x_n} \setminus \set {x_i} } x_j^{k - 1} = \map {p_i} {x_j}$
Apply Viète's Formulas to degree $n - 1$ monic polynomial $\map {p_i} {\mathbf u}$:

$(3): \quad \sum_{k \mathop = 1}^n \paren {-1}^{n - k} \map {e_{n - k} } {set {x_1, \ldots, x_n} \setminus \set {x_i} } {\mathbf u}^{k - 1} = \map {p_i} {\mathbf u}$
Substitute $\mathbf u = x_j$ into (3), proving (2) holds.
Then (2) and (1) hold, proving $E V = P$.
Assume $\set {x_1, \ldots, x_n}$ is a set of distinct values.
Then $\map \det P$ is nonzero.
By Matrix is Nonsingular iff Determinant has Multiplicative Inverse, $P$ has an inverse $P^{-1}$.
Multiply $E V = P$ by $P^{-1}$, then: 

$V^{-1} = P^{-1} E\quad$ Left or Right Inverse of Matrix is Inverse
Similarly, $D^{-1}$ exists provided $\set {x_1, \ldots, x_n}$ is a set of nonzero values.
Then $V_n^{-1} = D^{-1} V^{-1}$ by Lemma 1. 
$\Box$

Proof of the Theorem
Assume $\set {x_1, \ldots, x_n}$ is a set of distinct values.
Let $d_{i j}$ denote the entries in $V^{-1}$. Then:














\(\ds V^{-1}\)

\(=\)







\(\ds P^{-1} E\)





Lemma 2














\(\ds d_{i j}\)

\(=\)







\(\ds \dfrac {E_{i j} } {\map {p_i} {x_i} }\)





Definition of Matrix Product (Conventional)














\(\ds \)

\(=\)







\(\ds \dfrac {\paren { -1 }^{n - j} e_{n - j} \paren {\set {x_1, \ldots, x_n} \setminus \set {x_i} } } {\map {p_i} {x_i} }\)





Definition 1



Then:




\(\text {(4)}: \quad\)









\(\ds d_{i j}\)

\(=\)







\(\ds \paren {-1}^{n - j} \dfrac {\ds \sum_{\substack {1 \mathop \le m_1 \mathop < \cdots \mathop < m_{n - j} \mathop \le n \\ m_1, \ldots, m_{n - j} \mathop \ne i} } x_{m_1} \cdots x_{m_{n - j} } } {\ds     \prod_{\substack {1 \mathop \le m \mathop \le n \\ m \mathop \ne i} } \paren {x_i - x_m} }\)





Definition of Elementary Symmetric Function $e_m \paren U$ Definition 1, equation for $\map {p_i} x$



Assume $\set {x_1, \ldots, x_n}$ is a set of distinct values, all nonzero.
Let $b_{i j}$ denote the entries in $V_n^{-1}$.
Then:














\(\ds V_n^{-1}\)

\(=\)







\(\ds D^{-1} V^{-1}\)





Lemma 1














\(\ds b_{ij}\)

\(=\)







\(\ds \dfrac 1 {x_i} d_{i j}\)





Definition of Matrix Product (Conventional)



Factor $\paren {-1}^{n - 1}$ from the denominator of (4) to agree with Knuth (1997). 
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercise $40$




