# 

Source: https://proofwiki.org/wiki/Integral_Representation_of_Riemann_Zeta_Function_in_terms_of_Gamma_Function/Corollary

Corollary to Integral Representation of Riemann Zeta Function in terms of Gamma Function
For $\Re \paren s > 1$, the Riemann Zeta function is given by:

$\ds \map \zeta s = \frac 1 {\map \Gamma s} \int_0^1 \frac {\paren {\map \ln {\dfrac 1 u} }^{s - 1} } {1 - u} \rd u$
where $\Gamma$ is the Gamma function.


Proof













\(\ds \map \zeta {s}\)

\(=\)







\(\ds \frac 1 {\map \Gamma s} \int_0^\infty \frac {t^{s - 1} } {e^t - 1} \rd t\)





Integral Representation of Riemann Zeta Function in terms of Gamma Function














\(\ds \)

\(=\)







\(\ds \frac 1 {\map \Gamma s} \int_0^\infty \frac {t^{s - 1} } {e^t - 1} \times \dfrac {e^{-t} } {e^{-t} }\rd t\)





multiplying by 1














\(\ds \)

\(=\)







\(\ds \frac 1 {\map \Gamma s} \int_0^\infty \frac {t^{s - 1} e^{-t} } {1 - e^{-t} } \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\map \Gamma s} \int_1^0 \frac {\paren {\map \ln {\dfrac 1 u} }^{s - 1} } {1 - u} \paren {-\rd u }\)





substituting $e^{-t} \to u$; $t \to \map \ln {\dfrac 1 u} $ and $-e^{-t}\rd t \to \rd u$














\(\ds \)

\(=\)







\(\ds \frac 1 {\map \Gamma s} \int_0^1 \frac {\paren {\map \ln {\dfrac 1 u} }^{s - 1} } {1 - u} \rd u\)





reversing limits of integration



$\blacksquare$





