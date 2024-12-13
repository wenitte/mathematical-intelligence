# 

Source: https://proofwiki.org/wiki/Inverse_of_Vandermonde_Matrix/Corollary


This page has been identified as a candidate for refactoring of medium complexity.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Corollary to Inverse of Vandermonde Matrix
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





Proof
The details appear in Inverse of Vandermonde Matrix/Proof 1, same notation.
$\blacksquare$





