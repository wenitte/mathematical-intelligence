# 

Source: https://proofwiki.org/wiki/Fourier_Transform_of_1-Lebesgue_Space_Function_is_Bounded

Theorem
Let $n \in \N_{>0}$.
Let $\map {L^1} {\R^n}$ be the complex-valued Lebesgue $1$-space with respect to the Lebesgue measure.
Let $f \in \map {L^1} {\R^n}$.
Let $\hat f$ be the Fourier transform of $f$.

Then:

$\ds \sup_{\mathbf s \mathop \in \R^n} \cmod {\map {\hat f} {\mathbf s} } \le \norm f_{\map {L^1} {\R^n} }$


Proof
For each $\mathbf s \in \R^n$:














\(\ds \cmod { \map {\hat f} {\mathbf s} }\)

\(=\)







\(\ds \cmod { \int_{\R^n} \map f {\mathbf x} e^{-2 \pi i \mathbf x \cdot \mathbf s} \rd \mathbf x }\)





Definition of Fourier Transform














\(\ds \)

\(\le\)







\(\ds \int_{\R^n} \cmod { \map f {\mathbf x} e^{-2 \pi i \mathbf x \cdot \mathbf s} } \rd \mathbf x\)





Triangle Inequality for Integrals














\(\ds \)

\(=\)







\(\ds \int_{\R^n} \cmod { \map f {\mathbf x} } \rd \mathbf x\)





Modulus and Argument of Complex Exponential














\(\ds \)

\(=\)







\(\ds \norm f_{\map {L^1} {\R^n} }\)





Definition of $L^1$ Norm



$\blacksquare$





