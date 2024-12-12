# 

Source: https://proofwiki.org/wiki/Contour_Integral_is_Independent_of_Parameterization

Theorem
Let $C$ be a contour defined by a finite sequence $C_1, \ldots, C_n$ of directed smooth curves.
Let $C_k$ be parameterized by the smooth path $\gamma_k: \closedint {a_k} {b_k} \to \C$ for all $k \in \set {1, \ldots, n}$.
Let $f: \Img C \to \C$ be a continuous complex function, where $\Img C$ denotes the image of $C$.

Suppose that $\sigma_k: \closedint {c_k} {d_k} \to \C$ is a reparameterization of $C_k$ for all $k \in \set {1, \ldots, n}$.

Then:

$\ds \int_C \map f z \rd z = \sum_{k \mathop = 1}^n \int_{a_k}^{b_k} \map f {\map {\gamma_k} t} \map {\gamma_k'} t \rd t = \sum_{k \mathop = 1}^n \int_{c_k}^{d_k} \map f {\map {\sigma_k} t} \map {\sigma_k'} t \rd t$


Proof
By definition of parameterization:

$\gamma_k = \sigma_k \circ \phi_i$
for all $k \in \set {1, \ldots, n}$.
Here, $\phi_k: \closedint {c_k} {d_k} \to \closedint {a_k} {b_k}$ is a bijective differentiable strictly increasing real function.
Then:














\(\ds \int_C \map f z \rd z\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \int_{a_k}^{b_k} \map f {\map {\gamma_k} t} \map {\gamma_k'} t \rd t\)





Definition of Complex Contour Integral














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \int_{\map {\phi_k^{-1} } {a_k} }^{\map {\phi_k^{-1} } {b_k} } \map f {\map {\gamma_k} {\map {\phi_k} u} } \map {\gamma_k'} {\map {\phi_k} u} \map {\phi_k'} u \rd u\)





substitution with $t = \map {\phi_k} u$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \int_{\map {\phi_k^{-1} } {a_k} }^{\map {\phi_k^{-1} } {b_k} } \map f {\map {\sigma_k} u} \map {\sigma_k'} u \rd u\)





Derivative of Complex Composite Function














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \int_{c_k}^{d_k} \map f {\map {\sigma_k} u} \map {\sigma_k'} u \rd u\)





Reparameterization of Directed Smooth Curve Maps Endpoints To Endpoints



$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori $\S 2.2$




