# 

Source: https://proofwiki.org/wiki/Inverse_of_Vandermonde_Matrix/Proof_2


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This page has been identified as a candidate for refactoring of medium complexity.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Proof
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
1958: N. Macon and A. Spitzbart: Inverses of Vandermonde matrices (American Mathematical Monthly Vol. 65, no. 2: pp. 95 – 100)  www.jstor.org/stable/2308881
1964: Julius T. Tou: Determination of the inverse Vandermonde matrix (IEEE Transactions on Automatic Control Vol. 9, no. 3: pp. 314 – 314)
1967: Allen Klinger: The Vandermonde matrix (American Mathematical Monthly Vol. 74, no. 5: pp. 571 – 574)  www.jstor.org/stable/2314898




