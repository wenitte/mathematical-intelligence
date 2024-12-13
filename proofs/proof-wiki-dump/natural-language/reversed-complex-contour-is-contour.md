# 

Source: https://proofwiki.org/wiki/Reversed_Complex_Contour_is_Contour

Theorem
Let $C$ be a contour in the complex plane $\C$ that is defined as a concatenation of a finite sequence $\sequence{ C_1, \ldots, C_n }$ of directed smooth curves in $\C$.

Then the finite sequence of reversed directed smooth curves:

$\sequence{ -C_n, -C_{n - 1}, \ldots, -C_1 }$
defines a contour that is independent of the parameterization of $C_1, \ldots, C_n$.


Proof
Let $C_k$ be parameterized by the smooth path $\gamma_k: \closedint {a_k} {b_k} \to \C$ for all $k \in \set {1, \ldots, n}$.
From Reversed Directed Smooth Curve is Directed Smooth Curve, it follows that $-C_k$ is independent of the parameterization $\gamma_k$ of $C_k$.

We now prove that the end point of $-C_k$ is equal to the start point of $-C_{k - 1}$ for all $k \in \set {2, \ldots, n}$.
By definition of reversed directed smooth curve, $-C_k$ is parameterized by $\rho_k: \closedint {a_k} {b_k} \to \C$, defined by $\map {\rho_k} t = \map {\gamma_k} {a_k + b_k - t}$.
From Reparameterization of Directed Smooth Curve Maps Endpoints To Endpoints, it follows that the endpoints $\map {\rho_k} {a_k}$ and $\map {\rho_k} {b_k}$ are independent of the parameterization $\rho_k$.
Then:














\(\ds \map {\rho_k} {b_k}\)

\(=\)







\(\ds \map {\gamma_k} {a_k + b_k - b_k}\)




















\(\ds \)

\(=\)







\(\ds \map {\gamma_k} {a_k}\)




















\(\ds \)

\(=\)







\(\ds \map {\gamma_{k - 1} } {b_{k - 1} }\)





Definition of Contour (Complex Plane)














\(\ds \)

\(=\)







\(\ds \map {\rho_{k - 1} } {a_{k - 1} }\)









By definition, it follows that $-C_n, \ldots, -C_1$ can be concatenated to form a contour.
$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori $\S 2.2$




