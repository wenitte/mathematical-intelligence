# 

Source: https://proofwiki.org/wiki/Inverse_of_Cauchy_Matrix


This article needs to be tidied.In particular: Some done, still plenty to doPlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
Theorem
Let $C_n$ be the square Cauchy matrix of order $n$:

$C_n = \begin{bmatrix}
\dfrac 1 {x_1 + y_1} & \dfrac 1 {x_1 + y_2} & \cdots & \dfrac 1 {x_1 + y_n} \\
\dfrac 1 {x_2 + y_1} & \dfrac 1 {x_2 + y_2} & \cdots & \dfrac 1 {x_2 + y_n} \\
\vdots & \vdots & \ddots & \vdots \\
\dfrac 1 {x_n + y_1} & \dfrac 1 {x_n + y_2} & \cdots & \dfrac 1 {x_n + y_n} \\
\end{bmatrix}$

Then its inverse $C_n^{-1} = \sqbrk b_n$ can be specified as:

$\begin{bmatrix} b_{ij} \end{bmatrix} = \begin{bmatrix} \dfrac {\ds \prod_{k \mathop = 1}^n \paren {x_j + y_k} \paren {x_k + y_i} } {\ds \paren {x_j + y_i} \paren {\prod_{\substack {1 \mathop \le k \mathop \le n \\ k \mathop \ne j} } \paren {x_j - x_k} } \paren {\prod_{\substack {1 \mathop \le k \mathop \le n \\ k \mathop \ne i} } \paren {y_i - y_k} } } \end{bmatrix}$


Proof
Preliminaries:
Vandermonde Matrix Identity for Cauchy Matrix supplies matrix equation

$(1): \quad -C = PV_x^{-1} V_y Q^{-1}$
Definitions of symbols:
$V_x = \paren {\begin{smallmatrix}
1           & 1           & \cdots & 1 \\
x_1         & x_2         & \cdots & x_n \\
\vdots      & \vdots      & \ddots & \vdots \\
x_1^{n - 1} & x_2^{n - 1} & \cdots & x_n^{n - 1} \\
\end{smallmatrix} },\quad 
V_y = \paren {\begin{smallmatrix}
1         & 1         & \cdots & 1 \\
y_1       & y_2       & \cdots & y_n \\
\vdots    & \vdots    & \ddots & \vdots \\
y_1^{n - 1} & y_2^{n - 1} & \cdots & y_n^{n - 1} \\
\end{smallmatrix} }$ Definition of Vandermonde Matrix
$P = \paren {\begin{smallmatrix}
p_1(x_1) &  \cdots & 0 \\
\vdots   & \ddots  & \vdots \\
0        & \cdots  & p_n(x_n) \\
\end{smallmatrix} }, \quad
Q = \paren {\begin{smallmatrix}
p(y_1)  & \cdots  & 0 \\
\vdots  & \ddots  & \vdots \\
0       & \cdots  & p(y_n) \\
\end{smallmatrix} }$ Definition of Diagonal Matrix
$\ds \map p x = \prod_{i \mathop = 1}^n \paren {x - x_i},
\quad \map {p_k} x = \prod_{i \mathop = 1, i \mathop \ne k}^n \paren {x - x_i},
\quad
1 \mathop \le k \mathop \le n$ Polynomials
Compute the inverse $C^{-1}$ for:














\(\ds C\)

\(=\)







\(\ds \begin{bmatrix}
            \dfrac 1 {x_1 - y_1} & \dfrac 1 {x_1 - y_2} & \cdots & \dfrac 1 {x_1 - y_n} \\
            \dfrac 1 {x_2 - y_1} & \dfrac 1 {x_2 - y_2} & \cdots & \dfrac 1 {x_2 - y_n} \\
            \vdots               & \vdots               & \ddots & \vdots \\
            \dfrac 1 {x_n - y_1} & \dfrac 1 {x_n - y_2} & \cdots & \dfrac 1 {x_n - y_n} \\
            \end{bmatrix}\)





Assume $\set {x_1,\ldots,x_n,y_1,\ldots,y_n}$ has distinct elements.



Replacement $y_k \to -y_k$ then gives the inverse $C_n^{-1}$ in the theorem.
Inverse of Matrix Product applied to equation (1) gives: 

$ C^{-1} = -Q V_y^{-1} V_x P^{-1}$
Let ${\vec K}_1, \ldots, {\vec K}_n$ denote the columns of the $n\times n$ identity matrix.
Then $n \times n$ matrix $B = C^{-1}$ has entries $b_{ij} = {\vec K}_i^T C^{-1} {\vec K}_j$.
Hold fixed until the end of the proof the row and column index symbols $i$ and $j$.
Define column vectors $\vec A$, $\vec B$ so that $b_{ij} = {\vec A}^T \vec B$:

$\vec A = \paren { {\vec K}_i^T \, Q \, V_y^{-1} }^T$
$\vec B = -V_x \, P^{-1} \, {\vec K}_j$
Define $u = x_j$ and simplify:














\(\ds \vec A\)

\(=\)







\(\ds {\map p {y_i} } \, \paren { V_y^{-1} }^T \, {\vec K}_i\)





Transpose of Matrix Product














\(\ds \)

\(=\)







\(\ds \dfrac{ \map p {y_i} } {\map \det {V_y} } \paren { \adj {V_y} }^T {\vec K}_i\)





Matrix Product with Adjugate Matrix














\(\ds \)

\(=\)







