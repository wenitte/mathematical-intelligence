# 

Source: https://proofwiki.org/wiki/Concatenation_of_Contours_is_Contour

Theorem
Let $C$ and $D$ be contours in the complex plane.
That is, $C$ is a finite sequence of directed smooth curves $C_1, \ldots, C_n$.
Let $C_k$ be parameterized by the smooth path $\gamma_k: \closedint {a_k} {b_k} \to \C$ for all $k \in \set {1, \ldots, n}$.
Similarly, $D$ is a finite sequence of directed smooth curves $D_1, \ldots, D_m$.
Let $D_j$ be parameterized by the smooth path $\sigma_j: \closedint {c_j} {d_j} \to \C$ for all $j \in \set {1, \ldots, m}$.

Suppose $\map {\gamma_n} {b_n} = \map {\sigma_1} {c_1}$.

Then the finite sequence:

$C_1, \ldots, C_n, D_1, \ldots, D_m$
defines a contour.


Proof
By definition of contour, each $C_k$ and $D_j$ is a directed smooth curve for all $k \in \set {1, \ldots, n}, j \in \set {1, \ldots, m}$.
By definition of contour:

$\map {\gamma_k} {b_k} = \map {\gamma_{k + 1} } {a_{k + 1} }$
and:

$\map {\sigma_j} {d_j} = \map {\sigma_{j + 1} } {c_{j + 1} }$
for all $k \in \set {1, \ldots, n - 1}$ and $j \in \set {1, \ldots, m - 1}$.
By assumption:

$\map {\gamma_n} {b_n} = \map {\sigma_1} {c_1}$
Hence, $C_1, \ldots, C_n, D_1, \ldots, D_m$ defines a contour.
$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori $\S 2.2$




