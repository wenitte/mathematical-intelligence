# 

Source: https://proofwiki.org/wiki/Length_of_Contour_is_Well-Defined


This article is complete as far as it goes, but it could do with expansion.In particular: rewrite this in the context of the general real cartesian spaceYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Theorem
Let $C_1, \ldots, C_n$ be directed smooth curves.
Let $C_k$ be parameterized by the smooth path $\gamma_k: \closedint {a_k} {b_k} \to \C$ for all $k \in \set {1, \ldots, n}$.
Let $C$ be the contour defined by the finite sequence $C_1, \ldots, C_n$.

Suppose that $\sigma_k: \closedint {c_k} {d_k} \to \C$ is a reparameterization of $C_k$ for all $k \in \set {1, \ldots, n}$

Then:

$\ds \sum_{k \mathop = 1}^n \int_{a_k }^{b_k} \size {\map {\gamma_k'} t} \rd t = \sum_{k \mathop = 1}^n \int_{c_k}^{d_k} \size {\map {\sigma_k'} t} \rd t$
and all real integrals in the equation are defined.


Proof
From the definition of directed smooth curve, it follows that  $\sigma_k = \gamma_k \circ \phi_k$ for all $k \in \set {1, \ldots, n}$.
Here, $\phi_k: \closedint {c_k} {d_k} \to \closedint {a_k} {b_k}$ is a bijective differentiable strictly increasing function. 
For all $k \in \set {1, \ldots, n}$, $\gamma_k$ and $\sigma_k$ are continuous.
From Complex Modulus Function is Continuous and Continuity of Composite Mapping: Corollary, it follows that $\cmod {\gamma_k'}$ and $\cmod {\sigma_k'}$ are continuous.
From Continuous Real Function is Darboux Integrable, we find that $\ds \sum_{k \mathop = 1}^n \int_{a_k}^{b_k} \cmod {\map {\gamma_k'} t} \rd t$ and $\ds \sum_{k \mathop = 1}^n \int_{c_k}^{d_k} \cmod {\map {\sigma_k'} t} \rd t$ are defined.
Hence, all real integrals in the theorem are defined.

Then:














\(\ds \sum_{k \mathop = 1}^n \int_{a_k }^{b_k} \cmod {\map {\gamma_k'} t} \rd t\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \int_{\map {\phi_k^{-1} } {a_k} }^{\map {\phi_k^{-1} } {b_k} } \cmod {\map {\gamma_k'} {\map \phi u} } \map {\phi'} u \rd u\)





substitution with $t = \map \phi u$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \int_{\map {\phi_k^{-1} } {a_k} }^{\map {\phi_k^{-1} } {b_k} } \cmod {\map {\gamma_k'} {\map \phi u} \map {\phi'} u}\rd u\)





as $\map {\phi'} u > 0$ by Derivative of Monotone Function














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \int_{\map {\phi_k^{-1} } {a_k} }^{\map {\phi_k^{-1} } {b_k} } \cmod {\map {\sigma'} u} \rd u\)





Derivative of Complex Composite Function














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \int_{c_k}^{d_k} \cmod {\map {\sigma'} u} \rd u\)





Reparameterization of Directed Smooth Curve Maps Endpoints To Endpoints



$\blacksquare$