\(\ds \dfrac{ \map p {y_i} } {\map \det  {V_y} }
        \begin{bmatrix} 
          {\mathbf {Cofactor} } \paren {V_y,1,i } \\ 
          \vdots \\ 
          {\mathbf {Cofactor} } \paren {V_y,n,i } \\ 
        \end{bmatrix}\)





${\mathbf {Cofactor} } \paren {M,r,s}$ denotes cofactor $M_{rs}$














\(\ds \vec B\)

\(=\)







\(\ds -\dfrac 1 {\map {p_j} {x_j} } \, V_x \, {\vec K}_j\)




















\(\ds \)

\(=\)







\(\ds -\dfrac 1 {\map {p_j} {x_j} } \, 
        \begin{bmatrix} 
          1 \\ 
          u \\ 
          \vdots \\ 
          u^{n - 1} \\ 
        \end{bmatrix}\)





Symbol $u = x_j$.



Then:














\(\ds A^T\, B\)

\(=\)







\(\ds \dfrac {-\map p {y_i} } {\map {p_j} {x_j} \map \det {V_y} } \sum_{k \mathop = 1}^n {\mathbf {Cofactor} } \paren {V_y, k,i } \, u^{k - 1}\)





Cofactor Expansion along column $i$.














\(\ds \)

\(=\)







\(\ds \dfrac {-\map p {y_i} } {\map {p_j} {x_j} \map \det {V_y} } \map \det {\begin {matrix} 
        1           & \cdots & 1                 & 1         & 1                 & \cdots & 1 \\
        y_1         & \cdots & y_{i - 1}         & u         & y_{i + 1}         & \cdots & y_n \\
        \vdots      & \cdots & \vdots            &\vdots     & \vdots            & \cdots & \vdots \\
        y_1^{n - 1} & \cdots & y_{i - 1}^{n - 1} & u^{n - 1} & y_{i + 1}^{n - 1} & \cdots & y_n^{n - 1} \\
        \end {matrix} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {-\map p {y_i} } {\map {p_j} {x_j} } \ \dfrac {\bigvalueat {\paren {\map \det {V_y} } } {y_i \mathop = u} } {\map \det {V_y} }\)









Simplify the fraction on the right:




\(\text {(2)}: \quad\)









\(\ds \dfrac {\bigvalueat {\paren {\map \det {V_y} } } {y_i \mathop = u} } {\map \det {V_y} }\)

\(=\)







\(\ds \dfrac {\ds \valueat {\paren {\prod_{1 \mathop \le m \mathop < k \mathop \le n} \paren {y_k - y_m} } } {y_i \mathop = u} } {\ds \prod_{1 \mathop \le m \mathop \lt k \mathop \le n} \paren {y_k - y_m} }\)





Value of Vandermonde Determinant



Define sets $D,A,B,C$ with disjoint decomposition $D = A \cup B \cup C$:














\(\ds D\)

\(=\)







\(\ds \set {\tuple {m, k} : 1 \le m < k \le n }\)




















\(\ds A\)

\(=\)







\(\ds \set {\tuple {m, k} \in D : m \ne i \mbox{ and } k \ne i}\)




















\(\ds B\)

\(=\)







\(\ds \set {\tuple {m, k} \in D: m = i}\)




















\(\ds C\)

\(=\)







\(\ds \set {\tuple {m, k} \in D: k = i}\)









Use $\prod_D = \prod_A \prod_B \prod_C$ to convert the numerator and denominator in the right hand side of $(2)$.
Then:














\(\ds \dfrac {\bigvalueat {\paren {\map \det {V_y} } } {y_i \mathop = u} } {\map \det {V_y} }\)

\(=\)







\(\ds \dfrac {\ds \prod_{k \mathop = 1, \, k \mathop \ne i}^n \paren {u - y_k} } {\ds \prod_{k \mathop = 1, \, k \mathop \ne i}^n \paren {y_i - y_k} }\)





cancelling common factors in $(2)$



Replacement of $\map p {y_i}$ and $\map {p_j} {x_j}$ by products gives:




\(\text {(3)}: \quad\)









\(\ds b_{ij}\)

\(=\)







\(\ds \paren {-1} \, \dfrac {\ds \prod_{k \mathop = 1}^n \paren {y_i - x_k } } {\ds \prod_{k \mathop = 1,\, k \mathop \ne j}^n \paren { x_j - x_k } } \ \prod_{k \mathop = 1,\, k \mathop \ne i}^n \paren {\dfrac {x_j - y_k} {y_i - y_k} }\)





substituting $u = x_j$



 
After substituting $y_k \to -y_k$ and simplifying, Knuth's original identity (1997) becomes:


This article, or a section of it, needs explaining.In particular: ProofWiki is self-contained so we don't refer to outside sources to justify workingYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.



\(\text {(4)}: \quad\)









\(\ds b_{ij}\)

\(=\)







\(\ds \dfrac {\ds \prod_{k \mathop = 1}^n \paren {x_k - y_i} } {\ds \prod_{k \mathop = 1,\, k \mathop \ne j}^n \paren {x_j - x_k} } \dfrac {\ds \prod_{k \mathop = 1, \, k \mathop \ne i}^n \paren {x_j - y_k} } {\ds \prod_{k \mathop = 1,\, k \mathop \ne i}^n \paren {-y_i + y_k} }\)









In $(3)$, factor $\paren {-1}^{n + 1}$ from the numerator and $\paren {-1}^{n - 1}$ from the denominator.
Then $\paren {-1}^{n + 1} = \paren {-1}^{n - 1}$ verifies that $(3)$ matches $(4)$.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercise $41$




