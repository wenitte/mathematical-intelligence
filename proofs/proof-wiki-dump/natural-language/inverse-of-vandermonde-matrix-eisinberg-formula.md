# 

Source: https://proofwiki.org/wiki/Inverse_of_Vandermonde_Matrix/Eisinberg_Formula


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This page has been identified as a candidate for refactoring of medium complexity.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let:














\(\ds \prod_{k \mathop = 1}^n \paren {x - x_k}\)

\(=\)







\(\ds a_n x^n + \sum_{m \mathop = 0}^{n - 1} a_m x^m\)





Polynomial expansion in powers of $x$














\(\ds \)

\(=\)







\(\ds x^n + \sum_{m \mathop = 0}^{n - 1} \paren {-1}^{n - m} \map {e_{n - m} } {x_1, \ldots, x_n} \, x^m\)





Viète's Formulas and Definition of Elementary Symmetric Function














\(\ds W_n\)

\(=\)







\(\ds \begin{bmatrix}
 1     & x_1    & \cdots & {x_1}^{n - 1} \\
 1     & x_2    & \cdots & {x_2}^{n - 1} \\

\vdots  & \vdots & \ddots & \vdots        \\

 1     & x_n    & \cdots & {x_n}^{n - 1} \\

\end{bmatrix}\)






Definition of Vandermonde Matrix of Order $n$



Let $W_n$ have a matrix inverse $W_n^{-1} = \begin {bmatrix} d_{ij} \end {bmatrix}$. 
Let $a_n = \map {e_0} {x_1, \ldots, x_n} = 1$.
Then:




\(\text {(1)}: \quad\)









\(\ds d_{ij}\)

\(=\)







\(\ds \dfrac {\ds \sum_{k \mathop = 0}^{n - i} a_{i + k} \, {x_j}^k} {\ds \prod_{m \mathop = 1, m \mathop \ne j }^n \paren {x_j - x_m} }\)





for $i, j = 1, \ldots, n$














\(\ds \)

\(=\)







\(\ds \dfrac {\ds \sum_{k \mathop = 0}^{n - i} \paren {-1}^{n - i - k} \map {e_{n - i - k} } {x_1, \ldots, x_n} \, {x_j}^k} {\ds \prod_{m \mathop = 1, m \mathop \ne j }^n \paren {x_j - x_m} }\)





for $i, j = 1, \ldots, n$





Proof
Lemma 1
Given values $z_1, \ldots, z_{p + 1}$ and $1 \le m \le p$, then:




\(\text {(2)}: \quad\)









\(\ds \ds \map {e_m} {z_1, \ldots, z_p, z_{p + 1} }\)

\(=\)







\(\ds z_{p + 1} \map {e_{m - 1} } {z_1, \ldots, z_p} + \map {e_m} {z_1, \ldots, z_p}\)





Recursion Property of Elementary Symmetric Function



$\Box$


Lemma 2
Let $X = \set {x_1, \ldots, x_n}$ and $\mathbf u = x_j$ for some $j = 1, \ldots, n$.
Then:




\(\text {(3)}: \quad\)









\(\ds \ds \sum_{k \mathop = 0}^{n - i} \paren {-1}^k \map {e_{n - i - k} } X \mathbf u^k\)

\(=\)







\(\ds \map {e_{n - i} } {X \setminus \set {\mathbf u} }\)





Eisinberg (1981)




Proof of Lemma 2:
Let $S$ denote the left hand side of $(3)$.
Let $U = X \setminus \set {\mathbf u}$.
Then:














\(\ds S\)

\(=\)







\(\ds \paren {-1}^{n - i} \mathbf u^{n - i} + \sum_{k \mathop = 0}^{n - i - 1} \paren {-1}^k \map {e_{n - i - k} } X {\mathbf u}^k\)





splitting off the term for $k = n - i$














\(\ds \)

\(=\)







\(\ds \paren {-1}^{n - i} \, {\mathbf u}^{n - i} + \sum_{k \mathop = 0}^{n - i - 1} \paren {-1}^k \, \paren {\mathbf u \, \map {e_{n - i - k - 1} } U + \map {e_{n - i - k} } U} \, \mathbf u^k\)





by $(2)$ in Lemma 1 with $p = n - 1$ and $m = n - i - k$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n - i - 1} \paren {-1}^k \, \map {e_{n - i - k - 1} } U \mathbf u^{k + 1} + \sum_{k \mathop = 0}^{n - i} \paren {-1}^k \map {e_{n - i - k} } U \, \mathbf u^k\)





reassembling summations














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^{n - i} \paren {-1}^{k - 1} \, \map {e_{n - i - k} } U \mathbf u^k + \sum_{k \mathop = 0}^{n - i} \paren {-1}^k \map {e_{n - i - k} } U \, \mathbf u^k\)





reindexing the first sum














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^{n - i} \paren {-1}^k \paren {-\map {e_{n - i - k} } U + \map {e_{n - i - k} } U} \mathbf u^k + \paren {-1}^0 \map {e_{n - i} } U \mathbf u^0\)





splitting off the term for $k = 0$ and collecting under one summation














\(\ds \)

\(=\)







\(\ds \map {e_{n-i} } U\)









$\Box$

Proof of the Theorem














\(\ds d_{ij}\)

\(=\)







\(\ds \dfrac {\ds \paren {-1}^{n - i} \map { e_{n - i} } {X \setminus \set {x_j} } } {\ds \prod_{m \mathop = 1, m \mathop \ne j }^n \paren {x_j - x_m} }\)





transposing $W_n$, then applying corollary to Inverse of Vandermonde Matrix














\(\ds \)

\(=\)







\(\ds \dfrac {\ds \sum_{k \mathop = 0}^{n - i} \paren {-1}^k \, \map {e_{n - i - k} } X \, x_j^k} {\ds \prod_{m \mathop = 1, m \mathop \ne j }^n \paren {x_j - x_m} }\)





$(3)$ in Lemma 2














\(\ds \)

\(=\)







\(\ds \dfrac {\ds \sum_{k \mathop = 0}^{n - i} a_{i + k} \, x_j^k} {\ds \prod_{m \mathop = 1, m \mathop \ne j}^n \paren {x_j - x_m} }\)





Viète's Formulas



$\blacksquare$


Sources
1981: A. Eisinberg and C. Picardi: On the inversion of Vandermonde matrix (Proceedings of the 8th Triennal IFAC World Congress, Kyoto, Japan pp. 507 – 511)
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercise $40$
1998: A. Eisinberg, G. Franzé and P. Pugliese: Vandermonde matrices on Chebyshev points (Linear Algebra and its Applications Vol. 283: pp. 205 – 219)
April 2005: A. Eisinberg and G. Fedele: A property of the elementary symmetric functions (Calcolo Vol. 42, no. 1: pp. 31 – 36)




