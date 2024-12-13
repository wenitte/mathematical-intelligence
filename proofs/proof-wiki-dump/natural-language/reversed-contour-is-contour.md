# 

Source: https://proofwiki.org/wiki/Reversed_Contour_is_Contour


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

This article is complete as far as it goes, but it could do with expansion.In particular: General context of Real Cartesian Space. However, the underlying definitions of this result rest upon the properties of differentiability in the complex plane, so further work needed there.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Theorem
Let $\R^n$ be a real cartesian space of $n$ dimensions.
Let $C$ be a contour in $\R^n$ that is defined as a concatenation of a finite sequence $C_1, \ldots, C_n$ of directed smooth curves in $\R^n$.

Then the finite sequence of reversed directed smooth curves:

$-C_n, -C_{n - 1}, \ldots, -C_1$
defines a contour that is independent of the parameterization of $C_1, \ldots, C_n$.


Proof
Let $C_i$ be parameterized by the smooth path $\gamma_i: \closedint {a_i} {b_i} \to \C$ for all $i \in \set {1, \ldots, n}$.
From Reversed Directed Smooth Curve is Directed Smooth Curve, it follows that $-C_i$ is independent of the paraterization $\gamma_i$ of $C_i$.

We now prove that the end point of $-C_i$ is equal to the start point of $-C_{i - 1}$ for all $i \in \set {2, \ldots, n}$.
By definition of reversed directed smooth curve, $-C_i$ is parameterized by $\rho_i: \closedint {a_i} {b_i} \to \C$.
Here, $\map {\rho_i} t = \map {\gamma_i} {a_i + b_i - t}$.
From Reparameterization of Directed Smooth Curve Maps Endpoints To Endpoints, it follows that the endpoints $\map {\rho_i} {a_i}$ and $\map {\rho_i} {b_i}$ are independent of the parameterization $\rho_i$.
Then:














\(\ds \map {\rho_i} {b_i}\)

\(=\)







\(\ds \map {\phi_i} {a_i + b_i - b_i}\)




















\(\ds \)

\(=\)







\(\ds \map {\phi_i} {a_i}\)




















\(\ds \)

\(=\)







\(\ds \map {\phi_{i - 1} } {b_{i - 1} }\)





Definition of Contour (Complex Plane)














\(\ds \)

\(=\)







\(\ds \map {\rho_{i - 1} } {a_{i - 1} }\)









By definition, it follows that $-C_n, \ldots, -C_1$ can be concatenated to form a contour.
$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori $\S 2.2$




