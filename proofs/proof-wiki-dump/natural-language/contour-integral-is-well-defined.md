# 

Source: https://proofwiki.org/wiki/Contour_Integral_is_Well-Defined

Theorem
Let $C$ be a contour defined by a finite sequence $C_1, \ldots, C_n$ of directed smooth curves in the complex plane $\C$.
Let $C_k$ be parameterized by the smooth path $\gamma_k: \closedint {a_k} {b_k} \to \C$ for all $k \in \set {1, \ldots, n}$.
Let $f: \Img C \to \C$ be a continuous complex function, where $\Img C$ denotes the image of $C$.
Let $\sigma_k: \closedint {c_k} {d_k} \to \C$ be a reparameterization of $C_k$ for all $k \in \set {1, \ldots, n}$.

Then:

$\ds \sum_{k \mathop = 1}^n \int_{a_k}^{b_k} \map f {\map {\gamma_k} t} \map {\gamma_k'} t \rd t = \sum_{k \mathop = 1}^n \int_{c_k}^{d_k} \map f {\map {\sigma_k} t} \map {\sigma_k'} t \rd t$
and all complex Riemann integrals in the equation are defined.


Proof
Define $g_k: \closedint {a_k} {b_k} \to \C$ by $\map {g_k} t = \map f {\map {\gamma_k} t} \map {\gamma_k'} t$ for all $k \in \set {1, \ldots, n}$.
By definition of smooth path, it follows that $\gamma_k$ and $\gamma_k'$ are continuous for all $k \in \set {1, \ldots, n}$.
From Continuity of Composite Mapping/Corollary and Sum Rule for Continuous Complex Functions, it follows that $g_k$ is continuous.
From Continuous Complex Function is Complex Riemann Integrable, we find that $\ds \int_{a_k}^{b_k} \map {g_k} t \rd t$ is defined.
Similarly, it can be shown that $\ds \int_{c_k}^{d_k} \map f {\map {\sigma_k} t} \map {\sigma_k'} t \rd t$ is defined for all $k \in \set {1, \ldots, n}$.
Hence, all complex Riemann integrals in the theorem are defined.

The equality now follows from Contour Integral is Independent of Parameterization.
$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori: $\S 2.2$




