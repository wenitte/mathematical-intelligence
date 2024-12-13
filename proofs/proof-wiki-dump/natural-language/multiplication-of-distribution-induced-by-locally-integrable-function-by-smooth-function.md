# 

Source: https://proofwiki.org/wiki/Multiplication_of_Distribution_induced_by_Locally_Integrable_Function_by_Smooth_Function

Theorem
Let $f \in \map {L^1_{loc} } {\R^d}$ be a locally integrable function.
Let $\alpha \in \map {C^\infty} {\R^d}$ be a smooth function.
Let $T_f \in \map {\DD'} {\R^d}$ be a distribution induced by $f$.

Then in the distributional sense it holds that:

$\alpha T_f = T_{\alpha f}$


Proof
Let $\Omega \subseteq \R^d$ be a compact subset.
Then for all $\mathbf x \in \Omega$ we have that $\map \alpha {\mathbf x}$ is bounded.
Hence, $\alpha f$ is locally integrable.
Let $\phi \in \map \DD {\R^d}$ be a test function.
Then:














\(\ds \alpha \map {T_f} \phi\)

\(=\)







\(\ds \map {T_f} {\alpha \phi}\)





Definition of Multiplication of Distribution by Smooth Function














\(\ds \)

\(=\)







\(\ds \int_{\R^d} \map f {\mathbf x} \map \alpha {\mathbf x} \map \phi {\mathbf x} \rd \mathbf x\)





Locally Integrable Function defines Distribution














\(\ds \)

\(=\)







\(\ds \map {T_{\alpha f} } \phi\)





Locally Integrable Function defines Distribution



$\blacksquare$

Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.4$: A glimpse of distribution theory. Multiplication by $C^\infty$ functions




